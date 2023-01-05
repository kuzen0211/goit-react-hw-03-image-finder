import { fetchImages } from '../../service/imagesApi';
import { Component } from 'react';

import { Loader } from '../Loader/Loader';
import { IdleImages } from '../IdleImages/IdleImages';
import { RejectedImages } from '../RejectedImages/RejectedImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMore } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { GalleryList } from '../ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGallery extends Component {
  state = {
    image: [],
    error: null,
    status: 'idle',
    page: 1,
    openModal: false,
    largeImg: null,
    alt: null,
    totalPage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchName !== this.props.searchName ||
      prevState.page !== this.state.page
    ) {
      if (this.state.page === 1) {
        this.setState({ status: 'pending' });
      }

      setTimeout(() => {
        fetchImages(this.props.searchName, this.state.page)
          .then(data => {
            if (data.totalHits === 0) {
              return this.setState({ status: 'rejected' });
            }

            if (this.state.image.length === 0) {
              return this.setState({
                image: data.hits,
                status: 'resolved',
                totalPage: data.totalHits,
              });
            }
            if (this.props.searchName !== prevProps.searchName) {
              return this.setState({
                image: data.hits,
                status: 'resolved',
                totalPage: data.totalHits,
              });
            }
            return this.setState(prevState => ({
              image: [...prevState.image, ...data.hits],
              status: 'resolved',
              totalPage: data.totalHits,
            }));
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 500);
    }
  }

  handleNextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleClose = () => {
    this.setState({ openedModal: false });
  };

  handleClickImg = evt => {
    const { target } = evt;

    if (target.nodeName === 'IMG') {
      this.setState({
        openedModal: true,
        largeImg: target.getAttribute('data'),
        alt: target.alt,
      });
    }
  };

  render() {
    const { image, status, openedModal, largeImg, alt } = this.state;

    if (status === 'idle') {
      return <IdleImages />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          {openedModal && (
            <Modal onClose={this.handleClose}>
              <img src={largeImg} alt={alt} width="800" height="500" />
            </Modal>
          )}

          <GalleryList onClick={this.handleClickImg}>
            {image.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </GalleryList>

          {this.state.page <= Math.round(this.state.totalPage / 12) && (
            <LoadMore onClick={() => this.handleNextPage()} />
          )}
        </>
      );
    }

    if (status === 'rejected') {
      return <RejectedImages word={this.props.searchName} />;
    }
  }
}

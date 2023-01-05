import { Images, Item } from './ImageGalleryItem.styled';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { largeImageURL, webformatURL, tags, id } = this.props;

    return (
      <Item>
        <Images id={id} data={largeImageURL} src={webformatURL} alt={tags} />
      </Item>
    );
  }
}

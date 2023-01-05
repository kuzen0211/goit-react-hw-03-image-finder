import { React, Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChangeName = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.searchName);
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">&#128269;</Button>

          <Input
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleChangeName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

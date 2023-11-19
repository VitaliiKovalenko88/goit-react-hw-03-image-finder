import React, { Component } from 'react';
import SearchBar from 'components/SearchBar/Searchbar';
import { getImageWithQuery } from 'pixabayApi/pixabayApi';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
    gallery: [],
    page: 1,
    error: null,
    isLoading: false,
    largeImage: '',
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { query, page } = this.state;
      const prevQuery = prevState.query;
      const prevPage = prevState.page;

      if (query !== prevQuery || page !== prevPage) {
        await this.createGallery();
      }
    } catch (error) {
      console.error('Error in componentDidUpdate:', error);
    }
  }

  handleFormSubmite = query => {
    this.setState({
      query,
      gallery: [],
      page: 1,
    });
  };

  createGallery = async () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;

    try {
      const { hits } = await getImageWithQuery(query, page);

      if (hits.length === 0) {
        this.setState({
          gallery: [],
          error: 'Sorry, you are entering an incorrect value',
          isLoading: false,
        });
        return;
      }

      this.setState(prevState => ({
        gallery: [...prevState.gallery, ...hits],
        error: null,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error in createGallery:', error);
      this.setState({
        gallery: [],
        error: 'Something is wrong with the request address'.toUpperCase(),
        isLoading: false,
      });
    }
  };

  onLoadMoreImg = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  onOpenModal = e => {
    const { image } = e.target.dataset;
    this.setState({ largeImage: image });
    this.togleModal();
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    console.log();
    const { gallery, largeImage, showModal, error, isLoading } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmite} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            onClick={this.togleModal}
            onClose={this.togleModal}
            url={largeImage}
          />
        )}

        <ImageGallery gallary={gallery} onClick={this.onOpenModal} />
        <Button onLoadMore={this.onLoadMoreImg} />
      </div>
    );
  }
}

export default App;

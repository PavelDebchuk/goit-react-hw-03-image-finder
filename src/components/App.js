import { Component } from 'react';
import Example from './loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ApiServices from './apiServices';
import Modal from './Modal';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    largeImageURL: '',
    loading: false,
    showModal: false,
  };

  handelFormSubmit = searchName => {
    this.setState({ searchName });
    if (this.state.searchName !== '') {
      this.setState({ images: [] });
    }
  };

  img = imagesData => {
    this.setState(prevState => ({
      images: [...prevState.images, ...imagesData.hits],
      loading: false,
    }));
  };

  loading = () => {
    this.setState({ loading: true });
  };

  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  openModal = largeImageURL => {
    this.setState(state => ({
      showModal: true,
    }));
    this.setState(state => ({
      largeImageURL: largeImageURL,
    }));
  };

  closeModal = () => {
    this.setState(state => ({
      showModal: false,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <section>
        <Searchbar searchName={this.handelFormSubmit}></Searchbar>
        {this.state.page > 0 && (
          <ApiServices
            searchName={this.state.searchName}
            img={this.img}
            loading={this.loading}
            page={this.state.page}
            images={this.state.images}
          ></ApiServices>
        )}
        {this.state.loading && (
          <div className="Loading">
            <Example />
          </div>
        )}
        <ImageGallery
          images={this.state.images}
          incrementPage={this.incrementPage}
          openModal={this.openModal}
        ></ImageGallery>
        {showModal && (
          <Modal
            onClose={this.closeModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </section>
    );
  }
}

export default App;

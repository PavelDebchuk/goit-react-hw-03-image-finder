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
    perPage: 12,
    largeImageURL: '',
    loading: false,
    showModal: false,
  };

  handelFormSubmit = searchName => {
    this.setState({ searchName });
  };
  img = imagesData => {
    this.setState({ images: imagesData });
    this.setState({ loading: false });
  };

  loading = () => {
    this.setState({ loading: true });
  };

  incrementPage = () => {
    this.setState(state => ({
      perPage: state.perPage + 12,
    }));
  };

  openModal = (e, largeImageURL) => {
    this.setState(state => ({
      showModal: true,
    }));
    this.setState(state => ({
      largeImageURL: largeImageURL,
    }));
  };

  closeModal = e => {
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
            perPage={this.state.perPage}
          ></ApiServices>
        )}
        {this.state.loading && (
          <div className="Loading">
            <Example></Example>
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
          ></Modal>
        )}
      </section>
    );
  }
}

export default App;

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
      page: (state.page += 1),
    }));
    // console.log(this.state.images);
    // console.log(this.state.perPage);
    // console.log(this.state.images);
    // console.log(this.state.page);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    console.log('click');
  };

  render() {
    const { showModal } = this.state;
    return (
      <section>
        <Searchbar searchName={this.handelFormSubmit}></Searchbar>
        <button type="button" onClick={this.toggleModal}>
          modal
        </button>
        {this.state.page > 0 && (
          <ApiServices
            searchName={this.state.searchName}
            img={this.img}
            loading={this.loading}
            page={this.state.page}
            perPage={this.state.perPage}
            incrementPage={this.incrementPage}
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
        ></ImageGallery>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}

        {/* {this.state.shouModal && (
          <div className="overlay">
            <div className="modal">
              <img src="" alt="" />
            </div>
          </div>
        )} */}
      </section>
    );
  }
}

export default App;

import { Component } from 'react';

export default class apiServices extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchName !== this.props.searchName ||
      prevProps.page !== this.props.page
    ) {
      console.log(this.props.images);
      const key = '24907304-6f88a85793adc81b0b0dcb604';
      this.props.loading();

      fetch(
        `https://pixabay.com/api/?key=${key}&q=${this.props.searchName}&image_type=photo&per_page=12&orientation=horizontal&page=${this.props.page}`
      )
        .then(res => res.json())
        .then(imagesData => {
          this.props.img(imagesData);
        });
    }
  }

  render() {
    return;
  }
}

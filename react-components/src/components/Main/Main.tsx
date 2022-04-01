import { Component } from 'react';
import CatalogCard from '../CatalogCard/CatalogCard';
import SearchBar from '../SearchBar/SearchBar';

class Main extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <CatalogCard />
      </>
    );
  }
}

export default Main;

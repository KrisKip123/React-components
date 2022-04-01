import { Component } from 'react';

import style from './app.module.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/aboutUs" element={<div date-testid="about-page">ABOUT US</div>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;

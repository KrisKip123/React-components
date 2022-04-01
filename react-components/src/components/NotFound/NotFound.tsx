import { Component } from 'react';

import style from './notFound.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1> 404 Not Found </h1>
      </div>
    );
  }
}

export default NotFound;

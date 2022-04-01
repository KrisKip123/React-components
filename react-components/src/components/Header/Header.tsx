import { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './header.module.scss';

class Header extends Component {
  timerID!: number;
  state = {
    href: window.location.href,
  };

  // componentDidMount() {
  //   this.timerID = window.setInterval(() => this.buttonLink(), 1000);
  // }

  buttonLink = () => {
    window.setTimeout(() => this.setState({ href: window.location.href }));
  };

  render() {
    return (
      <div className={style.container}>
        <ul className={style.container_nav}>
          <li>
            <Link data-testid="main-link" onClick={this.buttonLink} className={style.text} to={'/'}>
              Main
            </Link>
          </li>
          <li className={style.text}>{'Текущая страница: ' + this.state.href}</li>
          <li>
            <Link
              data-testid="about-link"
              onClick={this.buttonLink}
              className={style.text}
              to={'/aboutUs'}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

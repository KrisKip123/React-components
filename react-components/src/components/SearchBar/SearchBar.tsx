import { ChangeEvent, Component } from 'react';
import style from './searchBar.module.scss';

class SearchBar extends Component {
  state = {
    textInput: '',
  };
  changeText = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ textInput: e.target.value });
  };
  componentDidMount() {
    const isText = localStorage.getItem('textInput') ?? '';
    this.setState({ textInput: isText });
  }
  componentWillUnmount() {
    localStorage.setItem('textInput', this.state.textInput);
  }
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.container}>
          <input
            data-testid="name"
            onChange={this.changeText}
            type="text"
            className={style.search}
            placeholder="Search..."
            value={this.state.textInput}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;

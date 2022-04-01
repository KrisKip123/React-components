import { Component } from 'react';
import Card from './Card/Card';
import style from './catalogCard.module.scss';
import IPizza from '../../common/types';

const pizzas: IPizza[] = [
  {
    id: '61ea74fb1c78865de913192b',
    key: '0',
    name: 'Изи Фризи',
    ingredients: 'Сыр моцарелла, Картофель фри, Соус Ранч, Сосиски куриные, Ветчина',
    image: 'izi_frizi_small.png',
    price: '28.89 руб.',
    weight: '705 гр',
    isHit: false,
  },
  {
    id: '61ea8f79363cc72043f121f2',
    key: '1',
    name: 'Чеддерони',
    ingredients: 'Крем фреш, Чеддер, Ветчина, Пепперони, Сыр моцарелла',
    image: 'chedderoni_small.png',
    price: '28.89 руб.',
    weight: '670 гр',
    isHit: false,
  },
  {
    id: '61ea906f363cc72043f121f3',
    key: '2',
    name: 'Говядина BURGER',
    ingredients: 'Шампиньоны, Телятина, Сыр моцарелла, Соус Бургер, Лук, Огурцы',
    image: 'govyadina_burger_small.png',
    price: '28.89 руб.',
    weight: '625 гр',
    isHit: false,
  },
  {
    id: '61ea90c0363cc72043f121f4',
    key: '3',
    name: 'Биф BBQ',
    ingredients: 'Телятина, Шпинат, Сыр моцарелла, Черри, Соус барбекю, Баварские колбаски',
    image: 'Beef_BBQ_small-min.png',
    price: '32.89 руб.',
    weight: '620 гр',
    isHit: false,
  },
  {
    id: '61ea9104363cc72043f121f5',
    key: '4',
    name: 'Колбаски и опята',
    ingredients: 'Баварские колбаски, Опята, Сыр моцарелла, Соус Ранч, Горчица',
    image: 'kolbaski_i_opyata_small-min.png',
    price: '26.89 руб.',
    weight: '600 гр',
    isHit: false,
  },
  {
    id: '61ea9188363cc72043f121f7',
    key: '5',
    name: 'Карбонара',
    ingredients: 'Шампиньоны, Лук, Крем фреш, Бекон, Сыр моцарелла, Ветчина',
    image: 'carbonara.png',
    price: '28.89 руб.',
    weight: '565 гр',
    isHit: true,
  },
  {
    id: '61ea91e6363cc72043f121f8',
    key: '6',
    name: 'Доминос Фирменная',
    ingredients:
      "Пармезан, Курица, Сыр моцарелла, Лук, Томатный соус Domino's, Бекон, Сладкий перец, Томаты, Буженина, Телятина, Шампиньоны",
    image: 'firmennaya.png',
    price: '34.89 руб.',
    weight: '805 гр',
    isHit: true,
  },
  {
    id: '61ea9292363cc72043f121f9',
    key: '7',
    name: 'Чикен Ранч',
    ingredients: 'Соус Ранч, Томаты, Сыр моцарелла, Курица',
    image: 'chiken_fresh_small.png',
    price: '26.89 руб.',
    weight: '635 гр',
    isHit: false,
  },
  {
    id: '61ea9304363cc72043f121fa',
    key: '8',
    name: 'Мексиканская',
    ingredients: 'Сыр моцарелла, Сладкий перец, Соус Бургер, Халапеньо, Курица, Кукуруза, Томаты',
    image: 'meksikanskaya_small.png',
    price: '28.89 руб.',
    weight: '610 гр',
    isHit: false,
  },
  {
    id: '61ea9363363cc72043f121fb',
    key: '9',
    name: 'Прованс',
    ingredients: 'Томаты, Голубой сыр, Сыр моцарелла, Крем фреш, Пепперони, Ветчина',
    image: 'provence.png',
    price: '28.89 руб.',
    weight: '590 гр',
    isHit: false,
  },
  {
    id: '61ea93eb363cc72043f121fd',
    key: '10',
    name: '5 Сыров',
    ingredients: 'Фета, Крем фреш, Голубой сыр, Пармезан, Чеддер, Сыр моцарелла',
    image: '5_syrov.png',
    price: '32.89 руб.',
    weight: '570 гр',
    isHit: false,
  },
  {
    id: '61ea94c9363cc72043f121fe',
    key: '11',
    name: 'Мюнхенская',
    ingredients:
      'Баварские колбаски, Томаты, Соус барбекю, Горчица, Сыр моцарелла, Мюнхенские колбаски, Ветчина',
    image: 'myunkhenskaya_small.png',
    price: '34.89 руб.',
    weight: '650 гр',
    isHit: false,
  },
];

class CatalogCard extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.container_cards}>
          {pizzas.map((pizza) => (
            <Card key={pizza.id} props={pizza} />
          ))}
        </div>
      </div>
    );
  }
}

export default CatalogCard;
export { pizzas };

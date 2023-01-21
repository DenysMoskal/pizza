import React from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import { setItems } from '../redux/slices/pizzaSlice';


const Home: React.FC = () => {

  const { searchValue } = React.useContext<any>(SearchContext);
  // const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const categoryId = useSelector((state: any) => state.filter.categoryId);
  const sort = useSelector((state: any) => state.filter.sort.property);
  const items = useSelector((state: any) => state.pizza.items);
  const dispatch = useDispatch();

  const activeIndex = (id: number ) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=` + categoryId : '';

    axios
      .get(
        `https://631db945789612cd07af3a4f.mockapi.io/items?${category}&sortBy=${sort}&order=desc`,
      )
      .then((response) => {
        dispatch(setItems(response.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} activeIndex={activeIndex} />
        <Sort />
      </div>
      <h2 className="content__title">Усі піци</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((value: any) => {
                if (
                  value.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                  return true;
              })
              .map((item: any) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Home;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Piza from '../components/Piza';
import { getAllPizzas } from '../actions/pizzaAction';

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector(state => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]); // Add dispatch as a dependency to the useEffect

  return (
    <div>
      <div className='row  justify-content-center'>
        {loading ? (
          <h1>LOADING</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map(pizza => (
            <div className='col-md-3 m-3' key={pizza._id}>
              <div >
                <Piza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

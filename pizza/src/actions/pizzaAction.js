import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' });

  try {
    const response = await axios.get('/api/pizzas/getallpizzas');
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data }); // You might want to dispatch the received data

    console.log(response); // Output the response object

  } catch (error) {
    dispatch({ type: 'GET_PIZZAS_FAILED' });
    console.error('Error fetching pizzas:', error);
  }
};

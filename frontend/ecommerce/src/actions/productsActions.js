import axios from 'axios';
import { 
  PRODUCT_LIST_FAIL, 
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS 
} from '../constants/ProductConstants';


export const listProducts = (page = 1, pageSize = 10) => async (dispatch) => {
  try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(`http://127.0.0.1:8000/api/product/?page=${page}&page_size=${pageSize}`);
      console.log(data);
      
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response ? error.response.data : error.message });
  }
};


// Fetch single product details
export const DetailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:8000/api/s_product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

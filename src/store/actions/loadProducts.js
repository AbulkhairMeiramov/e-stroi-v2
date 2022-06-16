import { setProduct, setError } from "../slice/shop";
import { fetchProducts } from "../../fetchers/fetchProducts";

export const loadProducts = (categoryId) => async (dispatch) => {
  try {
    const product = await fetchProducts(categoryId);
    dispatch(setProduct(product));
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};

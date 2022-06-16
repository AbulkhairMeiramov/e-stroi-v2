import { setCategory, setError } from "../slice/shop";
import { fetchCategories } from "../../fetchers/fetchCategories";

export const loadCategories = () => async (dispatch) => {
  try {
    const category = await fetchCategories();
    dispatch(setCategory(category));
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};

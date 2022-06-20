import { fetchCategories } from "../../fetchers/fetchCategories";
import { setCategory, setError } from "../slice/shop";


export const loadCategoriesGrid = () => async (dispatch) => {
  try {
    const category = await fetchCategories();
    dispatch(
      setCategory({
        name: "Главная",
        id: undefined,
        childCategories: category,
      })
    );
  } catch (e) {
    console.error(e);
    dispatch(setError("Something went wrong"));
  }
};

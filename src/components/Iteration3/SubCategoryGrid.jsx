import Grid from "@mui/material/Grid";
import { SubCategoryCard } from "./SubCategoryCard";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../store/actions/loadCategories";

export const SubCategoryGrid = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.shop);

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <Grid container spacing={2} columns={12} style={{ marginLeft: "21px" }}>
        {category.map((categoryItem) => (
          <Grid item xs={4} lg={4} sm={4} key={categoryItem.id}>
            <SubCategoryCard categoryItem={categoryItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

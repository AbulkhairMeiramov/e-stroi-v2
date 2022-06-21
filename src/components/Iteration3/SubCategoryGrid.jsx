import Grid from "@mui/material/Grid";
import { SubCategoryCard } from "./SubCategoryCard";

export const SubCategoryGrid = ({ categories }) => {
  return (
    <div>
      <Grid container spacing={2} columns={12} style={{ marginLeft: "21px" }}>
        {categories?.map((categoryItem) => (
          <Grid item xs={4} lg={4} sm={4} key={categoryItem.id}>
            <SubCategoryCard categoryItem={categoryItem} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

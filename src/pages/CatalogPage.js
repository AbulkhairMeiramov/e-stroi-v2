import { Container } from "@mui/system";
import { CategoryList } from "../components/Iteration3/CategoryList";
import { SubCategoryGrid } from "../components/Iteration3/SubCategoryGrid";

export const CatalogPage = () => {
  return (
    <div>
      <Container>
        <div style={{ display: "flex" }}>
          <CategoryList />
          <SubCategoryGrid />
        </div>
      </Container>
    </div>
  );
};

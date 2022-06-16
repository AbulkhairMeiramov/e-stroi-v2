import { Container } from "@mui/system";
import { CategoryList } from "../components/CategoryList";
import { SubCategoryGrid } from "../components/SubCategoryGrid";

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

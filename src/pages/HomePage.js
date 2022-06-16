import { Container } from "@mui/system";
import { CategoryModule } from "../components/CategoryModule";
import { ProductModule } from "../components/ProductModule";

export const HomePage = () => {
  return (
    <div>
      <Container>
        <p
          style={{
            fontWeight: "500",
            fontSize: "20px",
            color: "#636363",
            lineHeight: "23.44px",
          }}
        >
          Категории
        </p>
        <div style={{ display: "flex" }}>
          <CategoryModule />
          <ProductModule />
        </div>
      </Container>
    </div>
  );
};

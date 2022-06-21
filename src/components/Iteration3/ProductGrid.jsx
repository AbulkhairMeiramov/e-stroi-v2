import { Grid } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { loadProducts } from "../../store/actions/loadProducts";
import { ProductElement } from "./ProductElement";

export const ProductGrid = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.shop);
  const [params] = useSearchParams();
  const categoryId = params.get("categoryId");

  const load = useCallback(() => {
    if (categoryId) {
      dispatch(loadProducts(categoryId));
    }
  }, [dispatch, categoryId]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div style={{ marginLeft: "21px" }}>
      {product?.content?.length > 0 ? (
        <>
          <Grid container spacing="10px">
            {Array.from(product?.content ?? []).map((productItem) => (
              <Grid item xs={6} sm={4} md={3} key={productItem.id}>
                <Link
                  to="#"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <ProductElement productItem={productItem} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: "#8A8A8A",
            marginLeft: "50%",
            marginTop: "50%",
          }}
        >
          <img
            style={{ width: "271px" }}
            src="no-content.png"
            alt="no products"
          />
          <h1>Нет товаров</h1>
        </div>
      )}
    </div>
  );
};

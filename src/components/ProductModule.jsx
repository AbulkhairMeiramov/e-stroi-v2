import { Grid, Typography } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useMemo } from "react";
import { loadProducts } from "../store/actions/loadProducts";

const findNode = (id, category) => {
  if (category?.id + "" === id + "") {
    return category;
  }
  if (category?.childCategories) {
    for (let childCategory of category.childCategories) {
      const node = findNode(id, childCategory);
      if (node) {
        return node;
      }
    }
  }
};

export const ProductModule = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.shop);
  const { category } = useSelector((state) => state.shop);
  const [params] = useSearchParams();
  const categoryId = params.get("categoryId");

  const currentCategory = useMemo(() => {
    if (!categoryId || !category) return category;
    return findNode(+categoryId, { childCategories: category });
  }, [category, categoryId]);

  const load = useCallback(() => {
    if (categoryId) {
      dispatch(loadProducts(categoryId));
    }
  }, [dispatch, categoryId]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <div>
        <Typography
          style={{
            fontWeight: "500",
            fontSize: "32px",
            lineHeight: "37.5px",
            color: "#636363",
            marginTop: "-50px",
            marginBottom: "14px",
          }}
        >
          {currentCategory?.name}
        </Typography>
      </div>
      {product?.content?.length > 0 ? (
        <>
          <Grid container spacing="10px">
            {Array.from(product?.content ?? []).map((productItem) => (
              <Grid item xs={6} sm={4} md={3} key={productItem.id}>
                <Link
                  to="#"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <ProductItem productItem={productItem} />
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

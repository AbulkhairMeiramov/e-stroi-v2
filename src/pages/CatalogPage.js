import { Container } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BreadCrumbs } from "../components/Iteration1/BreadCrumbs";
import { CategoryList } from "../components/Iteration3/CategoryList";
import { ProductGrid } from "../components/Iteration3/ProductGrid";
import { SubCategoryGrid } from "../components/Iteration3/SubCategoryGrid";
import { fetchCategories } from "../fetchers/fetchCategories";

function findNode(id, category) {
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
}

function getCategoryPath(id, category) {
  const node = findNode(id, category);
  if (!id || !node) {
    return [category];
  }
  return [...getCategoryPath(node.parentId, category), node];
}

export const CatalogPage = () => {
  const [category, setCategory] = useState();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategory({
        name: "Главная",
        id: undefined,
        childCategories: categories,
      });
    });
  }, []);

  const currentCategory = useMemo(() => {
    if (!categoryId || !category) return category;
    return findNode(+categoryId, category);
  }, [category, categoryId]);

  const links = useMemo(() => {
    if (!category) return [];
    return getCategoryPath(categoryId, category).map((category) => ({
      label: category.name,
      to: category.id ? "/catalog?categoryId=" + category.id : "/catalog",
    }));
  }, [categoryId, category]);

  return (
    <div>
      <Container>
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <BreadCrumbs links={links} />
        </div>
        <div style={{ display: "flex" }}>
          <CategoryList />
          {currentCategory?.childCategories ? (
            <SubCategoryGrid categories={currentCategory?.childCategories} />
          ) : (
            <ProductGrid />
          )}
        </div>
      </Container>
    </div>
  );
};

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SubCategoryItem } from "./SubCategoryItem";

export const SubCategoryCard = ({ categoryItem, limit }) => {
  const [expanded, setExpanded] = useState(false);

  const visibleCategories = useMemo(() => {
    return (
      categoryItem &&
      categoryItem?.childCategories &&
      categoryItem?.childCategories?.slice(0, expanded ? undefined : limit)
    );
  }, [categoryItem, limit, expanded]);

  const limitDiff = useMemo(() => {
    if (!limit || !categoryItem) return 0;
    return Math.max(categoryItem?.childCategories?.length - limit, 0);
  }, [limit, categoryItem]);

  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        background: "#EAEAEA",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            style={{
              fontWeight: "400px",
              fontSize: "20px",
              lineHeight: "23.44px",
              color: "#000000",
            }}
          >
            <Link
              to={`/catalog?categoryId=${categoryItem.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {categoryItem.name}
            </Link>
            {(visibleCategories ?? []).map((childCategoryItem) => (
              <Link
                to={`/catalog?categoryId=${childCategoryItem.id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <SubCategoryItem childCategory={childCategoryItem} />
              </Link>
            ))}
            {!!limitDiff && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  color: "rgb(102,192,93)",
                }}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "-" : "+"}
                {limitDiff} категории
              </div>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

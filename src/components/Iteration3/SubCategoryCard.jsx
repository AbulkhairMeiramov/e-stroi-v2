import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SubCategoryItem } from "./SubCategoryItem";

export const SubCategoryCard = ({ categoryItem }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "314px",
          height: "230px",
          display: "flex",
          background: "#EAEAEA",
          justifyContent: "center",
          alignItems: "center",
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
              {categoryItem.name}
              {categoryItem &&
                categoryItem.childCategories &&
                categoryItem.childCategories
                  .slice(0, 3)
                  .map((childCategoryItem) => (
                    <Link
                      to={`/catalog?categoryId=${childCategoryItem.id}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <SubCategoryItem childCategory={childCategoryItem} />
                    </Link>
                  ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

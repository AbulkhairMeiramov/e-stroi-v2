import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { SubCategoryItem } from "./SubCategoryItem";

export const SubCategoryCard = ({ categoryItem }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "314px",
          height: "183px",
          display: "flex",
          background: "#EAEAEA"
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
              {categoryItem && categoryItem.childCategories && categoryItem.childCategories.map(childCategoryItem => (
                <SubCategoryItem childCategory={childCategoryItem} />
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

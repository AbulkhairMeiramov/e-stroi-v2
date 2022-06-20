import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const ProductItem = ({ productItem }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        background: "#EAEAEA",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ display: "flex" }}>
          <Typography>{productItem.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

import { Typography } from "@mui/material";

export const SubCategoryItem = ({ childCategory }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "4px",
        background: "white",
        width: "294px",
        height: "28px",
      }}
    >
      <Typography>{childCategory.name}</Typography>
      <Typography
        style={{
          marginLeft: "auto",
          background: "#ABABAB",
          borderRadius: "16px",
          width: "24px",
          height: "24px",
          justifyContent: "center",
          padding: "5px",
          display: "flex",
          color: "#000000",
        }}
      >
        {childCategory.count}
      </Typography>
    </div>
  );
};

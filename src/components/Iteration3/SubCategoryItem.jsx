import { Typography } from "@mui/material";

export const SubCategoryItem = ({ childCategory }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "4px",
          background: "white",
          width: "250px",
          height: "40px",
          marginBottom: "10px",
          marginTop: "10px",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography style={{ width: "85%" }}>{childCategory.name}</Typography>
        <Typography
          style={{
            marginLeft: "auto",
            background: "#ABABAB",
            borderRadius: "16px",
            width: "18px",
            height: "18px",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            display: "flex",
            color: "#000000",
          }}
        >
          {childCategory.childCount}
        </Typography>
      </div>
    </>
  );
};

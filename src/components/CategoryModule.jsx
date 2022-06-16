import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { loadCategories } from "../store/actions/loadCategories";

export const CategoryModule = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.shop);
  const navigate = useNavigate();

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  const handleClick = (categoryItem) => {
    navigate("/home?categoryId=" + categoryItem.id);
  };

  const renderTree = (category) => (
    <>
      <TreeItem
        key={category.id}
        nodeId={category.id + ""}
        label={
          <div style={{ display: "flex" }}>
            <span style={{ justifyContent: "center", alignItems: "center" }}>
              {category.name}
            </span>
            <div
              style={{
                marginLeft: "auto",
                background: "#ABABAB",
                borderRadius: "16px",
                width: "22px",
                justifyContent: "center",
                padding: "5px",
                display: "flex",
              }}
            >
              {category.childCount}
            </div>
          </div>
        }
        style={{
          color: "#5E6366",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "20px",
          width: "216px",
        }}
        onClick={() => handleClick(category)}
      >
        {Array.isArray(category.childCategories)
          ? category.childCategories.map((categoryItem) =>
              renderTree(categoryItem)
            )
          : null}
      </TreeItem>
      <Divider style={{ width: "216px" }} />
    </>
  );

  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{
        flexGrow: 1,
        maxWidth: 400,
        minWidth: 400,
      }}
    >
      {category?.map((categoryItem) => renderTree(categoryItem))}
    </TreeView>
  );
};

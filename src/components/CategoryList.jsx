import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { loadCategories } from "../store/actions/loadCategories";
import { Divider } from "@mui/material";

export const CategoryList = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.shop);

  const load = useCallback(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <TreeView
        aria-label="file system navigator"
        sx={{ height: 240, flexGrow: 1, maxWidth: 400 }}
      >
        {category.map((categoryItem) => (
          <>
            <TreeItem
              nodeId={categoryItem.id + ""}
              label={
                <div
                  style={{
                    display: "flex",
                    width: "240px",
                    height: "40px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#5E6366",
                    }}
                  >
                    {categoryItem.name}
                  </span>
                  <div
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
                    {categoryItem.childCount}
                  </div>
                </div>
              }
              key={categoryItem.id}
            />
            <Divider style={{ width: "100%" }} />
          </>
        ))}
      </TreeView>
    </div>
  );
};

export const selectedDropdown = (selected) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: selected,
  };
};

export const selectedList = (list) => {
  return {
    type: "SELECTED_CATEGORY_LIST",
    payload: list
  }
}
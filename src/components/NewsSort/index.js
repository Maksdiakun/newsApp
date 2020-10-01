import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../store/actions/newsActions";
import { Multiselect } from "multiselect-react-dropdown";

const NewsSort = () => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.news.sortBy);
  const [selected, setSelected] = useState(null);
  const сhangeHandler = (selectedList, selectedItem) => {
    dispatch(changeSort(selectedItem.value));
  };
  const arr = [
    {
      name: "Newest",
      value: "publishedAt",
    },
    {
      name: "Popular",
      value: "popularity",
    },
  ];
  useEffect(() => {
    const sel = arr.find((el) => el.value == select);
    setSelected([sel]);
  }, [select]);

  return (
    <div className="news_header_sort">
      <Multiselect
        options={arr}
        displayValue="name"
        selectedValues={selected}
        onSelect={сhangeHandler}
        singleSelect
        placeholder="Sort by"
      />
    </div>
  );
};

export default NewsSort;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSource } from "../../store/actions/newsActions";
import { Multiselect } from "multiselect-react-dropdown";
import { getSources } from "../../fetch";
import "./multi_select.scss";
const MultiSelect = () => {
  const dispatch = useDispatch();

  let [arr, swtArr] = useState([]);
  useEffect(() => {
    getSources().then(({ data }) => {
      swtArr(data.sources);
    });
  }, []);
  const onChange = (selectedList) => {
    const a = selectedList.map((el) => {
      return el.id;
    });
    dispatch(changeSource(a));
  };
  return (
    <div className="multi_select">
      <Multiselect
        options={arr}
        displayValue="name"
        onSelect={onChange}
        onRemove={onChange}
        placeholder="choose sources"
        style={{ chips: { background: "#333" } }}
      />
    </div>
  );
};

export default MultiSelect;

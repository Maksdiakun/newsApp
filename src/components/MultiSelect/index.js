import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSource } from "../../store/actions/newsActions";
import { Multiselect } from "multiselect-react-dropdown";
import { getSources } from "../../fetch";
import "./multi_select.scss";
const MultiSelect = () => {
  const dispatch = useDispatch();
  const { sources } = useSelector((state) => state.news);
  const [options, setOptions] = useState([]);
  let [selected, setSelected] = useState([]);
  useEffect(() => {
    getSources().then(({ data }) => {
      setOptions(data.sources);
      if (sources) {
        let b = data.sources.filter((el) => sources.indexOf(el.id) !== -1);
        setSelected(b);
      }
    });
  }, [sources]);
  const onChange = (selectedList) => {
    const arr = selectedList.map((el) => el.id);
    dispatch(changeSource(arr));
  };
  return (
    <div className="multi_select">
      <Multiselect
        options={options}
        displayValue="name"
        onSelect={onChange}
        onRemove={onChange}
        placeholder="choose sources"
        selectedValues={selected}
        style={{ chips: { background: "#333" } }}
      />
    </div>
  );
};

export default MultiSelect;

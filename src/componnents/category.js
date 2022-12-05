import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = ({ onChangeProduct }) => {
  const [category, setCategory] = useState([]);

  async function doGetRequest() {
    let res = await axios.get("https://fakestoreapi.com/products/categories");
    let data = res.data;

    setCategory(data);
  }
  useEffect(() => {
    doGetRequest();
  }, []);
  return (
    <div className="flex  align-center justify-center  p-8">
      <ul className="flex  align-center justify-center font-bold  p-8">
        {category.map((c, index) =>
          <li
            className="p-2 cursor-pointer"
            key={index}
            onClick={() => onChangeProduct(c)}
          >
            {c}
          </li>
        )}
        <li className="p-2 cursor-pointer" onClick={() => onChangeProduct("")}>
          All
        </li>
      </ul>
    </div>
  );
};

export default Category;

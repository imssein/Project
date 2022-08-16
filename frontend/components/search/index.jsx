import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import SearchItem from "./SearchItem";
import axios from "axios";

function Search(props) {
  const [store, setStore] = useState([]);
  const [item, setItem] = useState("");
  const query = encodeURIComponent(item);
  const url = `http://localhost:9090/v1/api/stores?categories=${query}`;

  const searchItem = (e) => {
    setItem(e.target.value);
    console.log(item);
  };

  console.log(url);

  const fetchData = async () => {
    console.log("검색");

    try {
      const res = await axios.get(url);
      setStore(res.data);
      console.log({store});
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="text-center py-9">
      <SearchForm onClick={fetchData} onChange={searchItem} />
      <SearchItem store={store} />
    </div>
  );
}

export default Search;

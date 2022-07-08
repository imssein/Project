import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchForm(props) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      axios.get(common.baseURL + "").then((res) => {
        setLists(res.data.userList);
      });
    }
  };
  return (
    <div className="text-center pb-6">
      <form onSubmit={(e) => onSearch(e)}>
        <input
          className="w-72 h-12 border border-slate-900 rounded-lg px-3"
          type="text"
          value={search}
          placeholder="서울시 채식 식당을 검색해보세요."
          onChange={onChangeSearch}
        />
        <button className="ml-3" type="submit">
          <AiOutlineSearch size="25" />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

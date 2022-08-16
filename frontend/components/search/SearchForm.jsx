import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchForm({ onClick, onChange }) {
  return (
    <div className="text-center pb-6">
      <input
        className="w-72 h-12 border border-slate-900 rounded-lg px-3"
        type="text"
        placeholder="서울시 채식 식당을 검색해보세요."
        onChange={onChange}
      />
      <button className="ml-3" type="submit" onClick={onClick}>
        <AiOutlineSearch size="25" />
      </button>
    </div>
  );
}

export default SearchForm;

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchForm({ onClick, onChange }) {
  return (
    <div className="mx-auto flex  w-96 h-14 md:w-[35rem]  border border-text-color rounded-full px-9 bg-white">
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="서울시 채식 식당을 검색해보세요."
        onChange={onChange}
      />
      <button className="ml-3 text-text-color" type="submit" onClick={onClick}>
        <AiOutlineSearch size="25" />
      </button>
    </div>
  );
}

export default SearchForm;

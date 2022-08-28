import React, { useState } from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";

function SearchMain() {
  const [item, setItem] = useState("");
  const query = encodeURIComponent(item);

  const searchItem = (e) => {
    setItem(e.target.value);
    console.log(item);
  };
  
  return (
    <div className="py-9">
      <Link
        href={{ pathname: "/search", query: { query } }}
        as={`/search?query=${item}`}
      >
        <SearchForm onChange={searchItem} />
      </Link>
    </div>
  );
}

export default SearchMain;

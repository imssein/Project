import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

const types = [
  {
    id: 1,
    title: "비건",
    file: "vegan.png",
  },
  {
    id: 2,
    title: "락토",
    file: "lacto.png",
  },
  {
    id: 3,
    title: "오보",
    file: "ovo.png",
  },
  {
    id: 4,
    title: "락토오보",
    file: "lactoovo.png",
  },
  {
    id: 5,
    title: "페스코",
    file: "pesco.png",
  },
];
function Vegetarian(props) {
  const [item, setItem] = useState("");
  const query = encodeURIComponent(item);

  const searchItem = (e) => {
    setItem(e.target.value);
    console.log(item);
  };

  return (
    <div className="mt-8 rounded-xl py-4 px-4 bg-white mx-9">
      <div className="text-xl text-left  text-text-green font-semibold ">채식타입별 식당 추천</div>
      <div className="mt-6 grid grid-cols-5 gap-3 place-content-around">
        {types.map((type) => (
          <Link
           href={{ pathname: "/search", query: `${ type.title }` }}
           as={`/search?query=${type.title}`}
          key={type.id}>
          <div onChange={searchItem}>
            <div className="rounded-2xl bg-bg inline-block pt-2 pb-1 px-2  border-gray">
              <Image
                src={`/images/${type.file}`}
                width={30}
                height={30}
                alt="채식타입그림"
              />
            </div>
            <p className="text-xs mt-2">{type.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Vegetarian;

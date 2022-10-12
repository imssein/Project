import React from "react";

function Check({checkType, title, type, setType}) {

  const checkbox = (checkThis) => {
    const checkbox = document.getElementsByName(`${checkType}`);
    for (const i = 0; i < checkbox.length; i++) {
      if (checkbox[i] !== checkThis) {
        checkbox[i].checked = false;
      }
      setType(checkThis.value);
    }
  };
  return (
      <div className="my-6">
      <p className="font-semibold">{title}</p>
      <div className="flex my-4">
        {type.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              className="hidden peer"
              name={`${checkType}`}
              value={item.title}
              onChange={(e) => checkbox(e.target)}
            />
              <p className="mr-2 text-sm text-gray-3 md:mx-2 rounded-full border border-gray-3 py-2 px-4  hover:bg-main   peer-checked:bg-main">
                {item.title}
              </p>
          </label>
        ))}
      </div>
      </div>
  );
}

export default Check;

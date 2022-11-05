import React, { useState } from "react";
import { FilterCategory } from "../FilterCategory";

function FilterBtn() {
  const [showPopup, setShowPopup] = useState(false);

  function handlePopup(e) {
    {
      showPopup === "true" && setShowPopup(false);
    }
    {
      showPopup === "false" && setShowPopup(true);
    }
    console.log(showPopup);
  }

  return (
    <div>
      <div className="flex my-auto ml-4">
        <div className="bg-bg cursor-pointer hover:border-2 hover:border-text-color mr-2 text-sm text-center rounded-lg md:py-3 md:px-9 py-2 px-3 peer-checked:bg-text-color">
          <div>
            <div onClick={()=> showPopup ? setShowPopup(false) : setShowPopup(true)}>정렬</div>
            { showPopup ? 
              <div className="h-96"> 
                <input type="check" />
              </div> 
            : null}
          </div>
        
        </div>
      </div>

      <div>
       
      </div>
    </div>
  );
}

export default FilterBtn;

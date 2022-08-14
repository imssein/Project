import React from "react";

function DistanceLogo({ dist_1, dist_2, dist_3, dist_4, dist_5, dist_6 }) {

  function handleClick1(){
    console.log("1", dist_1)
  }
  function handleClick2(){
    console.log("2", dist_2)
  }
  function handleClick3(){
    console.log("3", dist_3)
  }
  function handleClick4(){
    console.log("4", dist_4)
  }
  function handleClick5(){
    console.log("5", dist_5)
  }
  function handleClick6(){
    console.log("6", dist_6)
  }

  return (
    <div>
      <div className="mt-6 flex">
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick1}>
          300m
        </button>
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick2}>
          500m
        </button>
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick3}>
          1km
        </button>
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick4}> 
          3km
        </button>
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick5}>
          5km
        </button>
        <button className="bg-slate-200 py-3 px-9 w-full text-center hover:bg-slate-400 focus:bg-slate-400" onClick={handleClick6}>
          전체
        </button>
      </div>
    </div>
  );
}

export default DistanceLogo;

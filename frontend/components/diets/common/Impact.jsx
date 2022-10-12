import React from "react";


function Impact({ icon, title, calc, unit}) {
  return (
    
        <tr>
          <td>{icon}</td>
          <td className="text-gray-3">{title}</td>
          <td className="flex"><p className="text-green font-semibold">{calc}</p><p className="text-gray-3 text-sm my-auto">{unit}</p></td>
        </tr>
     
    
  );
}

export default Impact;

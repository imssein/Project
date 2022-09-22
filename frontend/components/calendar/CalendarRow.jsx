import Link from "next/link";
import React, { useState } from "react";

function CalendarRow({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
}) {
  const activeDay = useState(new Date().getDate())[0];
  let content = [];
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td></td>);
    }
    content.push(
      <Link href={`/foodRecord/list/${currentYear}/${currentMonth + 1}/1`}>
      <td className="pt-2 h-20 w-12  relative md:px-3 text-center text-sm align-text-top text-gray">
        1
      </td>
      </Link>
    );

    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <>
          {activeDay === i + 1 &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <Link href={`/foodRecord/list/${currentYear}/${currentMonth + 1}/${i+1}`}>
              <td className="pt-2 h-20 text-sm w-12 border relative md:px-3 text-center align-text-top text-gray">
                <span className="h-16  p-1 rounded-full border-green-400 border-2">
                  {i + 1}
                </span>
              </td>
            </Link>
          ) : (
            <Link href={`/foodRecord/list/${currentYear}/${currentMonth + 1}/${i+1}`}>

            <td className="pt-2 h-20 text-sm  w-12  relative md:px-3 text-center align-text-top text-gray">
              {i + 1}
            </td>
            </Link>
          )}
        </>
      );
    }

    return <>{content}</>;
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        <>
          {activeDay === i + (7 * row - firstDay) &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <Link href={`/foodRecord/list/${currentYear}/${currentMonth + 1}/${i+ (7*row-firstDay)}`}>

            <td className="text-sm  pt-2 h-20 w-12  relative md:px-3 text-center align-text-top text-gray">
              <span className="text-sm  p-2 rounded-full bg-main">
                {i + (7 * row - firstDay)}
              </span>
            </td>
            </Link>
          ) : (
            <Link href={`/foodRecord/list/${currentYear}/${currentMonth + 1}/${i+ (7*row-firstDay)}`}>
            <td className="text-sm pt-2 h-20 w-12  relative md:px-3 text-center align-text-top text-gray">
              {i + (7 * row - firstDay)}
            </td>
            </Link>
          )}
        </>
      );
    }
  }
  console.log("두번쨰", content)

  return <>{content}</>;
}

export default CalendarRow;

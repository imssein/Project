import React, { useState, useEffect, useRef } from "react";
import CalendarRow from "./CalendarRow";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const date = ["일", "월", "화", "수", "목", "금", "토"];

function CalendarComponent(props) {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const prevMonth = useRef(null);
  const [firstDayInMonth, setFirstDayInMonth] = useState([]);

  useEffect(() => {
    let x = [];
    for (let i = 1; i <= 12; i++) {
      x.push(new Date(`${activeYear}/${i}/1`).getDay());
    }
    setFirstDayInMonth(x);
  }, [activeYear]);

  return (
    <div className="border border-gray-2 md:rounded p-4 mx-4 md:mx-auto">
      <div className="w-full rounded">
        <div className="flex items-center justify-between mb-4">
          <div className="text-left font-bold text-xl text-gray-3">
            {`${activeYear}년 ${activeMonth + 1}월`}
          </div>
          <div className="flex space-x-4">
            <button
              className="p-2 rounded bg-main text-gray-3"
              onClick={() => {
                if (prevMonth.current === 0) {
                  setActiveYear(activeYear - 1);
                  setActiveMonth(11);
                } else {
                  setActiveMonth(activeMonth - 1);
                }
              }}
            >
              <AiFillCaretLeft />
            </button>
            <button
              className="p-2 rounded bg-main text-gray-3 "
              onClick={() => {
                if (prevMonth.current === 11) {
                  setActiveYear(activeYear + 1);
                  setActiveMonth(0);
                } else {
                  setActiveMonth(activeMonth + 1);
                }
              }}
            >
              <AiFillCaretRight />
            </button>
          </div>
        </div>
        <div className="-mx-2">
          <table className="w-full">
            <thead>
              <tr>
                {date &&
                  date.map((item, idx) => (
                    <th
                      className="py-3 px-2 md:px-3 text-xs text-gray-3"
                      key={idx}
                    >
                      {item}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={0}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={1}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={2}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={3}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={4}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={5}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;

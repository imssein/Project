import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../../components/common/MainLayout";
import Head from "next/head";
import { DayDietsProvider } from "../../../contexts/Diets/DayDiets";
import DietsDay from "../../../components/diets/containers/DietsDay";

function List(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log("params", params);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [day2, setDay2] = useState("");

  useEffect(() => {
    if (params && params.length > 0) {
      setYear(params[0]);
      setMonth(params[1]);
      setDate(params[2]);
    }
  }, [params]);

  useEffect(() => {
    setDay2(year + "-" + month + "-" + date);
    setDay(year + "년 " + month +"월 " + date +"일")
  }, [date, month, year]);

  const offset = new Date().getTimezoneOffset() * 60000;
  const data = new Date(day2) - offset;
  const search = new Date(data).toJSON();
  console.log(search);

  return (
      <MainLayout>
        <Head>
          <title>VeganPleasure | 식단기록</title>
        </Head>
        <div className="">
          <DayDietsProvider search={search}>
              <DietsDay day={day} />
          </DayDietsProvider>
        </div>
      </MainLayout>
  );
}

export default List;

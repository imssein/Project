import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DietsListContainer from "../../../components/diet/containers/DietsListContainer";
import MainLayout from "../../../components/common/MainLayout";
import Head from "next/head";

function List(props) {
  const router = useRouter();
  const { params } = router.query;
  console.log("params", params);

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (params && params.length > 0) {
      setYear(params[0]);
      setMonth(params[1]);
      setDate(params[2]);
    }
  }, [params]);

  useEffect(() => {
    setDay(year + "-" + month + "-" + date);
  }, [date, month, year]);

  const offset = new Date().getTimezoneOffset() * 60000;
  const data = new Date(day) - offset;
  const search = new Date(data).toJSON();
  console.log(search);

  return (
      <MainLayout>
        <Head>
          <title>VeganPleasure | 식단기록</title>
        </Head>
        <div className="px-9">
          <DietsListContainer search={search} />
        </div>
      </MainLayout>
  );
}

export default List;

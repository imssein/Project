import Head from "next/head";
import React from "react";
import CalendarComponent from "../../../components/calendar";
import CalendarBtn from "../../../components/calendar/CalendarBtn";
import MainLayout from "../../../components/common/MainLayout";

function Calendar(props) {
  return (
    <MainLayout>
      <div className="md:px-11 px-3">

      
      <Head>
        <title>VeganPleasure | 채식한끼</title>
      </Head>
      <div>
        <CalendarComponent />
      </div>
      <div className="my-11 px-3">
       <CalendarBtn />
      </div>
      </div>
    </MainLayout>
  );
}

export default Calendar;

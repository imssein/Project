import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function VegeMonth({ content }) {
    var chart = {
        series: [{
            name: "sales",
            data: [{
              x: '1월',
              y: 10
            }, {
              x: '2월',
              y: 2
            }, {
              x: '3월',
              y: 20
            }, {
                x: '4월',
                y: 5
              },
              {
                x: '5월',
                y: 0
              },
              {
                x: '6월',
                y: 0
              },
              {
                x: '7월',
                y: 0
              },
              {
                x: '8월',
                y: 0
              },
              {
                x: '9월',
                y: 25
              },
              {
                x: '10월',
                y: 11
              },
              {
                x: '11월',
                y: 11
              },
              {
                x: '12월',
                y: 7
              }] 
        }],
        options: {
          chart: {
            height: 380,
            type: 'bar'
          }, 
          xaxis: {
            type: 'category',
           
          },
          group: {
            style: {
              fontSize: '10px',
              fontWeight: 700
            },
          },
          colors: ['#CCD6A6', '#DAE2B6', '#DFE8CC', '#F7EDDB', '#A1C298', '#FBF2CF', '#C6EBC5'],
        }, 
        };

  return (
    <div className="bg-gray-4">
      <div className="text-center text-green font-semibold mb-6">
        월별 채식 기록 현황
      </div>
      <div id="chart" className="">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          height={380}
          type="bar"
        />
      </div>
    </div>
  );
}

export default VegeMonth;

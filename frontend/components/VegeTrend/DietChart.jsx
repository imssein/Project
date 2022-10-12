import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function DietChart({ data }) {
  // vegan, ovo, pesco, lacto, lactoovo, polo, flexi
  console.log(data);
  // var chart = {
  //     series: [{
  //         data: [vegan, lacto, ovo, lactoovo, pesco, polo, flexi]
  //     }],
  //     options : {
  //         chart: {
  //           type: 'bar',
  //           height: 350,
  //         },
  //         plotOptions: {
  //             bar: {
  //               columnWidth: '45%',
  //               distributed: true,
  //             }
  //           },
  //     xaxis: {
  //         categories: [
  //          '비건',
  //          '락토',
  //          '오보',
  //          '락토오보',
  //          '페스코',
  //          '폴로',
  //          '플렉시',
  //         ],
  //         labels: {
  //           style: {
  //             fontSize: '12px'
  //           }
  //         }
  //       }
  //     }
  // }
  var chart = {
    series: data,
    options: {
      chart: {
        width: "100%",
        type: "pie",
      },
      theme: {
        monochrome: {
            enabled: false
        }
    },
      labels: ["비건", "오보", "페스코", "락토", "락토오보", "폴로", "플렉시"],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -15, 
          },
          donut: {
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
          }
        },
      },
      dataLabels: {
        enabled: true,
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        }, 
        style: { 
          enabled: false,
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: ['#333'],
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: '#000',
          opacity: 0.45
      }
      },
      legend: {
        show: false,
      },
      colors: ['#CCD6A6', '#DAE2B6', '#DFE8CC', '#A1C298','#C8DBBE', '#D8D9CF', '#D8D9CF'],
    },
  };
  return (
    <div className="mt-11">
      <div className="text-center text-green font-semibold mb-6">
        내가 가장 많이 먹은 채식 타입은? 
      </div>
      <div id="chart" className="">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="pie"
        />
      </div>
    </div>
  );
}

export default DietChart;

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
      labels: ["비건", "오보", "페스코", "락토", "락토오보", "폴로", "플렉시"],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5, 
          },
        },
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        }, 
        style: {
          fontSize: '16x',
          colors: [function(opts) { return '#666'}],
        }
      },
      legend: {
        show: false,
      },
      colors: ['#CCD6A6', '#DAE2B6', '#DFE8CC', '#F7EDDB', '#A1C298', '#FBF2CF', '#C6EBC5'],
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

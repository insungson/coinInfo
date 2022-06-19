import { useQuery } from "react-query";
import { fetchCoinHistory } from "@utils/api";
import ApexCharts from "react-apexcharts";
import { RingLoader } from "react-spinners";
import { useState, useEffect } from "react";

import { IHistorical } from "@models/price";
import { ChartProps } from "@models/price";

const Price = ({ coinId }: ChartProps) => {
  console.log("price coinId: ", coinId);
  const [chartOptions, setChartOptions] = useState<{
    series: any;
    options: any;
  } | null>(null);

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["priceCandle", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (data) {
      setChartOptions({
        series: [
          {
            data: data.map((obj) => ({
              x: new Date(obj.time_close),
              y: [obj.open, obj.high, obj.low, obj.close],
            })),
          },
        ],
        options: {
          chart: {
            type: "candlestick",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          title: {
            text: "CandleStick Chart",
            align: "left",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
          tooltip: {
            custom: function (temp: any) {
              const { dataPointIndex } = temp;
              console.log("temp: ", temp);
              console.log("data123123: ", data);
              return (
                <div style={{ zIndex: 10 }}>
                  암것도 안써짐...
                  <span color="black">open:</span>
                  <span>{data[dataPointIndex].open}</span>
                  <br />
                  <span color="black">open:</span>
                  <span>{data[dataPointIndex].high}</span>
                  <br /> <span color="black">open:</span>
                  <span>{data[dataPointIndex].low}</span>
                  <br /> <span color="black">open:</span>
                  <span>{data[dataPointIndex].close}</span>
                </div>
              );
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <RingLoader />
      ) : (
        chartOptions && (
          <ApexCharts
            options={chartOptions.options}
            series={chartOptions.series}
            type="candlestick"
            height={350}
          />
        )
      )}
    </>
  );
};

export default Price;

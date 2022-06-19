import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "@utils/api";
import ApexCharts from "react-apexcharts";
import RingLoader from "react-spinners/RingLoader";

import { IHistorical, ChartProps, IChartOptions } from "@models/price";
import { ApexChartOption } from "@chartoptions/setApexchart";

const Chart = ({ coinId }: ChartProps) => {
  console.log("chart coinId: ", coinId);
  const [chartoptions, setChartoptions] = useState<IChartOptions | null>(null);

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (data) {
      console.log("data777: ", data);
      setChartoptions(new ApexChartOption(data).getPriceChartOptions());
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <RingLoader />
      ) : (
        chartoptions && (
          <ApexCharts
            type={chartoptions.type}
            series={chartoptions.series}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((price) => price.time_close),
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(2)}`,
                },
              },
            }}
          />
        )
        // <ApexCharts
        //   type="line"
        //   series={[
        //     {
        //       name: "Price",
        //       data: data?.map((price) => price.close) as [],
        //     },
        //   ]}
        //   options={{
        //     theme: {
        //       mode: "dark",
        //     },
        //     chart: {
        //       height: 300,
        //       width: 500,
        //       toolbar: {
        //         show: false,
        //       },
        //       background: "transparent",
        //     },
        //     grid: { show: false },
        //     stroke: {
        //       curve: "smooth",
        //       width: 4,
        //     },
        //     yaxis: {
        //       show: false,
        //     },
        //     xaxis: {
        //       axisBorder: { show: false },
        //       axisTicks: { show: false },
        //       labels: { show: false },
        //       type: "datetime",
        //       categories: data?.map((price) => price.time_close),
        //     },
        //     fill: {
        //       type: "gradient",
        //       gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        //     },
        //     colors: ["#0fbcf9"],
        //     tooltip: {
        //       y: {
        //         formatter: (value) => `$${value.toFixed(2)}`,
        //       },
        //     },
        //   }}
        // />
      )}
    </>
  );
};

export default Chart;

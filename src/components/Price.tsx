import { useQuery } from "react-query";
import { fetchCoinHistory } from "@utils/api";
import ApexCharts from "react-apexcharts";
import { RingLoader } from "react-spinners";
import { useState, useEffect } from "react";

import { IHistorical, ChartProps, ICandleChartOption } from "@models/price";
import { ApexChartOption } from "@chartoptions/setApexchart";

const Price = ({ coinId }: ChartProps) => {
  console.log("price coinId: ", coinId);
  const [chartOptions, setChartOptions] = useState<ICandleChartOption | null>(
    null
  );

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["priceCandle", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (data) {
      setChartOptions(new ApexChartOption(data).getCandleStickChartOption());
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <RingLoader />
      ) : (
        chartOptions && (
          /* eslint-disable @typescript-eslint/ban-ts-comment */
          //@ts-ignore
          <ApexCharts {...chartOptions} />
        )
      )}
    </>
  );
};

export default Price;

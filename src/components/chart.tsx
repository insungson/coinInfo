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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore  // ApexCharts 의 type을 전부 맞추기 어렵기 때문에 이렇게 처리함.
          <ApexCharts {...chartoptions} />
        )
      )}
    </>
  );
};

export default Chart;

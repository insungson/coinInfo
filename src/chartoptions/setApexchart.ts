import { IHistorical, IChartOptions, ICandleChartOption } from "@models/price";
import moment from "moment";

export class ApexChartOption {
  public data: IHistorical[];
  constructor(data: IHistorical[]) {
    this.data = data;
  }

  getPriceChartOptions(): IChartOptions {
    return {
      type: "line",
      series: [
        {
          name: "Price",
          data: this.data?.map((price) => price.close),
        },
      ],
      options: {
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
          categories: this.data?.map((price) => price.time_close),
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
      },
    };
  }

  getCandleStickChartOption(): ICandleChartOption {
    return {
      type: "candlestick",
      height: 350,
      series: [
        {
          name: "CandleChart",
          data: this.data.map((obj) => ({
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
          background: "transparent",
        },
        // title: {
        //   text: "CandleStick Chart",
        //   align: "left",
        // },
        grid: { show: false },
        xaxis: {
          type: "category",
          axisBorder: { show: false },
          axisTicks: { show: false },
          // labels: { show: false },
          labels: {
            show: false,
            formatter: function (val: any) {
              return moment(val).format("MMM DD HH:mm");
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          show: false,
        },
        tooltip: {
          enabled: true,
          theme: "dark",
        },
      },
    };
  }
}

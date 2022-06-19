import { IHistorical, IChartOptions } from "@models/price";

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
}

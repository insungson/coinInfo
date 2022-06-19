export interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
export interface ChartProps {
  coinId: string;
}

interface ISeries {
  name: string;
  data: number[];
}

interface IOptions {
  theme: { mode?: string };
  chart: {
    height?: number;
    width?: number;
    toolbar?: {
      show?: boolean;
    };
    background: string;
  };
  grid?: {
    show?: boolean;
  };
  stroke?: {
    curve?: string;
    width?: number;
  };
  yaxis?: {
    show?: boolean;
  };
  xaxis?: {
    axisBorder?: { show?: boolean };
    axisTicks?: { show?: boolean };
    labels?: { show?: boolean };
    type?: string;
    categories?: string[] | number[];
  };
  fill?: {
    type?: string;
    gradient?: { gradientToColors?: string[]; stops?: number[] };
  };
  colors?: string[];
  tooltip?: {
    y?: {
      formatter?: (valur: number) => void;
    };
  };
}

export interface IChartOptions {
  type: "line" | "candlestick";
  series: ISeries[];
  options: IOptions;
}

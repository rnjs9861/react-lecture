# nivo-chart

- https://nivo.rocks/

## 1. 설치

- `npm install @nivo/core`

### 1.1. 원하는 차트모양 설치

- `npm i @nivo/pie`
- `npm i @nivo/bar`
- `npm i @nivo/line`
  ...

## 2. 샘플

- /src/pages/Chart.js 생성
- /src/AppChart.js 생성

```js
import Chart from "./pages/Chart";

const AppChart = () => {
  return <Chart />;
};

export default AppChart;
```

- /src/index.tsx 수정

```tsx
import ReactDOM from "react-dom/client";
import AppChart from "./AppChart";
import "./index.css";

// ts 에서는 데이터 종류를 구별한다.
// as 는 강제로 타입지정
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// js 버전
// const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <AppChart />
  </>,
);
```

## 3. 데이터 출력

- 주의 사항
  : chart 출력 장소는 style 로 너비, 높이 지정 필요

### 3.1. BE 에게 데이터 샘플을 요청한다.

- 샘플 데이터 모양

```js
[
  {
    id: "japan",
    color: "hsl(82, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 188,
      },
      {
        x: "helicopter",
        y: 203,
      },
      {
        x: "boat",
        y: 300,
      },
      {
        x: "train",
        y: 65,
      },
      {
        x: "subway",
        y: 18,
      },
      {
        x: "bus",
        y: 151,
      },
      {
        x: "car",
        y: 4,
      },
      {
        x: "moto",
        y: 276,
      },
      {
        x: "bicycle",
        y: 14,
      },
      {
        x: "horse",
        y: 81,
      },
      {
        x: "skateboard",
        y: 28,
      },
      {
        x: "others",
        y: 50,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(233, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 146,
      },
      {
        x: "helicopter",
        y: 191,
      },
      {
        x: "boat",
        y: 218,
      },
      {
        x: "train",
        y: 23,
      },
      {
        x: "subway",
        y: 25,
      },
      {
        x: "bus",
        y: 273,
      },
      {
        x: "car",
        y: 150,
      },
      {
        x: "moto",
        y: 164,
      },
      {
        x: "bicycle",
        y: 143,
      },
      {
        x: "horse",
        y: 232,
      },
      {
        x: "skateboard",
        y: 19,
      },
      {
        x: "others",
        y: 143,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(293, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 205,
      },
      {
        x: "helicopter",
        y: 262,
      },
      {
        x: "boat",
        y: 78,
      },
      {
        x: "train",
        y: 260,
      },
      {
        x: "subway",
        y: 37,
      },
      {
        x: "bus",
        y: 284,
      },
      {
        x: "car",
        y: 236,
      },
      {
        x: "moto",
        y: 65,
      },
      {
        x: "bicycle",
        y: 203,
      },
      {
        x: "horse",
        y: 239,
      },
      {
        x: "skateboard",
        y: 105,
      },
      {
        x: "others",
        y: 208,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(249, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 198,
      },
      {
        x: "helicopter",
        y: 35,
      },
      {
        x: "boat",
        y: 252,
      },
      {
        x: "train",
        y: 81,
      },
      {
        x: "subway",
        y: 269,
      },
      {
        x: "bus",
        y: 75,
      },
      {
        x: "car",
        y: 217,
      },
      {
        x: "moto",
        y: 193,
      },
      {
        x: "bicycle",
        y: 109,
      },
      {
        x: "horse",
        y: 61,
      },
      {
        x: "skateboard",
        y: 18,
      },
      {
        x: "others",
        y: 83,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(107, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 117,
      },
      {
        x: "helicopter",
        y: 214,
      },
      {
        x: "boat",
        y: 64,
      },
      {
        x: "train",
        y: 166,
      },
      {
        x: "subway",
        y: 24,
      },
      {
        x: "bus",
        y: 171,
      },
      {
        x: "car",
        y: 281,
      },
      {
        x: "moto",
        y: 192,
      },
      {
        x: "bicycle",
        y: 188,
      },
      {
        x: "horse",
        y: 201,
      },
      {
        x: "skateboard",
        y: 165,
      },
      {
        x: "others",
        y: 136,
      },
    ],
  },
];
```

- 샘플 코드를 React 에 작성한다.

```js
import React from "react";
import { ResponsiveLine } from "@nivo/line";

const Chart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(82, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 188,
        },
        {
          x: "helicopter",
          y: 203,
        },
        {
          x: "boat",
          y: 300,
        },
        {
          x: "train",
          y: 65,
        },
        {
          x: "subway",
          y: 18,
        },
        {
          x: "bus",
          y: 151,
        },
        {
          x: "car",
          y: 4,
        },
        {
          x: "moto",
          y: 276,
        },
        {
          x: "bicycle",
          y: 14,
        },
        {
          x: "horse",
          y: 81,
        },
        {
          x: "skateboard",
          y: 28,
        },
        {
          x: "others",
          y: 50,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(233, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 146,
        },
        {
          x: "helicopter",
          y: 191,
        },
        {
          x: "boat",
          y: 218,
        },
        {
          x: "train",
          y: 23,
        },
        {
          x: "subway",
          y: 25,
        },
        {
          x: "bus",
          y: 273,
        },
        {
          x: "car",
          y: 150,
        },
        {
          x: "moto",
          y: 164,
        },
        {
          x: "bicycle",
          y: 143,
        },
        {
          x: "horse",
          y: 232,
        },
        {
          x: "skateboard",
          y: 19,
        },
        {
          x: "others",
          y: 143,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(293, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 205,
        },
        {
          x: "helicopter",
          y: 262,
        },
        {
          x: "boat",
          y: 78,
        },
        {
          x: "train",
          y: 260,
        },
        {
          x: "subway",
          y: 37,
        },
        {
          x: "bus",
          y: 284,
        },
        {
          x: "car",
          y: 236,
        },
        {
          x: "moto",
          y: 65,
        },
        {
          x: "bicycle",
          y: 203,
        },
        {
          x: "horse",
          y: 239,
        },
        {
          x: "skateboard",
          y: 105,
        },
        {
          x: "others",
          y: 208,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(249, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 198,
        },
        {
          x: "helicopter",
          y: 35,
        },
        {
          x: "boat",
          y: 252,
        },
        {
          x: "train",
          y: 81,
        },
        {
          x: "subway",
          y: 269,
        },
        {
          x: "bus",
          y: 75,
        },
        {
          x: "car",
          y: 217,
        },
        {
          x: "moto",
          y: 193,
        },
        {
          x: "bicycle",
          y: 109,
        },
        {
          x: "horse",
          y: 61,
        },
        {
          x: "skateboard",
          y: 18,
        },
        {
          x: "others",
          y: 83,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(107, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 117,
        },
        {
          x: "helicopter",
          y: 214,
        },
        {
          x: "boat",
          y: 64,
        },
        {
          x: "train",
          y: 166,
        },
        {
          x: "subway",
          y: 24,
        },
        {
          x: "bus",
          y: 171,
        },
        {
          x: "car",
          y: 281,
        },
        {
          x: "moto",
          y: 192,
        },
        {
          x: "bicycle",
          y: 188,
        },
        {
          x: "horse",
          y: 201,
        },
        {
          x: "skateboard",
          y: 165,
        },
        {
          x: "others",
          y: 136,
        },
      ],
    },
  ];
  return (
    <div>
      <h1>라인차트</h1>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          lineWidth={4}
          pointSize={12}
          pointColor={{ theme: "background" }}
          pointBorderWidth={4}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          areaOpacity={0}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Chart;
```

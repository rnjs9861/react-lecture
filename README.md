# nivo-chart ts

- /src/AppChart.js ===> /src/AppChart.tsx

```tsx
import Chart from "./pages/Chart";

const AppChart: React.FC = () => {
  return <Chart />;
};

export default AppChart;
```

- /src/pages/Chart.js ===> /src/Chart.tsx

## 1. data 는 외부로 별도 파일

- src/types/datatype.ts 내용 추가

```ts
// arr 데이터 기본형
export interface IArr {
  name: string;
  link: string;
}
export interface IFromUrl {
  memo: string;
  good: string;
  favorite: string;
}
export interface IQueryData {
  name?: string;
  age?: string;
}
export interface IActiveLink {
  color: string;
  fontWeight: string;
}
// 라인 차트 데이터 모양
export interface DataPoint {
  x: string;
  y: number;
}
export interface Series {
  id: string;
  color: string;
  data: DataPoint[];
}
```

- src/apis/data.ts 생성

```ts
// 데이터 타입의 참조를 위해서 모양을 만든다.
import { Series } from "../types/datatype";
export const linedata: Series[] = [
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

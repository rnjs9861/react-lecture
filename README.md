# Kakao Map

- 카카오 개발자 등록
- 내애플리케이션 생성
  : 참조블로그(https://velog.io/@tpgus758/React%EC%97%90%EC%84%9C-Kakao-map-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- 지도 관련 문서
  : https://apis.map.kakao.com/web/guide/

## 1. React Kakao mapx sdk

- https://www.npmjs.com/package/react-kakao-maps-sdk
  : `npm i react-kakao-maps-sdk`
- 개발자사이트
  : https://react-kakao-maps-sdk.jaeseokim.dev/
- 참조블로그
  : https://velog.io/@wlwl99/React-Kakao-Map-SDK-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

## 2. 지도 예제

- /public/index.html 코드 추가
```html
    <script
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=자바스크립트키&libraries=services,clusterer"
    ></script>
```

- /src/kko/Map.js

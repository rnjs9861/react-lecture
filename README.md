# File ts 적용하기

- `npm install @types/axios`

## 1. file 1개 및 미리보기

```tsx
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
export interface FileTSProps {
  children?: React.ReactNode;
}
// const FileTs: React.FC<FileTSProps>= () => {
//   return <div></div>;
// };
// const FileTs= ({children}:FileTSProps): JSX.Element => {
//   return <div></div>;
// };
// const FileTs: React.FC<FileTSProps> = ({children}:FileTSProps): JSX.Element => {
//   return <div></div>;
// };

const FileTs: React.FC<FileTSProps> = () => {
  const Wrap = {
    width: "80%",
    margin: "0 auto",
  };
  // 제네릭 : <데이터종류> 을 통한 데이터 종류 가이드
  const [userName, setUserName] = useState<string>("");
  const [userHobby, setUserHobby] = useState<string>("");
  // 이미지 미리보기를 할 변수
  const [previewImg, setPreviewPreImg] = useState<string>("");
  // 서버에 POST 할 파일을 관리할 변수
  // 아래 변수는 선택된 File 객체를 보관하는 용도
  // 아래는 체크해 두세요. File 또는 null 인 데이터인 경우
  const [imgFile, setImgFile] = useState<File | null>(null);

  // 파일을 선택하는 경우 처리
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // file 이라서 e.target.value 를 활용하지 않는다.
    // e.taret.files 는 배열이다.
    // e.target.files = [];

    console.log(e.target.files?.[0]);
    const tempFile = e.target.files?.[0];
    // 사용자가 이미지를 선택하면
    // 웹브라우저는 이미지를 캐시에 보관함.
    // 임시 공간에 저장한 이미지를 우리는 경로를 알아내야 한다.
    // 그때 웹브라우저 상의 임시 URL 을 알아내는 기능 제공한다.
    if (tempFile) {
      const tempUrl: string = URL.createObjectURL(tempFile);
      console.log(tempUrl);
      setPreviewPreImg(tempUrl);
      // 전송할 파일 변경(주의합니다. 파일을 넣어주세요.)
      setImgFile(tempFile);
    } else {
      setPreviewPreImg("");
      setImgFile(null);
    }
  };
  // form 의 데이터를 전송하는 경우 처리
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // 기본기능막기
    e.preventDefault();
    if (!userName) {
      alert("이름을 입력하세요.");
      return;
    }
    if (!userHobby) {
      alert("취미를 입력하세요.");
      return;
    }

    // 일반적인 글자를 json 으로 보내는 것과는 차이가 존재합니다.
    // 파일이 첨부된 경우는 FormData 로 만들어서 보내야 합니다.
    const formData: FormData = new FormData();

    // Blob 에 대한 이해
    // - 바이너리 데이터를 다루기 위해서 사용
    // - Binary Large Object
    // - 네트워크를 통해 데이터 및 이미지를 전송하는데 활용
    // const dto = new Blob(데이터, 형식 )
    // p : {username:"string", userhobby: "string"}
    // json 추가하기
    const dto: Blob = new Blob(
      [JSON.stringify({ username: userName, userhobby: userHobby })],
      { type: "application/json" },
    );
    // console.log(dto);
    formData.append("p", dto);
    // file 추가하기
    if (imgFile) {
      formData.append("petImage", imgFile);
    }
    console.log("formData 데이터 전송");
    postFileTest(formData);
  };

  const postFileTest = async (data: FormData): Promise<void> => {
    try {
      // 파일을 추가한 경우 header 를 추가한다.
      const header = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await axios.post("/api/pet", data, header);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div style={Wrap}>
      <h1>파일업로드</h1>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <fieldset>
          <legend>정보1</legend>
          <label htmlFor="username">이름</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>정보2</legend>
          <label htmlFor="hobby">취미</label>
          <input
            type="text"
            id="hobby"
            value={userHobby}
            onChange={e => setUserHobby(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>정보3</legend>
          <div>
            이미지 미리보기 <br />
            {previewImg ? <img src={previewImg} /> : null}
          </div>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            // onClick={e => handleFile(e)}
            onChange={e => handleFileChange(e)}
          />
        </fieldset>

        <button type="submit">확인</button>
        <button type="reset">재작성</button>
      </form>
    </div>
  );
};

export default FileTs;
```

## 2. file 여러개 선택 및 미리보기

- `/src/pages/MultiFileTs.tsx`

```tsx
import axios from "axios";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const MultiFileTs: React.FC = () => {
  // 파일 선택 태그
  const fileBt = useRef<HTMLInputElement | null>(null);
  useEffect(() => {}, []);
  // 입력항목
  const [title, setTitle] = useState<string>("");
  const [dday, setDday] = useState<string>("");
  // File 객체를 관리
  const [sendFiles, setSendFiles] = useState<File[]>([]);
  // 이미지 미리보기 URL 관리
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);

  // 이미지 미리 보기 JSX 만들기 함수
  const makeThumbnail = (): JSX.Element[] => {
    return previewFiles.map((item, index) => (
      <img
        src={item}
        key={index}
        style={{ width: 80 }}
        onClick={e => {
          deleteFile(index);
        }}
      />
    ));
  };

  // 파일 목록에서 특정 항목 삭제
  const deleteFile = (_index: number) => {
    // console.log("삭제", _index);
    // 미리보기 배열에서 제거 : 기준 순서(index)
    const tempPreviewArr: string[] = previewFiles.filter(
      (item, index) => index !== _index,
    );
    setPreviewFiles(tempPreviewArr);
    // 전송 파일 배열에서 제거 : 기준 순서(index)
    const tempFileArr: File[] = sendFiles.filter(
      (item, index) => index !== _index,
    );
    setSendFiles(tempFileArr);
  };

  // 강제로 input type="file" 을 클릭한 것처럼 js 에서 실행
  const handleFileClick = () => {
    // document.querySelector("#filebt_id").click();
    fileBt.current?.click();
  };

  // 파일 목록
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.files);
    // 출력결과 FileList {0: File, 1: File, length: 2}
    // Array.from(객체) : 객체를 배열로 만듦
    const filesArr = Array.from(e.target.files || []);
    // 파일 보관
    setSendFiles([...sendFiles, ...filesArr]);
    // 미리보기 URL 보관
    const imgUrlArr = filesArr.map(item => URL.createObjectURL(item));
    setPreviewFiles([...previewFiles, ...imgUrlArr]);
    // filesArr.map(item => {
    //   return URL.createObjectURL(item);
    // });
    // filesArr.map(item => {
    //   const url = URL.createObjectURL(item);
    //   return url;
    // });
  };

  // 파일 전송
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // 기본 기능 막기
    e.preventDefault();
    // 각 항목 체크하기 생략
    // ........... 유효성 검사
    // 1 번 전송데이터 포맷 만들기
    const formData: FormData = new FormData();

    // 2 번 보낼데이터 (json 형식의 문자열로 만들기)
    const infoData: string = JSON.stringify({
      title: title,
      dDay: dday,
    });
    // 3 번 Blob 바이너리 데이터 만들기
    const 자료: Blob = new Blob([infoData], { type: "application/json" });
    // 4 번 form-data 에 키에 값으로 추가하기
    formData.append("p", 자료);

    // 5 번 이미지 파일 추가하기
    sendFiles.forEach(item => {
      formData.append("files", item);
    });

    // 6 번 axios 로 전달
    axiosPost함수(formData);
  };

  useEffect(() => {
    console.log(sendFiles);
    console.log(previewFiles);
  }, [sendFiles, previewFiles]);

  // 7 번 post 로 form-data 보내기
  interface IPet {
    pk: number;
    status: number;
    result: string;
  }
  const axiosPost함수 = async (data: FormData): Promise<IPet> => {
    try {
      const header = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await axios.post("/api/pet", data, header);
      //console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h1>멀티 파일 업로드</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <legend>기본정보</legend>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <label htmlFor="dday">D-day</label>
          <input
            type="date"
            id="dday"
            value={dday}
            onChange={e => setDday(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>파일정보</legend>
          <div>{makeThumbnail()}</div>
          <div
            style={{
              width: 50,
              height: 50,
              background: "red",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={() => handleFileClick()}
          >
            파일선택
          </div>

          <label htmlFor="filebt_id">파일을 선택하시오.</label>
          <input
            style={{ display: "none" }}
            ref={fileBt}
            id="filebt_id"
            type="file"
            accept="image/jpg, image/png, image/gif"
            multiple
            onChange={e => handleFileChange(e)}
          />
        </fieldset>
        <fieldset>
          <button type="submit">등록</button>
          <button type="reset">재작성</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MultiFileTs;
```

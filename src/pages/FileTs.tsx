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

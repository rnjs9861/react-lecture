import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../apis/user/apiuser";
import "../../css/member.css";
import Modal from "../../components/modal/Modal";
import { userInfoContext } from "../../context/UserInfoProvider";
import { setCookie } from "../../utils/cookie";

const Login = () => {
  const { setIsUser } = useContext(userInfoContext);
  // 라우터
  const navigate = useNavigate();
  // 모달창 전달 변수
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  // 컴포넌트 버튼 보이고, 숨기기 ( children, 새로 컴포넌트도 고민)
  const [modalBtOk, setModalBtOk] = useState(true);
  const [modalBtCancel, setModalBtCancel] = useState(true);
  // 모달 보이는 상태값
  const [isModal, setIsModal] = useState(false);
  // 모달 실행 함수
  const modalOk = () => {
    setIsModal(false);

    if (isSuccess) {
      // console.log(userId);
      // console.log(userPass);
      // localStorage.setItem("userid", userId);
      // sessionStorage.setItem("userid", userId);
      setCookie("userid", userId, {
        path: "/",
        expire: new Date(Date.now() + 86400e3), // 1일 후 만료시간 설정
        maxAge: 86400, // 1일 동안 유효
      });
      //setUserId(userId);
      setIsUser(userId);
      navigate("/");
    }
  };
  const modalCancel = () => {
    setIsModal(false);
  };

  const [userId, setUserId] = useState("hong14Guild");
  const [userPass, setUserPass] = useState("Abc@1234");
  // 로그인 성공 여부
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async e => {
    // 새로 고침 막기
    e.preventDefault();
    // 아이디가 입력이 되었는지 확인
    if (!userId) {
      setIsModal(true);
      setModalTitle("로그인 안내");
      setModalText("아이디를 반드시 입력해주세요.");
      setModalBtOk(true);
      setModalBtCancel(true);
      return;
    }
    if (!userPass) {
      setIsModal(true);
      setModalTitle("로그인 안내");
      setModalText("비밀번호를 반드시 입력해주세요.");
      setModalBtOk(true);
      setModalBtCancel(true);
      return;
    }

    const result = await postSignIn({ userId, userPass });
    if (result.statusCode !== 2) {
      setIsModal(true);
      setModalTitle("로그인 안내");
      setModalText(result.resultMsg);
      setModalBtOk(true);
      setModalBtCancel(false);
      return;
    }
    // 성공함
    setIsModal(true);
    setModalTitle("로그인 안내");
    setModalText("로그인에 성공하였습니다.");
    setModalBtOk(true);
    setModalBtCancel(false);

    // 로그인 성공
    setIsSuccess(true);
    // navigate("/");
  };

  return (
    <>
      {isModal ? (
        <Modal
          title={modalTitle}
          text={modalText}
          modalOk={modalOk}
          modalCancel={modalCancel}
          modalBtOk={modalBtOk}
          modalBtCancel={modalBtCancel}
        />
      ) : null}

      <div className="join-wrap">
        <form className="join-form">
          {/* 사용자 아이디 */}
          <div className="form-group">
            <label htmlFor="userid">아이디</label>
            <input
              type="text"
              value={userId}
              id="userid"
              className="join-email"
              onChange={e => {
                setUserId(e.target.value);
              }}
            />
          </div>

          {/* 사용자 패스워드 */}
          <div className="form-group">
            <label htmlFor="pass">패스워드</label>
            <input
              type="password"
              value={userPass}
              id="pass"
              className="join-email"
              onChange={e => {
                setUserPass(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="bt-submit"
              onClick={e => {
                handleSubmit(e);
              }}
            >
              로그인
            </button>
            <button type="reset" className="bt-cancel">
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

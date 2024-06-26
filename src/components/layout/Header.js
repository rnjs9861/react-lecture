// import "../../css/header.css";
import styled from "@emotion/styled";

export const Header = ({ login }) => {
  const LogoDiv = styled.div`
    background-color: ${props => props.bg};
    width: ${props => props.w}px;
    height: ${props => props.h}px;
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    margin: 0 auto;
    border: 5px solid red;
  `;
  return (
    <header>
      <LogoDiv className="logo">
        <a href="http://www.naver.com">네이버</a>
        <a href=""></a>
      </LogoDiv>
      <GnbDiv className="gnb">
        <MemberDiv>메뉴</MemberDiv>
      </GnbDiv>
      <div>회원기능</div>
    </header>
  );
};

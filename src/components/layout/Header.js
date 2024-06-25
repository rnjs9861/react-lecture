// import "../../css/header.css";
import styled from "@emotion/styled";

export const Header = ({ login }) => {
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

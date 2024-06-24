import { useState } from "react";

export const Home = () => {
  const age = 100;
  const [level, setLevel] = useState(0);

  return (
    <>
      <Header
        level={level}
        setLevel={setLevel}
        title="제목"
        age={1}
        study={true}
        hobby={["축구", "야구"]}
        say={() => {
          console.log("안녕");
        }}
        info={{ lastName: "길동", firstName: "홍" }}
        comp={<Header />}
      />
      <Main>
        <Slide />
        <Info>
          <Notice />
          <Gallery />
          <QuickLink />
        </Info>
      </Main>
      <Footer />
    </>
  );
};

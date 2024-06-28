import React from "react";
interface SonProps {
  title: string;
  hobby: string;
  say: () => void;
  info: { name: string; age: number };
  children?: React.ReactNode;
}

const Son = ({ title, hobby, say, info, children }: SonProps): JSX.Element => {
  return (
    <div>
      Son 입니다.
      {children}
    </div>
  );
};

export default Son;

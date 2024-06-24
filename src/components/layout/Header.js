export const Header = ({ title, age, study, hobby, say, info, comp }) => {
  return <header className="header"></header>;
};

// 밑은 전체 위에는 원하는 것만 가져 올 수 있다.
// export const Header = props => {
//   console.log(props); //객체 {title: 제목, age: 1}이 나온다.
//   return <header className="header"></header>;
// };

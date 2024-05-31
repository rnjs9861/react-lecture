import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return <h1>{id} 제품 상세</h1>;
};

export default Detail;

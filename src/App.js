import React, { useState } from "react";
import PostList from "./pages/PostList";
import PostAdd from "./pages/PostAdd";
import PostUpdate from "./pages/PostUpdate";

const App = () => {
  const [item, setItem] = useState(null);
  return (
    <div>
      <h1>APP 컴포넌트</h1>
      <PostList setItem={setItem} />
      <PostUpdate item={item} />
      <PostAdd />
    </div>
  );
};

export default App;

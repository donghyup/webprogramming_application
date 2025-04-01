import { useState } from "react";
import "./App.css";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        alt="프로필 사진"
        className="profile-img"
      />
      <h1>강동협협</h1>
      <p className="title">소프트웨어학과</p>
      <p>경성대학교교</p>
      <button onClick={() => setShowMore(!showMore)}>더보기</button>
      {showMore && (
        <div className="more-info">
          <p>
            지금 과제로 챗봇을 활용해서 파일을 만들었어.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

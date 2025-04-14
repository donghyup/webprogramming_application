import React, { useState } from "react";
import Navigation from "./Navigation";
import CloudCard from "./CloudCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  // state 변수 3개: 테마, 선택된 카드, 클릭 횟수
  const [theme, setTheme] = useState("light");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const cloudServices = [
    {
      id: 1,
      title: "AWS",
      description: "Amazon Web Services: 강력한 클라우드 컴퓨팅 제공.",
      url: "https://aws.amazon.com",
    },
    {
      id: 2,
      title: "Google Cloud",
      description:
        "Google Cloud Platform: 혁신적인 데이터 분석 및 머신러닝 기능 제공.",
      url: "https://cloud.google.com",
    },
    {
      id: 3,
      title: "Microsoft Azure",
      description:
        "Azure: 안정적이며 확장 가능한 엔터프라이즈급 클라우드 서비스.",
      url: "https://azure.microsoft.com",
    },
  ];

  const handleCardClick = (service) => {
    setSelectedCard(service);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className={`app ${theme}`}>
      <Navigation theme={theme} setTheme={setTheme} />
      <main>
        <h2>웹페이지 구축에 도움 되는 클라우드 시스템</h2>
        <div className="cloud-list">
          {cloudServices.map((service) => (
            <CloudCard
              key={service.id}
              title={service.title}
              description={service.description}
              url={service.url}
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>
        {selectedCard && (
          <div className="selected-info">
            <h3>{selectedCard.title}가 선택되었습니다!</h3>
            <p>{selectedCard.description}</p>
            <a
              href={selectedCard.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히 보기
            </a>
          </div>
        )}
        <p>카드 클릭 횟수: {clickCount}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

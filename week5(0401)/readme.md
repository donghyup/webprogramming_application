# 5주차 수업 내용 및 실습 내용
### js파일
```js
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
      <h1>홍길동</h1>
      <p className="title">소프트웨어학과</p>
      <p>충청대학교</p>
      <button onClick={() => setShowMore(!showMore)}>더보기</button>
      {showMore && (
        <div className="more-info">
          <p>
             안녕하세요!강동협입니다.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
```
### css 파일
``` css
body {
  font-family: 'Arial', sans-serif;
  background: #f2f2f2;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  width: 300px;
}

.profile-img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.title {
  color: gray;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.more-info {
  margin-top: 1rem;
  font-size: 0.95rem;
}
```
# 🤖 생성형 AI에 대한 이해

**생성형 AI(Generative AI)**는 새로운 데이터를 생성하는 능력을 가진 인공지능 모델을 말해요. 예를 들어, 자연어 처리, 이미지 생성, 음악 작곡 등 다양한 분야에서 인간과 유사한 방식으로 창작을 할 수 있습니다. 🎨🎶

## 🛠️ 생성형 AI의 활용

### 1. **프롬프트 작성**
생성형 AI는 사용자가 입력한 질문이나 요청에 대해 적합한 답변을 생성할 수 있어요. 예를 들어, C언어 코드를 작성하는 데 도움을 줄 수 있으며, 프로그램을 효율적으로 작성할 수 있도록 가이드를 제공합니다. 💻✨

### 2. **자동화된 콘텐츠 생성**
AI는 텍스트, 이미지, 코드 등을 자동으로 생성해 생산성을 크게 향상시킬 수 있어요. 🖋️💡 반복적인 작업을 줄이고 더 빠르게 결과물을 만들어낼 수 있답니다!

### 3. **창작 지원**
예술 분야에서도 생성형 AI는 그림, 음악, 글쓰기 등 창작 활동을 지원하며, 사람의 창의력을 보완하는 역할을 합니다. 🖌️🎶 AI는 창작자의 아이디어를 확장시켜 새로운 방향을 제시할 수 있어요.

## 💡 생성형 AI의 활용 예시

### 1. **프롬프트에 의한 코드 생성**
사용자가 특정 요구사항을 제공하면, 생성형 AI가 그 요구사항에 맞는 코드를 작성하거나 개선할 수 있어요. 예를 들어, C언어로 특정 기능을 구현하는 코드를 요청하면 AI가 빠르게 도움을 줄 수 있답니다. 🖥️⚙️

### 2. **자연어 처리**
생성형 AI는 텍스트 기반의 질문에 대해 자연스럽고 정확한 답변을 생성하는 데 사용됩니다. 예를 들어, 고객 지원 챗봇이나 질의응답 시스템에서 AI가 중요한 역할을 할 수 있어요. 💬🤖

### 3. **자동 번역 및 요약**
AI는 텍스트 번역이나 긴 문장을 요약해 정보를 효율적으로 전달할 수 있어요. 🌐📚 다국어 소통을 도와주고, 중요한 내용만 빠르게 추출할 수 있는 유용한 도구랍니다!

## 🗣️ 생성형 AI와의 상호작용

생성형 AI와 상호작용할 때 중요한 점은 **명확하고 구체적인 프롬프트를 제공하는 것**이에요! 예를 들어, C언어 코드 작성을 요청할 때 필요한 기능과 제약을 잘 설명하면, AI는 그에 맞는 코드와 해결책을 제시할 수 있어요. 📝💡

이처럼 생성형 AI는 프로그래밍, 창작, 연구 등 다양한 분야에서 사용될 수 있는 유용한 도구로 자리잡고 있어요. 🌟🎯


# 1. 프로젝트 생성 및 의존성 설치
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add styled-components react-icons

# 2. 프로젝트 디렉토리 구조
mkdir src/components

# 3. 글로벌 스타일 적용 (App.js)
# styled-components 의 createGlobalStyle 사용
# 배경색 회색 적용

# 4. 컴포넌트 파일 생성 및 구현
# 각각 components 디렉토리 안에 js 파일 만들기

touch src/components/TodoTemplate.js
touch src/components/TodoHead.js
touch src/components/TodoList.js
touch src/components/TodoItem.js
touch src/components/TodoCreate.js

# 5. 컴포넌트 설명 💡

# TodoTemplate.js : 흰색 박스를 중앙에 보여주는 레이아웃 컴포넌트
# TodoHead.js : 날짜 + 남은 할 일 수 표시
# TodoList.js : 할 일 목록 나열 (map 사용)
# TodoItem.js : 개별 할 일 항목 (완료 체크 / 삭제 가능)
# TodoCreate.js : 할 일 추가 + 폼 토글 버튼

# 6. Context API 세팅 (src/TodoContext.js)
touch src/TodoContext.js

# Context 3개 만들기
# - TodoStateContext: 상태 저장
# - TodoDispatchContext: dispatch 함수 저장
# - TodoNextIdContext: nextId ref 저장

# reducer 구현 (CREATE, TOGGLE, REMOVE)

# 7. 커스텀 Hook 정의
# useTodoState, useTodoDispatch, useTodoNextId
# + 에러 핸들링 추가: Provider 밖에서 사용 시 오류 발생

# 8. App.js에서 Provider로 전체 감싸기
# <TodoProvider>로 모든 JSX 감싸기
# <GlobalStyle />, <TodoTemplate> 등 포함

# 9. 기능 연동
# TodoHead: done === false 인 항목 카운트해서 표시
# TodoList: todos 상태 map 으로 TodoItem 렌더링
# TodoItem: dispatch 로 TOGGLE, REMOVE 이벤트 처리
# TodoCreate: 입력 상태 관리 + CREATE dispatch + nextId 증가

# 10. 성능 최적화
# TodoItem, TodoCreate 는 React.memo()로 감싸기

# 11. 참조 링크들
# - https://react.vlpt.us/mashup-todolist/01-create-components.html
# - https://styled-components.com/
# - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString


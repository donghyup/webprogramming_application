# React Hooks 가이드 🎣

React Hooks는 특정 위치에 원하는 함수가 실행되도록 "갈고리"를 거는 개념입니다.  
과거에는 클래스형 컴포넌트에서만 state와 생명주기(lifecycle) 기능을 사용할 수 있었으나,  
Hooks의 등장으로 함수형 컴포넌트에서도 이를 쉽게 사용할 수 있게 되었습니다.

## 주요 장점 🚀

- **간결성:** 클래스 없이도 상태 관리와 생명주기 기능 구현 가능  
- **재사용성:** Hook을 여러 컴포넌트에서 재사용하여 코드 중복 최소화  
- **테스트 용이성:** 단순 함수 구조로 인해 테스트가 쉽고 독립적  

## Hooks 사용법 🔗

모든 Hooks의 이름은 `use`로 시작합니다. (예: `useState`, `useEffect`, `useContext` 등)  
커스텀 Hook도 이 네이밍 규칙을 준수해야 합니다.

## useState() 🧰

`useState`는 함수형 컴포넌트에서 상태(state)를 관리할 수 있도록 해주는 Hook입니다.  
클래스형 컴포넌트의 `this.state`와 `this.setState`를 대체하며, 기본 사용법은 아래와 같습니다:

```jsx
const [state, setState] = useState(초기값);
```

![스크린샷 2025-04-08 104754](https://github.com/user-attachments/assets/7d11b751-9fad-4ea6-b5db-137008657acf)

![image](https://github.com/user-attachments/assets/41205758-3db0-45d6-9398-f5b0623dbb09)



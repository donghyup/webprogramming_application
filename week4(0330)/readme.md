# 4주차
- 함수 호출 할 때 괄호 안에 적는 것은 argument이다.
- 리액트 컴포넌트의 역할
    - 어떠한 속성들을 입력으로 받아서 그에 맞는 리액트 엘리먼트를 생성해여 리턴해 주는 것
    - 화면에 나타날 엘리먼트를 생성
 ![image](https://github.com/user-attachments/assets/5bd098ac-381c-4273-92e4-599f25714988)
![image](https://github.com/user-attachments/assets/ae7ad2dd-1a22-4098-b678-1b67a45746ed)


  
1. Props의 중요한 특징은 Read-only 즉 읽기 전용이므로 변경이 불가합니다.
2. 다른 Props의 값으로 엘리먼트를 생성하려면 새로운 Props 값을 컴포넌트의 전달하여 새로 엘리먼트
를 생성하면 됩니다.
3. 위 과정에서는 엘리먼트가 다시 렌더링 됩니다.
4. Props의 값을 넣을 때 문자열 이외의 값[정수 변수 그리고 다른 컴포넌트 등]이 들어갈 경우 중괄호 {}
를 사용해서 감싸 주어야 합니다.
5. Props는 자바스크립트 객체가 됩니다.
6. JSX 를 사용하는 경우에는 간단하게 컴포넌트의 Props를 넣을 수 있습니다.
7. JSX를 사용하지 않는 경우에는 React.createElement()를 사용하면 됩니다. (비추천)

![image](https://github.com/user-attachments/assets/3d3a0e71-a471-4d55-8f76-36e22a625c53)


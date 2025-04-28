# 7주차

react_hooks:
  📦 memoization_hooks:
    - 🧠 name: useMemo
      type: "🧮 value"
      description: >
        계산 비용이 큰 연산 결과를 메모이제이션하여
        렌더링 시 불필요한 재계산을 방지해요.
      syntax: |
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      example: |
        const expensiveValue = useMemo(() => {
          console.log('계산 중...');
          return heavyComputation(input);
        }, [input]);
      ✅ when_to_use:
        - 무거운 연산이 반복되는 경우
        - 렌더링마다 동일한 계산을 반복할 때
      ⚠️ caveats:
        - 단순한 연산에는 오히려 오버헤드
        - 의존성 배열을 정확하게 설정해야 함

    - 🔁 name: useCallback
      type: "🧰 function"
      description: >
        동일한 함수를 기억시켜서 자식 컴포넌트에 전달할 때,
        리렌더링을 방지해요.
      syntax: |
        const memoizedCallback = useCallback(() => {
          doSomething(a, b);
        }, [a, b]);
      example: |
        const handleClick = useCallback(() => {
          console.log(count);
        }, [count]);

        <MyButton onClick={handleClick} />
      ✅ when_to_use:
        - 이벤트 핸들러나 콜백을 자식 컴포넌트에 전달할 때
        - React.memo로 최적화한 컴포넌트와 함께 사용할 때
      ⚠️ caveats:
        - 의존성 배열 누락 시 의도와 다른 결과 발생
        - 남용 시 코드 가독성 저하 가능

  🔍 comparison:
    title: useMemo vs useCallback
    table:
      🏷️ return_type:
        useMemo: "🧮 값 (value)"
        useCallback: "🧰 함수 (function)"
      🎯 primary_purpose:
        useMemo: "복잡한 계산 결과 재사용"
        useCallback: "함수 재생성 방지"
      🧪 use_case:
        useMemo: "무거운 연산 결과 캐싱"
        useCallback: "자식에게 함수 props로 전달할 때 최적화"

  🧵 summary:
    key_points:
      - 🧠 useMemo는 "값"을 기억해요
      - 🔁 useCallback은 "함수"를 기억해요
      - 🎯 둘 다 리렌더링 최적화를 위한 메모이제이션 도구예요
    best_practice: >
      꼭 필요한 상황에서만 사용하는 것이 좋아요!
      남용하면 성능보다 오히려 복잡함을 초래할 수 있어요.

  💭 reflection_questions:
    - ❓ Q1: useMemo 없이 무거운 계산을 계속하면 어떤 문제가 생길까?
    - ❓ Q2: useCallback 없이 자식 컴포넌트에 함수를 전달하면 어떤 일이 생길까?
    - ❓ Q3: 메모이제이션을 굳이 안 써도 괜찮은 상황은 언제일까?

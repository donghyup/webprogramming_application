![image.png](attachment:cf8c4863-150c-4145-b66a-4adf0b65bb5f:image.png)

이벤트 객체 사용(SyntheticEvent)
![image.png](attachment:8e0ea98b-493c-446b-88e1-16dc333d1580:image.png)
- 클래스 컴포넌트
    - this 바인딩 필요할 수 있다.
    - 클래스 필드 문법을 사용하여 바인딩 없이도 이벤트 핸들러를 정의할 수 있다.
- Submit : 데이터를 서버로 넘기는 것.
- event.preventDefault(); //하기 싫은 때 막고 싶을 때 작성하면 됨.

### 이벤트 핸들러 최적화

- 메모이제이션
- 이벤트 핸들러가 불필요하게 재생성되는 것을 방지하려면 useCallback을 사용할 수 있습니다.
![image.png](attachment:ce57feb5-11b2-4b6f-a865-7360006d214d:image.png)
비동기 코드에서는 event.persist()

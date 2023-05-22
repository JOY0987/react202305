import SayHello from "./SayHello";
import SubmitEvent from "./component/chap01_event/SubmitEvent";

function App() {

  // 컴포넌트 사용
  const looping  = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };

  // JSX 의 영역이기 때문에 html, js 코드 사용 불가
  // {} 안에서 함수호출문이나 변수참조를 할 수 있음. 세미콜론 사용 X
  return (
    <>
      { SubmitEvent() }
    </>
  );
}

export default App;

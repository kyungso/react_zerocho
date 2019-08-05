import React, { memo } from "react";
// 제일 마지막에 있는 자식 컴포넌트는 purecomponent 해도됨. 데이터를 담고 있다기 보다는 화면 역할을 함.
// 이건 Hooks가 아닌 함수 컴포넌트이다. (Hooks는 useState, useRef, useEffect 사용해야함)
// hoc(high order component) -> memo는 PureComponent 역할

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

export default Ball;

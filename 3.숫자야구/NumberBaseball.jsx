import React, { useState, useRef } from "react";

import Try from "./Try";

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value === answer.join("")) {
      setTries((prevTries) => [...prevTries, { try: value, result: "홈런!" }]);
      setResult("홈런!");
      alert("게임을 다시 시작합니다!");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const inputArray = value.split("").map(v => parseInt(v));
      let strike = 0,
        ball = 0;

      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")} 였습니다!`);
        alert("게임을 다시 시작합니다!");
        setValue("");
        setAnswer(getNumbers);
        setTries([]);

        inputEl.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (inputArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(inputArray[i])) {
            ball += 1;
          }
        }

        setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.` }]);
        setValue("");
        inputEl.current.focus();
      }
    }
  };

  const onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value);
  };

  return (
    <>
      <h2>{result}</h2>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도 : {tries.length} </div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;

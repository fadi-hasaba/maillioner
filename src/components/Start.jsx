import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <h1 className="welcome">
      Who Wants to Win $1,000,000?
      </h1>
      <h3>Welcome to Who Wants to Win a Million Dollars! Test your knowledge of math and science as you work your way to the million dollar level! Although the questions you will answer are real, the money, unfortunately, is not. You aren't playing for real money! Sorry!</h3>
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />

      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

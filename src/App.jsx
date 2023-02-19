import "./App.css";
import { useEffect, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import { data } from "./assets/data";
import { moneyPyramid } from "./assets/moneyPyramid";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">

            {timeOut || questionNumber === 16 ? (<>
              {questionNumber === 16 ? (<h1 className="win">congratulations</h1>) : (<h1 className="lose">Unfortunately</h1>)}
              <h1 className="endText">You earned: {earned} dollars's.</h1>
              <button className="again" onClick={() => {
                setUsername(null);
                setQuestionNumber(1);
                setTimeOut(false);
                setEarned("$ 0")
              }}>play again</button>
            </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">

                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">

            {questionNumber !== 16 ? (<> <span className="gain">
              {username}, you've got {earned} so far</span>
              <button className="gain-btn" onClick={() => {
                setTimeOut(true)
              }}>
                Take the money and run
              </button>
            </>) : (<h1 className="win-title">congratulations</h1>)}

            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
      }
    </div >
  );
}

export default App;

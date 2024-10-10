import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Componente Button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

// Componente StatisticLine
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Componente Statistics
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  );
};

// Componente History
const History = ({ good, neutral, bad, allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    );
  }

  return (
    <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

// Componente App
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAllClicks(allClicks.concat('G'));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAllClicks(allClicks.concat('N'));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAllClicks(allClicks.concat('B'));
  };

  return (
    <div>
      <h1>give Feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <History good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  );
};

export default App;

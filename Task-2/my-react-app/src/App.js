import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Greeting from './Greeting';
import Form from './Form';
import Home from './Home';
import About from './About';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Router>
      <div>
        <h1>Welcome to React Fundamentals Project</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About counter={counter} />} />
        </Routes>

        <Greeting name="Meghana" />
        <Form />
        
        <div>
          <p>Counter: {counter}</p>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
        </div>
      </div>
    </Router>
  );
}

export default App;

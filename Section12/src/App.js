import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false)

  console.log("App Running")

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prev) => !prev)
    }
  }, [allowToggle])

  const allowToggleHandler = useCallback(() => {
      setAllowToggle(true)
  }, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

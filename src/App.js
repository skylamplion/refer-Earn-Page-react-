import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Main2 from './components/Main2';
function App() {
  const [showComponent1, setShowComponent1] = useState(true);

  const handleButton1Click = () => {
    setShowComponent1(false);
  };
  const handleButton2Click = () => {
    setShowComponent1(true);
  };
  return (

    <>
      <Header />
      {showComponent1 ? (
        <Main />
      ) : (
        <Main2 />
      )}
      <button className='component' onClick={handleButton1Click} >Friends Who Enrolled</button><br />
      <button className='component' onClick={handleButton2Click} disabled>Terms & Conditions</button>


    </>
  );
}

export default App;

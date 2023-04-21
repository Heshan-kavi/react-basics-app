import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';

function App() {

  // const [buttonVisibility, setButtonVisibility] = useState<boolean>(true)
  // const [title, setTitle] = useState<string>('');

  // useEffect(() => {
  //   setTitle('the title changed to ' + buttonVisibility);
  // },[buttonVisibility])

  // function buttonTwoClick(){
  //   setButtonVisibility(true);
  // }

  // function buttonOneClick(){
  //   setButtonVisibility(false);
  // }

  // const buttonOneClick = (buttonVisibility:boolean) => {
  //   setButtonVisibility(!buttonVisibility);
  // }

  // const buttonTwoClick = (buttonVisibility:boolean) => {
  //   setButtonVisibility(!buttonVisibility);
  // }

  // const buttonClick = (buttonVisibility:boolean) => {
  //   setButtonVisibility(!buttonVisibility);
  // }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {
    //      buttonVisibility && <button onClick={() => {setButtonVisibility(false)}}>button one</button>
    //     }
    //     {
    //     !buttonVisibility && <button onClick={() => {setButtonVisibility(true)}}>button two</button>
    //     }
    //     {title}
    //   </header>
    // </div>
    <MainPage></MainPage>
  );
}

export default App;

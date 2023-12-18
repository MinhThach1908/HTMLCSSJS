import React, { Component } from 'react';
import './App.css';
import PropsDemo from './componets/PropsDemo'

function App() {
   // name : Nguyen Van A
   // age : 18
   // address : Ha Noi
   // className : T2308E
  return (
    <PropsDemo name ="Nguyen Van A" age="18" address="Ha Noi" className="T2308" />
  );
}
export default App;

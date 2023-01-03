import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [string, setString] = useState();
  const [result, setResult] = useState();
  let reverseString = () => {
    if (string) {
      setResult(string.split("").reverse().join(""));
    } else {
      setResult("Please enetr something....");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-primary'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type={'text'} ></input>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Social Security Number</span>
            <input onChange={(e) => setString(e.target.value)} type={'text'} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            <p className="mt-2 contrast-more:opacity-100 text-sm">
              {result}
            </p>
          </label>
          <button type='button' onClick={reverseString} className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;

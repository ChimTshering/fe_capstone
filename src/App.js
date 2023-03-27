import './App.css';
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/Home';
import { BookingPage } from './pages/BookingPage';
import { useEffect, useReducer } from 'react';

const updateTimes = (avialTime)=>{
  return avialTime
}
const initializeTimes = ()=> {
  return(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])};

function App() {
  useEffect(()=>{
   (async()=>{ const res = window.fetchAPI(Date.now());
    console.log(res)})()
  },[])
  const [availableTime, setAvailableTime] = useReducer(
    updateTimes,
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    initializeTimes
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTime = {availableTime} setAvailableTime = {setAvailableTime}/>} />
      </Routes>
    </BrowserRouter>
  );
}
export {updateTimes, initializeTimes};
export default App;

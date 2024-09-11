import { useState } from "react";
import "./App.css";
import InputDate from "./components/InputDate";
import Guest from "./components/Guest";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleCheckInSelect = (date: string) => {
    setCheckIn(date);
  };

  const handleCheckOutSelect = (date: string) => {
    setCheckOut(date);
  };

  return (
    <>
      <div className="main-container">
        <div className="panel1">
          <InputDate
            id="check-in"
            label="Check In"
            onDateSelect={handleCheckInSelect}
            checkOutDate={checkOut}
            checkInDate={checkIn}
          />
          <InputDate
            id="check-out"
            label="Check Out"
            onDateSelect={handleCheckOutSelect}
            checkInDate={checkIn}
            checkOutDate={checkOut}
          />
          <Guest />
          <button className="button-book-room">Book a room</button>
        </div>
        <div className="panel2">
          <div className="image-container">
            <img src="./img1.jpg" alt="Hotel" />
            <div className="description">
              <p>Golden Apartments</p>
              <span className="location">
                <div className="location-icon"><img src="./location.svg" alt="Location"  /></div>
                
                Punta Cana, Dominican Republic</span>
            </div>
          </div>
            <div className="thumb-container">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?max-w=600&max-h=600&fit=crop&crop=focalpoint&w=800&h=800&fp-x=0.6583333333333333&fp-y=0.5&fp-z=1.5&fit=crop&h=230&w=320&crop=edges" alt="Hotel" />
              <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?max-w=600&max-h=600&fit=crop&crop=focalpoint&w=800&h=800&fp-x=0.46&fp-y=0.5&fp-z=1.5&fit=crop&h=230&w=320&crop=edges" alt="Hotel" />
              <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?max-w=600&max-h=600&fit=crop&crop=focalpoint&w=675&h=675&fp-x=0.46208333333333335&fp-y=0.5&fp-z=1.7777777777777777&fit=crop&h=230&w=320&crop=edges" alt="Hotel" />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;

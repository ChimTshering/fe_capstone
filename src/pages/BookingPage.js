import "../App.css";
import { useState } from "react";
export const BookingPage = ({ availableTime, setAvailableTime }) => {
  const UserInput = ({ label, value, onChange, type, hasError, ...props }) => {
    const [error, setError] = useState(false);
    const handleBlur = () => {
      if (!value) {
        setError(true);
      }
      if (value) {
        setError(false);
      }

    };
    return (
      <div className="input-container">
        <label className="label">{label}</label>
        <input
          type={type}
          className="user-input"
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          {...props}
        />
        <span>{`${error || hasError ? "Required*" : ""}`}</span>
      </div>
    );
  };
  // const availableTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [formdata, setFormdata] = useState({
    date: "",
    time: "time",
    guestNumber: 1,
    occasion: "occasion",
  });
  const [hasError, setHasError] = useState({
    dateErr: false,
    timeErr: false,
    occasionErr: false,
  });
  const handleChange = (e, key) => {
    e.preventDefault();
    setFormdata((current) => ({ ...current, [key]: e.target.value }));
  };
  const handleBlur = (key) => {
    if (formdata.time === "time" || formdata.occasion === "occasion") {
      setHasError((current) => ({ ...current, [key]: true }));
    }
    if (formdata.time !== "time" || formdata.occasion !== "occasion") {
      setHasError((current) => ({ ...current, [key]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (!formdata.date) {
      setHasError((current) => ({ ...current, dateErr: true }));
    }
    if (formdata.time === "time") {
      setHasError((current) => ({ ...current, timeErr: true }));
    }
    if (formdata.occasion === "occasion") {
      setHasError((current) => ({ ...current, occasionErr: true }));
    }
    if (
      formdata.date &&
      formdata.time !== "time" &&
      formdata.occasion !== "occasion"
    ) {
      console.log(formdata);
    }
  };
  return (
    <div className="form-container">
      <h2>Book Now</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <UserInput
          label="Choose Date"
          type="date"
          value={formdata.date}
          onChange={(e) => handleChange(e, "date")}
          hasError={hasError.dateErr}
        />
        <div className="input-container">
          <label className="label">Choose time</label>
          <select
            id="time "
            className={`${
              formdata.time !== "time" ? "selected" : ""
            } user-input`}
            value={formdata.time}
            onChange={(e) => handleChange(e, "time")}
            onBlur={() => handleBlur("timeErr")}
            onFocus={() => handleBlur("timeErr")}
          >
            <option value="time">--time--</option>;
            {availableTime?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <span>{hasError.timeErr ? "Required *" : ""}</span>
        </div>
        <UserInput
          value={formdata.guestNumber}
          onChange={(e) => handleChange(e, "guestNumber")}
          label="Number of guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <div className="input-container">
          <label className="label">Occasion</label>
          <select
            id="occasion"
            className={`${
              formdata.occasion !== "occasion" ? "selected" : ""
            } user-input`}
            value={formdata.occasion}
            onChange={(e) => handleChange(e, "occasion")}
            onBlur={() => handleBlur("occasionErr")}
            onFocus={() => handleBlur("occasionErr")}
          >
            <option value="occasion">--occasion--</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <span>{hasError.occasionErr ? "Required *" : ""}</span>
        </div>
        <div className="input-container">
          <input
            type="submit"
            value="Make Your reservation"
            className="submit-btn"
          />
        </div>
      </form>
    </div>
  );
};

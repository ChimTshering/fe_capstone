import { render, screen } from '@testing-library/react';
import {initializeTimes,updateTimes} from './App';
import {BookingPage} from './pages/BookingPage'

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
describe("updateTimes", () => {
  it("should return the same array as the input", () => {
    const input = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const output = updateTimes(input);
    expect(output).toEqual(input);
  });
});

describe("initializeTimes", () => {
  it("should return an array of strings representing available times", () => {
    const output = initializeTimes();
    expect(output).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

import { render, screen } from "@testing-library/react";
import Bookings from './Components/BookingsPage';

test('Renders the BookingForm heading', () => {
    render(<Bookings />);
    const headingElement = screen.getByText("Make your Reservation");
    expect(headingElement).toBeInTheDocument();
})
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Bookings, { timesReducer } from './Components/BookingsPage';

const mockDispatch = jest.fn();
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

describe('App Component', () => {
  test('initializeTimes function sets available times correctly', async () => {
    const mockDispatch = jest.fn();
    render(<Bookings availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

    await waitFor(() => {
      screen.getByTestId('res-date');
    });

    // Assuming the date input has a test ID of 'res-date'
    const dateInput = screen.getByTestId('res-date');

    // Trigger a change event on the date input
    userEvent.type(dateInput, '2024-02-01');

    // Assuming the submit button has a test ID of 'submit-button'
    userEvent.click(screen.getByTestId('submit-button'));

    // Wait for the asynchronous operations to complete using act
    await act(async () => {
      await waitFor(() => {
        // Assert that mockDispatch was called
        expect(mockDispatch).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith({
          type: 'UPDATE_TIMES',
          selectedDate: '2024-02-01',
          allAvailableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        });
      });

      // Additional waiting for confirmation popup
      await waitFor(() => {
        // Assert that the confirmation popup is displayed
        expect(screen.getByText('Reservation confirmed!')).toBeInTheDocument();
      });
    });
  });

  test('updateTimes function returns the same state when action type is UPDATE_TIMES', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', allAvailableTimes: ['20:00', '21:00'] };

    const newState = timesReducer(initialState, action);

    expect(newState).toEqual(action.allAvailableTimes);
  });
});

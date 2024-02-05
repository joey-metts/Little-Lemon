import { render, screen, waitFor, fireEvent, act, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bookings, { dispatch } from './Components/BookingsPage';
import { submitAPI } from './Components/api';
import { timesReducer } from './App.js';

jest.mock('./Components/api.js', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['09:00', '10:00', '11:00'])),
  submitAPI: jest.fn(() => Promise.resolve(true)),
}));

test('initializeTimes updates available times on mount', async () => {
  render(<Bookings availableTimes={['17:00', '18:00', '19:00']} />);

  const timeOptions = await screen.findAllByRole('option');
  expect(timeOptions).toHaveLength(3);
});

test('updateTimes updates available times when date changes', async () => {
  render(<Bookings availableTimes={['17:00', '18:00', '19:00']} dispatch={ dispatch } />);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-02-02' } });
  const timeInput = screen.getByLabelText('Choose time')
  userEvent.click(timeInput)
  const timeOptions = await within(timeInput).findAllByRole('option');
  expect(timeOptions).toHaveLength(3);
});

test('HTML5 validation attributes are applied to form elements', () => {
  render(<Bookings availableTimes={[]} />);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-02-02' } });
  const timeInput = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');

  expect(dateInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');
  expect(timeInput).toHaveAttribute('required');
});

test('JavaScript validation functions work correctly', async () => {
  const consoleLogSpy = jest.spyOn(console, 'log');
  render(<Bookings availableTimes={['10:00', '12:00', '2:00']} dispatch={dispatch} />);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-02-02' } });
  const timeInput = screen.getByLabelText('Choose time');
  userEvent.click(timeInput)
  fireEvent.change(timeInput, { target: { value: '12:00' } });
  const guestsInput = screen.getByLabelText('Number of guests');
  const submitButton = screen.getByTestId('submit-button');

  fireEvent.change(guestsInput, { target: { value: '5' } });

  fireEvent.click(submitButton);

  await act(async () => {
    await waitFor(() => {
      expect(consoleLogSpy).toHaveBeenCalledWith('Form submission successful!');
    }, { timeout: 3000 });
  });

  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.click(submitButton);

  consoleLogSpy.mockRestore();

  expect(console.error).toHaveBeenCalledWith('Form submission failed.');
});
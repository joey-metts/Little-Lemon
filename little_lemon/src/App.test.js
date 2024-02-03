import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bookings from './Components/BookingsPage';
import { submitAPI } from './Components/api';

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
  render(<Bookings availableTimes={['17:00', '18:00', '19:00']} />);

  const dateInput = screen.getByTestId('res-date');
  userEvent.type(dateInput, '2024-02-02');

  await act(async () => {
    const timeSelect = await screen.findByLabelText('Choose time');
    const timeOptions = Array.from(timeSelect.querySelectorAll('option'));
    expect(timeOptions).toHaveLength(4); // Including the default "Select a time" option
  });
});

test('HTML5 validation attributes are applied to form elements', () => {
  render(<Bookings availableTimes={[]} />);

  const dateInput = screen.getByLabelText('Choose date');
  const timeInput = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');

  expect(dateInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('required');

  userEvent.selectOptions(dateInput, '2024-02-02');
  expect(timeInput).toHaveAttribute('required');
});

test('JavaScript validation functions work correctly', () => {
  jest.spyOn(window, 'submitAPI').mockResolvedValue(true);
  render(<Bookings availableTimes={['10:00', '12:00', '2:00']} />);

  const dateInput = screen.getByLabelText('Choose date');
  fireEvent.change(dateInput, { target: { value: '2024-02-02' } });
  const timeInput = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const submitButton = screen.getByTestId('submit-button');


  // Test valid submission
  fireEvent.change(timeInput, { target: { value: '12:00' } });
  fireEvent.change(guestsInput, { target: { value: '5' } });

  fireEvent.click(submitButton);

  // Assert that the confirmation popup is shown
  expect(screen.getByText(/confirmation popup/i)).toBeInTheDocument();

  // Test invalid submission (no date selected)
  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.click(submitButton);

  // Assert that the form submission failed
  expect(console.error).toHaveBeenCalledWith('Form submission failed.');

  // ... additional tests for other validation scenarios
  });
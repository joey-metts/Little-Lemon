import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bookings from './Components/BookingsPage';

jest.mock('./Components/api.js', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['09:00', '10:00', '11:00'])),
  submitAPI: jest.fn(() => Promise.resolve(true)),
}));

test('initializeTimes updates available times on mount', async () => {
  render(<Bookings availableTimes={['17:00', '18:00', '19:00']} />);

  const timeOptions = await screen.findAllByRole('option');
  expect(timeOptions).toHaveLength(6);
});

test('updateTimes updates available times when date changes', async () => {
  render(<Bookings availableTimes={['17:00', '18:00', '19:00']} />);

  const dateInput = screen.getByTestId('res-date');
  userEvent.type(dateInput, '2024-02-02');

  await waitFor(() => {
    const timeOptions = screen.getAllByRole('option');
    expect(timeOptions).toHaveLength(3);
  });
});
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReservationForm from '../ReservationForm';

describe('ReservationForm', () => {
  const mockOnSuccess = jest.fn();

  beforeEach(() => {
    mockOnSuccess.mockClear();
  });

  it('renders all form fields', () => {
    render(<ReservationForm onSuccess={mockOnSuccess} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    render(<ReservationForm onSuccess={mockOnSuccess} />);
    
    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ReservationForm onSuccess={mockOnSuccess} />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: '18:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '2' },
    });

    const submitButton = screen.getByRole('button', { name: /reserve table/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalled();
    });
  });
}); 

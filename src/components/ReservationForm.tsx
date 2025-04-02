import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface ReservationFormProps {
  onSuccess: () => void;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  date: Yup.date()
    .required('Date is required')
    .min(new Date(), 'Date cannot be in the past'),
  time: Yup.string()
    .required('Time is required'),
  guests: Yup.number()
    .required('Number of guests is required')
    .min(1, 'Must have at least 1 guest')
    .max(10, 'Maximum 10 guests allowed'),
});

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00',
  '19:30', '20:00', '20:30', '21:00', '21:30'
];

const ReservationForm: React.FC<ReservationFormProps> = ({ onSuccess }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-serif text-primary mb-6">Make a Reservation</h2>
      
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          date: new Date(),
          time: '',
          guests: 2,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate API call
          setTimeout(() => {
            console.log('Form submitted:', values);
            setSubmitting(false);
            resetForm();
            onSuccess();
          }, 1000);
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Field
                type="text"
                name="fullName"
                id="fullName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Field
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <DatePicker
                selected={values.date}
                onChange={(date) => setFieldValue('date', date)}
                minDate={new Date()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <Field
                as="select"
                name="time"
                id="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                Number of Guests
              </label>
              <Field
                type="number"
                name="guests"
                id="guests"
                min="1"
                max="10"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                aria-required="true"
              />
              <ErrorMessage name="guests" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary hover:bg-opacity-90 text-primary font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50"
              aria-label="Submit reservation form"
            >
              {isSubmitting ? 'Submitting...' : 'Reserve Table'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm; 
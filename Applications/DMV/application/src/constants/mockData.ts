import { User, DMVOffice } from '@/types';

// Mock credentials for login
export const MOCK_CREDENTIALS = {
  username: 'testuser',
  password: 'password123'
};

// Mock user data
export const MOCK_USER: User = {
  username: 'testuser',
  firstName: 'John',
  middleName: 'Michael',
  lastName: 'Doe',
  dateOfBirth: '1985-03-15',
  dlNumber: 'D1234567',
  licenseClass: 'C',
  licenseExpiration: '2025-03-15',
  restrictions: 'NONE',
  endorsements: 'NONE',
  address: {
    street: '123 Main Street',
    apt: 'Unit 4B',
    city: 'Sacramento',
    state: 'CA',
    zipCode: '95814'
  },
  email: 'john.doe@email.com',
  phone: '(916) 555-0123',
  emergencyContact: {
    name: 'Jane Doe',
    relationship: 'Spouse',
    phone: '(916) 555-0124'
  }
};

// Mock DMV office locations
export const MOCK_OFFICES: DMVOffice[] = [
  {
    id: 'sacramento-arden',
    name: 'Sacramento DMV Office',
    address: {
      street: '2425 Arden Way',
      city: 'Sacramento',
      state: 'CA',
      zipCode: '95825'
    },
    phone: '(800) 777-0133',
    hours: {
      weekday: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 1:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 38.6009,
      lng: -121.3816
    }
  },
  {
    id: 'san-francisco-fell',
    name: 'San Francisco DMV Office',
    address: {
      street: '1377 Fell St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94117'
    },
    phone: '(800) 777-0133',
    hours: {
      weekday: '8:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: 'los-angeles-hope',
    name: 'Los Angeles DMV Office',
    address: {
      street: '3615 S Hope St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90007'
    },
    phone: '(800) 777-0133',
    hours: {
      weekday: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 1:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },
  {
    id: 'san-diego-jutland',
    name: 'San Diego DMV Office',
    address: {
      street: '4375 Jutland Dr',
      city: 'San Diego',
      state: 'CA',
      zipCode: '92117'
    },
    phone: '(800) 777-0133',
    hours: {
      weekday: '8:00 AM - 5:00 PM',
      saturday: '8:00 AM - 1:00 PM',
      sunday: 'Closed'
    },
    coordinates: {
      lat: 32.7157,
      lng: -117.1611
    }
  }
];

// Time slots for appointments
export const TIME_SLOTS = {
  morning: [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM'
  ],
  afternoon: [
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM'
  ]
};

// Generate mock time slots with random availability
export const generateTimeSlots = () => {
  const allSlots = [...TIME_SLOTS.morning, ...TIME_SLOTS.afternoon];
  return allSlots.map(time => ({
    time,
    available: Math.random() > 0.3 // 70% availability
  }));
};

// Renewal fee
export const RENEWAL_FEE = 39.00;

// Error messages
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid username or password. Please try again.',
  ACCOUNT_LOCKED: 'Your account has been temporarily locked due to multiple failed login attempts. Please try again in 30 seconds.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  UNAUTHORIZED: 'You are not authorized to access this page.'
};

export const VALIDATION_ERRORS = {
  REQUIRED: 'This field is required.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_PHONE: 'Please enter a valid phone number in format: (XXX) XXX-XXXX',
  INVALID_ZIP: 'Please enter a valid ZIP code (12345 or 12345-6789).',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_CARD: 'Please enter a valid credit card number.',
  INVALID_CVV: 'Please enter a valid CVV (3-4 digits).',
  EXPIRED_CARD: 'This card has expired. Please use a different card.',
  FILE_TOO_LARGE: 'File size exceeds 5MB limit.',
  INVALID_FILE_TYPE: 'Invalid file type. Please upload PDF, JPG, or PNG.'
};

export const NETWORK_ERRORS = {
  OFFLINE: 'You appear to be offline. Please check your internet connection.',
  TIMEOUT: 'Request timed out. Please try again.',
  SERVER_ERROR: 'Something went wrong on our end. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.'
};

import { ValidationResult } from '@/types';

// Email validation
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return { valid: false, error: 'Email is required.' };
  }
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  return { valid: true };
};

// Phone validation - Format: (XXX) XXX-XXXX
export const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone) {
    return { valid: false, error: 'Phone number is required.' };
  }
  if (!phoneRegex.test(phone)) {
    return { valid: false, error: 'Please enter a valid phone number in format: (XXX) XXX-XXXX' };
  }
  return { valid: true };
};

// ZIP Code validation - Format: 12345 or 12345-6789
export const zipRegex = /^\d{5}(-\d{4})?$/;

export const validateZipCode = (zip: string): ValidationResult => {
  if (!zip) {
    return { valid: false, error: 'ZIP code is required.' };
  }
  if (!zipRegex.test(zip)) {
    return { valid: false, error: 'Please enter a valid ZIP code (12345 or 12345-6789).' };
  }
  return { valid: true };
};

// Driver's License Number - Format: D1234567
export const dlRegex = /^[A-Z]\d{7}$/;

export const validateDLNumber = (dl: string): ValidationResult => {
  if (!dl) {
    return { valid: false, error: 'Driver\'s license number is required.' };
  }
  if (!dlRegex.test(dl)) {
    return { valid: false, error: 'Please enter a valid driver\'s license number.' };
  }
  return { valid: true };
};

// Credit Card validation using Luhn algorithm
export const luhnCheck = (cardNumber: string): boolean => {
  // Remove spaces and dashes
  const number = cardNumber.replace(/[\s-]/g, '');

  if (!/^\d+$/.test(number)) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// Test card numbers that always pass
export const TEST_CARDS = [
  '4111111111111111', // Visa
  '5555555555554444', // Mastercard
  '378282246310005',  // Amex
];

export const validateCardNumber = (cardNumber: string): ValidationResult => {
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');

  if (!cleanNumber) {
    return { valid: false, error: 'Card number is required.' };
  }

  if (cleanNumber.length < 15 || cleanNumber.length > 16) {
    return { valid: false, error: 'Please enter a valid credit card number.' };
  }

  // Accept test cards or validate with Luhn
  if (TEST_CARDS.includes(cleanNumber) || luhnCheck(cleanNumber)) {
    return { valid: true };
  }

  return { valid: false, error: 'Please enter a valid credit card number.' };
};

export const validateCVV = (cvv: string): ValidationResult => {
  if (!cvv) {
    return { valid: false, error: 'CVV is required.' };
  }
  if (!/^\d{3,4}$/.test(cvv)) {
    return { valid: false, error: 'Please enter a valid CVV (3-4 digits).' };
  }
  return { valid: true };
};

export const validateExpirationDate = (expDate: string): ValidationResult => {
  if (!expDate) {
    return { valid: false, error: 'Expiration date is required.' };
  }

  // Assuming format MM/YY
  const [month, year] = expDate.split('/');
  if (!month || !year) {
    return { valid: false, error: 'Please enter expiration date in format MM/YY.' };
  }

  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(`20${year}`, 10);

  if (monthNum < 1 || monthNum > 12) {
    return { valid: false, error: 'Invalid month.' };
  }

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
    return { valid: false, error: 'This card has expired. Please use a different card.' };
  }

  return { valid: true };
};

// File validation
export const validateFile = (file: File): ValidationResult => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg'
  ];

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Invalid file type. Please upload PDF, JPG, or PNG.' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'File size exceeds 5MB limit.' };
  }

  return { valid: true };
};

// Required field validation
export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim() === '') {
    return { valid: false, error: `${fieldName} is required.` };
  }
  return { valid: true };
};

// Min length validation
export const validateMinLength = (value: string, min: number): ValidationResult => {
  if (value.length < min) {
    return { valid: false, error: `Must be at least ${min} characters.` };
  }
  return { valid: true };
};

// Max length validation
export const validateMaxLength = (value: string, max: number): ValidationResult => {
  if (value.length > max) {
    return { valid: false, error: `Must not exceed ${max} characters.` };
  }
  return { valid: true };
};

// Letters only validation
export const validateLettersOnly = (value: string, fieldName: string): ValidationResult => {
  if (!/^[a-zA-Z\s'-]+$/.test(value)) {
    return { valid: false, error: `${fieldName} can only contain letters.` };
  }
  return { valid: true };
};

// Age validation (must be at least minAge years old)
export const validateAge = (dateOfBirth: string, minAge: number): ValidationResult => {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < minAge) {
    return { valid: false, error: `You must be at least ${minAge} years old.` };
  }

  return { valid: true };
};

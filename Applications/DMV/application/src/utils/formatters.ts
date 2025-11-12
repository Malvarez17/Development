import { format, parseISO } from 'date-fns';

// Format phone number to (XXX) XXX-XXXX
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');

  // Format based on length
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

// Format ZIP code
export const formatZipCode = (zip: string): string => {
  // Remove all non-digit characters
  const digits = zip.replace(/\D/g, '');

  // Format based on length
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5, 9)}`;
};

// Format credit card number with spaces (XXXX XXXX XXXX XXXX)
export const formatCardNumber = (cardNumber: string): string => {
  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '');

  // Add spaces every 4 digits
  const groups = digits.match(/.{1,4}/g) || [];
  return groups.join(' ');
};

// Mask credit card number (show last 4 digits)
export const maskCardNumber = (cardNumber: string): string => {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.length < 4) return cardNumber;
  return `**** **** **** ${digits.slice(-4)}`;
};

// Format date to MM/DD/YYYY
export const formatDate = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MM/dd/yyyy');
  } catch {
    return '';
  }
};

// Format date to long format (Monday, January 15, 2025)
export const formatDateLong = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'EEEE, MMMM d, yyyy');
  } catch {
    return '';
  }
};

// Format time (9:00 AM)
export const formatTime = (time: string): string => {
  return time; // Already in correct format from mock data
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

// Capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Format address as single line
export const formatAddress = (address: {
  street: string;
  apt?: string;
  city: string;
  state: string;
  zipCode: string;
}): string => {
  const parts = [address.street];
  if (address.apt) parts.push(address.apt);
  parts.push(`${address.city}, ${address.state} ${address.zipCode}`);
  return parts.join(', ');
};

// Generate random ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Generate confirmation number (DMV-YYYYMMDD-XXXXX)
export const generateConfirmationNumber = (): string => {
  const date = format(new Date(), 'yyyyMMdd');
  const random = Math.floor(Math.random() * 90000) + 10000;
  return `DMV-${date}-${random}`;
};

// Generate transaction ID
export const generateTransactionId = (): string => {
  return `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

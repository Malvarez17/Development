// User and Authentication Types
export interface Address {
  street: string;
  apt?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface User {
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
  dateOfBirth: string; // ISO format
  dlNumber: string;
  licenseClass: string;
  licenseExpiration: string; // ISO format
  restrictions: string;
  endorsements: string;
  address: Address;
  mailingAddress?: Address;
  email: string;
  phone: string;
  alternatePhone?: string;
  emergencyContact: EmergencyContact;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Renewal Form Data Types
export interface EligibilityData {
  licenseValid: boolean;
  trafficViolations: boolean;
  trafficViolationDetails?: string;
  medicalConditions: boolean;
  medicalConditionDetails?: string;
  visionChanges: boolean;
  visionChangeDetails?: string;
  certified: boolean;
}

export interface PersonalInfoData {
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
  dateOfBirth: string;
  dlNumber: string;
  address: Address;
  mailingAddress?: Address;
  email: string;
  phone: string;
  alternatePhone?: string;
  emergencyContact: EmergencyContact;
}

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  preview?: string;
}

export interface DocumentData {
  category: string;
  files: UploadedFile[];
}

export interface AppointmentData {
  officeId: string;
  officeName: string;
  officeAddress: Address;
  date: string;
  time: string;
}

export interface PaymentData {
  method: 'card' | 'ach';
  cardNumber?: string;
  cardholderName?: string;
  expirationDate?: string;
  cvv?: string;
  billingZip?: string;
  accountType?: 'checking' | 'savings';
  routingNumber?: string;
  accountNumber?: string;
  confirmationNumber?: string;
  transactionId?: string;
  amount: number;
}

export interface RenewalFormData {
  eligibility?: EligibilityData;
  personalInfo?: PersonalInfoData;
  documents: DocumentData[];
  appointment?: AppointmentData;
  payment?: PaymentData;
}

export interface FormDataContextType {
  formData: RenewalFormData;
  updateEligibility: (data: EligibilityData) => void;
  updatePersonalInfo: (data: PersonalInfoData) => void;
  addDocument: (category: string, file: UploadedFile) => void;
  removeDocument: (category: string, fileId: string) => void;
  updateAppointment: (data: AppointmentData) => void;
  updatePayment: (data: PaymentData) => void;
  saveProgress: () => void;
  loadProgress: () => void;
  clearProgress: () => void;
}

// DMV Office Types
export interface DMVOffice {
  id: string;
  name: string;
  address: Address;
  phone: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

// Error Types
export enum ErrorType {
  VALIDATION = 'validation',
  NETWORK = 'network',
  AUTHENTICATION = 'authentication',
  SERVER = 'server',
  UNKNOWN = 'unknown'
}

export interface AppError {
  type: ErrorType;
  message: string;
  field?: string;
  code?: string;
}

// Validation Types
export interface ValidationResult {
  valid: boolean;
  error?: string;
}

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'dmv_auth_token',
  USER_DATA: 'dmv_user_data',
  FORM_DATA: 'dmv_renewal_form_data',
  LAST_SAVED: 'dmv_last_saved_timestamp',
} as const;

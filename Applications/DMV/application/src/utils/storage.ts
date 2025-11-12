import { STORAGE_KEYS } from '@/types';
import { User, RenewalFormData } from '@/types';

// Save to session storage
export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to session storage:', error);
  }
};

// Load from session storage
export const loadFromStorage = <T>(key: string): T | null => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error loading from session storage:', error);
    return null;
  }
};

// Remove from session storage
export const removeFromStorage = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from session storage:', error);
  }
};

// Clear all session storage
export const clearStorage = (): void => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Error clearing session storage:', error);
  }
};

// Auth-specific helpers
export const saveAuthToken = (token: string): void => {
  saveToStorage(STORAGE_KEYS.AUTH_TOKEN, token);
};

export const loadAuthToken = (): string | null => {
  return loadFromStorage<string>(STORAGE_KEYS.AUTH_TOKEN);
};

export const removeAuthToken = (): void => {
  removeFromStorage(STORAGE_KEYS.AUTH_TOKEN);
};

export const saveUserData = (user: User): void => {
  saveToStorage(STORAGE_KEYS.USER_DATA, user);
};

export const loadUserData = (): User | null => {
  return loadFromStorage<User>(STORAGE_KEYS.USER_DATA);
};

export const removeUserData = (): void => {
  removeFromStorage(STORAGE_KEYS.USER_DATA);
};

// Form data helpers
export const saveFormData = (formData: RenewalFormData): void => {
  saveToStorage(STORAGE_KEYS.FORM_DATA, formData);
  saveToStorage(STORAGE_KEYS.LAST_SAVED, new Date().toISOString());
};

export const loadFormData = (): RenewalFormData | null => {
  return loadFromStorage<RenewalFormData>(STORAGE_KEYS.FORM_DATA);
};

export const removeFormData = (): void => {
  removeFromStorage(STORAGE_KEYS.FORM_DATA);
  removeFromStorage(STORAGE_KEYS.LAST_SAVED);
};

export const getLastSavedTimestamp = (): string | null => {
  return loadFromStorage<string>(STORAGE_KEYS.LAST_SAVED);
};

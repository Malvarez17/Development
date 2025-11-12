import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  FormDataContextType,
  RenewalFormData,
  EligibilityData,
  PersonalInfoData,
  AppointmentData,
  PaymentData,
  UploadedFile
} from '@/types';
import { saveFormData, loadFormData, removeFormData } from '@/utils/storage';

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

interface FormDataProviderProps {
  children: ReactNode;
}

const initialFormData: RenewalFormData = {
  documents: []
};

export const FormDataProvider: React.FC<FormDataProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<RenewalFormData>(initialFormData);

  // Load saved form data on mount
  useEffect(() => {
    loadProgress();
  }, []);

  const updateEligibility = (data: EligibilityData) => {
    setFormData(prev => ({
      ...prev,
      eligibility: data
    }));
  };

  const updatePersonalInfo = (data: PersonalInfoData) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: data
    }));
  };

  const addDocument = (category: string, file: UploadedFile) => {
    setFormData(prev => {
      const existingCategory = prev.documents.find(doc => doc.category === category);

      if (existingCategory) {
        // Add file to existing category
        return {
          ...prev,
          documents: prev.documents.map(doc =>
            doc.category === category
              ? { ...doc, files: [...doc.files, file] }
              : doc
          )
        };
      } else {
        // Create new category with file
        return {
          ...prev,
          documents: [...prev.documents, { category, files: [file] }]
        };
      }
    });
  };

  const removeDocument = (category: string, fileId: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.map(doc =>
        doc.category === category
          ? { ...doc, files: doc.files.filter(f => f.id !== fileId) }
          : doc
      ).filter(doc => doc.files.length > 0) // Remove empty categories
    }));
  };

  const updateAppointment = (data: AppointmentData) => {
    setFormData(prev => ({
      ...prev,
      appointment: data
    }));
  };

  const updatePayment = (data: PaymentData) => {
    setFormData(prev => ({
      ...prev,
      payment: data
    }));
  };

  const saveProgress = () => {
    saveFormData(formData);
  };

  const loadProgress = () => {
    const savedData = loadFormData();
    if (savedData) {
      setFormData(savedData);
    }
  };

  const clearProgress = () => {
    setFormData(initialFormData);
    removeFormData();
  };

  const value: FormDataContextType = {
    formData,
    updateEligibility,
    updatePersonalInfo,
    addDocument,
    removeDocument,
    updateAppointment,
    updatePayment,
    saveProgress,
    loadProgress,
    clearProgress
  };

  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
};

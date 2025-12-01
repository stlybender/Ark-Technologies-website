'use client';

import { useState } from 'react';

interface ContactFormProps {
  showTitle?: boolean;
  className?: string;
}

export default function ContactForm({ showTitle = true, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (status === 'success') {
    return (
      <div className={`py-12 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-text-primary mb-2">Thank you!</h4>
        <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={`py-12 text-center ${className}`}>
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-text-primary mb-2">Something went wrong</h4>
        <p className="text-text-secondary mb-4">We couldn't send your message. Please try again.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-ark-blue hover:underline font-semibold"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {showTitle && (
        <h3 className="text-2xl font-bold text-text-primary mb-6">Request a Demo</h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ark-blue focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-border-medium'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ark-blue focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-border-medium'
            }`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ark-blue focus:border-transparent ${
              errors.company ? 'border-red-500' : 'border-border-medium'
            }`}
            placeholder="Acme Corp"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-500">{errors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Tell us about your needs
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-ark-blue focus:border-transparent resize-none"
            placeholder="What challenges are you looking to solve?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-ark-blue hover:bg-ark-blue-dark text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {status === 'submitting' ? 'Sending...' : 'Book a Demo'}
        </button>

        <p className="text-xs text-text-tertiary text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-ark-blue hover:underline">Privacy Policy</a>
          {' '}and{' '}
          <a href="/terms" className="text-ark-blue hover:underline">Terms of Service</a>
        </p>
      </form>
    </div>
  );
}


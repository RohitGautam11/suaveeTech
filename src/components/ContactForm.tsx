'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Loader } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  projectDescription: string
  service?: string
}

interface ContactFormProps {
  onSuccess?: () => void
  showCompany?: boolean
  showService?: boolean
  services?: string[]
  isDark?: boolean
}

export function ContactForm({
  onSuccess,
  showCompany = true,
  showService = false,
  services = [
    'Custom Software Development',
    'SaaS Development',
    'CRM Solutions',
    'API Integration',
    'Cloud Infrastructure',
    'DevOps Services',
  ],
  isDark = false,
}: ContactFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll contact you soon.')
        reset()
        setSubmitted(true)
        onSuccess?.()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
      console.error('Form submission error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          Full Name *
        </label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={`w-full px-4 py-2 rounded-lg border transition ${
            isDark
              ? 'bg-dark-tertiary border-dark-tertiary text-white placeholder-gray-400'
              : 'bg-light border-gray-300 text-dark placeholder-gray-500'
          } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          Email Address *
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email',
            },
          })}
          className={`w-full px-4 py-2 rounded-lg border transition ${
            isDark
              ? 'bg-dark-tertiary border-dark-tertiary text-white placeholder-gray-400'
              : 'bg-light border-gray-300 text-dark placeholder-gray-500'
          } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      {showCompany && (
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            {...register('phone')}
            className={`w-full px-4 py-2 rounded-lg border transition ${
              isDark
                ? 'bg-dark-tertiary border-dark-tertiary text-white placeholder-gray-400'
                : 'bg-light border-gray-300 text-dark placeholder-gray-500'
            } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
            placeholder="+1 (234) 567-8900"
          />
        </div>
      )}

      {/* Company */}
      {showCompany && (
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Company Name
          </label>
          <input
            type="text"
            {...register('company')}
            className={`w-full px-4 py-2 rounded-lg border transition ${
              isDark
                ? 'bg-dark-tertiary border-dark-tertiary text-white placeholder-gray-400'
                : 'bg-light border-gray-300 text-dark placeholder-gray-500'
            } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
            placeholder="Your company name"
          />
        </div>
      )}

      {/* Service */}
      {showService && (
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            Service Interested In
          </label>
          <select
            {...register('service')}
            className={`w-full px-4 py-2 rounded-lg border transition ${
              isDark
                ? 'bg-dark-tertiary border-dark-tertiary text-white'
                : 'bg-light border-gray-300 text-dark'
            } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Project Description */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
          Project Description *
        </label>
        <textarea
          {...register('projectDescription', {
            required: 'Project description is required',
            minLength: {
              value: 10,
              message: 'Description must be at least 10 characters',
            },
          })}
          rows={4}
          className={`w-full px-4 py-2 rounded-lg border transition resize-none ${
            isDark
              ? 'bg-dark-tertiary border-dark-tertiary text-white placeholder-gray-400'
              : 'bg-light border-gray-300 text-dark placeholder-gray-500'
          } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
          placeholder="Tell us about your project..."
        />
        {errors.projectDescription && (
          <p className="text-red-500 text-xs mt-1">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting && <Loader className="w-4 h-4 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitted && (
        <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
          <p className="text-green-800 text-sm font-medium">
            ✓ Your message has been sent successfully!
          </p>
        </div>
      )}
    </form>
  )
}

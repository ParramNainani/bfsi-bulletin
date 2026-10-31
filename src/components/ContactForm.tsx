import type { FormEvent } from 'react'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type ContactFormState = {
  name: string
  designation: string
  email: string
  phone: string
  company: string
  message: string
}

type ContactFormTouched = Partial<Record<keyof ContactFormState, boolean>>

type SubmitStatus =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'success' }
  | { state: 'error'; message: string }

type ContactFormProps = {
  className?: string
  source?: string
}

export default function ContactForm({
  className = 'form formElevated',
  source = 'bfsi-bulletin',
}: ContactFormProps) {
  const prefersReducedMotion = useReducedMotion()

  const reveal = prefersReducedMotion
    ? { initial: false }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: 'easeOut' as const },
      }

  const [form, setForm] = useState<ContactFormState>({
    name: '',
    designation: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [touched, setTouched] = useState<ContactFormTouched>({})

  const [status, setStatus] = useState<SubmitStatus>({ state: 'idle' })

  const trimmed = {
    name: form.name.trim(),
    designation: form.designation.trim(),
    email: form.email.trim().toLowerCase(),
    phone: form.phone.trim(),
    company: form.company.trim(),
    message: form.message.trim(),
  }

  const emailLooksValid = !trimmed.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)
  const errors = {
    name: trimmed.name.length >= 2 ? '' : 'Name is required.',
    designation: trimmed.designation.length >= 2 ? '' : 'Designation is required.',
    company: trimmed.company.length >= 2 ? '' : 'Company is required.',
    email: !trimmed.email ? 'Email is required.' : !emailLooksValid ? 'Enter a valid email address.' : '',
    phone: trimmed.phone ? '' : 'Phone is required.',
    message: trimmed.message.length >= 10 ? '' : 'Message is required (min 10 characters).',
  }

  const showFieldError = (field: keyof typeof errors) => Boolean(touched[field] && errors[field])

  async function onSubmitContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setTouched((p) => ({
      ...p,
      name: true,
      designation: true,
      company: true,
      email: true,
      phone: true,
      message: true,
    }))

    if (
      errors.name ||
      errors.designation ||
      errors.company ||
      errors.email ||
      errors.phone ||
      errors.message
    ) {
      setStatus({ state: 'error', message: 'Please review the required fields.' })
      return
    }

    try {
      setStatus({ state: 'sending' })
      
      // Simulate form submission - backend will be configured later
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', { ...trimmed, source })
      setForm({ name: '', designation: '', email: '', phone: '', company: '', message: '' })
      setTouched({})
      setStatus({ state: 'success' })
    } catch {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <motion.form {...reveal} className={className} onSubmit={onSubmitContact}>
      <p className="formHelp">Fields marked with * are required.</p>
      <label>
        <span>Name *</span>
        <input
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          onBlur={() => setTouched((p) => ({ ...p, name: true }))}
          className={showFieldError('name') ? 'inputError' : undefined}
          aria-invalid={showFieldError('name')}
          aria-describedby={showFieldError('name') ? 'contact-name-error' : undefined}
          autoComplete="name"
          name="name"
          required
          />
        {showFieldError('name') && <div id="contact-name-error" className="fieldError">{errors.name}</div>}
      </label>

      <div className="form2Col">
        <label>
          <span>Designation *</span>
          <input
            value={form.designation}
            onChange={(e) => setForm((p) => ({ ...p, designation: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, designation: true }))}
            className={showFieldError('designation') ? 'inputError' : undefined}
            aria-invalid={showFieldError('designation')}
            aria-describedby={showFieldError('designation') ? 'contact-designation-error' : undefined}
            autoComplete="organization-title"
            name="designation"
            required
          />
          {showFieldError('designation') && (
            <div id="contact-designation-error" className="fieldError">{errors.designation}</div>
          )}
        </label>
        <label>
          <span>Company *</span>
          <input
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, company: true }))}
            className={showFieldError('company') ? 'inputError' : undefined}
            aria-invalid={showFieldError('company')}
            aria-describedby={showFieldError('company') ? 'contact-company-error' : undefined}
            autoComplete="organization"
            name="company"
            required
          />
          {showFieldError('company') && (
            <div id="contact-company-error" className="fieldError">{errors.company}</div>
          )}
        </label>
      </div>

      <div className="form2Col">
        <label>
          <span>Email *</span>
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            className={showFieldError('email') ? 'inputError' : undefined}
            aria-invalid={showFieldError('email')}
            aria-describedby={showFieldError('email') ? 'contact-email-error' : undefined}
            autoComplete="email"
            name="email"
            type="email"
            inputMode="email"
            required
          />
          {showFieldError('email') && <div id="contact-email-error" className="fieldError">{errors.email}</div>}
        </label>
        <label>
          <span>Phone *</span>
          <input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
            className={showFieldError('phone') ? 'inputError' : undefined}
            aria-invalid={showFieldError('phone')}
            aria-describedby={showFieldError('phone') ? 'contact-phone-error' : undefined}
            autoComplete="tel"
            inputMode="tel"
            name="phone"
            type="tel"
            required
          />
          {showFieldError('phone') && <div id="contact-phone-error" className="fieldError">{errors.phone}</div>}
        </label>
      </div>

      <label>
        <span>Message *</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          onBlur={() => setTouched((p) => ({ ...p, message: true }))}
          className={showFieldError('message') ? 'inputError' : undefined}
          aria-invalid={showFieldError('message')}
          aria-describedby={showFieldError('message') ? 'contact-message-error' : undefined}
          name="message"
          required
          rows={6}
        />
        {showFieldError('message') && (
          <div id="contact-message-error" className="fieldError">
            {errors.message}
          </div>
        )}
      </label>

      <div className="formRow">
        <button className="btnPrimary" type="submit" disabled={status.state === 'sending'}>
          {status.state === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        <span aria-live="polite" role="status">
          {status.state === 'success' && <span className="ok">Sent. We'll reply soon.</span>}
          {status.state === 'error' && <span className="err">{status.message}</span>}
        </span>
      </div>
    </motion.form>
  )
}

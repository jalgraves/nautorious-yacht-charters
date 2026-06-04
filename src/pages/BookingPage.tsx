import { useState } from 'react';
import styles from './BookingPage.module.css';
import { CONTACT_FORM_URL, CONTACT_FORM_SITE } from '../config/site';

type DateMode = 'single' | 'range';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const DEPARTURE_POINTS = ['Miami (Aquila 54)', 'St. Pete Beach (Aquila 36)'];

function BookingPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departurePoint, setDeparturePoint] = useState('');
  const [dateMode, setDateMode] = useState<DateMode>('single');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!departurePoint) {
      setStatus('error');
      setErrorMessage('Please select a departure point.');
      return;
    }

    if (dateMode === 'range' && startDate && endDate && endDate < startDate) {
      setStatus('error');
      setErrorMessage('The end date must be on or after the start date.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      site: CONTACT_FORM_SITE,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      departure_point: departurePoint,
      start_date: startDate,
      end_date: dateMode === 'range' ? endDate : '',
      description: description.trim(),
    };

    try {
      const response = await fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (response.ok && data.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setDeparturePoint('');
        setStartDate('');
        setEndDate('');
        setDescription('');
        setDateMode('single');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.pageHeading}>Booking</h1>
      <p>
        Interested in booking a charter experience? Send us the details below
        and we&apos;ll be in touch.
      </p>

      {status === 'success' ? (
        <p className={styles.success} role="status">
          Thanks for reaching out — your request has been sent. We&apos;ll get
          back to you soon.
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Phone (optional)</span>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Departure Point</span>
            <select
              className={styles.input}
              name="departure_point"
              value={departurePoint}
              onChange={(e) => setDeparturePoint(e.target.value)}
              required
            >
              <option value="" disabled>
                Select a departure point
              </option>
              {DEPARTURE_POINTS.map((point) => (
                <option key={point} value={point}>
                  {point}
                </option>
              ))}
            </select>
          </label>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Date(s)</legend>
            <div className={styles.modeToggle}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="dateMode"
                  value="single"
                  checked={dateMode === 'single'}
                  onChange={() => setDateMode('single')}
                />
                <span>Single date</span>
              </label>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="dateMode"
                  value="range"
                  checked={dateMode === 'range'}
                  onChange={() => setDateMode('range')}
                />
                <span>Date range</span>
              </label>
            </div>

            <div className={styles.dateInputs}>
              <label className={styles.field}>
                <span className={styles.subLabel}>
                  {dateMode === 'range' ? 'Start date' : 'Date'}
                </span>
                <input
                  className={styles.input}
                  type="date"
                  name="start_date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>

              {dateMode === 'range' && (
                <label className={styles.field}>
                  <span className={styles.subLabel}>End date</span>
                  <input
                    className={styles.input}
                    type="date"
                    name="end_date"
                    value={endDate}
                    min={startDate || undefined}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
              )}
            </div>
          </fieldset>

          <label className={styles.field}>
            <span className={styles.label}>Describe your ideal experience</span>
            <textarea
              className={styles.textarea}
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              maxLength={5000}
              required
            />
          </label>

          {status === 'error' && (
            <p className={styles.error} role="alert">
              {errorMessage}
            </p>
          )}

          <button
            className={styles.submit}
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send request'}
          </button>
        </form>
      )}

      <p className={styles.fallback}>
        Prefer to reach us directly? Email{' '}
        <strong>NautoriousYachtCharters@gmail.com</strong> or call{' '}
        <strong>919-609-3147</strong>.
      </p>
    </div>
  );
}

export default BookingPage;

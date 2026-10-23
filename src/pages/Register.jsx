import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Auth.css';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.password.length < 8) return setError('Password must be at least 8 characters.');
    if (form.password !== form.confirm) return setError('Passwords do not match.');
    setError('');
    // TODO: send name, email, phone and password to your backend register endpoint
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>Create your account</h1>
        <p className="auth-sub">It only takes a minute.</p>

        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" value={form.name} onChange={change} required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={change} required />

        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={change} required />

        <label htmlFor="password">Password</label>
        <div className="pw">
          <input id="password" name="password" type={show ? 'text' : 'password'} autoComplete="new-password" value={form.password} onChange={change} required />
          <button type="button" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>
            {show ? 'Hide' : 'Show'}
          </button>
        </div>

        <label htmlFor="confirm">Confirm password</label>
        <input id="confirm" name="confirm" type={show ? 'text' : 'password'} autoComplete="new-password" value={form.confirm} onChange={change} required />

        <p className="auth-error" role="alert">{error}</p>

        <button type="submit" className="auth-submit">Register</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
}

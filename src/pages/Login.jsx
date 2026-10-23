import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { findUser } from '../data/Users';
import '../style/Auth.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const user = findUser(form.email, form.password);
    if (!user) return setError('Wrong email or password.');
    setError('');
    login(user);
    navigate('/');
  };

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={submit}>
        <h1>Welcome back</h1>
        <p className="auth-sub">Log in to track orders and reorder in a tap.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={change}
          required
        />

        <label htmlFor="password">Password</label>
        <div className="pw">
          <input
            id="password"
            name="password"
            type={show ? 'text' : 'password'}
            autoComplete="current-password"
            value={form.password}
            onChange={change}
            required
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        </div>

        <p className="auth-error" role="alert">{error}</p>

        <button type="submit" className="auth-submit">Log in</button>

        <p className="auth-switch">
          New to Rbonn? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </section>
  );
}
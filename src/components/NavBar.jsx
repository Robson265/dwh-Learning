import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/rbonn-logo-white.png';
import '../style/Auth.css';
import '../App.css';

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const handleLogout = () => {
    setOpen(false);
    logout();
    navigate('/');
  };

  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="logo"><img src={logo} alt="Rbonn" /></Link>
        <Link to="/" className="nav-title">Dashboard</Link>
      </div>

      {user ? (
        <div className="auth-links">
          <button
            className={`theme-toggle${dark ? ' on' : ''}`}
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
          >
            <span className="knob">{dark ? '🌙' : '☀️'}</span>
          </button>

          <div className="user-menu" ref={menuRef}>
            <button className="user-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              {user.avatar
                ? <img className="avatar" src={user.avatar} alt="" />
                : <span className="avatar initials">{user.name?.[0]?.toUpperCase()}</span>}
              <span className="user-text">
                <strong>{user.name}</strong>
                <small>{user.role?.name ?? user.role}</small>
              </span>
              <span className="chev">▾</span>
            </button>

            {open && (
              <ul className="user-dropdown">
                <li><Link to="/profile" onClick={() => setOpen(false)}>Profile</Link></li>
                <li><button onClick={handleLogout}>Log out</button></li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-register">Register</Link>
        </div>
      )}
    </nav>
  );
}
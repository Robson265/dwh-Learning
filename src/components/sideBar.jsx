// import { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import logo from '../assets/rbonn-logo-white.png';
// import '../style/SideBar.css';

// const links = [
//   { to: '/', label: 'Home', end: true },
//   { to: '/blogs', label: 'Blogs' },
//   { to: '/contact', label: 'Contact' },
// ];

// export default function SideBar() {
//   const [open, setOpen] = useState(false);
//   const close = () => setOpen(false);

//   return (
//     <div className="topbar">
//       {/* Removed the undefined ref={box} here */}
//       <div className="search">
//         <button
//           type="button"
//           className="menu-btn"
//           aria-label="Toggle menu"
//           aria-expanded={open}
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>

//         <nav className={`sidebar ${open ? 'open' : ''}`} aria-label="Main">
//           <NavLink to="/" className="side-logo" onClick={close}>
//             <img src={logo} alt="Rbonn" />
//           </NavLink>

//           {links.map((l) => (
//             <NavLink
//               key={l.to}
//               to={l.to}
//               end={l.end}
//               onClick={close}
//               className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
//             >
//               {l.label}
//             </NavLink>
//           ))}
//         </nav>

//         {open && <div className="scrim" onClick={close} />}
//       </div>

//       <div className="auth-links">
//         <Link to="/login" className="btn-login">Login</Link>
//         <Link to="/register" className="btn-register">Register</Link>
//       </div>
//     </div>
//   );
// }
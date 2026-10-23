export const Users = [
  { name: 'Isaiah Robson', email: 'test@rbonn.com',  password: 'password2@123', role: 'Customer', avatar: '' },
  { name: 'Admin User',    email: 'admin@rbonn.com', password: 'admin12345',  role: 'Admin',    avatar: '' },
];

// Checks the built-in test users plus anyone registered through the Register page
export function findUser(email, password) {
  let registered = [];
  try { registered = JSON.parse(localStorage.getItem('users')) || []; } catch {}

  const match = [...Users, ...registered].find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
  );
  if (!match) return null;

  const { password: _pw, ...safeUser } = match;   // never keep the password in the logged-in user
  return safeUser;
}

export function saveRegisteredUser(user) {
  let registered = [];
  try { registered = JSON.parse(localStorage.getItem('users')) || []; } catch {}
  registered.push(user);
  localStorage.setItem('users', JSON.stringify(registered));
}
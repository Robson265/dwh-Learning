import { Outlet } from 'react-router-dom';
// import SideBar from '../components/sideBar';
import NavBar from '../components/NavBar';
import '../style/SideBar.css'; // Make sure your styles are imported

export default function Layout() {
  return (
    <div className="app-layout">
      {/* SideBar handles your logo, navigation, and login/register buttons */}
      {/* <SideBar /> */}
      <NavBar />

      {/* The current page content renders inside this Outlet */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
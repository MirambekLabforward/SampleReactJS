import {Outlet} from 'react-router-dom';
import Menu from '../Menu';
import './Layout.scss';

function Layout() {
    return (
<div className="App">
  <nav className="app__sidebar" >
    <Menu/>
  </nav>
  <main className="app__content">
  <Outlet />
  </main>
</div>
    );
  }
  
  export default Layout;
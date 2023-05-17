import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.pageContainer}>
      <header className={css.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? css.buttonActive : css.button
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/tweets"
          className={({ isActive }) =>
            isActive ? css.buttonActive : css.button
          }
        >
          TWEETS
        </NavLink>
      </header>
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;

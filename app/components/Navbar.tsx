import { Link, NavLink } from '@remix-run/react';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md mb-4">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost btn-sm text-xl">
          Remix.run
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3 px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/expenses">Expenses</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary text-white btn-sm">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

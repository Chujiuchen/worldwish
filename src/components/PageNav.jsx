import { NavLink, Link } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo.jsx";

function PageNav() {
  return (
    <nav className={style.nav}>
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

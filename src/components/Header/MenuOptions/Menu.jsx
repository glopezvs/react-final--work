import styles from "../MenuOptions/menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className={styles.menu}>
        <ul className={styles.menuItems}>
          <li className={styles.menuItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/works">Works</NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

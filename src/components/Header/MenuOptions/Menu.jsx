import styles from "../MenuOptions/menu.module.scss";
import { NavLink } from "react-router-dom";
import menu from "../../../assets/menu.svg";
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
        <img className={styles.menuImage} src={menu} alt="menu" />
      </nav>
    </div>
  );
};

export default Menu;

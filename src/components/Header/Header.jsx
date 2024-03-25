import NameLogo from "../Header/NameLogo/NameLogo";
import styles from "../Header/header.module.scss";
import Menu from "../Header/MenuOptions/Menu";
import ButtonInfo from "../Header/ButtonInfo/ButtonInfo";

export default function Header() {
  return (
    <div className={styles.header}>
      <NameLogo />
      <Menu />
      <ButtonInfo />
    </div>
  );
}

import styles from "../MenuOptions/menu.module.scss"

function Menu (){
    return(
         <div className={styles.menu} >
            <ul className={styles.menuItems} >
              <li>Home</li>
              <li>About</li>
              <li>Works</li>
              <li>Contacts</li>
            </ul>
          </div>
    )
}

export default Menu;

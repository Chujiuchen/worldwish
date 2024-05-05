import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>lot of cities</p>
      <footer className={styles.footer}>© Copying 2024 Worldwish Inc.</footer>
    </div>
  );
}

export default Sidebar;

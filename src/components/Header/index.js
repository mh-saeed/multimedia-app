import { styles } from "./styled";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.headerText}>MS’s Drive</h1>
      <p style={styles.headerSubText}>A File Manager created by mh-saeed</p>
    </header>
  );
};

export default Header;

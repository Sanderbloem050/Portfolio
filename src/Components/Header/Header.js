import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>Welkom Sander Bloem</h1>
      </div>
      <div className={classes.socials}>
        <button>GitHub</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
      </div>
    </div>
  );
}
export default Header;

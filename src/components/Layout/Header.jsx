import mealsImg from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>Foodiee</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table with food" />
      </div>
    </>
  );
};

export default Header;

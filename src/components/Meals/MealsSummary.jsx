import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Get your favourite food delivered!</h2>
      <p>
        Pick your favorite meal from our broad selection of meals and enjoy
        without even leaving your house.
      </p>
      <p>Only fresh ingredients, highest quality food guaranteed!</p>
    </section>
  );
};

export default MealsSummary;

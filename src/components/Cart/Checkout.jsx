import useInput from "../hooks/useInput";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const isFiveChars = (value) => value.trim().length === 5;

const errorMessage = {
  name: "Please enter a valid name.",
  street: "Please enter a valid street.",
  postal: "Please enter a valid postal code.",
  city: "Please enter a valid city.",
};

const Checkout = ({ onCancel, onConfirm }) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput(isFiveChars, isNotEmpty);
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });

    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const nameInputClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;
  const streetInputClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;
  const postalInputClasses = `${classes.control} ${
    postalHasError ? classes.invalid : ""
  }`;
  const cityInputClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>{errorMessage.name}</p>
        )}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && (
          <p className={classes["error-text"]}>{errorMessage.street}</p>
        )}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && (
          <p className={classes["error-text"]}>{errorMessage.postal}</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && (
          <p className={classes["error-text"]}>{errorMessage.city}</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;

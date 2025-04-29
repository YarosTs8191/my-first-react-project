import css from "./LoginForm.module.css";

export default function LoginForm() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };
  console.log("Hello");
  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <input className={css.inputField} type="text" name="login" />
      <input className={css.inputField} type="password" name="password" />
      <button className={css.submitButton} type="submit">
        Login
      </button>
    </form>
  );
}

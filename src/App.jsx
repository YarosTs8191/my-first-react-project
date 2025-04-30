import React from "react";
import Product from "./components/Product/Product";
import LoginForm from "./components/LoginForm/LoginForm";
import clsx from "clsx";
import css from "./App.module.css";

export default function App() {
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  return (
    <>
      <section className={css.productSection}>
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />

        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </section>
      <section className={css.productSection}>
        <h1 className={css.productTitle}>Please login to your account!</h1>
        <LoginForm onLogin={handleLogin} />
      </section>
    </>
  );
}

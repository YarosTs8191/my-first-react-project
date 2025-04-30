import css from "./Product.module.css";
export default function Product({ name, imgUrl, price }) {
  return (
    <div className={css.productContainer}>
      <h2 className={css.productTitle}>{name}</h2>
      <img className={css.productImg} src={imgUrl} alt={name} width="480" />
      <p className={css.productText}>Price: {price} credits</p>
    </div>
  );
}

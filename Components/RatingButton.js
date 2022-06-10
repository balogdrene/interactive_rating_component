import styles from "../styles/RatingButton.module.css"
export default function RatingButton({ children, number }) {
  console.log(number)
  return <button className={styles.rating_button}>{children}</button>
}

import styles from "../styles/Button.module.css"

export default function Button({ children, onSubmit }) {
  console.log(onSubmit)
  return (
    <button onClick={onSubmit} className={styles.button}>
      {children}
    </button>
  )
}

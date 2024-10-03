import styles from './taskInput.module.scss'
export default function TaskInput() {
  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' className={styles.input} placeholder='caption goes here' />
        <button type='submit'>✔</button>
      </form>
    </div>
  )
}

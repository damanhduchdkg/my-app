import styles from './taskList.module.scss'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoàn thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' name='' />
          <span className={styles.taskname}>Học bài</span>
          <div className={styles.taskActions}>
            <button className={styles.btn}>🖊</button>
            <button className={styles.btn}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}

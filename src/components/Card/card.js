

import styles from './card.module.css'


export default function card({title, children}){
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}
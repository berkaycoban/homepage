import cn from 'classnames'

import styles from './style.module.css'

export default function SectionTitle({
  className,
  subTitle,
  center,
  children
}) {
  return (
    <div className={center && styles.center}>
      <h3 className={cn([styles.sectionTitle, className])}>{children}</h3>
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
    </div>
  )
}

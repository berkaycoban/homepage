import cn from 'classnames'

import styles from './style.module.css'

export default function Title({ children, className }) {
  return <h1 className={cn([styles.title, className])}>{children}</h1>
}

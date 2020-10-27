import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './style.module.css'

function LinkButton({ children, className, ...props }) {
  return (
    <Link href={props.href}>
      <a className={className} rel="noopener" {...props}>
        {children}
      </a>
    </Link>
  )
}

function BaseButton({ className, children, ...props }) {
  return (
    <button type="button" className={cn([styles.button, className])} {...props}>
      {children}
    </button>
  )
}

function Button({ children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton

  return (
    <Comp className={className} {...props}>
      {children}
    </Comp>
  )
}

export default Button

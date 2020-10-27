import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Button from '../button'

import siteConfig from '../../../site.config'

function Logo({ className }) {
  return (
    <div className={cn([styles.logo, className])}>
      <Button href={'/'}>{siteConfig.title}</Button>
    </div>
  )
}

export default Logo

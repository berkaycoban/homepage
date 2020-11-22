import cn from 'classnames'

import styles from './style.module.css'

import Button from 'components/button'

import siteConfig from 'config'

function Logo({ className }) {
  return (
    <div className={cn([styles.logo, className])}>
      <Button href={'/'}>{siteConfig.title}</Button>
    </div>
  )
}

export default Logo

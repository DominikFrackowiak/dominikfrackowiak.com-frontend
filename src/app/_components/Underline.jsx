'use client'

import styles from './Underline.module.scss'

export default function Underline({style}) {
  return (
    <div className={styles.underline} style={style}></div>
  )
}

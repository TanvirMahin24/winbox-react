import React from 'react'
import WinBox from 'winbox/src/js/winbox'
import 'winbox/dist/css/winbox.min.css'
import styles from './styles.module.css'

export const ExampleComponent = ({}) => {
  const modal = new WinBox()
  modal.setBackground('var(--color_orange)')
  modal.setTitle(`${institution}`)
  return <div className={styles.test}>Example Component: </div>
}

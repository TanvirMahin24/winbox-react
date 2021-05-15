import React from 'react'
import { VscGithubAlt, VscMail, VscTwitter } from 'react-icons/vsc'
import { RiFacebookLine, RiLinkedinLine } from 'react-icons/ri'
import data from '../../stub/SocialLinks/data'
import styles from './SocialIcons.module.css'

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      <a href={data.facebook}>
        <RiFacebookLine />
      </a>
      <a href={data.twitter}>
        <VscTwitter />
      </a>
      <a href={data.linkedin}>
        <RiLinkedinLine />
      </a>
      <a href={data.github}>
        <VscGithubAlt />
      </a>
      <a href={data.email}>
        <VscMail />
      </a>
    </div>
  )
}

export default SocialIcons

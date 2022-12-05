import * as React from "react"
import * as styles from "./_Footer.module.scss"
import * as mainstyles from "../../style/_style.module.scss"

const Footer = () => {

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <span>© {new Date().getFullYear()}, GROUFO AUTO RENTAL, all rights reserved</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
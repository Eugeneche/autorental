import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import "../style/_map.module.scss"

import fb from "../../src/images/icons/fb.svg"
import i from "../../src/images/icons/insta_logo.svg"
import yt from "../../src/images/icons/yt-icon.svg"

const Contacts = () => (
  <Layout>
    <div className={styles.contentContainer}>
      <div className={styles.gap}></div>
      <div className={styles.gap}></div>
      <h1>contacts</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.826726487656!2d-89.98705192506235!3d35.11103736108706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f8746cf676709%3A0x75af40ef92b13e3a!2zSSS!5e0!3m2!1sru!2scz!4v1691861991857!5m2!1sru!2scz" title="myFrame" style={{border:0, height: "600px", width:"100%", marginBottom: "50px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* <div className={styles.gap}></div> */}
      <div className={styles.contacts}>
        <div>
          <p>1264 Airways Blvd</p>
          <p>Memphis, TN</p>
          <p>38114, USA</p>
        </div>
        <div>
          <p><a href="tel:+012555456789">+012 555 456 789</a></p>
          <p><a href="mailto:info@cruiseease.com">info@cruiseease.com</a></p>
          <span>
            <a href="https://www.facebook.com/"><img src={fb}></img></a>
            <a href="https://www.instagram.com/"><img src={i}></img></a>
            <a href="https://www.youtube.com/"><img src={yt}></img></a>
          </span>
        </div>

      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contacts Cruise Ease car rental" />

export default Contacts

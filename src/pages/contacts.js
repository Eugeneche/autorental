import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import "../style/_map.module.scss"

const Contacts = () => (
  <Layout>
    <div className={styles.contentContainer}>
      <div className={styles.gap}></div>
      <div className={styles.gap}></div>
      <h1>contacts</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.9949468452505!2d-98.69384244502993!3d35.52912254758416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ac26659acfec89%3A0x755311496529913a!2sSupercuts!5e0!3m2!1sru!2scz!4v1677359003129!5m2!1sru!2scz" title="myFrame" style={{border:0, height: "600px", width:"100%", marginBottom: "50px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Contacts Cruise Ease car rental" />

export default Contacts

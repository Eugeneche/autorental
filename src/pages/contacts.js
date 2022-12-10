import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import "../style/_map.module.scss"

const Contacts = () => (
  <Layout>
    <Seo title="Podminky" />
    <div className={styles.contentContainer}>
      <div className={styles.gap}></div>
      <h1>Hi from the second page</h1>
      <iframe src="https://storage.googleapis.com/maps-solutions-7uglb5yzl3/commutes/7ted/commutes.html"
  width="100%" 
  style={{border:0, height:"100vh !important"}}
  loading="lazy">
</iframe>
      <p></p>

    </div>
  </Layout>
)

export default Contacts

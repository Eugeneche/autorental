import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

const Conditions = () => (
  <Layout>
    <Seo title="Podminky" />
    <div className={styles.contentContainer}>
      <div className={styles.gap}></div>
      <h1>Podmínky půjčení auta</h1>
      <h2>Co potřebuji pro pronájem auta?</h2>
      <p>Vše co potřebujete pro zarezervování Vašeho auta je kreditní nebo debitní karta. Při vyzvednutí Vašeho auta budete potřebovat:
Váš poukaz / ePoukaz, k prokázání Vaší platby za auto.
Kreditní / debitní karta hlavního řidiče, s dostatkem dostupné hotovosti pro bezpečnostní zálohu auta.
Pro každého řidiče plný, platný řidičský průkaz, který vlastní po dobu alespoň 12 měsíců (často 24).
Váš cestovní pas a jakýkoliv další průkaz totožnosti který potřebuje autopůjčovna vidět.</p>
 
    </div>
  </Layout>
)

export default Conditions

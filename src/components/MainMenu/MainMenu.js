import * as React from "react"
import * as styles from "./_MainMenu.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import logo_rect from "../../images/logo_rect.png"

const MainMenu = () => {

    const data = useStaticQuery(graphql`
        query getCats {
            mdx(fields: {slug: {eq: "/categories/"}}) {
                frontmatter {
                  categories
                }
              }
        }
    `)

    const vehiclesCategories = data.mdx.frontmatter.categories

    return (
        <>
            <div className={styles.mainMenu}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={logo_rect} alt="groufo logo"></img>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.pages}>
                            <ul>
                                <li className={styles.vehicles}>
                                    <div className={styles.vehiclesArea}></div>
                                    Cars&nbsp;&nbsp;<span style={{display: "inline-block", color: "grey",  transform: "rotate(90deg)", top: "7px"}}>&#10095;</span>
                                    <ul className={styles.vehiclesCategories}>
                                    {vehiclesCategories.map(cat => {
                                        const url = cat.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                                        return <li key={cat} className={styles.category}><Link to={"/"+url}>{cat}</Link></li>
                                    })}
                                </ul>
                                </li>
                                <li>
                                    <Link to="/conditions">Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>

                        </div>
                        <div className={styles.socials}>
                            <span>Call us:&nbsp;</span><a href="tel:+012555456789">555 456 789</a>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    )
}

export default MainMenu
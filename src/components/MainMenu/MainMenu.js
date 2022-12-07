import * as React from "react"
import * as styles from "./_MainMenu.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import logo from "../../images/groufo_logo_yellow_white.svg"
//import { StaticImage } from "gatsby-plugin-image"

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
                            <img src={logo} alt="groufo logo"></img>
                        </Link>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.pages}>
                            <ul>
                                <li className={styles.vehicles}>
                                    {/* <Link to="/vehicles">Auta&nbsp;<span style={{display: "inline-block", color: "grey",  transform: "rotate(90deg)", top: "7px"}}>&#10095;</span></Link> */}
                                    Auta&nbsp;<span style={{display: "inline-block", color: "grey",  transform: "rotate(90deg)", top: "7px"}}>&#10095;</span>
                                    <ul className={styles.vehiclesCategories}>
                                    {vehiclesCategories.map(cat => {
                                        const url = cat.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                                        return <li key={cat} className={styles.category}><Link to={"/"+url}>{cat}</Link></li>
                                    })}
                                </ul>
                                </li>
                                <li>
                                    <Link to="/conditions">Podminky</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Kontakty</Link>
                                </li>
                            </ul>

                        </div>
                        <div className={styles.socials}>
                            <span>Zavolejte nám:&nbsp;</span><a href="tel:+420736195020">736 195 020</a>
                        </div>
                    </div>
                </div>
            </div>
        </>       
    )
}

export default MainMenu
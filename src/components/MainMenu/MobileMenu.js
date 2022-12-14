import React, { useState, useEffect } from "react"
import * as styles from "./_MainMenu.module.scss"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import logo from "../../images/groufo_logo_yellow_white.svg"
import logo_mob from "../../images/groufo_logo_yellow_white_mobile.svg"
import menu from "../../images/icons/hamb-menu.svg"
import phone from "../../images/icons/phone.svg"
import close from "../../images/icons/close.svg"

const MobileMenu = () => {

    const data = useStaticQuery(graphql`
    query getCategories {
        mdx(fields: {slug: {eq: "/categories/"}}) {
          frontmatter {
            categories
          }
        }
      }
    `)

    const vehiclesCategories = data.mdx.frontmatter.categories
    //console.log(data.mdx.frontmatter.categories)

    const[isShow, setShow] = useState(false)
    const [width, setWidth] = useState('')

    useEffect(() => {

        setWidth(window.innerWidth)
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        window.removeEventListener('resize', () => setWidth(window.innerWidth))
        return () => { 
        setWidth('')}
    }, [])

    const showMobileMenu = () => {
        setShow(true)
    }

    const closeMobileMenu = () => {
        setShow(false)
    }

    return (
        <>
            <div className={styles.mainMenu}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src={width > 667 ? logo : logo_mob} alt="groufo logo"></img>
                        </Link>
                    </div>
                    <div className={styles.phone}>
                        <a href="tel:+420736195020"><img src={phone} alt="phone icon"></img><span>736 195 020</span></a>
                    </div>
                    <div className={styles.hamburger}>
                        <img src={menu} alt="hamburger menu icon" onClick={showMobileMenu}></img>
                    </div>
                </div>
            </div>
            <div className={styles.mobileMenuShadow}
                style={isShow ? {left: "0"} : {left: "-100%"}}>
                <div className={styles.mobileMenu}>
                    <img src={close} className={styles.close} alt="close icon" onClick={closeMobileMenu}></img>

                    <div className={styles.mobileMenuPages}>
                        <ul>
                            <li>
                                <Link to="/">Dom??</Link>
                            </li>
                            <li className={styles.mobileVehicles}>
                            {/* <li>Auta</li> */}
                                <ul className={styles.mobileVehiclesCategories}>
                                    {vehiclesCategories.map(cat => {
                                        const url = cat.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()
                                        return <li key={cat} className={styles.mobileCategory}><Link to={"/"+url}>{cat}</Link></li>
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

                </div>
            </div>
        </>
    )
}

export default MobileMenu
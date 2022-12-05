import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_HeaderSlider.module.scss"
import wallet from "../../images/icons/wallet.svg"
import cars from "../../images/icons/cars.svg"
import time from "../../images/icons/time.svg"
import fullLogo from "../../images/groufo_logo_2.png"


const HeaderSlider = () => {

    return (
        <div className={styles.headerSlider}>
            <div className={styles.cover}></div>
            <div className={styles.hero}>
                <div className={styles.topBackground}>
                    <div className={styles.fullLogo}>
                        <img src={fullLogo} alt="Groufo logo"></img>
                    </div>
                    <div className={styles.heroText}>
                        <h4 className={styles.mainHeroText}>Autopůjčovna</h4>
                        <h2 className={styles.mainHeroText}>Groufo</h2>
                        <h4 className={styles.subHeroText}>spolehlivě</h4>
                        <h4 className={styles.subHeroText}>rychle</h4>
                        <h4 className={styles.subHeroText}>výhodné</h4> 
                    </div>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.advantageItem}>
                        <img src={wallet} alt="wallet icon"></img>
                        <span className={styles.advantageTitle}>Nejlepší ceny</span>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={time} alt="short time icon"></img>
                        <span className={styles.advantageTitle}>Rychlé a jednoduché půjčení</span>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={cars} alt="cars icon"></img>
                        <span className={styles.advantageTitle}>Velký výběr vozidel</span>
                    </div>
                </div>
            </div>
            <StaticImage className={styles.artDirected}
                src="../../images/header_slider/slider_3.jpg"
                height={1600}
                quality={100}
                layout="constrained"
                style={{left: "50%",
                        transform: "translate(-50%, 0)"}}
                formats={["auto", "webp", "avif"]}
                alt="A woman rented a car"
            />     
                 
        </div>
    )
}

export default HeaderSlider
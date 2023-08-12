import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_HeaderSlider.module.scss"
import wallet from "../../images/icons/wallet.svg"
import cars from "../../images/icons/cars.svg"
import time from "../../images/icons/time.svg"
import fullLogo from "../../images/logo_round.png"


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
                        <h4 className={styles.mainHeroText}>Car rental</h4>
                        <h2 className={styles.mainHeroText}>CruiseEase</h2>
                        <h4 className={styles.subHeroText}>reliably</h4>
                        <h4 className={styles.subHeroText}>fast</h4>
                        <h4 className={styles.subHeroText}>profitable</h4> 
                    </div>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.advantageItem}>
                        <img src={wallet} alt="wallet icon"></img>
                        <span className={styles.advantageTitle}>Best prices</span>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={time} alt="short time icon"></img>
                        <span className={styles.advantageTitle}>Quick and easy rental</span>
                    </div>
                    <div className={styles.advantageItem}>
                        <img src={cars} alt="cars icon"></img>
                        <span className={styles.advantageTitle}>Large range of vehicles</span>
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
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm José Fernando</h1>
                <p className={styles.description}>
                    I'm a <b>Full-Stack Developer</b> and <b>Data Analyst</b> with 3 years of experience using Java, Spring Boot and SQL!
                </p>
                <p className={styles.description}>
                    Reach out if you want to learn more!
                </p>
                <a href="mailto:rossijosefernando@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/professional_profile.jpg")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
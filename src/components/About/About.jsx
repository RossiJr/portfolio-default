import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="I am sitting with my laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/fullstack.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Developer</h3>
                            <p>Experience developing web applications using Java, Spring Boot, React, JSF, and SQL</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/backend.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Experience developing optimized RESTful APIs using Java with Spring Boot and Python with Django</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/analytics.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Analyst</h3>
                            <p>Experience developing Power BI dashboards and building optmized SQL queries and ETL processes</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    );
};
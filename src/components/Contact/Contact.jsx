import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>  
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:rossijosefernando@gmail.com" target="_blank">rossijosefernando@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/josefernandorossi/" target="_blank">linkedin.com/in/josefernandorossi/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                    <a href="https://github.com/RossiJr" target="_blank">github.com/RossiJr</a>
                </li>
            </ul>
        </footer>
    );
};
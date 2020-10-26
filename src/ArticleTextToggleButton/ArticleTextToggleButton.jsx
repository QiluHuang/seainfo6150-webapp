import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = ({buttonText, onClick}) => {
    return (
    <button onClick={onClick} className={styles.button} type="button">{buttonText}</button> 
    )
}

export default ArticleTextToggleButton;
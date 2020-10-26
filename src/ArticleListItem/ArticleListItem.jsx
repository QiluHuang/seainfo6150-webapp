import React, {useState} from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const handleClick = () => {
    setToggleStatus(!toggleStatus);
  }


  let textContent;
  if (toggleStatus) {
      textContent = "Show less";
  } else {
      textContent = "Show more";
  }

  return (
  <li className={styles.listItem}>
      <article className={styles.item}>
        <h2>{props.article.title}</h2>
        
        {toggleStatus === true ? <p className={styles.shortLine}>{props.article.shortText}</p> : null}
        {toggleStatus === true ? <time dateTime={props.article.timeStamp} className={styles.time}>{props.article.displayDate}</time> : null}

        
        <ArticleTextToggleButton buttonText={textContent} onClick={handleClick}></ArticleTextToggleButton>
      </article>
    </li>
  );
};


export default ArticleListItem
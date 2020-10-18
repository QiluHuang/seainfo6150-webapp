import React, { useEffect, useState } from "react";
import ArticleListItem from '../ArticleListItem/ArticleListItem.jsx';
  

  const ArticleList = (props) => {
      return (
          <ul>
              {Object.keys(props.articles).map((articleKey) => (
                  <li key={articleKey}>
                      <ArticleListItem article={props.articles[articleKey]}/>
                  </li>
              ))}
          </ul>
        );
  }
  
  export default ArticleList
import React, { useEffect, useState } from "react";


const ArticleListItem = (props) => {
    return (
        <div>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p>{props.article.shortText}</p>
        </div>
      ); 
}

export default ArticleListItem
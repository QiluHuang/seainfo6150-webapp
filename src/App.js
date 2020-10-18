import React, { useEffect, useState } from "react";
import ArticleList from './ArticleList/ArticleList';
import { isEmpty } from "lodash";
import './App.css';


function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      console.log(responseJson)
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;
  if (!isEmpty(fetchedData)) {
    console.log(fetchedData)
    displayContent = (
      <ArticleList articles={fetchedData}/>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      {displayContent}
    </section>
  );
}

export default App;

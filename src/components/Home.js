import React, { useEffect, useState, } from "react";

//Create our root component =>  App component
function Blog() {
  //Set up our state
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);
  
  //Set our initial state
  useEffect(() => {
    //List News Items
    const newsItems = [
      {
        title: "Al Ahli agree €80m fee for Osimhen, player to sign £646,000-a-week deal",
        url: "https://dailypost.ng/2024/08/30/al-ahli-agree-e80m-fee-for-osimhen-player-to-sign-646000-a-week-deal/",
        description: "Latest news",
        Date: "30/08/2024 | 11:00am",
      },
      {
        title: "Tinubu okays 50% electricity subsidy for hospitals, others",
        url: "https://punchng.com/tinubu-okays-50-electricity-subsidy-for-hospitals-others/",
        description: "Latest news",
        Date: "30/08/2024 | 9:00am",
      },
      {
        title: "Edun commends military’s role in economic recovery",
        url: "https://thenationonlineng.net/edun-commends-militarys-role-in-economic-recovery/",
        description: "Latest news",
        Date: "29/08/2024 | 10:00am",
      },
      {
        title: "DSS gets court order to freeze 20 bank accounts of female suspected terrorist",
        url: "https://dailypost.ng/2024/08/30/dss-gets-court-order-to-freeze-20-bank-accounts-of-female-suspected-terrorist/",
        description: "Latest news",
        Date: "30/08/2024 | 11:30am",
      },
      {
        title: "Serve Nigeria with unreserved loyalty, Benue gov urges corps members",
        url: "https://punchng.com/serve-nigeria-with-unreserved-loyalty-benue-gov-urges-corps-members/",
        description: "Latest news",
        Date: "30/08/2024 | 12:00pm",
      },
    ];
    const item = newsItems[currentPosition];
    //Set state
    setListItems(newsItems);
    //Set our state
    setNews(item);
    setLoading(false);
  }, [currentPosition]);
  //Handle next button click
  const handleNext = (event) => {
    event.preventDefault();
    //Update our state
    const length = listItems.length;
    const count = length - 1;
    if(currentPosition < count) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0);
    }
    };
    
  //Handle previous button click
  const handlePrevious = (event) => {
    event.preventDefault();
    //Update our state
    if(currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1); 
    } else {
      setCurrentPosition(0);
    }
  };
  return (
    <section className="main-container">
      <section className="news">
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="news-item">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <p>{news.Date}</p>
            <a href={news.url}>{news.url}</a>
          </div>
        )}
      </section>
      <div className="pagination">
        <button className="prev" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}
<<<<<<< HEAD
export default Blog;
=======
export default Blog;
>>>>>>> f60a4f4d32255aa0569807ce23e822d130b4075e

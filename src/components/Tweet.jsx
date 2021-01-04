import "../styles/Tweet.scss";

const Tweet = ({ id, message, tweets, setTweets }) => {
  // Functions
  const deleteTweet = () => {
    setTweets(tweets.filter((tweet) => tweet.id !== id));
  };
  // UI
  return (
    <div className="tweet">
      <h2>Tweet</h2>
      <h3>{message}</h3>
      <button onClick={() => deleteTweet()}>delete</button>
      <button>like</button>
    </div>
  );
};

export default Tweet;

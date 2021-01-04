import Tweet from "./Tweet";

const Tweets = ({ tweets, setTweets }) => {
  // State tweets up in App module
  // Functions
  const tweetsHandler = tweets.map((tweet) => {
    return (
      <li>
        <Tweet
          key={tweet.id}
          id={tweet.id}
          message={tweet.message}
          tweets={tweets}
          setTweets={setTweets}
        />
      </li>
    );
  });

  // UI
  return (
    <div className="tweets">
      <ul>{tweetsHandler}</ul>
    </div>
  );
};

export default Tweets;

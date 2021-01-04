import { useState } from "react";
import Tweets from "./components/Tweets";
import CreateTweet from "./components/CreateTweet";

function App() {
  // State
  let [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <CreateTweet tweets={tweets} setTweets={setTweets} />
      <Tweets tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;

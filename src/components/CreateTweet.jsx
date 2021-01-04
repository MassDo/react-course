import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ tweets, setTweets }) => {
  // State
  let [textInput, setTextInput] = useState("");
  // Functions
  const createTweet = (e) => {
    e.preventDefault();
    // ajouter un tweets a tweets
    setTweets([...tweets, { id: uuidv4(), message: textInput }]);
    setTextInput("");
  };

  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  // Ui
  return (
    <form>
      <textarea
        onChange={(e) => textInputHandler(e)}
        value={textInput}
        cols="10"
        rows="5"
      ></textarea>
      <button onClick={(e) => createTweet(e)}>Submit</button>
    </form>
  );
};

export default CreateTweet;

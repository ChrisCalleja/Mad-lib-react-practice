import "./CreateStoryRoute.css";
import { FormEvent, useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";
import { useNavigate } from "react-router-dom";

const CreateStoryRoute = () => {
  const { addStory } = useContext(StoriesContext);
  const [author, setAuthor] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");
  const [word6, setWord6] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addStory({ author, word1, word2, word3, word4, word5, word6 });
    navigate("/stories");
  };

  return (
    <form className="CreateStoryRoute" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="place">Place</label>
      <input
        type="text"
        name="place"
        id="place"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
      />
      <label htmlFor="person">Person</label>
      <input
        type="text"
        name="person"
        id="person"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <label htmlFor="silly">Silly word</label>
      <input
        type="text"
        name="silly"
        id="silly"
        value={word3}
        onChange={(e) => setWord3(e.target.value)}
      />
      <label htmlFor="occupation">Occupation</label>
      <input
        type="text"
        name="occupation"
        id="occupation"
        value={word4}
        onChange={(e) => setWord4(e.target.value)}
      />
      <label htmlFor="number">Number</label>
      <input
        type="text"
        name="number"
        id="number"
        value={word5}
        onChange={(e) => setWord5(e.target.value)}
      />
      <label htmlFor="tagline">Brand Tagline</label>
      <input
        type="text"
        name="tagline"
        id="tagline"
        value={word6}
        onChange={(e) => setWord6(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateStoryRoute;

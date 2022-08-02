import "./CreateStoryRoute.css";
import { useContext, useState } from "react";
import StoriesContext from "../context/StoriesContext";

const CreateStoryRoute = () => {
  const { addStory } = useContext(StoriesContext);
  const [] = useState("");
  return (
    <form className="CreateStoryRoute">
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" value={} />
      <label htmlFor="place">Place</label>
      <input type="text" name="place" id="place" />
      <label htmlFor="person">Person</label>
      <input type="text" name="person" id="person" />
      <label htmlFor="silly-word">Silly Word</label>
      <input type="text" name="silly-word" id="silly-word" />
      <label htmlFor="occupation">Occupation</label>
      <input type="text" name="occupation" id="occupation" />
      <label htmlFor="number">Number</label>
      <input type="text" name="number" id="number" />
      <label htmlFor="brand-tagline">Brand Tagline</label>
      <input type="text" name="brand-tagline" id="brand-tagline" />
    </form>
  );
};

export default CreateStoryRoute;

import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const { stories } = useContext(StoriesContext);
  const id: string | undefined = useParams().id;

  const story: Story | undefined = stories.find(
    (story) => story.id === parseInt(id!)
  );

  return (
    <div className="ViewStoryRoute">
      {story ? (
        <>
          <h2>Mad Lib by: {story.author}</h2>
          <p>
            When I went to {story.word1}, I ran into {story.word2}
          </p>
          <p>
            They were in a hurry because they were meeting {story.word3}, the{" "}
            {story.word4}, in {story.word5} minutes!
          </p>
          <p>So we said "{story.word6}" and parted ways.</p>
        </>
      ) : (
        <>
          <p> No story here </p>
          <Link to="/create-story">Make a story?</Link>
        </>
      )}
    </div>
  );
};

export default ViewStoryRoute;

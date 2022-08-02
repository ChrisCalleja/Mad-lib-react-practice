import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  return (
    <div className="ViewStoryRoute">
      <h2>Mad Lib by: {story.author}</h2>
      <p>
        When I went to {story.word1}, I ran into {story.word2}
      </p>
      <p>
        They were in a hurry because they were meeting {story.word3}, the{" "}
        {story.word4}, in {story.word5} minutes!
      </p>
      <p>So we said "{story.word6}" and parted ways.</p>
    </div>
  );
};

export default ViewStoryRoute;

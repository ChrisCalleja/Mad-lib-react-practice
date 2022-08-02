import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Chris",
      word1: "Canton",
      word2: "Emily",
      word3: "hyperbole",
      word4: "engineer",
      word5: "9",
      word6: "I make car parts",
    },
    {
      id: 2,
      author: "Frank",
      word1: "the dessert",
      word2: "Jake Gyllinhol",
      word3: "bloated",
      word4: "dish washer",
      word5: "26541",
      word6: "we da best",
    },
  ]);
  const addStory = (story: Story): void => {
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;

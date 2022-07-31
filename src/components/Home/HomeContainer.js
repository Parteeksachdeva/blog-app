import axios from "axios";
import React, { useEffect, useState } from "react";

import HomeComponent from "./HomeComponent";

export default function HomeContainer() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setAllPosts(data);
    });
  }, []);

  console.log({ allPosts });

  return <HomeComponent {...{ allPosts }} />;
}

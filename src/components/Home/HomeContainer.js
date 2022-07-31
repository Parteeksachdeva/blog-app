import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_URL } from "../../common/constants";
import HomeComponent from "./HomeComponent";

export default function HomeContainer() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/posts`)
      .then(({ data }) => {
        setAllPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log({ allPosts });

  return <HomeComponent {...{ allPosts }} />;
}

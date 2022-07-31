import axios from "axios";
import React, { useEffect, useState } from "react";

import { API_URL } from "../../common/constants";
import HomeComponent from "./HomeComponent";

export default function HomeContainer() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/posts`)
      .then(({ data }) => {
        setAllPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <HomeComponent {...{ allPosts, isLoading }} />;
}

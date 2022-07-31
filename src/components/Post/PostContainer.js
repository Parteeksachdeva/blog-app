import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_URL } from "../../common/constants";
import PostComponent from "./PostComponent";

export default function PostContainer() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  const handleClick = () => {
    navigate(`/`);
  };

  const fetchPostById = useCallback(() => {
    axios
      .get(`${API_URL}/posts/${postId}`)
      .then(({ data }) => {
        setPost(data);
        setIsPostLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postId]);

  const fetchComments = useCallback(() => {
    axios
      .get(`${API_URL}/comments?postId=${postId}`)
      .then(({ data }) => {
        setComments(data);
        setIsCommentsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postId]);

  useEffect(() => {
    fetchPostById();
  }, [fetchPostById]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <PostComponent
      {...{ post, handleClick, comments, isPostLoading, isCommentsLoading }}
    />
  );
}

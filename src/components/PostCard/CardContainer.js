import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";

export default function CardContainer({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post?.id}`);
  };

  return <CardComponent {...{ post, handleClick }} />;
}

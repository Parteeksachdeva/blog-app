import React from "react";
import CardComponent from "./CardComponent";

export default function CardContainer({ comment }) {
  return <CardComponent {...{ comment }} />;
}

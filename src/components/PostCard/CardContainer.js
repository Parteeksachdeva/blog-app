import React from "react";
import CardComponent from "./CardComponent";

export default function CardContainer({ post }) {
  return <CardComponent {...{ post }} />;
}

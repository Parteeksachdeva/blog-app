import React from "react";
import CardContainer from "../PostCard/CardContainer";

export default function HomeComponent({ allPosts }) {
  return (
    <section className="grid grid-cols-4 gap-10 p-10">
      {allPosts.map((post, index) => (
        <CardContainer key={index} post={post} />
      ))}
    </section>
  );
}

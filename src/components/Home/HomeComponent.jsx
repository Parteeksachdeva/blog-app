import React from "react";
import CardContainer from "../PostCard/CardContainer";

export default function HomeComponent({ allPosts, isLoading }) {
  if (isLoading) {
    return <p className="p-10">Loading...</p>;
  }
  return (
    <section className="p-10 space-y-5">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {allPosts.map((post, index) => (
          <CardContainer key={index} post={post} />
        ))}
      </div>
    </section>
  );
}

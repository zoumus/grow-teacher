import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../../store/reducers/posts_reducer";
import PostsIndexItem from "../PostsIndexItem"

const SearchIndex = () => {
  const posts = useSelector(getPosts);

  let searchResults;
  if (posts.length === 0) {
    searchResults = (
      <div className="search-error">no matching posts found...</div>
    )
  } else {
    searchResults = (
      <>
        <ul className="search-result-list">
          {posts.map(post => {
            return <PostsIndexItem post={post} key={post._id} />
          })}
        </ul>
      </>
    )
  }

  return (
    <>  <h1 id="search-header">Matching Results</h1>
      {searchResults}
    </>
  )
}

export default SearchIndex;

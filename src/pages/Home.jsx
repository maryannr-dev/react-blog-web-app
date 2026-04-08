import BlogCard from "../components/BlogCard";
import { useEffect } from 'react';
import { useState } from 'react';
import  axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setPosts(response.data))
    .catch(error => console.error('Error fetching posts:', error));
  }, []);
  return (
    <div>
        {posts.map((post) => (
        <div>
            <BlogCard key={post.id} post={post} />
        </div>
      ))}
      </div>
  );
}
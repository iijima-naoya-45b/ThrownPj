"use client";

import { useEffect, useState } from "react";
import { fetchPosts } from "../../api";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } finally {
        setLoading(false);
      }
    }

    loadPosts(); // コンポーネントマウント時にデータを取得
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string; content: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

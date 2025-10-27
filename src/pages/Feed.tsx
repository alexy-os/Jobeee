import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { StoriesBar } from "@/components/StoriesBar";
import { CreatePost } from "@/components/CreatePost";
import { Post, PostData } from "@/components/Post";
import { getFeedPosts } from "@/data";

const Feed = () => {
  // Convert data format to match PostData interface
  const feedPosts = getFeedPosts().map(item => ({
    id: item.id,
    username: item.author?.username || "unknown",
    displayName: item.author?.displayName || "Unknown",
    avatarUrl: item.author?.avatarUrl || "",
    content: item.title + "\n\n" + item.content,
    timestamp: item.timestamp,
    likes: item.likes,
    comments: item.comments,
    isLiked: item.isLiked,
    isFavorited: item.isFavorited,
    imageUrl: item.imageUrl,
    scenario: item.scenario,
    tags: item.tags,
    status: item.status
  }));

  const [posts, setPosts] = useState<PostData[]>(feedPosts);

  const handlePostCreated = (content: string, imageUrl?: string) => {
    const newPost: PostData = {
      id: posts.length + 1,
      username: "you",
      displayName: "You",
      avatarUrl: "",
      content,
      timestamp: "now",
      likes: 0,
      comments: 0,
      isLiked: false,
      isFavorited: false,
      imageUrl,
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleFavorite = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, isFavorited: !post.isFavorited }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-2xl mx-auto">
        <StoriesBar />
        <CreatePost onPostCreated={handlePostCreated} />
        <div>
          {posts.map((post) => (
            <Post 
              key={post.id} 
              post={post}
              onLike={handleLike}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Feed;

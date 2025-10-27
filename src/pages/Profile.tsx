import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Post, PostData } from "@/components/Post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProfilePosts, getCharacterById } from "@/data";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

const Profile = () => {
  // Use Mike Rodriguez (Administrator) as main profile
  const mainProfile = getCharacterById(3); // Mike Rodriguez - administrator
  const profileData = getProfilePosts(3); // Get posts and comments for administrator

  // Convert posts data
  const userPosts = profileData.posts.map(item => ({
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
  }));

  // Convert comments to posts format for display
  const userCommentsAsPosts = profileData.comments.map(comment => ({
    id: comment.id + 1000, // Offset to avoid conflicts
    username: comment.author?.username || "unknown",
    displayName: comment.author?.displayName || "Unknown",
    avatarUrl: comment.author?.avatarUrl || "",
    content: `Re: ${comment.post?.title}\n\n${comment.content}`,
    timestamp: comment.timestamp,
    likes: comment.likes,
    comments: 0,
    isLiked: comment.isLiked,
    isFavorited: false,
    isReply: true,
  }));

  // Get some liked posts from other users for demo
  const likedPosts = [
    {
      id: 101,
      username: "alex_barista",
      displayName: "Alex Chen",
      avatarUrl: "",
      content: "Great team coordination during rush hour today! Everyone stayed focused and efficient. Proud of our coffee shop family! ☕👨‍🍳",
      timestamp: "4h",
      likes: 12,
      comments: 3,
      isLiked: true,
      isFavorited: false,
    }
  ];

  const [posts, setPosts] = useState<PostData[]>([...userPosts, ...userCommentsAsPosts]);
  const [likedPostsState, setLikedPosts] = useState<PostData[]>(likedPosts);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleLike = (id: number) => {
    setPosts(posts.map(post =>
      post.id === id
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
    setLikedPosts(likedPostsState.map(post =>
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
    setLikedPosts(likedPostsState.map(post =>
      post.id === id
        ? { ...post, isFavorited: !post.isFavorited }
        : post
    ));
  };

  const allPosts = posts.filter(post => !post.isReply);
  const replies = posts.filter(post => post.isReply);
  const mediaPosts = posts.filter(post => post.imageUrl);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-primary via-accent to-primary" />
          <div className="absolute -bottom-16 left-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={avatarPlaceholder} alt="Your profile" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="px-4 pt-20 pb-4 border-b border-border">
          <div className="flex justify-end mb-4">
            <Button 
              variant={isFollowing ? "outline" : "default"}
              className="rounded-full"
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">{mainProfile?.displayName}</h2>
            <p className="text-muted-foreground">@{mainProfile?.username}</p>

            <p className="mt-3 text-foreground">
              {mainProfile?.bio}
            </p>

            <div className="flex gap-4 mt-3 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{mainProfile?.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Coffee Shop Manager</span>
              </div>
            </div>

            <div className="flex gap-4 mt-3">
              <div>
                <span className="font-bold text-foreground">42</span>
                <span className="text-muted-foreground ml-1">Simulations</span>
              </div>
              <div>
                <span className="font-bold text-foreground">156</span>
                <span className="text-muted-foreground ml-1">Following</span>
              </div>
              <div>
                <span className="font-bold text-foreground">1.2K</span>
                <span className="text-muted-foreground ml-1">Followers</span>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm font-medium text-foreground">Skills: {mainProfile?.skills.join(", ")}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="posts" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full rounded-none h-auto p-0 bg-transparent border-b border-border">
            <TabsTrigger 
              value="posts" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent py-4"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger 
              value="replies" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent py-4"
            >
              Replies
            </TabsTrigger>
            <TabsTrigger 
              value="media" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent py-4"
            >
              Media
            </TabsTrigger>
            <TabsTrigger 
              value="likes" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent py-4"
            >
              Likes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-0">
            {allPosts.map((post) => (
              <Post 
                key={post.id} 
                post={post}
                onLike={handleLike}
                onFavorite={handleFavorite}
              />
            ))}
          </TabsContent>

          <TabsContent value="replies" className="mt-0">
            {replies.map((post) => (
              <Post 
                key={post.id} 
                post={post}
                onLike={handleLike}
                onFavorite={handleFavorite}
              />
            ))}
          </TabsContent>

          <TabsContent value="media" className="mt-0">
            {mediaPosts.map((post) => (
              <Post 
                key={post.id} 
                post={post}
                onLike={handleLike}
                onFavorite={handleFavorite}
              />
            ))}
          </TabsContent>

          <TabsContent value="likes" className="mt-0">
            {likedPostsState.map((post) => (
              <Post
                key={post.id}
                post={post}
                onLike={handleLike}
                onFavorite={handleFavorite}
              />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;

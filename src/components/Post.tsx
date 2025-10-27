import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { CommentSection } from "./CommentSection";

export interface PostData {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isFavorited: boolean;
  imageUrl?: string;
  isReply?: boolean;
}

interface PostProps {
  post: PostData;
  onLike?: (id: number) => void;
  onFavorite?: (id: number) => void;
}

export const Post = ({ post, onLike, onFavorite }: PostProps) => {
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    onLike?.(post.id);
    if (!post.isLiked) {
      toast.success("Post liked!");
    }
  };

  const handleFavorite = () => {
    onFavorite?.(post.id);
    if (!post.isFavorited) {
      toast.success("Added to favorites!");
    } else {
      toast.success("Removed from favorites");
    }
  };

  return (
    <div className="border-b border-border bg-card hover:bg-card/80 transition-colors">
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.avatarUrl} alt={post.username} />
            <AvatarFallback>{post.displayName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">{post.displayName}</span>
                <span className="text-muted-foreground">@{post.username}</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{post.timestamp}</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-foreground whitespace-pre-wrap">{post.content}</p>
            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt="Post image" 
                className="mt-3 rounded-[var(--radius)] w-full object-cover max-h-96"
              />
            )}
            <div className="flex items-center justify-between mt-3 max-w-md">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-accent group"
                onClick={() => setShowComments(!showComments)}
              >
                <MessageCircle className="h-5 w-5 mr-2 group-hover:fill-accent/20 transition-all" />
                <span>{post.comments}</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`group ${post.isLiked ? 'text-destructive' : 'text-muted-foreground hover:text-destructive'}`}
                onClick={handleLike}
              >
                <Heart className={`h-5 w-5 mr-2 transition-all ${post.isLiked ? 'fill-destructive' : 'group-hover:fill-destructive/20'}`} />
                <span>{post.likes}</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`group ${post.isFavorited ? 'text-accent' : 'text-muted-foreground hover:text-accent'}`}
                onClick={handleFavorite}
              >
                <Bookmark className={`h-5 w-5 transition-all ${post.isFavorited ? 'fill-accent' : 'group-hover:fill-accent/20'}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showComments && <CommentSection postId={post.id} />}
    </div>
  );
};

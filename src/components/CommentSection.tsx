import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { NestedComment } from "./NestedComment";
import { Comment, getCommentsByPostId, getCharacterById } from "@/data";
import { toast } from "sonner";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

interface CommentSectionProps {
  postId: number;
}

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Load comments for this post
    const postComments = getCommentsByPostId(postId);
    setComments(postComments);
  }, [postId]);

  const handleAddComment = () => {
    if (!newComment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    // Create new comment (in real app this would be sent to server)
    const newCommentObj: Comment = {
      id: Date.now(),
      post_id: postId,
      author_id: 1, // Assume user is Mike Rodriguez (administrator)
      content: newComment,
      timestamp: "now",
      likes: 0,
      isLiked: false,
      type: "response"
    };

    setComments(prevComments => [...prevComments, newCommentObj]);
    setNewComment("");
    toast.success("Comment added!");
  };

  const handleReply = (parentCommentId: number, content: string) => {
    // Create new reply (in real app this would be sent to server)
    const newReply: Comment = {
      id: Date.now(),
      post_id: postId,
      author_id: 1, // Assume user is Mike Rodriguez (administrator)
      content,
      timestamp: "now",
      likes: 0,
      isLiked: false,
      type: "response",
      parent_id: parentCommentId
    };

    // Recursively add reply to corresponding parent comment
    const addReplyToComments = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === parentCommentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply]
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: addReplyToComments(comment.replies)
          };
        }
        return comment;
      });
    };

    setComments(prevComments => addReplyToComments(prevComments));
  };

  const handleLike = (commentId: number) => {
    // Recursively update like for comment
    const updateLikeInComments = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: updateLikeInComments(comment.replies)
          };
        }
        return comment;
      });
    };

    setComments(prevComments => updateLikeInComments(prevComments));
  };

  return (
    <div className="border-t border-border bg-secondary/70 p-4">
      <div className="space-y-4 mb-4">
        {comments.map((comment) => (
          <NestedComment
            key={comment.id}
            comment={comment}
            onReply={handleReply}
            onLike={handleLike}
          />
        ))}
      </div>

      {/* New comment form */}
      <div className="flex gap-3 pt-4 border-t border-border/50">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarPlaceholder} alt="You" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[60px] rounded-[8px]resize-none bg-background"
          />
          <div className="flex justify-end mt-2">
            <Button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              size="sm"
              className="rounded-full bg-accent hover:bg-accent/90"
            >
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

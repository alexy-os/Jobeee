import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Reply } from "lucide-react";
import { toast } from "sonner";
import { Comment, getCharacterById } from "@/data";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

interface NestedCommentProps {
  comment: Comment;
  level?: number;
  onReply?: (parentCommentId: number, content: string) => void;
  onLike?: (commentId: number) => void;
}

export const NestedComment = ({ comment, level = 0, onReply, onLike }: NestedCommentProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [showReplies, setShowReplies] = useState(true);

  const author = getCharacterById(comment.authorId);

  const handleReply = () => {
    if (!replyContent.trim()) {
      toast.error("Reply cannot be empty");
      return;
    }

    onReply?.(comment.id, replyContent);
    setReplyContent("");
    setShowReplyForm(false);
    toast.success("Reply added!");
  };

  const handleLike = () => {
    onLike?.(comment.id);
    if (!comment.isLiked) {
      toast.success("Comment liked!");
    }
  };

  const getCommentTypeStyle = (type: string) => {
    switch (type) {
      case 'response':
        return 'border-l-4 border-l-blue-500 bg-blue-950/50 dark:bg-blue-950/20';
      case 'feedback':
        return 'border-l-4 border-l-green-500 bg-green-950/50 dark:bg-green-950/20';
      case 'resolution':
        return 'border-l-4 border-l-purple-500 bg-purple-950/50 dark:bg-purple-950/20';
      default:
        return '';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'response':
        return 'Candidate Response';
      case 'feedback':
        return 'Staff Feedback';
      case 'resolution':
        return 'Recruiter Decision';
      default:
        return '';
    }
  };

  return (
    <div className={`space-y-3 ${level > 0 ? 'ml-6' : ''}`}>
      <div className={`rounded-lg p-4 transition-all ${getCommentTypeStyle(comment.type)}`}>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarImage src={author?.avatarUrl || avatarPlaceholder} alt={author?.username} />
            <AvatarFallback className="text-xs">{author?.displayName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-foreground text-sm">{author?.displayName}</span>
              <span className="text-muted-foreground text-xs">@{author?.username}</span>
              {comment.roleResponse && (
                <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                  {comment.roleResponse === 'barista_candidate' ? 'Barista Candidate' : 'Waitress Candidate'}
                </span>
              )}
              {getTypeBadge(comment.type) && (
                <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                  {getTypeBadge(comment.type)}
                </span>
              )}
              <span className="text-muted-foreground text-xs">·</span>
              <span className="text-muted-foreground text-xs">{comment.timestamp}</span>
            </div>
            <p className="mt-2 text-foreground text-sm leading-relaxed">{comment.content}</p>

            <div className="flex items-center gap-4 mt-3">
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 px-2 text-xs ${comment.isLiked ? 'text-destructive' : 'text-muted-foreground hover:text-destructive'}`}
                onClick={handleLike}
              >
                <Heart className={`h-3 w-3 mr-1 transition-all ${comment.isLiked ? 'fill-destructive' : 'group-hover:fill-destructive/20'}`} />
                <span>{comment.likes}</span>
              </Button>

              {level < 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-accent"
                  onClick={() => setShowReplyForm(!showReplyForm)}
                >
                  <Reply className="h-3 w-3 mr-1" />
                  Reply
                </Button>
              )}

              {comment.replies && comment.replies.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-xs text-muted-foreground hover:text-accent"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reply form */}
      {showReplyForm && (
        <div className="ml-11 space-y-3">
          <div className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatarPlaceholder} alt="You" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder={`Reply to ${author?.displayName}...`}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="min-h-[80px] resize-none bg-background text-sm"
              />
              <div className="flex justify-end gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowReplyForm(false)}
                  className="text-xs"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleReply}
                  disabled={!replyContent.trim()}
                  size="sm"
                  className="rounded-full bg-accent hover:bg-accent/90 text-xs"
                >
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nested replies */}
      {comment.replies && comment.replies.length > 0 && showReplies && (
        <div className="space-y-3">
          {comment.replies.map((reply) => (
            <NestedComment
              key={reply.id}
              comment={reply}
              level={level + 1}
              onReply={onReply}
              onLike={onLike}
            />
          ))}
        </div>
      )}
    </div>
  );
};

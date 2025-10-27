import { useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Image, Smile, X } from "lucide-react";
import { toast } from "sonner";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";

interface CreatePostProps {
  onPostCreated?: (content: string, imageUrl?: string) => void;
}

export const CreatePost = ({ onPostCreated }: CreatePostProps) => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setContent(content + emoji);
  };

  const handlePost = () => {
    if (!content.trim()) {
      toast.error("Post cannot be empty");
      return;
    }
    
    onPostCreated?.(content, selectedImage || undefined);
    setContent("");
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.success("Post created successfully!");
  };

  const commonEmojis = [
    "😀", "😂", "🥰", "😍", "🤔", "👍", "🎉", "🔥", 
    "💯", "❤️", "✨", "🚀", "💪", "🙌", "👏", "😎"
  ];

  return (
    <div className="border-b border-border bg-card p-4">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarPlaceholder} alt="Your avatar" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[80px] resize-none rounded-xs border-0 bg-transparent p-0 focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
          />
          
          {selectedImage && (
            <div className="relative mt-3 rounded overflow-hidden">
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="w-full max-h-96 object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 hover:bg-background p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-accent hover:text-accent/80"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image className="h-5 w-5" />
              </Button>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                    <Smile className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-2">
                  <div className="grid grid-cols-8 gap-1">
                    {commonEmojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleEmojiSelect(emoji)}
                        className="text-2xl hover:bg-secondary rounded p-1 transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Button 
              onClick={handlePost}
              disabled={!content.trim()}
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

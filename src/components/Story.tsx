import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface StoryProps {
  username: string;
  avatarUrl: string;
  isActive?: boolean;
  storyImageUrl?: string;
}

export const Story = ({ username, avatarUrl, isActive = false, storyImageUrl }: StoryProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        className="flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <div className={`p-0.5 rounded-full bg-gradient-to-tr transition-all ${
          isActive 
            ? 'from-accent via-primary to-accent' 
            : 'from-muted to-muted group-hover:from-accent/50 group-hover:to-primary/50'
        }`}>
          <div className="p-1 bg-background rounded-full">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{username[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <span className="text-xs text-muted-foreground max-w-[70px] truncate">
          {username}
        </span>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-md border-0 bg-transparent">
          <AspectRatio ratio={9/16} className="bg-background rounded-[var(--radius)] overflow-hidden">
            {storyImageUrl ? (
              <img 
                src={storyImageUrl} 
                alt={`${username}'s story`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                <p className="text-foreground text-xl font-bold">{username}'s Story</p>
              </div>
            )}
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </>
  );
};

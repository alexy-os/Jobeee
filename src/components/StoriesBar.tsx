import { Story } from "./Story";
import avatarPlaceholder from "@/assets/avatar-placeholder.jpg";
import storyImageExample from "@/assets/story-image-example.jpg";

const STORIES_DATA = [
  { id: 1, username: "Your Story", avatarUrl: avatarPlaceholder, isActive: true, storyImageUrl: storyImageExample },
  { id: 2, username: "alice_dev", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
  { id: 3, username: "bob_designer", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
  { id: 4, username: "carol_tech", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
  { id: 5, username: "david_art", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
  { id: 6, username: "emma_code", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
  { id: 7, username: "frank_ui", avatarUrl: avatarPlaceholder, storyImageUrl: storyImageExample },
];

export const StoriesBar = () => {
  return (
    <div className="border-b border-border bg-card">
      <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
        {STORIES_DATA.map((story) => (
          <Story
            key={story.id}
            username={story.username}
            avatarUrl={story.avatarUrl}
            isActive={story.isActive}
            storyImageUrl={story.storyImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

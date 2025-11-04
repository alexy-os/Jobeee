import { Heart, Bookmark, MessageCircle, User, ThumbsUp } from 'lucide-react';
import { Button } from './ui/button';

interface FeedCardProps {
  type: 'quizz' | 'thread' | 'article';
  title: string;
  preview?: string;
  tags?: string[];
  liked?: boolean;
  imageUrl?: string;
  company?: {
    name: string;
    logo?: string;
  };
  likeCount?: number;
  commentCount?: number;
  onCardClick?: () => void;
}

export function FeedCard({ 
  type, 
  title, 
  preview, 
  tags, 
  liked,
  imageUrl,
  company,
  likeCount = 0,
  commentCount = 0,
  onCardClick,
}: FeedCardProps) {
  return (
    <div 
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onCardClick}
    >
      <div className="flex gap-3 md:gap-4">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-16 h-16 md:w-24 md:h-24 bg-slate-200 dark:bg-slate-700 rounded object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-200 dark:bg-slate-700 rounded flex-shrink-0"></div>
        )}
        
        <div className="flex-1 min-w-0">
          {/* Company badge */}
          {company && (
            <div className="flex items-center gap-2 mb-2">
              {company.logo && (
                <img src={company.logo} alt={company.name} className="w-5 h-5 rounded-full" />
              )}
              <span className="text-xs text-slate-500 dark:text-slate-400">{company.name}</span>
            </div>
          )}

          <div className="flex items-start justify-between mb-2">
            <h3 className="text-slate-800 dark:text-slate-100 flex-1">
              {title}
            </h3>
            <Button variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10">
              {type === 'quizz' && <Heart className={`h-4 w-4 md:h-5 md:w-5 ${liked ? 'fill-current text-red-500' : 'text-slate-400 dark:text-slate-500'}`} />}
              {type === 'thread' && <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 text-slate-600 dark:text-slate-400" />}
              {type === 'article' && <Bookmark className="h-4 w-4 md:h-5 md:w-5 text-slate-600 dark:text-slate-400" />}
            </Button>
          </div>

          {preview && (
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
              {preview}
            </p>
          )}

          {type === 'thread' && (
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                <span>{commentCount}</span>
              </div>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2 flex-wrap">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

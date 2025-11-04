import { Heart, Bookmark, MessageCircle, User } from 'lucide-react';
import { Button } from './ui/button';

interface FeedCardProps {
  type: 'quizz' | 'thread' | 'article';
  title: string;
  preview?: string;
  tags?: string[];
  liked?: boolean;
}

export function FeedCard({ type, title, preview, tags, liked }: FeedCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-3 md:gap-4">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-200 dark:bg-slate-700 rounded flex-shrink-0"></div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-slate-800 dark:text-slate-100">
              {type === 'article' && <span className="text-orange-500">{title.split('fraud')[0]}</span>}
              {type === 'article' ? title.split('fraud')[1] || 'fraud' : title}
            </h3>
            <Button variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10">
              {type === 'quizz' && <Heart className={`h-4 w-4 md:h-5 md:w-5 ${liked ? 'fill-current text-red-500' : 'text-slate-400 dark:text-slate-500'}`} />}
              {type === 'thread' && <Heart className="h-4 w-4 md:h-5 md:w-5 fill-current text-slate-800 dark:text-slate-100" />}
              {type === 'article' && <Bookmark className="h-4 w-4 md:h-5 md:w-5 text-slate-600 dark:text-slate-400" />}
            </Button>
          </div>

          <div className="space-y-2 mb-3">
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
          </div>

          {type === 'thread' && (
            <div className="flex items-center justify-between">
              <button className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">Read more</button>
              <div className="flex gap-1 md:gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-800"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-800"></div>
              </div>
            </div>
          )}

          {tags && (
            <div className="flex gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
              {tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          )}

          {type === 'article' && (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-3">
              <div className="flex gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                <span>Link</span>
                <span>·</span>
                <span>Chat</span>
                <span>·</span>
                <span>Thread</span>
              </div>
              <div className="w-20 h-7 md:w-24 md:h-8 bg-slate-700 dark:bg-slate-600 rounded md:ml-auto"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

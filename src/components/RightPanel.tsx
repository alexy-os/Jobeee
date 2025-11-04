import { Play } from 'lucide-react';
import { Textarea } from './ui/textarea';

export function RightPanel() {
  return (
    <div className="h-full bg-white dark:bg-slate-900 p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-6">
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6">
        <h2 className="text-slate-800 dark:text-slate-100 mb-3 md:mb-4">Discussion / Interactive</h2>
        <div className="w-full h-24 md:h-32 bg-slate-100 dark:bg-slate-800 rounded mb-3 md:mb-4"></div>
        <Textarea 
          placeholder="Leave a comment..." 
          className="resize-none bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400"
          rows={3}
        />
      </div>

      <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6">
        <h2 className="text-slate-800 dark:text-slate-100 mb-3 md:mb-4">Aclonas</h2>
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6">
          <div className="flex items-center gap-3">
            <Play className="h-4 w-4 md:h-5 md:w-5 text-slate-400 dark:text-slate-500" />
            <div className="flex-1 space-y-2">
              <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-3/4"></div>
              <div className="h-2 bg-slate-300 dark:bg-slate-600 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

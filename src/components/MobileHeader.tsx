import { Menu } from 'lucide-react';
import { Button } from './ui/button';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="text-slate-800 dark:text-slate-100"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-slate-800 dark:text-slate-100">
          Job<span className="text-orange-500">eee</span>
        </h1>
        <div className="w-10"></div>
      </div>
    </header>
  );
}

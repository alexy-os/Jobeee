import { useState } from 'react';
import { ChevronDown, Users, FileText, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Organization, AssessmentThread } from '@/data';
import { getAssessmentThreadsByOrganization, getCharactersByOrganization } from '@/data';

interface OrganizationCardProps {
  organization: Organization;
  threads: AssessmentThread[];
  onThreadSelect?: (thread: AssessmentThread) => void;
}

export const OrganizationCard = ({ organization, threads, onThreadSelect }: OrganizationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const staff = getCharactersByOrganization(organization.id);
  
  const activeThreads = threads.filter(t => t.status === 'active');
  const completedThreads = threads.filter(t => t.status === 'completed');

  const getIndustryBadgeColor = () => {
    return organization.industry === 'coffee_shop' ? 'bg-amber-900 text-amber-300' : 'bg-purple-900 text-purple-300';
  };

  const getIndustryLabel = () => {
    return organization.industry === 'coffee_shop' ? 'Coffee Shop' : 'Web Studio';
  };

  return (
    <Card className="mb-4 overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{organization.logoUrl}</span>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-lg truncate">{organization.name}</CardTitle>
                <CardDescription className="text-sm truncate">{organization.location}</CardDescription>
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed mt-2">{organization.description}</p>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>

        {/* Organization metadata */}
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge className={getIndustryBadgeColor()}>
            {getIndustryLabel()}
          </Badge>
          <Badge variant="secondary">
            <Star className="h-3 w-3 mr-1" />
            {organization.avg_candidate_rating.toFixed(1)}
          </Badge>
          <Badge variant="outline">
            <FileText className="h-3 w-3 mr-1" />
            {organization.total_assessments} assessments
          </Badge>
        </div>
      </CardHeader>

      {/* Expanded content */}
      {isExpanded && (
        <CardContent className="border-t pt-4">
          {/* Team section */}
          <div className="mb-6">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Team Members ({staff.length})
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {staff.map(member => (
                <div key={member.id} className="text-sm p-2 bg-secondary/50 rounded-md">
                  <p className="font-medium truncate">{member.displayName}</p>
                  <p className="text-xs text-muted-foreground capitalize">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment threads section */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Assessment Threads ({threads.length})
            </h4>
            
            {threads.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No assessments yet</p>
            ) : (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {/* Active threads */}
                {activeThreads.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">ACTIVE ({activeThreads.length})</p>
                    {activeThreads.map(thread => (
                      <ThreadItem
                        key={thread.id}
                        thread={thread}
                        onClick={() => onThreadSelect?.(thread)}
                      />
                    ))}
                  </div>
                )}

                {/* Completed threads */}
                {completedThreads.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">COMPLETED ({completedThreads.length})</p>
                    {completedThreads.map(thread => (
                      <ThreadItem
                        key={thread.id}
                        thread={thread}
                        onClick={() => onThreadSelect?.(thread)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

// Sub-component for individual thread in the list
const ThreadItem = ({
  thread,
  onClick
}: {
  thread: AssessmentThread;
  onClick?: () => void;
}) => {
  const getStatusColor = () => {
    switch (thread.status) {
      case 'active':
        return 'bg-blue-950 border-blue-200 hover:bg-blue-900';
      case 'completed':
        return 'bg-green-950 border-green-200 hover:bg-green-900';
      case 'passed':
        return 'bg-emerald-950 border-emerald-200 hover:bg-emerald-900';
      case 'failed':
        return 'bg-red-950 border-red-200 hover:bg-red-900';
      default:
        return 'bg-gray-950 border-gray-200 hover:bg-gray-900';
    }
  };

  const getRatingBadgeColor = () => {
    if (!thread.final_rating) return 'bg-gray-950 text-gray-700';
    
    switch (thread.final_rating) {
      case 'excellent':
        return 'bg-emerald-950 text-emerald-700';
      case 'good':
        return 'bg-blue-950 text-blue-700';
      case 'needs_improvement':
        return 'bg-yellow-950 text-yellow-700';
      case 'failed':
        return 'bg-red-950 text-red-700';
      default:
        return 'bg-gray-950 text-gray-700';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-[16px] border transition-colors ${getStatusColor()}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm truncate">
            {thread.position_type}
          </p>
          <p className="text-xs text-muted-foreground">
            Candidate ID: {thread.candidate_id}
          </p>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge variant="outline" className="text-xs py-0 px-1">
              {thread.stage.replace('_', ' ').toUpperCase()}
            </Badge>
            {thread.final_rating && (
              <Badge className={`text-xs py-0 px-1 ${getRatingBadgeColor()}`}>
                {thread.final_rating.replace('_', ' ').toUpperCase()}
              </Badge>
            )}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className={`text-xs px-2 py-1 rounded-full font-medium ${thread.status === 'active' ? 'bg-blue-200 text-blue-900' : 'bg-gray-200 text-gray-900'}`}>
            {thread.status.toUpperCase()}
          </div>
        </div>
      </div>
    </button>
  );
};

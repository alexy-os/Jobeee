import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { OrganizationCard } from '@/components/OrganizationCard';
import { ORGANIZATIONS, ASSESSMENT_THREADS, AssessmentThread } from '@/data';
import { getAssessmentThreadsByOrganization } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, AlertCircle } from 'lucide-react';

const Organizations = () => {
  const [selectedThread, setSelectedThread] = useState<AssessmentThread | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-8 w-8 text-accent" />
            <h1 className="text-3xl font-bold">Organizations</h1>
          </div>
          <p className="text-muted-foreground">
            Explore companies and their evaluation processes. Click to expand and view active assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Organizations list */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {ORGANIZATIONS.map((org) => {
                const threads = getAssessmentThreadsByOrganization(org.id);
                return (
                  <OrganizationCard
                    key={org.id}
                    organization={org}
                    threads={threads}
                    onThreadSelect={setSelectedThread}
                  />
                );
              })}
            </div>
          </div>

          {/* Thread details panel */}
          <div className="lg:col-span-1">
            {selectedThread ? (
              <Card className="sticky top-4 border-2 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-base">Assessment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Position Type</p>
                    <p className="font-semibold capitalize">
                      {selectedThread.position_type.replace('_', ' ')}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold capitalize">
                      {selectedThread.status}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current Stage</p>
                    <p className="font-semibold capitalize">
                      {selectedThread.stage.replace('_', ' ')}
                    </p>
                  </div>

                  {selectedThread.final_rating && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Final Rating</p>
                      <p className="font-semibold capitalize">
                        {selectedThread.final_rating.replace('_', ' ')}
                      </p>
                    </div>
                  )}

                  {selectedThread.final_feedback && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Feedback</p>
                      <p className="text-sm leading-relaxed">
                        {selectedThread.final_feedback}
                      </p>
                    </div>
                  )}

                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Timeline</p>
                    <div className="space-y-1 text-sm">
                      <p>Created: {selectedThread.created_at}</p>
                      {selectedThread.started_at && (
                        <p>Started: {selectedThread.started_at.split('T')[0]}</p>
                      )}
                      {selectedThread.completed_at && (
                        <p>Completed: {selectedThread.completed_at.split('T')[0]}</p>
                      )}
                    </div>
                  </div>

                  {selectedThread.comment_ids.length === 0 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-md flex gap-2">
                      <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700">
                        No comments yet. Assessment in progress.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="sticky top-4 bg-secondary/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground text-center">
                    Select an assessment thread to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Organizations;

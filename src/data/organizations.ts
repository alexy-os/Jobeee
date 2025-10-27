import { Organization, AssessmentThread } from './types';

// Organizations (Supabase table: organizations)
export const ORGANIZATIONS: Organization[] = [
  {
    id: 1,
    name: "Downtown Coffee Shop",
    slug: "downtown-cafe",
    industry: "coffee_shop",
    logoUrl: "☕",
    description: "Premium coffee shop chain specializing in specialty drinks and barista training. We evaluate candidates through realistic service scenarios.",
    location: "Downtown District",
    website: "www.downtowncafe.local",
    recruiter_ids: [4],
    staff_ids: [1, 2, 3], // Alex (barista), Sara (waitress), Mike (manager)
    scenario_ids: [1, 2, 3, 4, 5],
    total_assessments: 12,
    avg_candidate_rating: 4.2,
    created_at: "2024-01-15",
    updated_at: "2024-10-27"
  },
  {
    id: 2,
    name: "Creative Web Studio",
    slug: "creative-web-studio",
    industry: "web_studio",
    logoUrl: "🎨",
    description: "Innovative web design and development studio creating cutting-edge digital solutions. We evaluate candidates on real project scenarios and code quality.",
    location: "Tech Hub Downtown",
    website: "www.creativeweb.studio",
    recruiter_ids: [14],
    staff_ids: [11, 12, 13], // Jordan (designer), Alexandra (developer), David (PM)
    scenario_ids: [6, 7, 8, 9, 10],
    total_assessments: 8,
    avg_candidate_rating: 4.5,
    created_at: "2024-02-20",
    updated_at: "2024-10-27"
  }
];

// Assessment Threads (Supabase table: assessment_threads)
export const ASSESSMENT_THREADS: AssessmentThread[] = [
  // Coffee Shop assessments
  {
    id: 1,
    organization_id: 1,
    candidate_id: 5, // Jamie Wilson
    position_type: "barista",
    scenario_post_id: 1,
    recruiter_id: 4, // Lisa
    mentor_ids: [1, 2], // Alex, Sara
    status: "completed",
    stage: "final_decision",
    created_at: "2024-10-22",
    started_at: "2024-10-22T08:00:00",
    completed_at: "2024-10-24T14:30:00",
    final_rating: "excellent",
    final_feedback: "Outstanding performance. Jamie shows great potential in customer service and is ready for more complex scenarios.",
    comment_ids: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    organization_id: 1,
    candidate_id: 6, // Taylor Kim
    position_type: "waitress",
    scenario_post_id: 2,
    recruiter_id: 4, // Lisa
    mentor_ids: [1, 2], // Alex, Sara
    status: "completed",
    stage: "final_decision",
    created_at: "2024-10-20",
    started_at: "2024-10-20T09:15:00",
    completed_at: "2024-10-23T16:00:00",
    final_rating: "good",
    final_feedback: "Taylor demonstrates solid conflict resolution skills. Recommend additional training in proactive empathy for future assessments.",
    comment_ids: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 3,
    organization_id: 1,
    candidate_id: 7, // Casey Johnson
    position_type: "barista",
    scenario_post_id: 3,
    recruiter_id: 4, // Lisa
    mentor_ids: [1, 3], // Alex, Mike
    status: "completed",
    stage: "final_decision",
    created_at: "2024-10-21",
    started_at: "2024-10-21T10:00:00",
    completed_at: "2024-10-24T11:45:00",
    final_rating: "excellent",
    final_feedback: "Exceptional performance under pressure. Casey shows leadership potential and mastery of multitasking. Consider for advanced roles.",
    comment_ids: [12, 13, 14, 15, 16, 17]
  },
  {
    id: 4,
    organization_id: 1,
    candidate_id: 5, // Jamie Wilson - second assessment
    position_type: "barista",
    scenario_post_id: 5,
    recruiter_id: 4, // Lisa
    mentor_ids: [1, 3], // Alex, Mike
    status: "active",
    stage: "feedback_round_1",
    created_at: "2024-10-25",
    started_at: "2024-10-25T11:00:00",
    comment_ids: []
  },

  // Web Studio assessments
  {
    id: 5,
    organization_id: 2,
    candidate_id: 15, // Maya Patel
    position_type: "web_designer",
    scenario_post_id: 6,
    recruiter_id: 14, // Emma
    mentor_ids: [11], // Jordan
    status: "active",
    stage: "initial_response",
    created_at: "2024-10-24",
    started_at: "2024-10-24T09:00:00",
    comment_ids: []
  },
  {
    id: 6,
    organization_id: 2,
    candidate_id: 16, // Alex Sato
    position_type: "web_developer",
    scenario_post_id: 7,
    recruiter_id: 14, // Emma
    mentor_ids: [12], // Alexandra
    status: "active",
    stage: "initial_response",
    created_at: "2024-10-25",
    started_at: "2024-10-25T14:00:00",
    comment_ids: []
  }
];

export const getOrganizationById = (id: number): Organization | undefined => {
  return ORGANIZATIONS.find(org => org.id === id);
};

export const getAssessmentThreadsByOrganization = (
  organizationId: number
): AssessmentThread[] => {
  return ASSESSMENT_THREADS.filter(thread => thread.organization_id === organizationId);
};

export const getAssessmentThreadById = (id: number): AssessmentThread | undefined => {
  return ASSESSMENT_THREADS.find(thread => thread.id === id);
};

export const getAssessmentThreadsByCandidate = (candidateId: number): AssessmentThread[] => {
  return ASSESSMENT_THREADS.filter(thread => thread.candidate_id === candidateId);
};

export const getAssessmentThreadsByStatus = (status: string): AssessmentThread[] => {
  return ASSESSMENT_THREADS.filter(thread => thread.status === status);
};

// Core data types for Jobeee social learning network prototype
// Designed with Supabase table structure in mind (snake_case naming)

// Industries supported
export type Industry = 'coffee_shop' | 'web_studio';

// Position types by industry
export type CoffeeShopPosition = 'barista' | 'waitress' | 'coffee_shop_manager';
export type WebStudioPosition = 'web_designer' | 'web_developer' | 'project_manager';
export type CandidatePosition = CoffeeShopPosition | WebStudioPosition;

// User roles in the system
export type UserRole = 'staff' | 'recruiter' | 'candidate' | 'customer';

export interface Character {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  role: UserRole;
  bio: string;
  location: string;
  skills: string[];
  characterTraits: string[];
  speechStyle: string;
  
  // Organization affiliation
  organizationId?: number; // for staff and recruiters
}

// Organization/Company (Supabase table: organizations)
export interface Organization {
  id: number;
  name: string;
  slug: string; // for URLs: "downtown-cafe", "creative-web-studio"
  industry: Industry;
  logoUrl: string;
  description: string;
  location: string;
  website?: string;
  
  // Team
  recruiter_ids: number[]; // Array of character IDs
  staff_ids: number[]; // Array of character IDs (mentors/experienced staff)
  
  // Scenarios available for this organization
  scenario_ids: number[];
  
  // Statistics
  total_assessments: number;
  avg_candidate_rating: number;
  
  created_at?: string;
  updated_at?: string;
}

// Assessment/Evaluation Thread (Supabase table: assessment_threads)
export interface AssessmentThread {
  id: number;
  organization_id: number;
  candidate_id: number;
  
  // What position is being tested
  position_type: CandidatePosition;
  
  // Main scenario post for this assessment
  scenario_post_id: number;
  
  // Team involved
  recruiter_id: number;
  mentor_ids: number[]; // Array of experienced staff IDs providing feedback
  
  // Status and workflow
  status: 'active' | 'completed' | 'failed' | 'passed' | 'pending';
  stage: 'initial_response' | 'feedback_round_1' | 'feedback_round_2' | 'final_decision';
  
  // Timeline
  created_at: string;
  started_at?: string;
  completed_at?: string;
  
  // Assessment results
  final_rating?: 'excellent' | 'good' | 'needs_improvement' | 'failed';
  final_feedback?: string;
  
  // Comments on this thread (stored separately in database)
  comment_ids: number[];
}

export interface Post {
  id: number;
  author_id: number;
  organization_id?: number; // which company this scenario is for
  
  scenario: string; // coffee_order, complaint, rush_hour, etc.
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isFavorited: boolean;
  imageUrl?: string;
  tags: string[];
  
  status: 'active' | 'resolved' | 'certified';
  resolution?: {
    by_role: string;
    decision: 'excellent' | 'good' | 'needs_improvement' | 'failed';
    feedback: string;
  };
}

export interface Comment {
  id: number;
  post_id: number;
  author_id: number;
  thread_id?: number; // Links to AssessmentThread if this is part of an assessment
  
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  
  // Comment type in assessment flow
  type: 'response' | 'feedback' | 'resolution';
  
  // Additional context
  role_response?: string; // The role from which this response is given
  parent_id?: number; // For nested replies
  replies?: Comment[];
  
  stage?: 'initial_response' | 'feedback_round_1' | 'feedback_round_2' | 'final_decision';
}

export interface Simulation {
  id: number;
  title: string;
  description: string;
  roles: string[];
  scenarios: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

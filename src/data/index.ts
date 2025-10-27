// Main data exports for Jobeee social learning network

export * from './types';
export { CHARACTERS, getCharacterById, getCharactersByRole, getCharactersByOrganization } from './characters';
export { POSTS, COMMENTS, getCommentsByPostId, getPostById } from './posts';
export {
  ORGANIZATIONS,
  ASSESSMENT_THREADS,
  getOrganizationById,
  getAssessmentThreadsByOrganization,
  getAssessmentThreadById,
  getAssessmentThreadsByCandidate,
  getAssessmentThreadsByStatus
} from './organizations';

// Import for internal use in functions
import { POSTS, COMMENTS, getCommentsByPostId, getPostById } from './posts';
import { getCharacterById } from './characters';
import { ORGANIZATIONS, ASSESSMENT_THREADS } from './organizations';

// Helper functions for data manipulation
export const getFeedPosts = () => {
  return POSTS.map(post => ({
    ...post,
    author: getCharacterById(post.author_id),
    commentsData: getCommentsByPostId(post.id)
  }));
};

export const getProfilePosts = (characterId: number) => {
  const userPosts = POSTS.filter(post => post.author_id === characterId);
  const userComments = COMMENTS.filter(comment => comment.author_id === characterId);

  return {
    posts: userPosts.map(post => ({
      ...post,
      author: getCharacterById(post.author_id),
      commentsData: getCommentsByPostId(post.id)
    })),
    comments: userComments.map(comment => ({
      ...comment,
      author: getCharacterById(comment.author_id),
      post: getPostById(comment.post_id)
    }))
  };
};

export const getSimulationScenarios = () => {
  return [
    {
      id: 1,
      title: "Coffee Shop Service Simulation",
      description: "Complete coffee shop service scenarios including orders, complaints, and rush hour situations",
      roles: ["barista", "waitress", "coffee_shop_manager"],
      scenarios: ["coffee_order", "complaint", "rush_hour", "cash_register", "special_request"],
      duration: "2-3 hours",
      difficulty: "intermediate" as const
    },
    {
      id: 2,
      title: "Web Studio Project Simulation",
      description: "Real-world web development and design scenarios including client communication, code review, and project management",
      roles: ["web_designer", "web_developer", "project_manager"],
      scenarios: ["design_feedback", "code_review", "client_meeting", "team_coordination", "deadline_pressure"],
      duration: "3-4 hours",
      difficulty: "intermediate" as const
    }
  ];
};

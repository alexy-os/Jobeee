// Main data exports for Jobeee social learning network

export * from './types';
export { CHARACTERS, getCharacterById, getCharactersByRole } from './characters';
export { POSTS, COMMENTS, getCommentsByPostId, getPostById } from './posts';

// Import for internal use in functions
import { POSTS, COMMENTS, getCommentsByPostId, getPostById } from './posts';
import { getCharacterById } from './characters';

// Helper functions for data manipulation
export const getFeedPosts = () => {
  return POSTS.map(post => ({
    ...post,
    author: getCharacterById(post.authorId),
    commentsData: getCommentsByPostId(post.id)
  }));
};

export const getProfilePosts = (characterId: number) => {
  const userPosts = POSTS.filter(post => post.authorId === characterId);
  const userComments = COMMENTS.filter(comment => comment.authorId === characterId);

  return {
    posts: userPosts.map(post => ({
      ...post,
      author: getCharacterById(post.authorId),
      commentsData: getCommentsByPostId(post.id)
    })),
    comments: userComments.map(comment => ({
      ...comment,
      author: getCharacterById(comment.authorId),
      post: getPostById(comment.postId)
    }))
  };
};

export const getSimulationScenarios = () => {
  return [
    {
      id: 1,
      title: "Coffee Shop Service Simulation",
      description: "Complete coffee shop service scenarios including orders, complaints, and rush hour situations",
      roles: ["barista", "waitress", "administrator"],
      scenarios: ["coffee_order", "complaint", "rush_hour", "cash_register", "special_request"],
      duration: "2-3 hours",
      difficulty: "intermediate" as const
    }
  ];
};

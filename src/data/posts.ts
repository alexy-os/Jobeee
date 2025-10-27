import { Post, Comment } from './types';

export const POSTS: Post[] = [
  // ===== COFFEE SHOP SCENARIOS =====
  // Scenario 1: Simple coffee order
  {
    id: 1,
    author_id: 9, // Friendly customer
    organization_id: 1,
    scenario: "coffee_order",
    title: "Morning Coffee Order",
    content: "Good morning! I'd like a large cappuccino with extra foam and a blueberry muffin. How's your day going? ☕",
    timestamp: "2h",
    likes: 3,
    comments: 4,
    isLiked: false,
    isFavorited: false,
    tags: ["coffee_order", "morning_rush", "customer_service"],
    status: "resolved",
    resolution: {
      by_role: "recruiter",
      decision: "excellent",
      feedback: "Perfect handling of friendly interaction - maintained engagement while being efficient"
    }
  },

  // Scenario 2: Complaint about drink
  {
    id: 2,
    author_id: 8, // Grumpy customer
    organization_id: 1,
    scenario: "complaint",
    title: "Coffee Too Cold",
    content: "This coffee is ice cold! I ordered it 10 minutes ago and it's been sitting here the whole time. This is unacceptable!",
    timestamp: "1h",
    likes: 1,
    comments: 5,
    isLiked: false,
    isFavorited: false,
    tags: ["complaint", "customer_service", "problem_solving"],
    status: "resolved",
    resolution: {
      by_role: "recruiter",
      decision: "good",
      feedback: "Good conflict resolution but could be more empathetic initially"
    }
  },

  // Scenario 3: Rush hour - multiple orders
  {
    id: 3,
    author_id: 10, // Picky customer
    organization_id: 1,
    scenario: "rush_hour",
    title: "Multiple Orders During Busy Period",
    content: "I need: 3 lattes (one decaf, one with almond milk), 2 Americanos, and a herbal tea. All to go. And make sure the lattes are exactly 150°F - I can tell the difference!",
    timestamp: "30m",
    likes: 2,
    comments: 6,
    isLiked: false,
    isFavorited: false,
    tags: ["rush_hour", "multitasking", "precision"],
    status: "resolved",
    resolution: {
      by_role: "recruiter",
      decision: "excellent",
      feedback: "Outstanding multitasking and attention to detail under pressure"
    }
  },

  // Scenario 4: Cash register error
  {
    id: 4,
    author_id: 9, // Friendly customer
    organization_id: 1,
    scenario: "cash_register",
    title: "Incorrect Change Given",
    content: "Hi there! I paid $15 for my order but got $3.50 back instead of $4.20. Just wanted to point it out nicely! 😊",
    timestamp: "45m",
    likes: 4,
    comments: 4,
    isLiked: false,
    isFavorited: false,
    tags: ["cash_handling", "honesty", "customer_trust"],
    status: "resolved",
    resolution: {
      by_role: "recruiter",
      decision: "excellent",
      feedback: "Perfect handling of honest mistake - built trust through transparency"
    }
  },

  // Scenario 5: Special request
  {
    id: 5,
    author_id: 10, // Picky customer
    organization_id: 1,
    scenario: "special_request",
    title: "Custom Drink Preparation",
    content: "I want a cortado but with oat milk instead of regular milk, and can you make the espresso shot a ristretto? Also, can you serve it in a specific temperature range?",
    timestamp: "1h",
    likes: 2,
    comments: 5,
    isLiked: false,
    isFavorited: false,
    tags: ["special_request", "coffee_knowledge", "flexibility"],
    status: "resolved",
    resolution: {
      by_role: "recruiter",
      decision: "good",
      feedback: "Good knowledge of coffee but could show more confidence in modifications"
    }
  },

  // ===== WEB STUDIO SCENARIOS =====
  // Scenario 6: Design feedback round
  {
    id: 6,
    author_id: 17, // Demanding client
    organization_id: 2,
    scenario: "design_feedback",
    title: "Landing Page Design Review - Round 1",
    content: "I've reviewed the initial landing page designs. The layout direction is interesting, but I have concerns about the visual hierarchy. The call-to-action buttons don't stand out enough. Also, the color palette doesn't quite match our brand guidelines - can we shift to more vibrant blues? We need iterations by EOD tomorrow.",
    timestamp: "3h",
    likes: 2,
    comments: 0,
    isLiked: false,
    isFavorited: false,
    tags: ["design_feedback", "client_communication", "visual_hierarchy"],
    status: "active",
  },

  // Scenario 7: Code review and technical discussion
  {
    id: 7,
    author_id: 17, // Demanding client
    organization_id: 2,
    scenario: "code_review",
    title: "API Integration - Code Review Comments",
    content: "I've reviewed the pull request for the new API integration. The overall structure is good, but I noticed several concerns: 1) Error handling seems incomplete - what happens if the API timeout exceeds 30 seconds? 2) The database queries could be optimized - we're making N+1 calls in the user profile endpoint. 3) Missing unit tests for the edge cases. Can you address these before we merge?",
    timestamp: "2h",
    likes: 1,
    comments: 0,
    isLiked: false,
    isFavorited: false,
    tags: ["code_review", "technical_feedback", "quality"],
    status: "active",
  },

  // Scenario 8: Client meeting and requirements discussion
  {
    id: 8,
    author_id: 17, // Demanding client
    organization_id: 2,
    scenario: "client_meeting",
    title: "Project Kickoff - Requirements Clarification",
    content: "Great to meet the team! I want to clarify the project scope. We initially discussed a 2-week timeline, but now we're thinking we'd like the MVP features by next week instead. Can the team handle an accelerated schedule? Also, we'll need daily standups instead of the proposed 3x weekly. What challenges do you see with these adjustments?",
    timestamp: "1h",
    likes: 0,
    comments: 0,
    isLiked: false,
    isFavorited: false,
    tags: ["client_meeting", "project_management", "scope"],
    status: "active",
  },

  // Scenario 9: Team coordination and collaboration
  {
    id: 9,
    author_id: 17, // Demanding client
    organization_id: 2,
    scenario: "team_coordination",
    title: "Cross-functional Design-Dev Handoff Issues",
    content: "Team, we've hit a blocker on the design-dev handoff. The designs from the design team are missing detailed spacing specs and some components don't have clear interaction states defined. We can't proceed with accurate implementation without this. Design team - can you provide the missing documentation? Dev team - can we set up a sync session to align on expectations?",
    timestamp: "45m",
    likes: 1,
    comments: 0,
    isLiked: false,
    isFavorited: false,
    tags: ["team_coordination", "collaboration", "communication"],
    status: "active",
  },

  // Scenario 10: Deadline pressure and priority management
  {
    id: 10,
    author_id: 17, // Demanding client
    organization_id: 2,
    scenario: "deadline_pressure",
    title: "Feature Priority Shift - Deadline Pressure",
    content: "We just received feedback from stakeholders - the dashboard redesign they thought was lower priority is now critical and needs to launch with the next release. That's in 5 days. We'll need to descope some other features or extend the timeline. Can someone analyze what's feasible? We should prioritize the most impactful features for users.",
    timestamp: "30m",
    likes: 0,
    comments: 0,
    isLiked: false,
    isFavorited: false,
    tags: ["deadline_pressure", "priority", "scope_management"],
    status: "active",
  }
];

export const COMMENTS: Comment[] = [
  // Comments for post 1 (Simple coffee order)
  {
    id: 1,
    post_id: 1,
    author_id: 5, // Jamie candidate (barista role)
    content: "Good morning! Large cappuccino with extra foam and blueberry muffin coming right up! My day is going great, thanks for asking. That'll be $6.75. Would you like to pay with card or cash?",
    timestamp: "2h",
    likes: 2,
    isLiked: false,
    type: "response",
    role_response: "barista_candidate"
  },
  {
    id: 2,
    post_id: 1,
    author_id: 1, // Alex barista
    content: "Great job on the greeting and upselling potential! Next time, mention our daily special when they ask about your day. Keep up the friendly energy! ⭐",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parent_id: 1
  },
  {
    id: 3,
    post_id: 1,
    author_id: 3, // Mike admin
    content: "Solid customer engagement. Payment handling was clear. Would suggest confirming the order back to avoid mistakes.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parent_id: 1
  },
  {
    id: 4,
    post_id: 1,
    author_id: 4, // Lisa recruiter
    content: "Excellent interpersonal skills shown here. Natural conversation flow while maintaining professionalism. This candidate demonstrates strong customer service foundation.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "resolution"
  },
  {
    id: 5,
    post_id: 1,
    author_id: 5, // Jamie candidate replies
    content: "Thanks for the feedback! I'll remember to mention the daily special next time. I'm getting more comfortable with the ordering process.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "response",
    role_response: "barista_candidate",
    parent_id: 2
  },

  // Comments for post 2 (Complaint)
  {
    id: 6,
    post_id: 2,
    author_id: 6, // Taylor candidate (waitress role)
    content: "I'm so sorry to hear that! Let me check with the barista about your order timing. Would you like me to warm that up for you right away or make you a fresh one?",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "response",
    role_response: "waitress_candidate"
  },
  {
    id: 7,
    post_id: 2,
    author_id: 2, // Sara waitress
    content: "Good start with empathy, but let's work on taking ownership faster. Next time: 'I apologize for the delay and will personally ensure this doesn't happen again.'",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parent_id: 6
  },
  {
    id: 8,
    post_id: 2,
    author_id: 1, // Alex barista
    content: "From barista perspective: cold coffee indicates timing issue. Suggest implementing temperature checks at 5-minute marks.",
    timestamp: "1h",
    likes: 0,
    isLiked: false,
    type: "feedback",
    parent_id: 6
  },
  {
    id: 9,
    post_id: 2,
    author_id: 3, // Mike admin
    content: "Resolution attempt shows initiative. Follow-up should include process improvement discussion with team.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parent_id: 6
  },
  {
    id: 10,
    post_id: 2,
    author_id: 4, // Lisa recruiter
    content: "Shows potential in conflict resolution but needs more proactive empathy. Good foundation for development. Would benefit from additional training in de-escalation techniques.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "resolution"
  },
  {
    id: 11,
    post_id: 2,
    author_id: 6, // Taylor candidate replies
    content: "Thank you for the feedback! I'll work on taking more ownership next time and offering immediate solutions.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "response",
    role_response: "waitress_candidate",
    parent_id: 7
  },

  // Comments for post 3 (Rush hour)
  {
    id: 12,
    post_id: 3,
    author_id: 7, // Casey candidate (barista role)
    content: "Absolutely! Let me confirm: 1 decaf latte, 1 almond milk latte, 2 Americanos, and 1 herbal tea - all to go. I'll make sure those lattes are brewed to exactly 150°F. It'll be about 7 minutes!",
    timestamp: "30m",
    likes: 3,
    isLiked: false,
    type: "response",
    role_response: "barista_candidate"
  },
  {
    id: 13,
    post_id: 3,
    author_id: 1, // Alex barista
    content: "Excellent order confirmation and temperature specificity! You handled the complexity well. Next level: suggest add-ons for the Americanos to increase check average.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "feedback",
    parent_id: 12
  },
  {
    id: 14,
    post_id: 3,
    author_id: 2, // Sara waitress
    content: "Perfect coordination during rush hour. You maintained accuracy under pressure while keeping the customer informed. Well done!",
    timestamp: "30m",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parent_id: 12
  },
  {
    id: 15,
    post_id: 3,
    author_id: 3, // Mike admin
    content: "Outstanding performance. Shows strong multitasking ability and attention to detail. This level of precision is exactly what we need.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "feedback",
    parent_id: 12
  },
  {
    id: 16,
    post_id: 3,
    author_id: 7, // Casey candidate replies
    content: "Thank you for the feedback! I was nervous about getting all the details right, but I'm glad it worked out. Ready for the next challenge!",
    timestamp: "30m",
    likes: 1,
    isLiked: false,
    type: "response",
    role_response: "barista_candidate",
    parent_id: 13
  },
  {
    id: 17,
    post_id: 3,
    author_id: 4, // Lisa recruiter
    content: "Exceptional performance under pressure. Demonstrates advanced customer service skills, technical knowledge, and composure. This candidate shows high potential for leadership roles.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "resolution"
  }
];

export const getCommentsByPostId = (postId: number): Comment[] => {
  const postComments = COMMENTS.filter(comment => comment.post_id === postId);

  // Build comment tree
  const commentMap = new Map<number, Comment>();
  const rootComments: Comment[] = [];

  // Add all comments to map
  postComments.forEach(comment => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // Build tree structure
  postComments.forEach(comment => {
    const commentWithReplies = commentMap.get(comment.id)!;

    if (comment.parent_id) {
      // This is a reply to another comment
      const parentComment = commentMap.get(comment.parent_id);
      if (parentComment && parentComment.replies) {
        parentComment.replies.push(commentWithReplies);
      }
    } else {
      // This is a root comment
      rootComments.push(commentWithReplies);
    }
  });

  return rootComments;
};

export const getPostById = (id: number): Post | undefined => {
  return POSTS.find(post => post.id === id);
};

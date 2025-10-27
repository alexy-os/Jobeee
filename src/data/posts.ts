import { Post, Comment } from './types';

export const POSTS: Post[] = [
  // Сценарий 1: Простой заказ кофе
  {
    id: 1,
    authorId: 9, // Friendly customer
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
      byRole: "recruiter",
      decision: "excellent",
      feedback: "Perfect handling of friendly interaction - maintained engagement while being efficient"
    }
  },

  // Сценарий 2: Жалоба на напиток
  {
    id: 2,
    authorId: 8, // Grumpy customer
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
      byRole: "recruiter",
      decision: "good",
      feedback: "Good conflict resolution but could be more empathetic initially"
    }
  },

  // Сценарий 3: Rush hour - множественные заказы
  {
    id: 3,
    authorId: 10, // Picky customer
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
      byRole: "recruiter",
      decision: "excellent",
      feedback: "Outstanding multitasking and attention to detail under pressure"
    }
  },

  // Сценарий 4: Кассовый чек - ошибка
  {
    id: 4,
    authorId: 9, // Friendly customer
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
      byRole: "recruiter",
      decision: "excellent",
      feedback: "Perfect handling of honest mistake - built trust through transparency"
    }
  },

  // Сценарий 5: Специальный запрос
  {
    id: 5,
    authorId: 10, // Picky customer
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
      byRole: "recruiter",
      decision: "good",
      feedback: "Good knowledge of coffee but could show more confidence in modifications"
    }
  }
];

export const COMMENTS: Comment[] = [
  // Комментарии к посту 1 (Простой заказ кофе)
  {
    id: 1,
    postId: 1,
    authorId: 5, // Jamie candidate (barista role)
    content: "Good morning! Large cappuccino with extra foam and blueberry muffin coming right up! My day is going great, thanks for asking. That'll be $6.75. Would you like to pay with card or cash?",
    timestamp: "2h",
    likes: 2,
    isLiked: false,
    type: "response",
    roleResponse: "barista_candidate"
  },
  {
    id: 2,
    postId: 1,
    authorId: 1, // Alex barista
    content: "Great job on the greeting and upselling potential! Next time, mention our daily special when they ask about your day. Keep up the friendly energy! ⭐",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parentId: 1 // Ответ на комментарий кандидата
  },
  {
    id: 3,
    postId: 1,
    authorId: 3, // Mike admin
    content: "Solid customer engagement. Payment handling was clear. Would suggest confirming the order back to avoid mistakes.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parentId: 1
  },
  {
    id: 4,
    postId: 1,
    authorId: 4, // Lisa recruiter
    content: "Excellent interpersonal skills shown here. Natural conversation flow while maintaining professionalism. This candidate demonstrates strong customer service foundation.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "resolution"
  },
  {
    id: 5,
    postId: 1,
    authorId: 5, // Jamie candidate отвечает на фидбек
    content: "Thanks for the feedback! I'll remember to mention the daily special next time. I'm getting more comfortable with the ordering process.",
    timestamp: "2h",
    likes: 1,
    isLiked: false,
    type: "response",
    roleResponse: "barista_candidate",
    parentId: 2 // Ответ на комментарий Alex
  },

  // Комментарии к посту 2 (Жалоба)
  {
    id: 6,
    postId: 2,
    authorId: 6, // Taylor candidate (waitress role)
    content: "I'm so sorry to hear that! Let me check with the barista about your order timing. Would you like me to warm that up for you right away or make you a fresh one?",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "response",
    roleResponse: "waitress_candidate"
  },
  {
    id: 7,
    postId: 2,
    authorId: 2, // Sara waitress
    content: "Good start with empathy, but let's work on taking ownership faster. Next time: 'I apologize for the delay and will personally ensure this doesn't happen again.'",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parentId: 6
  },
  {
    id: 8,
    postId: 2,
    authorId: 1, // Alex barista
    content: "From barista perspective: cold coffee indicates timing issue. Suggest implementing temperature checks at 5-minute marks.",
    timestamp: "1h",
    likes: 0,
    isLiked: false,
    type: "feedback",
    parentId: 6
  },
  {
    id: 9,
    postId: 2,
    authorId: 3, // Mike admin
    content: "Resolution attempt shows initiative. Follow-up should include process improvement discussion with team.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parentId: 6
  },
  {
    id: 10,
    postId: 2,
    authorId: 4, // Lisa recruiter
    content: "Shows potential in conflict resolution but needs more proactive empathy. Good foundation for development. Would benefit from additional training in de-escalation techniques.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "resolution"
  },
  {
    id: 11,
    postId: 2,
    authorId: 6, // Taylor candidate отвечает на фидбек
    content: "Thank you for the feedback! I'll work on taking more ownership next time and offering immediate solutions.",
    timestamp: "1h",
    likes: 1,
    isLiked: false,
    type: "response",
    roleResponse: "waitress_candidate",
    parentId: 7 // Ответ на комментарий Sara
  },

  // Комментарии к посту 3 (Rush hour)
  {
    id: 12,
    postId: 3,
    authorId: 7, // Casey candidate (barista role)
    content: "Absolutely! Let me confirm: 1 decaf latte, 1 almond milk latte, 2 Americanos, and 1 herbal tea - all to go. I'll make sure those lattes are brewed to exactly 150°F. It'll be about 7 minutes!",
    timestamp: "30m",
    likes: 3,
    isLiked: false,
    type: "response",
    roleResponse: "barista_candidate"
  },
  {
    id: 13,
    postId: 3,
    authorId: 1, // Alex barista
    content: "Excellent order confirmation and temperature specificity! You handled the complexity well. Next level: suggest add-ons for the Americanos to increase check average.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "feedback",
    parentId: 12
  },
  {
    id: 14,
    postId: 3,
    authorId: 2, // Sara waitress
    content: "Perfect coordination during rush hour. You maintained accuracy under pressure while keeping the customer informed. Well done!",
    timestamp: "30m",
    likes: 1,
    isLiked: false,
    type: "feedback",
    parentId: 12
  },
  {
    id: 15,
    postId: 3,
    authorId: 3, // Mike admin
    content: "Outstanding performance. Shows strong multitasking ability and attention to detail. This level of precision is exactly what we need.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "feedback",
    parentId: 12
  },
  {
    id: 16,
    postId: 3,
    authorId: 7, // Casey candidate отвечает на фидбек
    content: "Thank you for the feedback! I was nervous about getting all the details right, but I'm glad it worked out. Ready for the next challenge!",
    timestamp: "30m",
    likes: 1,
    isLiked: false,
    type: "response",
    roleResponse: "barista_candidate",
    parentId: 13 // Ответ на комментарий Alex
  },
  {
    id: 17,
    postId: 3,
    authorId: 4, // Lisa recruiter
    content: "Exceptional performance under pressure. Demonstrates advanced customer service skills, technical knowledge, and composure. This candidate shows high potential for leadership roles.",
    timestamp: "30m",
    likes: 2,
    isLiked: false,
    type: "resolution"
  }
];

export const getCommentsByPostId = (postId: number): Comment[] => {
  const postComments = COMMENTS.filter(comment => comment.postId === postId);

  // Создаем дерево комментариев
  const commentMap = new Map<number, Comment>();
  const rootComments: Comment[] = [];

  // Сначала добавляем все комментарии в карту
  postComments.forEach(comment => {
    commentMap.set(comment.id, { ...comment, replies: [] });
  });

  // Затем строим дерево
  postComments.forEach(comment => {
    const commentWithReplies = commentMap.get(comment.id)!;

    if (comment.parentId) {
      // Это ответ на другой комментарий
      const parentComment = commentMap.get(comment.parentId);
      if (parentComment && parentComment.replies) {
        parentComment.replies.push(commentWithReplies);
      }
    } else {
      // Это корневой комментарий
      rootComments.push(commentWithReplies);
    }
  });

  return rootComments;
};

export const getPostById = (id: number): Post | undefined => {
  return POSTS.find(post => post.id === id);
};

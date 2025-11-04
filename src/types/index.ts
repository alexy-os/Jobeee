// Client-side types matching server types

export interface User {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  industry?: string;
  createdAt: string;
}

export interface Story {
  id: string;
  userId: string;
  user?: User;
  videoUrl?: string;
  thumbnailUrl?: string;
  caption?: string;
  createdAt: string;
  viewCount: number;
}

export interface Thread {
  id: string;
  companyId: string;
  company?: Company;
  title: string;
  description: string;
  scenario: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
  imageUrl?: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
  comments?: Comment[];
}

export interface Quiz {
  id: string;
  companyId: string;
  company?: Company;
  title: string;
  description: string;
  questions?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  tags?: string[];
  imageUrl?: string;
  createdAt: string;
  likeCount: number;
  completionCount: number;
}

export interface Aclona {
  id: string;
  companyId: string;
  company?: Company;
  title: string;
  description: string;
  contentType: 'video' | 'audio' | 'interactive';
  mediaUrl?: string;
  duration?: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  threadId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  createdAt: string;
}

export interface FeedItem {
  id: string;
  type: 'thread' | 'quiz' | 'article';
  data: Thread | Quiz | any;
  createdAt: string;
}

// Core data types for Jobeee social learning network prototype

export interface Character {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  role: 'barista' | 'waitress' | 'administrator' | 'recruiter' | 'candidate' | 'customer';
  bio: string;
  location: string;
  skills: string[];
  characterTraits: string[];
  speechStyle: string; // описание стиля речи
}

export interface Post {
  id: number;
  authorId: number;
  scenario: string; // тип сценария (coffee_order, complaint, rush_hour, etc.)
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
    byRole: string;
    decision: 'excellent' | 'good' | 'needs_improvement' | 'failed';
    feedback: string;
  };
}

export interface Comment {
  id: number;
  postId: number;
  authorId: number;
  content: string;
  timestamp: string;
  likes: number;
  isLiked: boolean;
  type: 'response' | 'feedback' | 'resolution'; // ответ сотрудника, фидбек, заключительное решение
  roleResponse?: string; // роль, от которой дается ответ
  parentId?: number; // ID родительского комментария для вложенности
  replies?: Comment[]; // вложенные ответы
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

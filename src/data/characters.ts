import { Character } from './types';
import avatarPlaceholder from '@/assets/avatar-placeholder.jpg';

export const CHARACTERS: Character[] = [
  // Сотрудники кофейни
  {
    id: 1,
    username: "alex_barista",
    displayName: "Alex Chen",
    avatarUrl: avatarPlaceholder,
    role: "barista",
    bio: "Professional barista with 3 years experience. Passionate about coffee art and customer service. Currently training new candidates.",
    location: "Downtown Coffee Shop",
    skills: ["Coffee preparation", "Customer service", "Cash handling", "Team coordination"],
    characterTraits: ["Patient", "Detail-oriented", "Friendly", "Mentoring"],
    speechStyle: "Calm and professional, uses coffee terminology naturally"
  },
  {
    id: 2,
    username: "sara_waitress",
    displayName: "Sara Martinez",
    avatarUrl: avatarPlaceholder,
    role: "waitress",
    bio: "Experienced waitress focused on creating welcoming atmosphere. Excel at handling diverse customer personalities.",
    location: "Downtown Coffee Shop",
    skills: ["Customer service", "Order management", "Conflict resolution", "Menu knowledge"],
    characterTraits: ["Empathetic", "Quick-thinking", "Welcoming", "Multilingual"],
    speechStyle: "Warm and engaging, speaks with enthusiasm and local accent"
  },
  {
    id: 3,
    username: "mike_admin",
    displayName: "Mike Rodriguez",
    avatarUrl: avatarPlaceholder,
    role: "administrator",
    bio: "Coffee shop manager overseeing operations, staff training, and customer satisfaction. Main profile for simulation.",
    location: "Downtown Coffee Shop HQ",
    skills: ["Management", "Staff training", "Quality control", "Business operations"],
    characterTraits: ["Authoritative", "Fair", "Strategic", "Supportive"],
    speechStyle: "Professional and decisive, uses management terminology"
  },

  // Рекрутер
  {
    id: 4,
    username: "lisa_recruiter",
    displayName: "Lisa Thompson",
    avatarUrl: avatarPlaceholder,
    role: "recruiter",
    bio: "HR specialist evaluating candidates through real-work simulations. Focuses on practical skills and character assessment.",
    location: "City Center Recruitment Agency",
    skills: ["Candidate evaluation", "Skills assessment", "Behavioral analysis", "Decision making"],
    characterTraits: ["Analytical", "Objective", "Insightful", "Encouraging"],
    speechStyle: "Professional and analytical, asks probing questions"
  },

  // Кандидаты
  {
    id: 5,
    username: "jamie_candidate",
    displayName: "Jamie Wilson",
    avatarUrl: avatarPlaceholder,
    role: "candidate",
    bio: "Recent graduate eager to start career in hospitality. Quick learner with good communication skills.",
    location: "Local University Area",
    skills: ["Basic customer service", "Fast learning", "Team player", "Multitasking"],
    characterTraits: ["Enthusiastic", "Nervous", "Eager to please", "Adaptable"],
    speechStyle: "Energetic and polite, sometimes uncertain"
  },
  {
    id: 6,
    username: "taylor_candidate",
    displayName: "Taylor Kim",
    avatarUrl: avatarPlaceholder,
    role: "candidate",
    bio: "Detail-oriented applicant with retail experience. Strong focus on accuracy and customer satisfaction.",
    location: "Midtown District",
    skills: ["Attention to detail", "Retail experience", "Problem solving", "Quality focus"],
    characterTraits: ["Methodical", "Precise", "Customer-focused", "Reliable"],
    speechStyle: "Clear and precise, professional tone"
  },
  {
    id: 7,
    username: "casey_candidate",
    displayName: "Casey Johnson",
    avatarUrl: avatarPlaceholder,
    role: "candidate",
    bio: "Creative and outgoing personality bringing energy to customer interactions. Background in performing arts.",
    location: "Arts District",
    skills: ["Communication", "Creativity", "Energy", "Adaptability"],
    characterTraits: ["Charismatic", "Creative", "Outgoing", "Intuitive"],
    speechStyle: "Animated and expressive, uses vivid language"
  },

  // Посетители с разным характером
  {
    id: 8,
    username: "grumpy_customer",
    displayName: "Robert Davis",
    avatarUrl: avatarPlaceholder,
    role: "customer",
    bio: "Regular morning customer who values efficiency and consistency. Not very patient with delays.",
    location: "Business District",
    skills: [], // клиенты не имеют навыков в симуляции
    characterTraits: ["Impatient", "Demanding", "Loyal but critical", "Time-conscious"],
    speechStyle: "Direct and curt, focuses on problems"
  },
  {
    id: 9,
    username: "friendly_customer",
    displayName: "Emma Garcia",
    avatarUrl: avatarPlaceholder,
    role: "customer",
    bio: "Friendly local who enjoys chatting and trying new things. Appreciates personal connections.",
    location: "Residential Area",
    skills: [],
    characterTraits: ["Friendly", "Chatty", "Open-minded", "Appreciative"],
    speechStyle: "Warm and conversational, positive tone"
  },
  {
    id: 10,
    username: "picky_customer",
    displayName: "David Chen",
    avatarUrl: avatarPlaceholder,
    role: "customer",
    bio: "Discerning customer with specific preferences and high standards. Provides detailed feedback.",
    location: "Uptown Area",
    skills: [],
    characterTraits: ["Particular", "Knowledgeable", "Honest", "Detail-oriented"],
    speechStyle: "Polite but very specific, uses precise language"
  }
];

export const getCharacterById = (id: number): Character | undefined => {
  return CHARACTERS.find(char => char.id === id);
};

export const getCharactersByRole = (role: string): Character[] => {
  return CHARACTERS.filter(char => char.role === role);
};

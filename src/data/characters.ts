import { Character } from './types';
import avatarPlaceholder from '@/assets/avatar-placeholder.jpg';

export const CHARACTERS: Character[] = [
  // ===== COFFEE SHOP TEAM (organization_id: 1) =====
  {
    id: 1,
    username: "alex_barista",
    displayName: "Alex Chen",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "Professional barista with 3 years experience. Passionate about coffee art and customer service. Currently training new candidates.",
    location: "Downtown Coffee Shop",
    skills: ["Coffee preparation", "Customer service", "Cash handling", "Team coordination"],
    characterTraits: ["Patient", "Detail-oriented", "Friendly", "Mentoring"],
    speechStyle: "Calm and professional, uses coffee terminology naturally",
    organizationId: 1
  },
  {
    id: 2,
    username: "sara_waitress",
    displayName: "Sara Martinez",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "Experienced waitress focused on creating welcoming atmosphere. Excel at handling diverse customer personalities.",
    location: "Downtown Coffee Shop",
    skills: ["Customer service", "Order management", "Conflict resolution", "Menu knowledge"],
    characterTraits: ["Empathetic", "Quick-thinking", "Welcoming", "Multilingual"],
    speechStyle: "Warm and engaging, speaks with enthusiasm and local accent",
    organizationId: 1
  },
  {
    id: 3,
    username: "mike_admin",
    displayName: "Mike Rodriguez",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "Coffee shop manager overseeing operations, staff training, and customer satisfaction. Main profile for simulation.",
    location: "Downtown Coffee Shop HQ",
    skills: ["Management", "Staff training", "Quality control", "Business operations"],
    characterTraits: ["Authoritative", "Fair", "Strategic", "Supportive"],
    speechStyle: "Professional and decisive, uses management terminology",
    organizationId: 1
  },
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
    speechStyle: "Professional and analytical, asks probing questions",
    organizationId: 1
  },

  // ===== WEB STUDIO TEAM (organization_id: 2) =====
  {
    id: 11,
    username: "jordan_designer",
    displayName: "Jordan Mitchell",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "UI/UX Designer with 5 years experience. Expert in design systems and user-centered design. Mentors junior designers on design thinking.",
    location: "Creative Web Studio",
    skills: ["UI Design", "UX Research", "Figma", "Design Systems", "User testing", "Wireframing"],
    characterTraits: ["Creative", "User-focused", "Collaborative", "Detail-oriented"],
    speechStyle: "Clear and visual, explains design concepts with enthusiasm",
    organizationId: 2
  },
  {
    id: 12,
    username: "alex_developer",
    displayName: "Alexandra Kumar",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "Full-stack developer with 6 years experience. Strong focus on code quality, testing, and mentoring. Passionate about modern web technologies.",
    location: "Creative Web Studio",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Testing", "Git", "Code review"],
    characterTraits: ["Analytical", "Thorough", "Patient", "Problem-solver"],
    speechStyle: "Technical but clear, explains complex concepts well",
    organizationId: 2
  },
  {
    id: 13,
    username: "david_pm",
    displayName: "David Hernandez",
    avatarUrl: avatarPlaceholder,
    role: "staff",
    bio: "Project manager ensuring smooth workflows and client satisfaction. Expert in agile methodologies and team coordination.",
    location: "Creative Web Studio",
    skills: ["Project management", "Agile/Scrum", "Communication", "Planning", "Risk management"],
    characterTraits: ["Organized", "Leader", "Empathetic", "Communicative"],
    speechStyle: "Professional and diplomatic, focuses on outcomes",
    organizationId: 2
  },
  {
    id: 14,
    username: "emma_recruiter_web",
    displayName: "Emma Richardson",
    avatarUrl: avatarPlaceholder,
    role: "recruiter",
    bio: "Tech recruiter specialized in web development talent. Evaluates candidates based on technical skills, code quality, and team fit.",
    location: "Tech Recruitment Partners",
    skills: ["Technical evaluation", "Code review basics", "Talent assessment", "Communication"],
    characterTraits: ["Precise", "Fair", "Tech-savvy", "Supportive"],
    speechStyle: "Professional and direct, understands technical nuances",
    organizationId: 2
  },

  // ===== CANDIDATES =====
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
  {
    id: 15,
    username: "maya_designer_candidate",
    displayName: "Maya Patel",
    avatarUrl: avatarPlaceholder,
    role: "candidate",
    bio: "Junior designer transitioning from bootcamp. Enthusiastic about design systems and user research. Building portfolio with real projects.",
    location: "Design School District",
    skills: ["UI Design", "Figma", "User research", "Prototyping", "Visual design"],
    characterTraits: ["Creative", "Eager to learn", "Detail-focused", "Curious"],
    speechStyle: "Thoughtful and inquisitive, explains ideas clearly"
  },
  {
    id: 16,
    username: "alex_dev_candidate",
    displayName: "Alex Sato",
    avatarUrl: avatarPlaceholder,
    role: "candidate",
    bio: "Self-taught developer with bootcamp certification. Strong fundamentals in React and JavaScript. Seeking first professional role.",
    location: "Tech Hub Downtown",
    skills: ["JavaScript", "React", "HTML/CSS", "Problem solving", "Git basics"],
    characterTraits: ["Motivated", "Fast learner", "Self-disciplined", "Resourceful"],
    speechStyle: "Direct and concise, speaks with confidence about code"
  },

  // ===== CUSTOMERS =====
  {
    id: 8,
    username: "grumpy_customer",
    displayName: "Robert Davis",
    avatarUrl: avatarPlaceholder,
    role: "customer",
    bio: "Regular morning customer who values efficiency and consistency. Not very patient with delays.",
    location: "Business District",
    skills: [],
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
  },
  {
    id: 17,
    username: "demanding_client",
    displayName: "Christopher Lewis",
    avatarUrl: avatarPlaceholder,
    role: "customer",
    bio: "Demanding corporate client with high expectations. Values clear communication and timely delivery.",
    location: "Corporate Tower Downtown",
    skills: [],
    characterTraits: ["Exacting", "Professional", "Results-oriented", "Direct"],
    speechStyle: "Formal and business-like, focuses on deliverables"
  }
];

export const getCharacterById = (id: number): Character | undefined => {
  return CHARACTERS.find(char => char.id === id);
};

export const getCharactersByRole = (role: string): Character[] => {
  return CHARACTERS.filter(char => char.role === role);
};

export const getCharactersByOrganization = (organizationId: number): Character[] => {
  return CHARACTERS.filter(char => char.organizationId === organizationId);
};

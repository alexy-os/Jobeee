import * as kv from './kv_store.tsx';
import type { User, Company, Story, Thread, Quiz, Aclona, Comment } from './types.ts';

export async function seedData() {
  // Create companies
  const companies: Company[] = [
    {
      id: 'company-1',
      name: 'Starbucks Academy',
      logo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop',
      description: 'Professional barista training and customer service scenarios',
      industry: 'Food & Beverage',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'company-2',
      name: 'TechCorp Learning',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      description: 'IT and tech soft skills development',
      industry: 'Technology',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'company-3',
      name: 'Retail Excellence',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
      description: 'Customer service training for retail',
      industry: 'Retail',
      createdAt: new Date().toISOString(),
    },
  ];

  // Create users
  const users: User[] = [
    {
      id: 'user-1',
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      bio: 'Coffee enthusiast & customer service pro',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-2',
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      bio: 'Retail manager sharing real experiences',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-3',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      bio: 'Learning every day in tech support',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-4',
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      bio: 'Barista & soft skills trainer',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-5',
      name: 'Lisa Brown',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      bio: 'Customer experience specialist',
      createdAt: new Date().toISOString(),
    },
  ];

  // Create stories
  const stories: Story[] = [
    {
      id: 'story-1',
      userId: 'user-1',
      videoUrl: 'https://example.com/video1.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop',
      caption: 'Handled my first rush hour! 🎉',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      viewCount: 245,
    },
    {
      id: 'story-2',
      userId: 'user-2',
      videoUrl: 'https://example.com/video2.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=200&h=200&fit=crop',
      caption: 'Customer service win today!',
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      viewCount: 189,
    },
    {
      id: 'story-3',
      userId: 'user-3',
      videoUrl: 'https://example.com/video3.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      caption: 'Difficult customer turned happy!',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      viewCount: 312,
    },
    {
      id: 'story-4',
      userId: 'user-4',
      videoUrl: 'https://example.com/video4.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
      caption: 'Team collaboration at its best',
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      viewCount: 156,
    },
    {
      id: 'story-5',
      userId: 'user-5',
      videoUrl: 'https://example.com/video5.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
      caption: 'Learning from mistakes 💪',
      createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      viewCount: 278,
    },
  ];

  // Create threads
  const threads: Thread[] = [
    {
      id: 'thread-1',
      companyId: 'company-1',
      title: 'Rush Hour Queue Management',
      description: 'Learn how to handle multiple customers during peak hours',
      scenario: 'You are a barista during morning rush hour. There are 8 customers in line, two regulars are waiting for their mobile orders, and a new trainee needs your help with the espresso machine. How do you prioritize?',
      difficulty: 'hard',
      tags: ['Time Management', 'Multitasking', 'Customer Service'],
      imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 156,
      commentCount: 23,
    },
    {
      id: 'thread-2',
      companyId: 'company-2',
      title: 'Handling Difficult Technical Support Call',
      description: 'Navigate a frustrated customer with a complex technical issue',
      scenario: 'A customer has been on hold for 10 minutes and is very upset. Their product stopped working right before an important presentation. How do you de-escalate and solve the problem?',
      difficulty: 'medium',
      tags: ['Conflict Resolution', 'Technical Support', 'Empathy'],
      imageUrl: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 203,
      commentCount: 34,
    },
    {
      id: 'thread-3',
      companyId: 'company-3',
      title: 'Returns Without Receipt',
      description: 'Master the art of policy communication with empathy',
      scenario: 'A customer wants to return an item without a receipt. They claim they bought it last week but you cannot find it in the system. Store policy requires a receipt for returns. How do you handle this?',
      difficulty: 'medium',
      tags: ['Policy Communication', 'Problem Solving', 'Customer Relations'],
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 178,
      commentCount: 19,
    },
  ];

  // Create quizzes
  const quizzes: Quiz[] = [
    {
      id: 'quiz-1',
      companyId: 'company-1',
      title: 'Coffee Knowledge Basics',
      description: 'Test your knowledge about different coffee types and brewing methods',
      questions: [
        {
          question: 'What is the ideal water temperature for brewing espresso?',
          options: ['180-185°F', '190-195°F', '200-205°F', '210-215°F'],
          correctAnswer: 1,
        },
        {
          question: 'How long should you steam milk for a cappuccino?',
          options: ['5-10 seconds', '15-20 seconds', '25-30 seconds', '35-40 seconds'],
          correctAnswer: 2,
        },
      ],
      tags: ['Coffee', 'Product Knowledge', 'Training'],
      imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 89,
      completionCount: 432,
    },
    {
      id: 'quiz-2',
      companyId: 'company-2',
      title: 'Active Listening Skills',
      description: 'Evaluate your ability to truly hear and understand customers',
      questions: [
        {
          question: 'What is the first step in active listening?',
          options: ['Formulating a response', 'Giving full attention', 'Taking notes', 'Asking questions'],
          correctAnswer: 1,
        },
      ],
      tags: ['Communication', 'Soft Skills', 'Customer Service'],
      imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      likeCount: 134,
      completionCount: 567,
    },
  ];

  // Create aclonas
  const aclonas: Aclona[] = [
    {
      id: 'aclona-1',
      companyId: 'company-1',
      title: 'Morning Motivation Podcast',
      description: 'Daily tips for customer service excellence',
      contentType: 'audio',
      mediaUrl: 'https://example.com/podcast1.mp3',
      duration: 480,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'aclona-2',
      companyId: 'company-2',
      title: 'Empathy in Tech Support',
      description: 'Interactive module on emotional intelligence',
      contentType: 'interactive',
      mediaUrl: 'https://example.com/module1',
      duration: 600,
      createdAt: new Date().toISOString(),
    },
  ];

  // Create comments for threads
  const comments: Comment[] = [
    {
      id: 'comment-1',
      threadId: 'thread-1',
      userId: 'user-1',
      userName: 'Emma Watson',
      userAvatar: users[0].avatar,
      content: 'This scenario helped me so much! I prioritized mobile orders first while acknowledging everyone in line. Game changer! ☕',
      createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-2',
      threadId: 'thread-1',
      userId: 'user-4',
      userName: 'Mike Chen',
      userAvatar: users[3].avatar,
      content: 'Great scenario! I would also suggest having a communication system with the trainee - maybe hand signals to check if they need immediate help.',
      createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-3',
      threadId: 'thread-1',
      userId: 'user-2',
      userName: 'John Smith',
      userAvatar: users[1].avatar,
      content: 'In my experience, acknowledging each customer with eye contact and a smile makes the wait feel shorter even when you are busy.',
      createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-4',
      threadId: 'thread-2',
      userId: 'user-3',
      userName: 'Sarah Johnson',
      userAvatar: users[2].avatar,
      content: 'The key is to apologize sincerely for the wait first, then focus on solving their problem quickly. Empathy goes a long way!',
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-5',
      threadId: 'thread-2',
      userId: 'user-5',
      userName: 'Lisa Brown',
      userAvatar: users[4].avatar,
      content: 'I always repeat back what I understand to make sure I got their issue right. It shows you are listening and helps avoid more frustration.',
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    },
  ];

  // Store all data in KV store
  const allData = [
    ...companies.map(c => ({ key: `company:${c.id}`, value: c })),
    ...users.map(u => ({ key: `user:${u.id}`, value: u })),
    ...stories.map(s => ({ key: `story:${s.id}`, value: s })),
    ...threads.map(t => ({ key: `thread:${t.id}`, value: t })),
    ...quizzes.map(q => ({ key: `quiz:${q.id}`, value: q })),
    ...aclonas.map(a => ({ key: `aclona:${a.id}`, value: a })),
    ...comments.map(c => ({ key: `comment:${c.id}`, value: c })),
  ];

  for (const item of allData) {
    await kv.set(item.key, item.value);
  }

  // Create index keys for efficient querying
  await kv.set('index:stories', stories.map(s => s.id));
  await kv.set('index:threads', threads.map(t => t.id));
  await kv.set('index:quizzes', quizzes.map(q => q.id));
  await kv.set('index:aclonas', aclonas.map(a => a.id));
  
  // Create comment indexes by thread
  for (const thread of threads) {
    const threadComments = comments.filter(c => c.threadId === thread.id);
    await kv.set(`index:comments:thread:${thread.id}`, threadComments.map(c => c.id));
  }

  console.log('✅ Seed data created successfully');
}

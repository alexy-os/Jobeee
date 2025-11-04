import { projectId, publicAnonKey } from './supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-ff00f4a9`;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `API error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Initialize database with seed data
  seedDatabase: () => fetchAPI('/seed', { method: 'POST' }),

  // Get all stories
  getStories: () => fetchAPI('/stories'),

  // Get feed items
  getFeed: () => fetchAPI('/feed'),

  // Get thread with comments
  getThread: (id: string) => fetchAPI(`/threads/${id}`),

  // Add comment to thread
  addComment: (threadId: string, userId: string, content: string) =>
    fetchAPI(`/threads/${threadId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ userId, content }),
    }),

  // Get aclonas
  getAclonas: () => fetchAPI('/aclonas'),

  // Like a thread
  likeThread: (threadId: string) =>
    fetchAPI(`/threads/${threadId}/like`, { method: 'POST' }),
};

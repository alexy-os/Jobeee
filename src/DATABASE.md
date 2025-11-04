# Database Structure

## Overview
This application uses Supabase KV Store to manage data for a social learning platform where companies create training scenarios and users share experiences.

## Entities

### Users
Пользователи платформы, которые создают stories и комментируют сценарии.

**Storage:** `user:{userId}`

**Fields:**
- `id` - Unique identifier
- `name` - User's display name
- `avatar` - Profile picture URL
- `bio` - Short biography
- `createdAt` - Creation timestamp

### Companies
Компании, создающие обучающие сценарии.

**Storage:** `company:{companyId}`

**Fields:**
- `id` - Unique identifier
- `name` - Company name
- `logo` - Company logo URL
- `description` - Company description
- `industry` - Industry type
- `createdAt` - Creation timestamp

### Stories
Короткие видео от пользователей (отображаются как кружочки над лентой).

**Storage:** `story:{storyId}`

**Fields:**
- `id` - Unique identifier
- `userId` - Author user ID
- `videoUrl` - Video file URL
- `thumbnailUrl` - Thumbnail image URL
- `caption` - Story caption
- `createdAt` - Creation timestamp
- `viewCount` - Number of views

### Threads
Обучающие сценарии от компаний (например, "бариста в час пик").

**Storage:** `thread:{threadId}`

**Fields:**
- `id` - Unique identifier
- `companyId` - Company that created the thread
- `title` - Thread title
- `description` - Short description
- `scenario` - Full scenario text
- `difficulty` - 'easy' | 'medium' | 'hard'
- `tags` - Array of tags
- `imageUrl` - Thread image URL
- `createdAt` - Creation timestamp
- `likeCount` - Number of likes
- `commentCount` - Number of comments

### Quizzes
Квизы от компаний для проверки знаний.

**Storage:** `quiz:{quizId}`

**Fields:**
- `id` - Unique identifier
- `companyId` - Company that created the quiz
- `title` - Quiz title
- `description` - Quiz description
- `questions` - Array of questions with options and correct answers
- `tags` - Array of tags
- `imageUrl` - Quiz image URL
- `createdAt` - Creation timestamp
- `likeCount` - Number of likes
- `completionCount` - Number of completions

### Aclonas
Дополнительный образовательный контент (подкасты, видео, интерактивные модули).

**Storage:** `aclona:{aclonasId}`

**Fields:**
- `id` - Unique identifier
- `companyId` - Company that created the content
- `title` - Content title
- `description` - Content description
- `contentType` - 'video' | 'audio' | 'interactive'
- `mediaUrl` - Media file URL
- `duration` - Duration in seconds
- `createdAt` - Creation timestamp

### Comments
Комментарии пользователей к тредам.

**Storage:** `comment:{commentId}`

**Fields:**
- `id` - Unique identifier
- `threadId` - Thread being commented on
- `userId` - User who wrote the comment
- `userName` - User's display name (denormalized)
- `userAvatar` - User's avatar (denormalized)
- `content` - Comment text
- `createdAt` - Creation timestamp

## Indexes

For efficient querying, the following index keys are used:

- `index:stories` - Array of all story IDs
- `index:threads` - Array of all thread IDs
- `index:quizzes` - Array of all quiz IDs
- `index:aclonas` - Array of all aclonas IDs
- `index:comments:thread:{threadId}` - Array of comment IDs for a specific thread

## API Endpoints

### Seed Data
`POST /make-server-ff00f4a9/seed`
- Initializes database with sample data

### Stories
`GET /make-server-ff00f4a9/stories`
- Returns all stories with user data

### Feed
`GET /make-server-ff00f4a9/feed`
- Returns all feed items (threads and quizzes) with company data
- Sorted by creation date (newest first)

### Thread Details
`GET /make-server-ff00f4a9/threads/:id`
- Returns thread with company data and all comments

### Add Comment
`POST /make-server-ff00f4a9/threads/:id/comments`
- Body: `{ userId: string, content: string }`
- Adds a new comment to a thread

### Aclonas
`GET /make-server-ff00f4a9/aclonas`
- Returns all aclonas with company data

### Like Thread
`POST /make-server-ff00f4a9/threads/:id/like`
- Increments like count on a thread

## Initial Setup

The application automatically seeds the database on first load if no data exists. You can also manually trigger seeding by calling the `/seed` endpoint.

Sample data includes:
- 3 companies (Starbucks Academy, TechCorp Learning, Retail Excellence)
- 5 users
- 5 stories
- 3 threads with different scenarios
- 2 quizzes
- 2 aclonas
- 5 comments on threads

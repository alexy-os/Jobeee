# Jobeee Architecture Overview

## System Design

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Frontend (React + TypeScript)                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │              Application Routes                              │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │  /                      → Feed (Main Stream)               │    │
│  │  /organizations         → Organizations Hub ✨             │    │
│  │  /profile              → User Profile                      │    │
│  │  /*                    → 404 Not Found                     │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Component Architecture                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Navigation (Global)                                                 │
│      │ ├─ Feed Link                                                 │
│      │ ├─ Organizations Link  ✨                                    │
│      │ └─ Profile Link                                              │
│      │                                                               │
│  Feed Page                                                           │
│      ├─ StoriesBar                                                  │
│      ├─ CreatePost                                                  │
│      └─ Post (x N)                                                  │
│             └─ CommentSection                                       │
│                    └─ NestedComment (nested threads)               │
│                                                                       │
│  Organizations Page ✨                                              │
│      ├─ OrganizationCard (Coffee Shop)                             │
│      │   ├─ Expanded: Team Members                                 │
│      │   └─ Expanded: Assessment Threads                           │
│      │       └─ ThreadItem (active/completed)                     │
│      │                                                               │
│      ├─ OrganizationCard (Web Studio)                              │
│      │   ├─ Expanded: Team Members                                 │
│      │   └─ Expanded: Assessment Threads                           │
│      │       └─ ThreadItem (active/completed)                     │
│      │                                                               │
│      └─ Right Sidebar                                              │
│           └─ Assessment Details Panel                              │
│                                                                       │
│  Profile Page                                                        │
│      ├─ User Info                                                   │
│      ├─ Assessment History                                          │
│      └─ Statistics                                                  │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Data Layer (Frontend Mock)                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  src/data/                                                           │
│  ├─ types.ts              → TypeScript interfaces (Supabase-ready)  │
│  ├─ characters.ts         → User data (12 characters)              │
│  ├─ posts.ts              → Scenarios (10 posts)                   │
│  ├─ organizations.ts      → Organizations & threads ✨             │
│  └─ index.ts              → Data exports & helpers                 │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────┐
│             Backend (To be: Supabase PostgreSQL)                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Tables:                                                             │
│  ├─ characters                  → Users (staff, recruiters, etc.)   │
│  ├─ organizations               → Companies (Coffee Shop, Web Studio)│
│  ├─ posts                       → Scenarios                         │
│  ├─ comments                    → Feedback & Responses              │
│  └─ assessment_threads          → Evaluation Sessions              │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Entity Relationships

### Organization → Characters (Staff)
```
Organization (Downtown Café)
├─ recruiter_ids: [4]           (Lisa Thompson)
└─ staff_ids: [1, 2, 3]         (Alex, Sara, Mike)

Organization (Creative Web Studio)
├─ recruiter_ids: [14]          (Emma Richardson)
└─ staff_ids: [11, 12, 13]      (Jordan, Alexandra, David)
```

### Organization → Posts (Scenarios)
```
Organization (Downtown Café)
└─ scenario_ids: [1, 2, 3, 4, 5]
    ├─ Post 1: Morning Coffee Order
    ├─ Post 2: Coffee Too Cold
    ├─ Post 3: Multiple Orders During Busy Period
    ├─ Post 4: Incorrect Change Given
    └─ Post 5: Custom Drink Preparation

Organization (Creative Web Studio)
└─ scenario_ids: [6, 7, 8, 9, 10]
    ├─ Post 6: Landing Page Design Review
    ├─ Post 7: API Integration - Code Review
    ├─ Post 8: Project Kickoff
    ├─ Post 9: Design-Dev Handoff Issues
    └─ Post 10: Feature Priority Shift
```

### Post → Comments (Threaded)
```
Post (Scenario)
├─ Comment 1 (type: 'response', author: Candidate)
│  ├─ Comment 1.1 (type: 'feedback', parent_id: 1, author: Mentor)
│  ├─ Comment 1.2 (type: 'feedback', parent_id: 1, author: Mentor)
│  └─ Comment 1.3 (type: 'response', parent_id: 1.1, author: Candidate)
│
├─ Comment 2 (type: 'resolution', author: Recruiter)
│
└─ Comment 3 (type: 'response', author: Another Candidate)
```

### AssessmentThread Structure
```
AssessmentThread (Barista Evaluation)
├─ organization_id: 1                 (Downtown Café)
├─ candidate_id: 5                    (Jamie Wilson)
├─ position_type: 'barista'
├─ scenario_post_id: 1                (Morning Coffee Order)
├─ recruiter_id: 4                    (Lisa Thompson)
├─ mentor_ids: [1, 2]                (Alex, Sara)
├─ status: 'completed'
├─ final_rating: 'excellent'
├─ comment_ids: [1, 2, 3, 4, 5]       (All feedback chain)
└─ Timeline:
    ├─ created_at: 2024-10-22
    ├─ started_at: 2024-10-22T08:00
    └─ completed_at: 2024-10-24T14:30
```

## Assessment Workflow (State Machine)

```
┌──────────┐
│ PENDING  │  (Thread created, waiting to start)
└────┬─────┘
     │
     ▼
┌──────────────────────────┐
│ ACTIVE                   │  (Candidate working on scenario)
│ Stage: initial_response  │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│ ACTIVE                   │  (Mentors providing feedback)
│ Stage: feedback_round_1  │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│ ACTIVE                   │  (Candidate addressing feedback)
│ Stage: feedback_round_2  │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│ ACTIVE                   │  (Final decision pending)
│ Stage: final_decision    │
└────┬─────────────────────┘
     │
     ├─────────────────────┬──────────────────┐
     │                     │                  │
     ▼                     ▼                  ▼
┌──────────┐       ┌──────────┐        ┌──────────┐
│ PASSED   │       │ FAILED   │        │ COMPLETED│
│ Rating:  │       │ Rating:  │        │(no rating)
│EXCELLENT │       │NEEDS_IMP │        │          │
└──────────┘       └──────────┘        └──────────┘
```

## Data Flow Example: Coffee Shop Assessment

```
1. INITIALIZE
   - Recruiter (Lisa) creates AssessmentThread
   - Links: Candidate (Jamie), Scenario (Post 1), Mentors (Alex, Sara)
   - Status: PENDING

2. CANDIDATE RESPONSE
   - Comment 1 created (type: 'response')
   - Jamie responds to "Morning Coffee Order" scenario
   - Status: ACTIVE → initial_response stage

3. MENTORS REVIEW
   - Comment 1.1 (Alex barista) - positive feedback
   - Comment 1.2 (Sara barista) - constructive feedback
   - Status: ACTIVE → feedback_round_1 stage

4. CANDIDATE REPLIES
   - Comment 1.3 - Jamie acknowledges feedback
   - Status: ACTIVE → feedback_round_2 stage

5. RECRUITER DECISION
   - Comment 2 (type: 'resolution')
   - Lisa provides final rating: EXCELLENT
   - Final feedback stored
   - Status: COMPLETED

6. RESULT
   - AssessmentThread shows all comments as nested chain
   - Displayable in Feed (CommentSection)
   - Listed in Organizations page (AssessmentThread cards)
```

## UI State Management

### Feed Page
```typescript
const feedPosts = getFeedPosts()    // Load scenarios
const [posts, setPosts] = useState<PostData[]>(feedPosts)

// User interactions
handlePostCreated(content, imageUrl)     // Add new post
handleLike(id)                           // Toggle like
handleFavorite(id)                       // Toggle favorite
```

### Organizations Page
```typescript
const [selectedThread, setSelectedThread] = useState<AssessmentThread | null>(null)

// Display logic
ORGANIZATIONS.forEach(org => {
  const threads = getAssessmentThreadsByOrganization(org.id)
  // Filter: active vs completed
  // Display: expandable cards
})

// Side panel updates when thread selected
selectedThread ? displayDetails() : showPlaceholder()
```

## Supabase Migration Path

When ready to deploy to Supabase:

1. Create tables using schema from `NETWORK.md`
2. Set up foreign key relationships
3. Create indexes on common queries:
   - `organizations.id`
   - `posts.organization_id`
   - `assessment_threads.organization_id`
   - `assessment_threads.candidate_id`
   - `comments.post_id`
   - `comments.parent_id`

4. Replace mock data with:
   ```typescript
   import { createClient } from '@supabase/supabase-js'
   const supabase = createClient(url, key)
   const { data: organizations } = await supabase.from('organizations').select()
   ```

## Performance Considerations

### Current (Mock Data)
- ✅ All data in-memory
- ✅ Instant loads
- ✅ No network latency

### Future (Supabase)
- Add pagination for posts/threads
- Implement real-time subscriptions
- Cache frequently accessed data
- Optimize nested comment queries

## Testing Strategy

1. **Component Testing**: Vitest + React Testing Library
2. **Data Flow Testing**: Mock data with Vitest
3. **Navigation Testing**: React Router v6 testing
4. **End-to-end**: Playwright for critical flows

## Development Roadmap

### Phase 1 ✅ (Current)
- [x] Mock data architecture
- [x] Two industries (Coffee Shop, Web Studio)
- [x] Feed with nested comments
- [x] Organizations hub with threads
- [x] Supabase-ready naming

### Phase 2 (Next)
- [ ] Supabase database setup
- [ ] User authentication
- [ ] Real-time comment updates
- [ ] Assessment progress tracking

### Phase 3
- [ ] Video recording for artifacts
- [ ] AI-powered feedback suggestions
- [ ] Mobile app
- [ ] Analytics dashboard

---

For detailed entity schemas, see `NETWORK.md`

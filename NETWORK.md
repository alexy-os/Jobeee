# Jobeee - Social Learning Network Architecture

## Overview
Jobeee is a social learning platform that simulates real workplace scenarios across different industries. Currently supporting:
- **Coffee Shop** ☕ - Service industry simulations (barista, waitress, manager roles)
- **Web Studio** 🎨 - Tech industry simulations (designer, developer, project manager roles)

## Data Architecture (Supabase Tables)

### Core Entities

#### 1. `characters` (Users)
```sql
- id: INTEGER PRIMARY KEY
- username: TEXT UNIQUE
- display_name: TEXT
- avatar_url: TEXT
- role: ENUM['staff', 'recruiter', 'candidate', 'customer']
- bio: TEXT
- location: TEXT
- skills: JSON ARRAY
- character_traits: JSON ARRAY
- speech_style: TEXT
- organization_id: INTEGER FK (optional, for staff and recruiters)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### 2. `organizations` (Companies)
```sql
- id: INTEGER PRIMARY KEY
- name: TEXT
- slug: TEXT UNIQUE
- industry: ENUM['coffee_shop', 'web_studio']
- logo_url: TEXT
- description: TEXT
- location: TEXT
- website: TEXT (optional)
- recruiter_ids: JSON ARRAY (FK to characters)
- staff_ids: JSON ARRAY (FK to characters - mentors)
- scenario_ids: JSON ARRAY (FK to posts)
- total_assessments: INTEGER
- avg_candidate_rating: DECIMAL
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### 3. `posts` (Scenarios/Simulation Cases)
```sql
- id: INTEGER PRIMARY KEY
- author_id: INTEGER FK (characters)
- organization_id: INTEGER FK (organizations, optional)
- scenario: TEXT (coffee_order, complaint, rush_hour, code_review, etc.)
- title: TEXT
- content: TEXT
- timestamp: TEXT
- likes: INTEGER
- comments: INTEGER
- is_liked: BOOLEAN
- is_favorited: BOOLEAN
- image_url: TEXT (optional)
- tags: JSON ARRAY
- status: ENUM['active', 'resolved', 'certified']
- resolution: JSON (optional - by_role, decision, feedback)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### 4. `comments` (Feedback & Responses)
```sql
- id: INTEGER PRIMARY KEY
- post_id: INTEGER FK (posts)
- author_id: INTEGER FK (characters)
- thread_id: INTEGER FK (assessment_threads, optional)
- content: TEXT
- timestamp: TEXT
- likes: INTEGER
- is_liked: BOOLEAN
- type: ENUM['response', 'feedback', 'resolution']
- role_response: TEXT (optional - barista_candidate, web_developer, etc.)
- parent_id: INTEGER FK (comments, optional - for nested replies)
- stage: ENUM['initial_response', 'feedback_round_1', 'feedback_round_2', 'final_decision'] (optional)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
```

#### 5. `assessment_threads` (Evaluation/Test Sessions)
```sql
- id: INTEGER PRIMARY KEY
- organization_id: INTEGER FK (organizations)
- candidate_id: INTEGER FK (characters)
- position_type: TEXT (barista, waitress, web_designer, web_developer, project_manager)
- scenario_post_id: INTEGER FK (posts)
- recruiter_id: INTEGER FK (characters)
- mentor_ids: JSON ARRAY (FK to characters - staff providing feedback)
- status: ENUM['active', 'completed', 'failed', 'passed', 'pending']
- stage: ENUM['initial_response', 'feedback_round_1', 'feedback_round_2', 'final_decision']
- created_at: TIMESTAMP
- started_at: TIMESTAMP (optional)
- completed_at: TIMESTAMP (optional)
- final_rating: ENUM['excellent', 'good', 'needs_improvement', 'failed'] (optional)
- final_feedback: TEXT (optional)
- comment_ids: JSON ARRAY (FK to comments)
- updated_at: TIMESTAMP
```

## Data Flow

### Assessment Process Flow
```
1. Candidate selects a position and organization
   ↓
2. AssessmentThread created (status: 'pending')
   ↓
3. Scenario Post displayed (from that organization)
   ↓
4. Candidate submits response as Comment (type: 'response')
   ↓
5. Mentors review and add Feedback Comments
   ↓
6. Candidate replies to feedback (stage progression)
   ↓
7. Recruiter provides final decision Comment (type: 'resolution')
   ↓
8. AssessmentThread completed (status: 'passed' or 'failed')
```

### Comment Thread Structure (Nested)
```
Post (Scenario)
├─ Comment 1: Candidate Response (type: 'response', stage: 'initial_response')
│  ├─ Comment 1.1: Mentor Feedback (type: 'feedback', parent_id: 1)
│  ├─ Comment 1.2: Mentor Feedback (type: 'feedback', parent_id: 1)
│  └─ Comment 1.3: Candidate Reply (type: 'response', parent_id: 1.1)
│
├─ Comment 2: Recruiter Decision (type: 'resolution')
└─ Comment 3: Another Response (type: 'response', stage: 'feedback_round_2')
```

## Industries & Position Types

### Coffee Shop Organization
**Staff Members:**
- Alex Chen (Barista, Mentor)
- Sara Martinez (Waitress, Mentor)
- Mike Rodriguez (Manager, Mentor)
- Lisa Thompson (Recruiter)

**Position Types:**
- `barista` - Coffee preparation and customer interaction
- `waitress` - Table service and order management
- `coffee_shop_manager` - Operations and team coordination

**Scenarios:**
- coffee_order - Simple customer order handling
- complaint - Managing customer complaints
- rush_hour - High-volume service scenarios
- cash_register - Payment handling
- special_request - Custom order preparation

### Web Studio Organization
**Staff Members:**
- Jordan Mitchell (UI/UX Designer, Mentor)
- Alexandra Kumar (Full-stack Developer, Mentor)
- David Hernandez (Project Manager, Mentor)
- Emma Richardson (Recruiter)

**Position Types:**
- `web_designer` - UI/UX design and component creation
- `web_developer` - Frontend and backend development
- `project_manager` - Project coordination and client management

**Scenarios:**
- design_feedback - Responding to design critique
- code_review - Handling technical feedback
- client_meeting - Managing client expectations
- team_coordination - Cross-functional collaboration
- deadline_pressure - Priority management under constraints

## Frontend Pages

### `/` - Feed
Main stream of all active scenarios from all organizations

### `/organizations` - Organizations Hub
- Displays all organizations as expandable cards
- Shows team members, assessment statistics
- Lists active and completed assessment threads
- Sidebar with thread details on selection

### `/profile` - User Profile
Personal profile with assessment history and progress

## Supabase Naming Conventions Applied

✅ **Snake_case** for all database field names
✅ **Meaningful IDs** with `_id` suffix for foreign keys
✅ **Enum types** for status and role fields
✅ **JSON arrays** for many-to-many relationships where appropriate
✅ **Timestamps** (`created_at`, `updated_at`) on all tables
✅ **slug** field for URL-friendly organization names

## Future Enhancements

- Candidate profile pages with assessment history
- Analytics dashboard for recruiters
- Real-time notifications
- Messaging system between candidates and mentors
- Advanced filtering and search
- Candidate vs Staff viewpoints
- Industry-specific skill taxonomy
- Certification tracking
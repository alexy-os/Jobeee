# Jobeee - Social Learning Simulation Platform

A social learning platform that simulates real workplace scenarios across different industries. Learn and practice professional skills through realistic job simulations with community feedback and evaluation.

## 🎯 Current Industries

### ☕ Coffee Shop
Hospitality-focused simulations for baristas, waitresses, and managers
- **Scenarios**: Coffee orders, complaints, rush hours, cash handling, special requests
- **Team**: Alex Chen (Barista), Sara Martinez (Waitress), Mike Rodriguez (Manager)
- **Recruiter**: Lisa Thompson

### 🎨 Web Studio
Tech-focused simulations for designers, developers, and project managers
- **Scenarios**: Design feedback, code reviews, client meetings, team coordination, deadline pressure
- **Team**: Jordan Mitchell (Designer), Alexandra Kumar (Developer), David Hernandez (PM)
- **Recruiter**: Emma Richardson

## 🚀 Features

### 1. **Feed** (`/`)
- Main stream of all active scenarios
- Real-time comments and feedback system
- Nested threaded discussions
- Like and favorite functionality
- Multi-industry scenario browsing

### 2. **Organizations Hub** (`/organizations`) ✨ NEW
- Browse all companies and their assessment programs
- **Expandable organization cards** showing:
  - Organization info and statistics
  - Team member profiles
  - Assessment threads grouped by status (Active/Completed)
- **Side panel** with selected thread details
- Thread status tracking: pending, active, completed, passed, failed
- Assessment workflow visualization

### 3. **User Profile** (`/profile`)
- Personal assessment history
- Skill tracking
- Statistics and progress

## 📊 Data Architecture

The app uses Supabase-compatible data models with snake_case naming:

### Core Tables
- **characters** - Users (staff, recruiters, candidates, customers)
- **organizations** - Companies managing simulations
- **posts** - Scenario/simulation cases
- **comments** - Feedback and responses (nested threads)
- **assessment_threads** - Evaluation sessions and progress tracking

See `NETWORK.md` for complete schema documentation.

## 💡 Assessment Thread Workflow

```
Candidate Selection
    ↓
AssessmentThread Created
    ↓
Scenario Posted
    ↓
Candidate Response
    ↓
Mentor Feedback (Multiple)
    ↓
Candidate Replies
    ↓
Recruiter Final Decision
    ↓
Assessment Complete
```

## 🎮 Position Types

### Coffee Shop
- `barista` - Beverage preparation and customer service
- `waitress` - Table service and order management
- `coffee_shop_manager` - Operations and team coordination

### Web Studio
- `web_designer` - UI/UX design and prototyping
- `web_developer` - Full-stack development
- `project_manager` - Project coordination and client relations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Library**: Shadcn/ui + Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Notifications**: Sonner
- **State Management**: React Hooks + React Query

## 📝 Project Structure

```
src/
├── components/
│   ├── OrganizationCard.tsx      # Organization display + threads
│   ├── CommentSection.tsx        # Comment management
│   ├── NestedComment.tsx         # Threaded comments
│   ├── Navigation.tsx            # Navigation menu
│   └── ... (other UI components)
├── pages/
│   ├── Feed.tsx                  # Main feed
│   ├── Organizations.tsx         # Organizations hub ✨ NEW
│   ├── Profile.tsx               # User profile
│   └── NotFound.tsx
├── data/
│   ├── types.ts                  # TypeScript interfaces
│   ├── characters.ts             # User data
│   ├── posts.ts                  # Scenarios and comments
│   ├── organizations.ts          # Organizations & threads ✨ NEW
│   └── index.ts                  # Data exports
└── ...
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## 📱 Navigation

- `/` - Main feed with all scenarios
- `/organizations` - Organizations hub with expandable cards and thread details
- `/profile` - User profile and assessment history
- `*` - 404 Not Found

## 🔄 Naming Conventions (Supabase-Ready)

All data models use snake_case for database field compatibility:
- ✅ `author_id`, `post_id`, `organization_id` (foreign keys)
- ✅ `created_at`, `updated_at` (timestamps)
- ✅ `role_response`, `parent_id` (related fields)
- ✅ Enum types: `status`, `stage`, `industry`, `role`

## 🎯 Next Steps

1. **Database Migration**: Deploy to Supabase with generated schema
2. **Authentication**: Add user auth with Supabase Auth
3. **Real Comments**: Replace mock data with live backend
4. **Assessment Progress**: Add progress tracking UI
5. **Video Integration**: Support for recording and uploading assessment videos
6. **Notifications**: Real-time updates for feedback and results
7. **Mobile Responsiveness**: Optimize for smaller screens
8. **Analytics**: Recruiter dashboard with assessment analytics

## 📖 Documentation

See `NETWORK.md` for:
- Complete database schema
- Data flow diagrams
- Assessment process details
- Supabase table structure

## 🎨 UI Components

All components use Shadcn/ui:
- Cards, Buttons, Badges
- Dialogs, Drawers, Sheets
- Form elements (Input, Textarea, Select, etc.)
- Layout primitives (Tabs, Accordion, etc.)

## 📄 License

MIT

---

**Jobeee** - Learn skills through realistic workplace simulations. 🚀

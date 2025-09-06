# Swift

A modern React TypeScript application featuring a comments dashboard and user profile system, built with atomic design principles and powered by the DummyJSON API.

## Features

- **Comments Dashboard**: Browse, search, sort, and paginate through comments
- **User Profile**: View detailed user information with contact details
- **Advanced Filtering**: Search by name, username, email, phone, or comment content
- **Smart Sorting**: Multi-level sorting with cycling behavior (asc → desc → none)
- **Responsive Design**: Modern UI with Tailwind CSS and shadcn/ui components
- **URL State Management**: Persistent filters and pagination in URL
- **Atomic Design**: Clean component architecture with atoms, molecules, and organisms

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Axios** for API calls
- **Lucide React** for icons
- **DummyJSON API** for data

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swift
   ```

2. **Install dependencies with peer dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Setup

Create a `.env` file in the root directory:

```bash
# API Base URL for DummyJSON API
VITE_BASE_URL=https://dummyjson.com
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── atoms/          # Basic UI elements
│   │   └── molecules/      # Combined components
│   ├── profile/
│   │   ├── atoms/          # Profile-specific atoms
│   │   └── molecules/      # Profile-specific molecules
│   └── ui/                 # shadcn/ui components
├── hooks/
│   └── useUrlState.ts      # URL state management
├── lib/
│   └── utils.ts            # Utility functions
├── pages/
│   ├── Dashboard.tsx       # Comments dashboard
│   └── Profile.tsx         # User profile
├── services/
│   └── api.ts              # API service layer
└── types/
    └── index.ts            # TypeScript definitions
```

## 🎨 Component Architecture

The application follows **Atomic Design** principles:

- **Atoms**: Basic building blocks (buttons, inputs, icons)
- **Molecules**: Combinations of atoms (search controls, info cards)
- **Organisms**: Complex components (full dashboard, profile sections)

## 🔗 API Integration

The application integrates with [DummyJSON API](https://dummyjson.com) endpoints:

- `GET /users` - Fetch user data
- `GET /comments` - Fetch comments data

## 🚦 Usage

1. **Dashboard**: View and interact with comments
   - Search across multiple fields
   - Sort by Post ID, Name, or Email
   - Adjust page size (10, 50, 100 items)
   - Navigate between pages

2. **Profile**: View user information
   - Personal details (name, age, company)
   - Contact information (email, phone, address)
   - Navigate back to dashboard

## 🎯 Key Features

### URL State Persistence
All dashboard filters, sorting, and pagination state is persisted in the URL, allowing users to bookmark and share specific views.

### Smart Search
Search functionality works across:
- User full name
- Username
- Email address
- Phone number
- Comment content

### Cycling Sort
Click column headers to cycle through:
1. Ascending sort
2. Descending sort
3. No sort (original order)

## 🔧 Development

The project uses modern development tools:

- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling
- **Vite** for fast builds

## 📄 License

This project is private and not licensed for public use.

# Strapi React Router 7 Starter

A full-stack TypeScript starter project featuring Strapi headless CMS and React Router 7 with modern UI components.

## 🚀 Tech Stack

### Frontend (Client)
- **React Router 7** - Full-stack React framework with file-based routing
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful & consistent icons
- **React Markdown** - Markdown rendering with GitHub Flavored Markdown support
- **Vite** - Fast build tool and development server

### Backend (Server)
- **Strapi 5** - Headless CMS with admin panel
- **SQLite** - Database (better-sqlite3)
- **TypeScript** - Type-safe backend development
- **Node.js** - Runtime environment

### Development Tools
- **Concurrently** - Run multiple commands in parallel
- **Wait-on** - Wait for services to be available
- **ESLint & TypeScript** - Code quality and type checking

## 📋 Prerequisites

- Node.js (>=20.0.0)
- npm package manager

## 🛠️ Setup

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-project
   ```

2. **Install dependencies and setup both client and server**
    ```bash
    npm run setup
    ```

3. **Seed the database with sample data**
    ```bash
    npm run seed
    ```

4. **Start development servers**
    ```bash
    npm run dev
    ```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Strapi Admin**: http://localhost:1337/admin

### Manual Setup

If you prefer to set up manually:

1. **Install root dependencies**
    ```bash
    npm install
    ```

2. **Setup client**
    ```bash
    npm run setup:client
    ```

3. **Setup server**
    ```bash
    npm run setup:server
    ```

4. **Seed database**
    ```bash
    npm run seed
    ```

## 🎯 Available Scripts

### Root Level
- `npm run setup` - Install and setup both client and server
- `npm run dev` - Start both development servers
- `npm run seed` - Import seed data into Strapi
- `npm run export` - Export current Strapi data
- `npm run client` - Start only the client development server
- `npm run server` - Start only the server development server

### Client (Frontend)
```bash
cd client
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run typecheck  # Run TypeScript checks
```

### Server (Strapi)
```bash
cd server
npm run develop    # Start development server with admin panel
npm run start      # Start production server
npm run build      # Build admin panel
npm run console    # Open Strapi console
```

## 📁 Project Structure

```
├── client/                 # React Router 7 frontend
│   ├── app/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── blocks/     # Dynamic content blocks
│   │   │   ├── custom/     # Custom components
│   │   │   └── ui/         # Base UI components (Radix)
│   │   ├── lib/           # Utilities and API client
│   │   ├── routes/        # File-based routing
│   │   └── types/         # TypeScript type definitions
│   └── package.json
│
├── server/                # Strapi CMS backend
│   ├── config/           # Strapi configuration
│   ├── src/
│   │   ├── api/          # API endpoints
│   │   └── components/   # Strapi components
│   └── package.json
│
├── seed-data.tar.gz      # Sample data for seeding
└── package.json          # Root package configuration
```

## 🎨 Features

- **Dynamic Content Blocks** - Flexible page building with reusable components
- **Article Management** - Full CRUD for articles with featured images and authors
- **Type-Safe API** - Strongly typed API responses and components
- **Responsive Design** - Mobile-first responsive layouts
- **SEO Optimized** - Meta tags and structured data
- **Error Handling** - Graceful error boundaries and 404 pages
- **Image Optimization** - Optimized image loading with aspect ratios

## 🔧 Configuration

### Environment Variables

The setup script automatically copies environment files. You can manually configure:

- Copy `.env.example` to `.env` in both `client/` and `server/` directories
- Update database and API configurations as needed

### Strapi Admin

After running `yarn seed`, you can access the Strapi admin panel at http://localhost:1337/admin with the seeded admin credentials.

## 📚 Learn More

- [React Router 7 Documentation](https://reactrouter.com)
- [Strapi Documentation](https://docs.strapi.io)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

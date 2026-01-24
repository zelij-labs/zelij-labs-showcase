# Zelij Labs Website

Official website for Zelij Labs - a technical consulting and software development firm specializing in data science, AI agents, and custom application development.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **3D Graphics**: Three.js
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: For version control

To check your versions:

```bash
node --version
npm --version
git --version
```

### Installing Node.js

If you don't have Node.js installed, we recommend using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm):

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js LTS
nvm install --lts

# Use the LTS version
nvm use --lts
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/zelij-labs/zelij-labs-showcase.git
cd zelij-labs-showcase
```

### 2. Install Dependencies

**Using npm:**
```bash
npm install
```

**Using Make:**
```bash
make install
# or for complete setup
make setup
```

This will install all required packages listed in `package.json`.

### 3. Start Development Server

**Using npm:**
```bash
npm run dev
```

**Using Make:**
```bash
make dev
```

The development server will start at `http://localhost:5173` (or another port if 5173 is busy). The page will automatically reload when you make changes.

## Available Commands

You can use either **npm scripts** or **Make commands** to run tasks. Make commands provide a cleaner interface with helpful emoji indicators.

### Quick Reference

**View all Make commands:**
```bash
make help
# or simply
make
```

### Development

**Using npm:**
```bash
npm run dev
```

**Using Make:**
```bash
make dev
```

Starts the Vite development server with hot module replacement (HMR).

**Stop the development server:**
```bash
make stop
```

### Build

**Using npm:**
```bash
npm run build          # Production build
npm run build:dev      # Development build
```

**Using Make:**
```bash
make build            # Production build
make build-local      # Development build
```

Creates an optimized production build in the `dist/` directory.

### Preview

**Using npm:**
```bash
npm run preview
```

**Using Make:**
```bash
make preview
```

Preview the production build locally before deploying.

### Lint

**Using npm:**
```bash
npm run lint
```

**Using Make:**
```bash
make lint
```

Runs ESLint to check for code quality issues.

### Format Code

**Using Make:**
```bash
make format
```

Format code using Prettier (if installed).

### Full Check

**Using Make:**
```bash
make check
```

Runs both linting and build to ensure everything is working correctly.

### Deploy

**Using npm:**
```bash
npm run deploy
```

**Using Make:**
```bash
make deploy
```

Deploys the built site to GitHub Pages.

### Maintenance

**Clean build artifacts:**
```bash
make clean
```

**Reinstall dependencies:**
```bash
make reinstall
```

## Project Structure

```
zelij-labs-showcase/
├── src/
│   ├── assets/          # Images, logos, and static assets
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── GradientMesh.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Services.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── WireframeCube.tsx
│   │   └── ZelijPattern.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles and Tailwind imports
│   └── main.tsx        # Application entry point
├── public/             # Static files
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## Key Features

### Design System

- **Typography**:
  - Body: Inter (modern, clean sans-serif)
  - Headings: Space Grotesk (geometric display font)
  - Brand: Montserrat (Zelij Labs logo)

- **Colors**:
  - Light mode: Bright navy blue accent (`hsl(221 83% 53%)`)
  - Dark mode: Bright blue accent (`hsl(217 91% 60%)`)
  - System automatically adapts to user's OS theme preference

### Components

- **Hero Section**: Animated gradient mesh with parallax scrolling
- **WireframeCube**: Interactive 3D wireframe cube using Three.js
- **Services**: Card-based service showcase
- **About**: Philosophy section with terminal-styled manifest
- **Contact**: Strategic intake form with validation
- **Dark Mode**: Automatic theme switching with manual toggle

## Customization

### Updating Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --accent: 221 83% 53%;  /* Light mode accent */
  /* ... other colors */
}

.dark {
  --accent: 217 91% 60%;  /* Dark mode accent */
  /* ... other colors */
}
```

### Adding Google Fonts

1. Add font link to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  'your-font': ['Your Font', 'sans-serif'],
}
```

### Modifying Components

All components are in `src/components/`. Each component is self-contained and can be modified independently.

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://zelij-labs.github.io/zelij-labs-showcase/`

### Other Hosting Providers

After building (`npm run build`), deploy the contents of the `dist/` directory to any static hosting service:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist/` folder
- **AWS S3**: Upload to S3 bucket with static hosting enabled
- **Cloudflare Pages**: Connect repo for automatic deployments

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Vite will automatically try the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

### Module Not Found

If you see module errors after cloning:

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

If the build fails:

```bash
# Check for TypeScript errors
npm run lint

# Clear Vite cache
rm -rf .vite node_modules/.vite
npm install
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly: `npm run build && npm run preview`
4. Commit your changes: `git commit -m "Add your feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a Pull Request

## License

© 2026 Zelij Labs. All rights reserved.

## Contact

- **Website**: [https://zelijlabs.com](https://zelijlabs.com)
- **Email**: build@zelijlabs.com
- **LinkedIn**: [Zelij Labs](https://www.linkedin.com/company/zelij-labs/)

## Support

For issues, questions, or feature requests, please open an issue on GitHub or contact us at build@zelijlabs.com.

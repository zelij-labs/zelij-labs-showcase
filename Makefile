.PHONY: help install dev stop build build-local preview deploy lint clean reinstall check setup format

# Default target - show help
help:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "  Zelij Labs Website - Available Make Commands"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "📦 Setup & Development:"
	@echo "  make install       Install dependencies"
	@echo "  make setup         Complete project setup"
	@echo "  make dev           Start development server"
	@echo "  make stop          Stop development server"
	@echo ""
	@echo "🏗️  Build & Preview:"
	@echo "  make build         Build for production (GitHub Pages)"
	@echo "  make build-local   Build for local preview"
	@echo "  make preview       Build and preview locally"
	@echo ""
	@echo "✅ Code Quality:"
	@echo "  make lint          Run ESLint"
	@echo "  make format        Format code with Prettier"
	@echo "  make check         Run lint + build (full check)"
	@echo ""
	@echo "🚀 Deployment:"
	@echo "  make deploy        Build and deploy to GitHub Pages"
	@echo ""
	@echo "🧹 Maintenance:"
	@echo "  make clean         Remove build artifacts"
	@echo "  make reinstall     Clean install dependencies"
	@echo ""
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	npm install
	@echo "✅ Dependencies installed successfully!"

# Complete setup
setup: install
	@echo "🎉 Setup complete! Run 'make dev' to start development."

# Start development server
dev:
	@echo "🚀 Starting development server..."
	npm run dev

# Stop development server
stop:
	@echo "🛑 Stopping development server..."
	@pkill -f "vite" || echo "No Vite server running"
	@echo "✅ Server stopped"

# Build for production (GitHub Pages)
build:
	@echo "🏗️  Building for production..."
	npm run build
	@echo "✅ Production build complete!"

# Build for local preview
build-local:
	@echo "🏗️  Building in development mode..."
	npm run build:dev
	@echo "✅ Development build complete!"

# Preview production build locally
preview: build-local
	@echo "👀 Previewing build..."
	npm run preview

# Deploy to GitHub Pages
deploy: build
	@echo "🚀 Deploying to GitHub Pages..."
	npm run deploy
	@echo "✅ Deployment complete!"

# Run linter
lint:
	@echo "🔍 Running ESLint..."
	npm run lint
	@echo "✅ Lint check complete!"

# Format code with Prettier
format:
	@echo "✨ Formatting code..."
	@if [ -f "node_modules/.bin/prettier" ]; then \
		npx prettier --write "src/**/*.{ts,tsx,css,json}" && \
		echo "✅ Code formatted successfully!"; \
	else \
		echo "⚠️  Prettier not installed. Run: npm install -D prettier"; \
	fi

# Full check (lint + build)
check: lint build
	@echo "✅ All checks passed!"

# Clean build artifacts
clean:
	@echo "🧹 Cleaning build artifacts..."
	rm -rf dist .vite node_modules/.vite node_modules/.cache
	@echo "✅ Clean complete!"

# Clean and reinstall dependencies
reinstall: clean
	@echo "🧹 Removing node_modules..."
	rm -rf node_modules package-lock.json
	@echo "📦 Reinstalling dependencies..."
	$(MAKE) install
	@echo "✅ Reinstall complete!"

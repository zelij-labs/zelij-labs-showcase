.PHONY: help install dev stop build build-local preview deploy lint clean

help:
	@echo "Available commands:"
	@echo "  make install     - Install dependencies"
	@echo "  make dev         - Run development server (localhost:8080)"
	@echo "  make stop        - Stop development server"
	@echo "  make build       - Build for production (GitHub Pages)"
	@echo "  make build-local - Build for local preview"
	@echo "  make preview     - Build and preview locally (without GitHub Pages base path)"
	@echo "  make deploy      - Build and deploy to GitHub Pages"
	@echo "  make lint        - Run linter"
	@echo "  make clean       - Clean build artifacts"

install:
	npm install

dev:
	npm run dev

stop:
	@echo "Stopping development server..."
	@pkill -f "vite" || echo "No Vite server running"
	@echo "Server stopped"

build:
	npm run build

build-local:
	npm run build:dev

preview: build-local
	npm run preview

deploy: build
	npm run deploy

lint:
	npm run lint

clean:
	rm -rf dist node_modules/.cache

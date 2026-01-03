.PHONY: help install dev build build-local preview deploy lint clean

help:
	@echo "Available commands:"
	@echo "  make install     - Install dependencies"
	@echo "  make dev         - Run development server (localhost:8080)"
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

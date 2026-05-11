# Multi-stage build: produces static assets in /app/dist
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Output stage — just the static files for S3/CloudFront deployment
FROM scratch AS static
COPY --from=build /app/dist /dist

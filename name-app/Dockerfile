# Build stage
FROM node:12-alpine as builder
ENV NODE_ENV build
USER node
WORKDIR /usr/src/app
COPY . .
RUN npm ci \
  && npm run build

# Deploy stage
FROM node:12-alpine
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json .
COPY --from=builder /usr/src/app/dist ./dist
RUN npm ci
CMD ["node", "dist/server.js"]
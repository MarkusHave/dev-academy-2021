# Build stage
FROM node:12-alpine as builder
ENV NODE_ENV build
USER node
WORKDIR /home/node
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

# Deploy stage
FROM node:12-alpine
ENV NODE_ENV production
USER node
WORKDIR /home/node
COPY --from=builder /home/node/package*.json ./
COPY --from=builder /home/node/dist ./dist
RUN npm ci
CMD ["npm", "run", "start:prod"]
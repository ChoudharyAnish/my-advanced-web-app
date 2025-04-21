FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# CHANGE THIS LINE:
# RUN npm ci --only=production
RUN npm install --omit=dev

COPY . .

CMD ["node", "server.js"]

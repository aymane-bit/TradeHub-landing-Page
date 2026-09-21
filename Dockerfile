FROM node:24.21.0-bookworm-slim
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
EXPOSE 4321
CMD ["./node_modules/.bin/astro", "dev", "--host", "0.0.0.0"]

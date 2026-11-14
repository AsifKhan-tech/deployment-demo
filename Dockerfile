# FROM node:24-alpine 
# 
# # Fix: Node v24 includes corepack, which automatically installs and manages pnpm (and respects the "packageManager" field in package.json if have one).
# 
# # Enable corepack to make pnpm available
# RUN corepack enable && corepack prepare pnpm@latest --activate
# 
# COPY package.json  package.json
# COPY pnpm-lock.yaml  pnpm-lock.yaml
# COPY index.js index.js
# 
# # Error: pnpm not found => pnpm isn't bundled by default in official Node.js Docker images(only npm & yarn come pre-installed, along with Node's core package manager)
# RUN pnpm install
# 
# CMD [ "node", "index" ]


FROM node:24-alpine

# Enable corepack to make pnpm available
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy lockfile and manifest first to leverage Docker layer caching
COPY package.json pnpm-lock.yaml ./

# Install exact dependencies from lockfile
RUN pnpm install --frozen-lockfile

# Copy application source code after installing dependencies
COPY index.js ./

CMD ["node", "index.js"]

FROM devcontainer-base

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm ci --ignore-scripts

# Copy source code with proper ownership
COPY --chown=node:node . .

# Switch to node user for remaining operations
USER node

# Keep container running for development
CMD ["tail", "-f", "/dev/null"]

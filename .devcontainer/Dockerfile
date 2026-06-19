FROM devcontainer-base

# Pre-fetch + activate the pinned pnpm inside the image (Corepack is enabled in
# devcontainer-base). Keep in sync with the "packageManager" field in package.json.
RUN corepack prepare pnpm@11.8.0 --activate

# Pin the pnpm store to a project-local path so it lands on the dedicated named
# volume (see docker-compose.dev.yml) instead of $HOME or the host bind mount.
ENV npm_config_store_dir=/workspace/.pnpm-store

# Pre-create the store dir as the node user so the named volume mounted here inherits
# node ownership. An empty named volume would otherwise be root-owned, and pnpm (running
# as node) would fail with EACCES trying to write the store.
RUN mkdir -p /workspace/.pnpm-store

# Copy manifest + lockfile first so this layer stays cached unless deps change.
COPY --chown=node:node package.json pnpm-lock.yaml ./

# Install dependencies inside the image (never on the host).
RUN pnpm install --frozen-lockfile --ignore-scripts \
  && rm -rf /home/node/.local/share/pnpm/store

# Copy source code with proper ownership
COPY --chown=node:node . .

# Keep container running for development
CMD ["tail", "-f", "/dev/null"]

ARG NODE_IMAGE=node:20-slim

FROM $NODE_IMAGE as build

ARG NUXT_PUBLIC_GRAPHQL_URL=""

ENV NODE_ENV=production
ENV PORT=80
ENV NUXT_PUBLIC_GRAPHQL_URL=$NUXT_PUBLIC_GRAPHQL_URL

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        netcat-openbsd \
        build-essential \
        python3 \
        pkg-config \
        curl \
        git && \
    apt-get clean

# wait-for-it
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY app .

RUN yarn add lightningcss lightningcss-linux-arm64-gnu --ignore-platform
RUN yarn install --production=false

EXPOSE 80

# wait until API is ready
CMD ["bash", "/wait-for-it.sh", "api", "80", "yarn", "dev"]

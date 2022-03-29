# syntax=docker/dockerfile:1
# https://qiita.com/taquaki-satwo/items/f8fbe8b1efc4b2323ae7
# マルチステージビルドを使用する
# 依存パッケージのインストール
FROM node:16 as deps
WORKDIR /app
# packeg.jsonとyarn.lockのみコピーする
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Build環境
FROM node:16 AS builder
ENV NODE_ENV=development
WORKDIR /app
COPY . .
# depsステージでインストールしたパッケージをコピーする
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# 実行環境
FROM node:16 AS runner
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY yarn.lock ./
COPY start.sh ./
RUN yarn install
COPY --from=builder /app/dist ./dist
RUN chmod +x ./start.sh
CMD ["./start.sh"]

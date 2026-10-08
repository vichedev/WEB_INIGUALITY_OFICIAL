# Etapa 1: Build de la app con Vite
FROM node:20.16.0 AS build

WORKDIR /app

COPY package*.json ./

# Asegura instalacion completa (incluye devDependencies)
RUN npm install

COPY . .

# Corre build de Vite
RUN npx vite build

# Etapa 2: Servir con Nginx
FROM nginx:1.30.3-alpine

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build --chown=nginx:nginx /app/dist .

COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

USER nginx
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

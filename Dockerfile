# build stage
FROM node:16.0.0-alpine as build

WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

# production stage
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./.docker/entrypoint.sh /

RUN chmod +x entrypoint.sh

EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
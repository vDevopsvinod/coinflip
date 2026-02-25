FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
# We will use Nginx as a reverse proxy to the backend API
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

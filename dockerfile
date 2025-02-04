# Gunakan image Node.js untuk tahap build
FROM node:16 AS build-stage

# Set working directory di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json ke dalam kontainer
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file aplikasi ke dalam container
COPY . .

# Build aplikasi Vue.js untuk produksi
RUN npm run build

# Tahap kedua: Gunakan image Nginx untuk menyajikan aplikasi statis
FROM nginx:alpine AS production-stage

# Salin build dari build-stage ke folder Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx di background
CMD ["nginx", "-g", "daemon off;"]

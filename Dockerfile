# Usa la imagen oficial de Node.js
FROM node:16

# Crea el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]

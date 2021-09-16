#usamos node como imagen base
FROM node:14-slim
#Definimos el directorio de trabajo
WORKDIR /usr/src/app
#Copiamos el json
COPY ./package.json ./
COPY ./yarn.lock ./
#instalamos las dependencias con yarn
RUN yarn install
#copiamos los archivos
COPY . .
#exponemos el puerto 5000
EXPOSE 5000
#iniciamos la app
CMD [ "index.js" ]
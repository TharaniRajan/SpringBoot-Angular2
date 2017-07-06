FROM java:8
RUN mkdir /app
COPY build/libs/TestAngular_10046.jar /app
COPY wait-for-it.sh /app
RUN chmod +x /app/wait-for-it.sh
WORKDIR /app
CMD ["java","-jar","TestAngular_10046.jar"]
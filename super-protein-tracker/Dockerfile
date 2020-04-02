FROM adoptopenjdk/openjdk8:latest
RUN mkdir /opt/app
COPY target/super-protein-tracker-summerpy.jar /opt/app
CMD ["java", "-Dspring.profiles.active=prod,docker", "-jar", "/opt/app/super-protein-tracker-summerpy.jar"]

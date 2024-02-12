FROM ubuntu:latest
LABEL "Project"="Recipe Book"
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt install apache2 -y
WORKDIR /var/www/html/
COPY build/ /var/www/html/
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
VOLUME /var/log/apache2
EXPOSE 80
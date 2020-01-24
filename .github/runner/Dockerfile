FROM ubuntu:latest
RUN apt-get update -y && apt-get install curl -y
RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && bash n lts
# Now node and npm are available
ENTRYPOINT []
CMD []

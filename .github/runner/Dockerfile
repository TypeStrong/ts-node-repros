FROM ubuntu:latest
RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && bash n lts
# Now node and npm are available
ENTRYPOINT []
CMD ["/bin/bash", "-l", "/bin/bash", "./run.sh"]

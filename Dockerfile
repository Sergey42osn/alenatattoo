# Run Python
FROM ubuntu:latest

# Update and Upgrade Packages
RUN apt-get -y update
RUN apt-get -y upgrade

# Install nano, python, pip
RUN apt-get install -y nano
RUN apt-get install -y python-is-python3
RUN apt-get install -y python3-pip

# Install Flask
RUN pip install flask

# Install gunicorn
RUN pip install gunicorn
FROM python:3.11-bullseye
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_ROOT_USER_ACTION=ignore
WORKDIR /code
COPY . /code/
RUN python3.11 -m pip install -r /code/requirements.txt
FROM python:3.11-bullseye
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_ROOT_USER_ACTION=ignore
COPY . /code/
WORKDIR /code
RUN pip install -r requirements.txt
FROM python:3.10.1-alpine3.15 AS api_runtime

RUN apk add build-base

WORKDIR /usr/src/app

COPY src/api/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY src/api .

RUN mkdir -p /var/log/gunicorn && touch /var/log/gunicorn/access.log && touch /var/log/gunicorn/gunicorn.log

CMD ["gunicorn", "server:app", "--config", "/usr/src/app/gunicorn.conf.py", "--reload", "--chdir", "/usr/src/app/", "--log-level", "debug", "--access-logfile", "/var/log/gunicorn/access.log", "--log-file", "/var/log/gunicorn/gunicorn.log", "--capture-output"]
###########################
#### python runtime stage
###########################

FROM python:3.10.1-alpine3.15 AS python_runtime

RUN apk add build-base

WORKDIR /usr/src

COPY settings/python ./
RUN pip install --no-cache-dir -r requirements.txt && chmod u+x ./start.sh

CMD [ "./start.sh"]

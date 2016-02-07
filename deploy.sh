docker build -t site .
docker tag -f site refugeetech/competencysite:latest
docker push refugeetech/competencysite
docker build -t site .
docker tag -f site iteamoperations/competencysite:latest
docker push iteamoperations/competencysite

docker build -t site .
docker tag -f site iteamoperations/competencysite:develop
docker push iteamoperations/competencysite

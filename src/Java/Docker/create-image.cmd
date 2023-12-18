docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test15-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test15-java/app ../../..

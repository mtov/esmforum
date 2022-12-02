docker run -it -v "$PWD":/e2e -w /e2e cypress/included:9.4.1 --config baseUrl=http://host.docker.internal:3000

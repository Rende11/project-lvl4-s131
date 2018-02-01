install:
	npm install
	make install-flow-typed

run:
	npm run babel-node -- 'src/bin/index.js'

demon:
	npm run demon

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

test-watch:
	npm test -- --watch

check-types:
	npm run flow

lint:
	npm run eslint src __tests__

migrate:
	npm run sequelize db:migrate

seeds:
	npm run sequelize db:seed:all

.PHONY: test seeds

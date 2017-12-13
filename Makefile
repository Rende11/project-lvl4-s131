install:
	npm install
	make install-flow-typed

run:
	npm run babel-node -- 'src/bin/index.js'

install-flow-typed:
	npm run flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npm run flow

lint:
	npm run eslint src __tests__

publish:
	npm publish

.PHONY: test

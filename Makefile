setup:
	@npm install

reset:
	@watchman watch-del-all
	@rm -rf node_modules
	@npm cache clean
	@npm install

test:
	@cd example && npm test

test-reset:
	@cd example && npm run test-reset

lint:
	@npm run linter

flow:
	@npm run flow

flow-stop:
	@npm run flow-stop

check: lint flow test

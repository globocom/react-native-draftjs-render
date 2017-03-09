setup:
	@npm install
reset:
	@watchman watch-del-all
	@rm -rf node_modules
	@npm cache clean
test:
	@cd Example && npm test
lint:
	@npm run linter

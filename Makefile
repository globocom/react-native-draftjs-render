.SILENT:
.PHONY: android ios help

# See https://gist.github.com/prwhite/8168133#comment-1313022
## Help screen
help:
	echo
	printf "Targets available:\n\n"
	awk '/^[a-zA-Z\-\_0-9]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = substr($$1, 0, index($$1, ":")-1); \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			printf "%-15s %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
	echo

## Project setup
setup:
	@cd example && npm install

## Setup with yarn
setup-yarn:
	@yarn config set registry http://artifactory.globoi.com/artifactory/api/npm/npm-repos/fake
	@cd example && yarn

## Clean dependencies
reset:
	@watchman watch-del-all
	@cd example && rm -rf node_modules
	@npm cache clean
	@cd example && npm install

## Clean dependencies and reruns setup
reset-yarn: reset setup-yarn

## Run tests
test:
	@npm test

## Update jest snapshots
test-reset:
	@npm run test-reset

## Display eslint errors
lint:
	@npm run linter

## Display flow errors
flow:
	@npm run flow

## Stops a Flow server
flow-stop:
	@npm run flow-stop

## Checks linter, flow types and run tests
check: lint flow test

## Restrt the packager
sync-src:
	@rsync -rt src/* example/node_modules/react-native-draftjs-render/src
	@echo Restart the packager.

## Run iOS
ios:
	@cd example && react-native run-ios

## Run android
android:
	@cd example && react-native run-android

#
# Copyright (c) 2017, Globo.com (https://github.com/globocom)
# Copyright (c) 2013, Payton White (https://github.com/prwhite)
#
# License: MIT
#
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
	@npm install && cd sample && npm install && npm run sync-lib

## Setup with yarn
setup-yarn:
	@yarn config set registry http://artifactory.globoi.com/artifactory/api/npm/npm-repos/fake
	@cd sample && yarn

## Reset npm environment
reset-npm:
	@watchman watch-del-all
	@cd sample && rm -rf node_modules
	@npm cache clean

## Clean dependencies
reset: reset-npm setup

## Clean dependencies and reruns setup
reset-yarn: reset-npm setup-yarn

## Run library tests
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

## Synchronize lib files with sample app
sync-lib:
	@cd sample && npm run sync-lib

## Watch lib changes to update sample app
watch:
	@cd sample && npm run watch-src

## Open iOS project on XCode
open-ios:
	open sample/ios/react_native_draftjs_render.xcodeproj/

## Run iOS
ios:
	@cd sample && react-native run-ios

## Run android
android:
	@cd sample && react-native run-android

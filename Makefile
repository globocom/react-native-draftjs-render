.PHONY: android ios

help:
	@echo "Available Targets:"
	@cat Makefile | egrep '^([-a-zA-Z]+?):' | sed 's/:\(.*\)//g' | sed 's/^/- /g'

setup:
	@cd example && npm install

setup-yarn:
	@yarn config set registry http://artifactory.globoi.com/artifactory/api/npm/npm-repos/fake
	@cd example && yarn

reset:
	@watchman watch-del-all
	@cd example && rm -rf node_modules
	@npm cache clean
	@cd example && npm install

reset-yarn: reset setup-yarn

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

ios:
	@cd example && react-native run-ios

android:
	@cd example && react-native run-android

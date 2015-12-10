NODE ?=

build:
	@$(NODE) ./node_modules/.bin/webpack 
hot:	
	@$(NODE) ./node_modules/.bin/webpack-dev-server \
		--devtool eval \
		--progress \
		--colors \
		--hot \
		--content-base build \
		--port 9090

lint:
	$(NODE) ./node_modules/.bin/eslint \
		src/js/**/*.@(js|jsx)

deploy:
	@NODE_ENV=production $(NODE) ./node_modules/.bin/webpack \
		--config \
		webpack.production.config.js

release:
	@$(NODE) ./node_modules/.bin/gulp \
		--online \
		deploy

.PHONY:	
	NODE_ENV=production lint

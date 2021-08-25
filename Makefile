.DEFAULT_GOAL := preview

new:
ifeq (,$(wildcard ./_config.yml))
	docker run -v ${PWD}:/site bretfisher/jekyll new --force . 
else
	@echo Cannot make a new site on top of an existing one. Taking no action.
endif

preview:
	docker run -p 4000:4000 -v ${PWD}:/site bretfisher/jekyll-serve jekyll serve --host 0.0.0.0 --config _config_local.yaml


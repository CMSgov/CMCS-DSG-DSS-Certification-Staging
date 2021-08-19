.DEFAULT_GOAL := preview

new:
ifeq (,$(wildcard ./_config.yml))
	docker run -v ${PWD}:/site bretfisher/jekyll new --force . 
else
	@echo Cannot make a new site on top of an existing one. Taking no action.
endif

preview:
	docker compose up

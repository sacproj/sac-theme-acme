.PHONY: build

build:
	rm -rf docs
	cd example && hugo --gc --minify -d ../docs --baseURL https://sacproj.github.io/sac-theme-acme/

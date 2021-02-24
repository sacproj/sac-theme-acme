# Slides as Code Theme for ACME

This repository shows how-to customize the Slides as Code.

See [example](https://sacproj.github.io/sac-theme-acme/) result.

## Usage
- Install Slides as Code CLI
```
brew install sacproj/sac/sac
```
- Install Slides as Code Theme
```
sac theme install github sacproj/sac-theme
```
- Install Slides as Code ACME Theme
```
sac theme install github sacproj/sac-theme-acme
```
- Check installed themes
```
sac theme installed
/usr/local/share/sac/themes
├── acme
│   └── 1.0.0
└── sac
    └── 2.0.0
```
- Create a new slides deck in `example` directory
```
sac desk new example sac/2.0.0 acme/1.0.0
```
- Create some slides
```
cd example
sac slides new content.md
sac slides new end.md
```
- Develop content and show live update
```
sac deck new code
```
- Open brower to http://localhost:1313

## ACME customizations
- See `assets` and `layouts` directory for Hugo theme override
- See `.vscode` for specific snippets

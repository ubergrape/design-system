# Grape Aurora Design System

https://aurora.ubergrape.com/

Documentation on our design system, design tokens (e.g. colors, spacing) and React components.

This projects contains two subprojects

* `/doc` - Homepage, main design system documentation (with Docusaurus) and docs for components with examples.
* `/web` - Documentation (with Storybook) for components with all details, React props and the corresponding Figma designs.

both subprojects have their own Readme files and have a separate build process.

the design tokens are in `/design-tokens` in the YAML format and are converted to JSON for the use with Storybook.

## Design Tokens

Grape Design Tokens for use with [Theo](https://github.com/salesforce-ux/theo).

## Build

In order to build storybook and the component library be sure to install Node.JS & yarn.

First, you need to install the dependencies by executing

```
yarn
```

After that, just run `yarn build` to build storybook and the component library.

A new directory called `build` is generated in the current directory which should be deployed.

It includes two folders that should be available under following URLs

```
build/storybook -> aurora.ubergrape.com/storybook
build/docs -> aurora.ubergrape.com
```

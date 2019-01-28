#Aptotude
A React UI library for Apto

[![npm version](https://img.shields.io/npm/v/@apto/aptotude.svg)](https://img.shields.io/npm/v/@apto/aptotude.svg)
[![npm version](https://img.shields.io/npm/dt/@apto/aptotude.svg)](https://img.shields.io/npm/dt/@apto/aptotude.svg)

#### Quick links
[Documentation](https://aptotude.github.io/aptotude)
### Getting started

#### Step 1: Install Aptotude
##### NPM
```
npm install --save @apto/aptotude
```
##### Yarn
```
yarn add @apto/aptotude
```

## Creating a Component
- Add a new directory in the `components` directory. Start the name with a capital letter.
- The component file should be named 'AptoYourComponent.tsx'.
- When you export your component do not use default just export the class
```
export class AptoFoo extends React.Component {}
```
- Tests for your component should be a subdirectory named `__tests__` in your component directory.
- Stories should be in your component directory and named `AptoYourComponent.stories.tsx`.
- Create an index.ts file in your component's directory and export your compnent from it.
```
export * from AptoFoo;
```
- In the `component/index.ts` file export your component
```
... other exports
export * from AptoFoo
```
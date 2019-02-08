import typescript from 'rollup-plugin-typescript2';
import packageJson from 'rollup-plugin-generate-package-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

const globalLibs = {
  'classnames': 'classnames',
  'react': 'React',
  'react-dom': 'reactDom',
  'react-dropzone': 'Dropzone',
  '@reach/router': 'Link',
  'semantic-ui-react': 'Input',
  'semantic-ui-react': 'Select',
  'semantic-ui-react': 'TextArea',
  'semantic-ui-react': 'Radio',
  'semantic-ui-react': 'Checkbox',
  'semantic-ui-react': 'Search',
  'semantic-ui-react': 'SearchProps',
};
const externalLibs = [
  'classnames',
  'react',
  'react-dom',
  'react-dropzone',
  '@reach/router',
  'semantic-ui-react',
  'semantic-ui-css',
];

export default {
  input: './src/index.ts',
  external: externalLibs,
  output: [
    { name: 'aptotude', globals: globalLibs, file: `./dist/${pkg.browser}`, format: 'umd' },
    { name: 'aptotude', globals: globalLibs, file: `./dist/${pkg.main}`, format: 'cjs' },
    { name: 'aptotude', globals: globalLibs, file: `./dist/${pkg.module}`, format: 'es' }
  ],
  plugins: [
    postcss({
      modules: false
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      exclude: [
        './src/**/*.spec.*',
        './src/**/*.stories.*'
      ]
    }),
    packageJson({
      inputFile: './package.json',
      outputFolder: './dist',
      baseContents: {
        "name": pkg.name,
        "version": pkg.version,
        "description": pkg.description,
        "author": pkg.author,
        "homepage": pkg.homepage,
        "license": pkg.license,
        "repository": pkg.repository,
        "bugs": pkg.bugs,
        "private": false,
        "main": pkg.main,
        "module": pkg.module,
        "browser": pkg.browser,
        "types": pkg.types,
        "peerDependencies": pkg.peerDependencies
      }
    })
  ]
};

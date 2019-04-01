import typescript from 'rollup-plugin-typescript2';
import packageJson from 'rollup-plugin-generate-package-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

const globalLibs = {
  '@apto/icons': 'close',
  '@apto/icons': 'addPhoto',
  '@apto/icons': 'search',
  '@reach/router': 'Link',
  'classnames': 'classnames',
  'pretty-bytes': 'prettyBytes',
  'react': 'React',
  'react-dom': 'reactDom',
  'react-dropzone': 'Dropzone',
  'react-event-listener': 'EventListener',
  'semantic-ui-react': 'Input',
  'semantic-ui-react': 'Select',
  'semantic-ui-react': 'TextArea',
  'semantic-ui-react': 'Radio',
  'semantic-ui-react': 'Checkbox',
  'semantic-ui-react': 'Search',
  'semantic-ui-react': 'SearchProps',
};
const externalLibs = [
  '@apto/icons',
  '@reach/router',
  'classnames',
  'pretty-bytes',
  'react',
  'react-dom',
  'react-dropzone',
  'react-event-listener',
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
        "types": pkg.types
      }
    })
  ]
};

import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import packageJson from 'rollup-plugin-generate-package-json';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const libraryName = 'aptotude';
const globalLibs = {
  "classnames": "classnames",
  "react": "React"
};
const externalLibs = [
  'classnames',
  'react'
];

export default {
  input: './src/index.ts',
  external: externalLibs,
  output: [
    {
      globals: globalLibs,
      name: libraryName,
      format: 'cjs',
      file: `dist/${pkg.main}`
    },
    {
      globals: globalLibs,
      name: libraryName,
      format: 'es',
      file: `dist/${pkg.module}`
    }
  ],
  plugins: [
    postcss({
      modules: false
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      abortOnError: false,
      exclude: [
        './src/**/__tests__/*',
        './src/**/*.stories.*'
      ]
    }),
    resolve({
      jsnext: true,
      preferBuiltins: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    minify({
      comments: false
    }),
    copy({
      'README.md': 'dist/README.md',
      './src/scss/theme/variables.scss': 'dist/theme/theme.scss'
    }),
    packageJson({
      inputFile: path.resolve(__dirname, './package.json'),
      outputFolder: path.resolve(__dirname, './dist'),
      baseContents: {
        "name": pkg.name,
        "version": pkg.version,
        "description": pkg.description,
        "main": pkg.main,
        "module": pkg.module,
        "homepage": pkg.homepage,
        "license": pkg.license,
        "repository": pkg.repository,
        "bugs": pkg.bugs,
        "peerDependencies": pkg.peerDependencies,
        "private": false
      }
    })
  ]
};

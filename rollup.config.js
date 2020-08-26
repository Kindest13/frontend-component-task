import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import packageJSON from './package.json';

const input = './src/index.ts';
const minifyExtension = (pathToFile) => pathToFile.replace(/\.ts$/, '.min.ts');

export default [
  {
    input,
    output: {
      file: packageJSON.main,
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs(),
      uglify()
    ]
  }
];

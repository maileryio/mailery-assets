import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';
import autoprefixer from 'autoprefixer';

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

export default (async () => ({
  input: 'src/index.js',
  output: {
    name: 'mailery',
    exports: 'named',
    sourcemap: true,
    globals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'bootstrap-vue': 'BootstrapVue',
    }
  },
  external: [
    'vue',
    'vuex',
    'bootstrap-vue'
  ],
  plugins: [
    eslint(),
    commonjs(),
    resolve(),
    polyfill([
      'whatwg-fetch'
    ]),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    postcss({
      use: ['sass'],
      minimize: isProd,
      sourceMap: true,
      plugins: [
        autoprefixer()
      ],
      extract: 'dist/main.min.css'
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    isProd && (await import('rollup-plugin-terser')).terser()
  ]
}))();

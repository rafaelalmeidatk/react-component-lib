import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    external: [
      'react',
      'styled-components'
    ],
    plugins: [
      resolve(),
      babel({ exclude: 'node_modules/**' })
    ]
  },
];

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: {
      index: 'src/index.js',
      components: 'src/components/index.js',
      colors: 'src/colors/index.js',
    },
    output: [
      {
        dir: 'dist',
        format: 'cjs'
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].mjs'
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

import ts from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

/** @type {import("rollup").RollupOptions} */
const options = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
      },
    ],
    plugins: [ts()],
  },
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts' },
    plugins: [
      ts(),
      dts(),
    ],
  },
]

export default options

const { execSync } = require('child_process')

const tscPath = require.resolve('ttypescript/bin/tsc')
const tsNodePath = require.resolve('ts-node/dist/bin')

const buildOut = execSync(`node ${tscPath} -b`, { encoding: 'utf8' })

const tsNodeOut = execSync(`node ${tsNodePath} -C ttypescript root.ts`, { encoding: 'utf8' })

if (buildOut === tsNodeOut) {
  console.log(`buildOut === tsNodeOut`)
  process.exit(0)
} else {
  console.log(`buildOut !== tsNodeOut`)
  console.log()

  console.log(`> ttsc -b`)
  console.log(buildOut)

  console.log(`> ts-node -C ttypescript root.ts`)
  console.log(tsNodeOut)

  process.exit(1)
}

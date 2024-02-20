import * as esbuild from 'esbuild'

const defaults: esbuild.BuildOptions = {
  bundle: true,
  entryPoints: ['./src/extension.ts'],
  external: ['vscode'],
  format: 'cjs',
  logLevel: 'info',
  outfile: './dist/extension.js',
  platform: 'node',
}

async function main() {
  const mode = process.argv[2]

  if (mode === 'base') {
    await esbuild.build({ ...defaults, sourcemap: true })
  } else if (mode === 'watch') {
    const ctx = await esbuild.context({
      ...defaults,
      sourcemap: true,
    })

    await ctx.watch()
    console.log('Watching...')
  } else if (mode === 'prod') {
    await esbuild.build({ ...defaults, sourcemap: true, minify: true })
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

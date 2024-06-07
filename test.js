const fs = require('fs')
const test = require('brittle')
const tmp = require('./index.js')

test('basic', async function (t) {
  const dir = await tmp(t)

  t.ok(await stat(dir))

  t.teardown(async () => {
    const exists = await stat(dir)

    if (exists) {
      throw new Error('Tmp dir still exists')
    }
  }, { order: Infinity })
})

async function stat (dir) {
  try {
    return await fs.promises.stat(dir)
  } catch {
    return null
  }
}

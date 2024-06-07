const os = require('os')
const path = require('path')
const fs = require('fs')

module.exports = async function tmp (t) {
  const tmpdir = path.join(os.tmpdir(), 'test-')
  const dir = await fs.promises.mkdtemp(tmpdir)

  if (t) {
    t.teardown(gc, { order: Infinity })
  }

  return dir

  async function gc () {
    await fs.promises.rm(dir, { recursive: true })
  }
}

# like-tmp

Create a unique temporary directory

```
npm i like-tmp
```

## Usage

```js
const test = require('brittle')
const tmp = require('like-tmp')

test('basic', async function (t) {
  const dir = await tmp(t)

  console.log('tmp dir', dir)
})
```

## License

MIT

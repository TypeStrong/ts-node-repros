const throng = require('throng')

console.log('Launching exmple.ts')

if (process.env.USE_THRONG) {
  throng({
    worker: startServer,
    count: 1
  })
} else {
  startServer()
}

function startServer() {
  console.log('server starting')
}


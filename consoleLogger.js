const process = require('process')

process.setUncaughtExceptionCaptureCallback(console.error)
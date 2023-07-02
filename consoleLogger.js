import { setUncaughtExceptionCaptureCallback } from 'node:process'

setUncaughtExceptionCaptureCallback(console.error)
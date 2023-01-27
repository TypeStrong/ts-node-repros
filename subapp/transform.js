module.exports = (program, config) => {
  return () => sourceFile => {
    if (sourceFile.fileName.endsWith('root.ts')) {
      console.log('another transform root.ts with', config.visitor)
    } else if (sourceFile.fileName.endsWith('subapp.ts')) {
      console.log('another transform subapp.ts with', config.visitor)
    }

    return sourceFile
  }
}

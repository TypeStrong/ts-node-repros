module.exports = (program, config) => {
  return () => sourceFile => {
    if (sourceFile.fileName.endsWith('root.ts')) {
      console.log('transform root.ts with', config.visitor)
    } else if (sourceFile.fileName.endsWith('subapp.ts')) {
      console.log('transform subapp.ts with', config.visitor)
    }

    return sourceFile
  }
}

const example = async () => {
    const other = await import('./other')
    console.log(other)
}

example().then(() => console.log(`done`))


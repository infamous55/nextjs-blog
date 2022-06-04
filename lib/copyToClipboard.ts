const copyToClipboard = (text: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const cb = navigator.clipboard
    cb.writeText(text).then(resolve).catch(reject)
  })

export default copyToClipboard

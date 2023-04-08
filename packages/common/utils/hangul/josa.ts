type JosaOptionType = '을,를' | '이,가'

const hasJongSa = (word: string) => {
  const lastChar = word[word.length - 1]
  const jongSungidx = (lastChar.charCodeAt(0) - parseInt('0xac00', 16)) % 28

  return jongSungidx !== 0
}

const josa = (word: string, opt: JosaOptionType) => {
  if (!word) throw new Error('word arguments cannot be empty')

  return hasJongSa(word) ? opt.split(',')[0] : opt.split(',')[1]
}

export default josa

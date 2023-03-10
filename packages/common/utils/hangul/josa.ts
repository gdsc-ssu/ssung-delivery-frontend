type JosaOptionType = '을,를' | '이,가'

const has종사 = (word: string) => {
  const lastChar = word[word.length - 1]
  const 종성idx = (lastChar.charCodeAt(0) - parseInt('0xac00', 16)) % 28

  return 종성idx !== 0
}

const josa = (word: string, josaOption: JosaOptionType) => {
  if (!word) throw new Error('word arguments cannot be empty')

  return has종사(word) ? josaOption.split(',')[0] : josaOption.split(',')[1]
}

export default josa

export const longDate = (dateTime: string) => {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: 'UTC',
  }).format(new Date(dateTime))
}

export const isoDate = (dateTime: Date | number | string = new Date()) => {
  const t = new Date(dateTime)
  // 2021-12-25
  const yyyy = t.getFullYear()
  let MM: string | number = t.getMonth() + 1
  const dd = t.getDate()

  if (MM.toString().length === 1) {
    MM = `0${MM}`
  }

  return `${yyyy}-${MM}-${dd}`
}

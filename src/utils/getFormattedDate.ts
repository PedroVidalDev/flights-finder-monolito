export const getFormattedDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }

  const formattedDate = new Date(date).toLocaleString('pt-BR', options)
  return formattedDate
}

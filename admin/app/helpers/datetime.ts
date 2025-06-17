export const toDatetimeLocalString = (dateStr: string | null): string | null => {
  if (!dateStr) return null
  const date = new Date(dateStr)
  const offset = date.getTimezoneOffset() * 60000
  const localISOTime = new Date(date.getTime() - offset).toISOString()
  return localISOTime.slice(0, 16) // YYYY-MM-DDTHH:mm
}
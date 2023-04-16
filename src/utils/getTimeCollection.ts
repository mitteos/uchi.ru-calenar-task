export const getTimeCollection = () => {
  const timeCollection = []
  for (let i = 0; i <= 23; i++) {
    timeCollection.push({
      id: i,
      value: (i < 10 ? `0${i}` : i) + ":00"
    })
  }
  return timeCollection
}

const getWeatherData = async (lat, long) => {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const url = `${proxy}https://api.darksky.net/forecast/f4e932d02c874450a655bdf5222e1659/${lat}, ${long}?units=si`
  const responce = await fetch(url)

  if (!responce.ok) {
    throw new Error(`Could not fetch ${url}, status: ${responce.status}`)
  }

  return await responce.json()
}

export { getWeatherData }

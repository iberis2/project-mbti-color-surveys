// export default Math.floor(Math.random() * 16777215).toString(16)

const generateRandomHex = () => {
  const num = Math.floor(Math.random() * 256)
  const hex = num.toString(16).padStart(2, '0').toUpperCase()
  return hex
}

const generateColorCode = () => {
  const colorCode = `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`
  return colorCode
}

export default generateColorCode

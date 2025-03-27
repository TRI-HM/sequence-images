const numberCharacterLength = 5; // Number of characters in the image name
function generateImageUrl(prefixPath, start, end, version = 1) {
  const urls = [];
  for (let i = start; i <= end; i++) {
    urls.push(`${prefixPath}${convertNumberToStrWithLen(
      i,
      NUMBER_CHARACTER_LENGTH
    )}.webp?v=${version}`);
  }
  return urls;
}
const result = generateImageUrl("/images/n2/", 0, 30, 1)

console.log(result);
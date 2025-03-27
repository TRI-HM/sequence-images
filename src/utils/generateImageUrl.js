import { convertNumberToStringWithLength } from "./convertNumberToSpecifiedLength.js";

const numberCharacterLength = 5; // Number of characters in the image name

/**
 * Generates an array of image URLs based on a prefix path, start and end numbers, and an optional version.
 *
 * @param {string} prefixPath - The base path for the images.
 * @param {number} start - The starting number for the image sequence.
 * @param {number} end - The ending number for the image sequence.
 * @param {number} [version=1] - The version number to append to the image URLs for cache busting.
 * @returns {string[]} An array of generated image URLs.
 */
export function generateImageUrl(prefixPath, start, end, version = 1) {
  const urls = [];
  for (let i = start; i <= end; i++) {
    urls.push(`${prefixPath}${convertNumberToStringWithLength(
      i,
      numberCharacterLength
    )}.webp?v=${version}`);
  }
  return urls;
}


export const ImageUrlsConstants = {
  Nike2: generateImageUrls("/images/n2/", 0, 30, 1)
}
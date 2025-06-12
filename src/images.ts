export const imagesExtensions = [
  'jpeg',
  'jpg',
  'png',
  'gif',
  'webp',
  'avif',
] as const

export const imagesMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/avif',
] as const

export type ImageExtension = typeof imagesExtensions[number]
export type ImageMimeType = typeof imagesMimeTypes[number]

export const imagesExtensionsToMimeTypes: Record<ImageExtension, ImageMimeType> = {
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  avif: 'image/avif',
}

export const imagesMimeTypesToExtensions: Record<ImageMimeType, ImageExtension> = {
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/avif': 'avif',
}

export function isImageMimeType(mimeType: string): mimeType is ImageMimeType {
  return imagesMimeTypes.includes(mimeType as ImageMimeType)
}

export function isImageExtension(extension: string): extension is ImageExtension {
  return imagesExtensions.includes(extension as ImageExtension)
}

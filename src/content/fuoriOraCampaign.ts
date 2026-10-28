/** Carousel filenames in display order (src/assets/projects/fuori-ora/carousel/). */
export const fuoriOraCarouselSlideFiles = ['1.png', '2.png', '3.png', '4.png', '5.png'] as const

const carouselGlob = import.meta.glob<string>(
  '../assets/projects/fuori-ora/carousel/*.{png,jpg,jpeg,PNG,JPG,JPEG}',
  { eager: true, import: 'default' },
)

function resolveCarouselSlides(): string[] {
  const byFileName = new Map<string, string>()
  for (const [path, src] of Object.entries(carouselGlob)) {
    const fileName = path.split('/').pop()
    if (fileName) {
      byFileName.set(fileName.toLowerCase(), src)
    }
  }

  return fuoriOraCarouselSlideFiles
    .map((file) => byFileName.get(file.toLowerCase()))
    .filter((src): src is string => Boolean(src))
}

export const fuoriOraCarouselSlideSources = resolveCarouselSlides()

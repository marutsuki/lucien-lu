type GalleryConfig = Record<
  number,
  {
    slidesPerView: number;
    spaceBetween: number;
  }
>;

export const config: GalleryConfig = {
  "320": {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  "640": {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  "1080": {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

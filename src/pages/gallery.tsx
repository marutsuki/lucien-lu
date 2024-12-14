import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@nextui-org/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";

import {
  A11y,
  Virtual,
  Autoplay,
  EffectCards,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper/modules";

import DefaultLayout from "@/layouts/default";
import { config } from "@/config/gallery";

type GalleryItem = {
  src: string;
};
const items: GalleryItem[] = [
  {
    src: "/photos/photo_1.jpeg",
  },
  {
    src: "/photos/photo_2.jpeg",
  },
  {
    src: "/photos/photo_3.jpeg",
  },
  {
    src: "/photos/photo_4.jpeg",
  },
  {
    src: "/photos/photo_5.jpeg",
  },
  {
    src: "/photos/photo_6.jpeg",
  },
  {
    src: "/photos/photo_7.jpeg",
  },
  {
    src: "/photos/photo_8.jpeg",
  },
  {
    src: "/photos/photo_9.jpeg",
  },
  {
    src: "/photos/photo_10.jpeg",
  },
  {
    src: "/photos/photo_11.jpeg",
  },
  {
    src: "/photos/photo_12.jpeg",
  },
  {
    src: "/photos/photo_13.jpeg",
  },
  {
    src: "/photos/photo_14.jpeg",
  },
  {
    src: "/photos/photo_15.jpeg",
  },
  {
    src: "/photos/photo_16.jpeg",
  },
  {
    src: "/photos/photo_17.jpeg",
  },
  {
    src: "/photos/photo_18.jpeg",
  },
  {
    src: "/photos/photo_19.jpeg",
  },
  {
    src: "/photos/photo_20.jpg",
  },
];

export default function GalleryPage() {
  return (
    <DefaultLayout>
      <div className="place-items-center m-4">
        <h1 className="text-2xl">Gallery</h1>
      </div>
      <section className="gap-4">
        <Swiper
          navigation
          breakpoints={config}
          modules={[
            Autoplay,
            EffectCards,
            Virtual,
            EffectFade,
            Mousewheel,
            Navigation,
            Pagination,
            Parallax,
            Scrollbar,
            A11y,
          ]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          slidesPerView={3}
          spaceBetween={50}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <Image src={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </DefaultLayout>
  );
}

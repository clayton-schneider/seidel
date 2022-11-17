import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

interface Props {
  className?: string;
  images: {
    src: string;
    alt: string;
  }[];
  label: string;
}

const SmallSlide = ({ images, label, className }: Props) => (
  <Splide
    className={className ? className : ""}
    aria-label={label}
    options={{
      lazy: true,
      type: "loop",
      autoplay: true,
      interval: 3000,
      focus: 0,
      gap: "40px",
      start: 0,
      padding: "150px",
      perPage: 3,
      perMove: 1,
      // fixedWidth: "1200px",
      breakpoints: {
        1000: {
          perPage: 2,
          padding: "100px",
        },
        600: {
          perPage: 1,
          padding: "0",
        },
      },
      classes: {
        arrow: "hidden",
        pagination:
          "flex justify-center mt-10 space-x-2 [&>li]:flex [&>li]:items-center h-[14px]",
        page: "w-3 h-3 bg-primary/30  rounded-full transition-all duration-300 [&.is-active]:bg-primary  [&.is-active]:w-[14px] [&.is-active]:h-[14px]",
      },
    }}
  >
    {images.map((img, idx) => (
      <SplideSlide key={idx}>
        <img
          className="w-full h-[350px] lg:h-[500px] object-cover"
          src={img.src}
          alt={img.alt}
        />
      </SplideSlide>
    ))}
  </Splide>
);

export default SmallSlide;

import { useState } from "react";
import type { ImgHTMLAttributes } from "@astrojs/image/components";

interface Props {
  data: {
    name: string;
    title: string;
    p: string;
    products: string[];
    img: string;
  }[];
  className?: string;
}

const Selector = ({ data, className }: Props) => {
  const [idx, setIdx] = useState(0);

  return (
    <div className={className ? className : ""}>
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {data.map((option, i) => (
          <button
            onClick={() => setIdx(i)}
            key={i}
            className={
              (idx === i
                ? "bg-primary text-white"
                : "bg-transparent text-black") +
              " py-3 border border-primary font-bold font-headline text-lg hover:bg-primary hover:text-white transition-all duration-300"
            }
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-20">
        <img
          src={data[idx].img}
          alt={data[idx].name}
          className="min-w-[500px] max-w-full md:max-w-[700px] h-full max-h-[500px] object-cover"
        />
        <div className="text-center lg:text-left">
          <h3 className="font-bold font-headline text-3xl">
            {data[idx].title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed">{data[idx].p}</p>
          <ul className="mt-5 list-disc inline-block marker:text-primary">
            {data[idx].products?.map((product) => (
              <li key={product} className="text-lg">
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Selector;

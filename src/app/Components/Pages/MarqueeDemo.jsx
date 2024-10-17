import Image from "next/image";
import { cn } from "../../../lib/utils";
import Marquee from "../../animation/magicui/marquee";

const reviews = [
  {
    name: "Tsongo (Tshisola) Mira",
    username: "@Tsongo",
    body: "I am thoroughly impressed by this; it exceeds my expectations. I absolutely appreciate the excellence of this work.",
    img: "https://i.pinimg.com/enabled_lo/564x/c9/2c/ca/c92cca5b7d345133770ce6742f86a39b.jpg",
    rating: 5, // Add a rating property
  },
  {
    name: "Benjamin Kisenge",
    username: "@Kisenge",
    body:"I am deeply impressed by this work, it surpasses my expectations. I truly value the exceptional quality and excellence demonstrated.",
    img: "https://i.pinimg.com/enabled_lo/564x/be/06/6d/be066d7cf3d4c686e409dfd334de434f.jpg",
    rating: 5,
  },
  {
    name: "Eloghene (geekelo) Otiede",
    username: "@geekelo",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.pinimg.com/564x/02/62/cf/0262cf9e97b1471680a08825ada89418.jpg",
    rating: 5,
  },
  {
    name: "El Dixer",
    username: "@ElDixer",
    body: "Words cannot fully capture my admiration for this. It is exceptional, and I am genuinely thrilled with the result.",
    img: "https://i.pinimg.com/564x/02/62/cf/0262cf9e97b1471680a08825ada89418.jpg",
    rating: 5,
  },
  {
    name: "Arnold Sibita",
    username: "@Sibita",
    body: "I am truly impressed and at a loss for words. This is outstanding, and I am extremely pleased with it.",
    img: "https://i.pinimg.com/564x/6c/b6/b3/6cb6b30f42ef6cec9ff2e7e2c25bde58.jpg",
    rating: 5,
  },
  {
    name: "Jonathan Z",
    username: "@JonathanZ",
    body: "I am utterly speechless. This is exceptional, and I am genuinely delighted with the result",
    img: "https://i.pinimg.com/564x/52/b9/66/52b9664dcd88b9291ac2399a8d22ef43.jpg",
    rating: 5,
  },
  {
    name: "Joel Kalema",
    username: "@JKalema",
    body: "I am profoundly impressed. This is outstanding, and I am very pleased with the outcome.",
    img: "https://i.pinimg.com/564x/52/b9/66/52b9664dcd88b9291ac2399a8d22ef43.jpg",
    rating: 5,
  },
  {
    name: "Tumaini Maganiko",
    username: "@Maganiko",
    body: "I am completely astounded. This is extraordinary, and I am thoroughly impressed with the results.",
    img: "https://i.pinimg.com/enabled_lo/564x/c9/2c/ca/c92cca5b7d345133770ce6742f86a39b.jpg",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating, // Add rating prop
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm text-black font-medium">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm line-clamp-3">{body}</blockquote>
      {/* Add star rating */}
      <div className="mt-2 flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="h-4 w-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.195 1.187-5.92 5.764 1.394 8.174L12 18.897l-7.337 3.85 1.394-8.174-5.92-5.764 8.195-1.187L12 .587z" />
          </svg>
        ))}
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

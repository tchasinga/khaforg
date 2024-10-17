import Image from "next/image";
import { cn } from "../../../lib/utils";
import Marquee from "../../animation/magicui/marquee";

const reviews = [
  {
    name: "Tsongo (Tshisola) Mira",
    username: "@Tsongo",
    body: "I am thoroughly impressed by this; it exceeds my expectations. I absolutely appreciate the excellence of this work.",
    img: "https://i.pinimg.com/enabled_lo/564x/c9/2c/ca/c92cca5b7d345133770ce6742f86a39b.jpg",
  },
  {
    name: "Benjamin Kisenge",
    username: "@Kisenge",
    body:"I am deeply impressed by this work, it surpasses my expectations. I truly value the exceptional quality and excellence demonstrated.",
    img: "https://i.pinimg.com/enabled_lo/564x/be/06/6d/be066d7cf3d4c686e409dfd334de434f.jpg",
  },
  {
    name: "Eloghene (geekelo) Otiede",
    username: "@geekelo",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.pinimg.com/564x/02/62/cf/0262cf9e97b1471680a08825ada89418.jpg",
  },
  {
    name: "El Dixer",
    username: "@ElDixer",
    body: "Words cannot fully capture my admiration for this. It is exceptional, and I am genuinely thrilled with the result.",
    img: "https://i.pinimg.com/564x/02/62/cf/0262cf9e97b1471680a08825ada89418.jpg",
  },
  {
    name: "Arnold Sibita",
    username: "@Sibita",
    body: "I am truly impressed and at a loss for words. This is outstanding, and I am extremely pleased with it.",
    img: "https://i.pinimg.com/564x/6c/b6/b3/6cb6b30f42ef6cec9ff2e7e2c25bde58.jpg",
  },
  {
    name: "Jonathan Z",
    username: "@JonathanZ",
    body: "I am utterly speechless. This is exceptional, and I am genuinely delighted with the result",
    img: "https://i.pinimg.com/564x/52/b9/66/52b9664dcd88b9291ac2399a8d22ef43.jpg",
  },
  {
    name: "Joel Kalema",
    username: "@JKalema",
    body: "I am profoundly impressed. This is outstanding, and I am very pleased with the outcome.",
    img: "https://i.pinimg.com/564x/52/b9/66/52b9664dcd88b9291ac2399a8d22ef43.jpg",
  },
  {
    name: "Tumaini Maganiko",
    username: "@Maganiko",
    body: "I am completely astounded. This is extraordinary, and I am thoroughly impressed with the results.",
    img: "https://i.pinimg.com/enabled_lo/564x/c9/2c/ca/c92cca5b7d345133770ce6742f86a39b.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
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
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
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
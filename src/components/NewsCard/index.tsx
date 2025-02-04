import clsx from "clsx";
import dayjs from "dayjs";

interface INewsCard extends Article {
  classname?: string;
}

export const NewsCard = ({
  imageUrl,
  title,
  description,
  publishedAt,
  source,
  category,
  author,
  url,
  classname,
}: INewsCard) => (
  <article className={clsx("flex flex-1 flex-col items-stretch gap-3", classname)}>
    <a href={url}>
      <img className="h-40 w-full rounded-lg object-cover" src={imageUrl || "/images/no-image.png"} alt={title} />
    </a>
    <div className="flex flex-col items-start">
      <span className="text-2xs text-red/70 bg-red/10 rounded-xs p-1 leading-2">{source}</span>
      <h4 className="text-navy-blue text-md mt-3">
        <a href={url}>{title}</a>
      </h4>
      <p className="text-navy-blue/80 mt-2 text-xs">{description}</p>
      <div className="mt-3">
        <span className="text-red/80 text-xs">{category}</span>
        <span className="text-navy-blue/70 ml-1 text-xs">. {dayjs(publishedAt).fromNow()}</span>
      </div>
      {author && <span className="text-navy-blue text-xs">Author: {author}</span>}
    </div>
  </article>
);

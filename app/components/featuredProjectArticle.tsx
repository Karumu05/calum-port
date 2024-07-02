import Link from "next/link";

interface ProjectArticleProps {
  date: string;
  name: string;
  info: string;
}

export default function FeaturedProjectArticle(props: ProjectArticleProps) {
  return (
  <div className="border-2 border-black dark:border-white shimmerBackground rounded-xl lg:row-span-2">
    <Link href={`/projects/${props.name}`}>
      <article className=" w-full h-full p-4 group">
        <div className="flex">
          <time dateTime="">{props.date}</time>
        </div>

        <h2 className="mt-4 text-3xl text-bold font-medium  ">
          {props.name}
        </h2>

        <p className="mt-4 ">{props.info}</p>

        <div className="group-hover:text-white dark:group-hover:text-gray-500 mt-4 lg:absolute bottom-8">
          <p>Read more...</p>
        </div>
      </article>
    </Link>
  </div>
  );
}
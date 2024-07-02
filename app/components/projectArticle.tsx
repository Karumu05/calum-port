import Link from "next/link";

interface ProjectArticleProps {
  date: string;
  name: string;
  info: string;
}

export default function ProjectArticle(props: ProjectArticleProps) {
  return (
    <div className="flex flex-col gap-8 max-auto dark:border-white shimmerBackground border-2 border-black rounded-xl">
      <Link href={`/projects/${props.name}`}  >
        <article className="w-full h-full p-4 group">
          <div className="flex">
            <time dateTime={props.date}>{props.date}</time>
          </div>
          <h2 className="mt-4 text-3xl text-bold font-medium group-hover:text-white dark:group-hover:text-gray-500">
            {props.name}
          </h2>
          <p className="mt-4 group-hover:text-white dark:group-hover:text-gray-500">{props.info}</p>
        </article>
      </Link>
    </div>
  );
}

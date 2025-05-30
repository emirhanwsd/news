import dayjs from "dayjs";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Article = ({ article }) => {
  return (
    <div className="group relative">
      <div className="space-y-4">
        <img
          src={article.image}
          alt={article.slug}
          loading="lazy"
          className="h-64 w-full rounded-2xl bg-gray-100 object-cover"
        />

        <div className="space-y-2">
          <h6 className="text-sm font-semibold text-blue-700">
            {dayjs(article.date).format("LL")}
          </h6>

          <div className="space-y-1">
            <div className="flex justify-between gap-x-4">
              <h2 className="truncate text-lg font-semibold">
                {article.title}
              </h2>

              <div className="shrink-0">
                <ArrowUpRightIcon
                  size={24}
                  className="text-gray-400 transition-transform will-change-transform group-hover:rotate-45"
                />
              </div>
            </div>

            <p className="line-clamp-2 text-gray-600">{article.description}</p>
          </div>
        </div>
      </div>

      <Link href={`/news/${article.slug}`} className="absolute inset-0" />
    </div>
  );
};

export default Article;

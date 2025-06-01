import axios from "axios";
import Head from "next/head";
import dayjs from "dayjs";
import { API_URL } from "@/utils/helper";

const Article = ({ article }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Head>
        <title>{`${article.title} - News`}</title>

        <meta name="title" content={article.title} />
        <meta name="description" content={article.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.description} />
        <meta property="twitter:image" content={article.image} />
      </Head>

      <header className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-3">
                <h6 className="text-sm font-semibold text-blue-700 lg:text-base">
                  {dayjs(article.date).format("LL")}
                </h6>

                <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                  {article.title}
                </h1>
              </div>

              <p className="text-lg text-gray-600 lg:text-xl">
                {article.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16">
          <img
            src={article.image}
            alt={article.slug}
            className="mx-auto w-5xl"
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-16 lg:px-8 lg:pb-24">
        <p className="text-base text-gray-600 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </p>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${API_URL}/news`);

    return {
      paths: data.map((article) => `/news/${article.slug}`),
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps = async (context) => {
  try {
    const {
      data: { data },
    } = await axios.get(`${API_URL}/news/${context.params.slug}`);

    return {
      props: {
        article: data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Article;

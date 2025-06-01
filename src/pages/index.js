import axios from "axios";
import Head from "next/head";
import Article from "@/components/article";
import { API_URL } from "@/utils/helper";

const Home = ({ news }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Head>
        <title>News</title>
      </Head>

      <header className="mx-auto max-w-7xl px-4 pt-16 lg:px-8 lg:pt-24">
        <div className="flex justify-between">
          <div className="space-y-4 lg:space-y-5">
            <div className="space-y-3">
              <h6 className="text-sm font-semibold text-blue-700 lg:text-base">
                Our news
              </h6>

              <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Latest sports articles
              </h1>
            </div>

            <p className="text-lg text-gray-600 lg:text-xl">
              Get instant news and highlights takes from every corner of the
              sports world.
            </p>
          </div>

          <button
            type="button"
            className="hidden h-12 rounded-lg border-2 border-white/10 bg-blue-600 px-4 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 active:bg-blue-500 lg:block"
          >
            View all articles
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const {
      data: { data: news },
    } = await axios.get(`${API_URL}/news`);

    return {
      props: {
        news,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;

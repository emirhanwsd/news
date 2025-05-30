import axios from "axios";
import { leagues } from "@/utils/helper";
import slugify from "slugify";
import { uniqBy } from "lodash/array";
import { orderBy } from "lodash/collection";

const handler = async (request, response) => {
  try {
    const requests = await axios.all(
      leagues.map((league) =>
        axios.get(
          `https://site.api.espn.com/apis/site/v2/sports/soccer/${league}/news`,
        ),
      ),
    );

    let news = [];

    requests.forEach(({ data: { articles } }) => {
      articles.forEach((article) => {
        news.push({
          id: article.id,
          slug: slugify(article.headline, {
            lower: true,
            strict: true,
          }),
          title: article.headline,
          description: article.description,
          image: article.images[0]?.url,
          date: new Date(article.published).getTime(),
        });
      });
    });

    news = uniqBy(news, "id");

    news = orderBy(news, "date", "desc");

    return response.status(200).json({ status: 200, data: news });
  } catch (error) {
    return response.status(500).json({ status: 500, data: null });
  }
};

export default handler;

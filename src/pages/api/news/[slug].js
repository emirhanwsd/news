import axios from "axios";
import { API_URL } from "@/utils/helper";

const handler = async (request, response) => {
  try {
    const {
      data: { data: news },
    } = await axios.get(`${API_URL}/news`);

    const article = news.find((article) => article.slug === request.query.slug);

    if (!article) {
      return response.status(404).json({ status: 404, data: null });
    }

    return response.status(200).json({ status: 200, data: article });
  } catch (error) {
    return response.status(500).json({ status: 500, data: null });
  }
};

export default handler;

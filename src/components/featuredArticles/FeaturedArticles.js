import useApi from "../../hooks/useApi";
import { getFeaturedArticles } from "../../services/Article.service";
import ArticleItem from "../articleItem/ArticleItem";
import FeaturdArticleItem from "./FeaturdArticleItems";

const FeaturedArticles = () => {
    const {data} = useApi(getFeaturedArticles);
  return (
    <div className="container mx-auto lg:px-0 pt-4 px-7">
        <hr className="border-2 border-gray-700" />

        <div className="py-6">
            <h3 className="text-3xl">Featured Article</h3>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-6">
                <div>
                    <ArticleItem article={data?.articles[0]} />
                </div>
                <div>
                    {
                        data?.articles?.slice(1, 4)?.map((article, key) => (
                            <FeaturdArticleItem article={article} />
                        ))
                    }

                </div>
            </div>
        </div>

    </div>
  )
}

export default FeaturedArticles
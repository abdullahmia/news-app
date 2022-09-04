import useApi from "../../hooks/useApi";
import { getAllArticles } from "../../services/Article.service";
import ArticleItem from "../articleItem/ArticleItem";

const AllArticles = () => {
  const {data} = useApi(getAllArticles);
  const articles = data?.articles;
  return (
    <div className="container mx-auto lg:px-0 pt-4 px-7">
        <hr className="border-2 border-gray-700" />

        <div className="py-6">
            <h3 className="text-3xl">All Article</h3>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pt-6"> 
            {
              articles?.slice(0, 21).map((article, key) => (
                <ArticleItem key={key} article={article} isCustomImg />
              ))
            }
            
            </div>
        </div>

    </div>
  )
}

export default AllArticles;
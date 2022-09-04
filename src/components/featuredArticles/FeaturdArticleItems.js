import moment from "moment";
import notFoundImg from '../../assets/not-found.png';

const FeaturdArticleItem = ({article}) => {
  return (
    <div className="flex items-center lg:flex-row flex-row-reverse gap-4 border-b py-6 first:p-0 first:pb-6 last:border-none">
        <div className="w-1/3">

            <img src={article?.urlToImage ? article?.urlToImage : notFoundImg} className="w-full object-cover" alt="post" />
        </div>
        <div className="w-2/3">
            <p className="text-gray-600 text-sm">{moment(article?.publishedAt).format('LL')}</p>
            <a href={article?.url} target="_blank" className="lg:text-2xl font-semibold text-gray-700" rel="noreferrer">{article?.title}</a>
        </div>
    </div>
  )
}

export default FeaturdArticleItem
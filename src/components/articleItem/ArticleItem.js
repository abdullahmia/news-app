import moment from "moment"
import notfoundImg from '../../assets/not-found.png'

const ArticleItem = ({article, isCustomImg}) => {
  return (
    <div className="w-full flex flex-col gap-3">
        <img src={article?.urlToImage ? article?.urlToImage : notfoundImg} className={`w-full object-cover ${isCustomImg && 'h-64'}`} alt="post" loading="lazy" />
        <p className="text-gray-600 text-sm">{moment(article?.publishedAt).format('LL')}</p>
        <a href={article?.url} className="text-2xl font-semibold text-gray-700" target="_blank" rel="noreferrer">{article?.title}</a>
        <p className="text-gray-600 text-base">{article?.description.slice(0, 147)}</p>
    </div>
  )
}

export default ArticleItem
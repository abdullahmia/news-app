// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AllArticles from "../../components/allPosts/AllArticless";
import FeaturedArticles from "../../components/featuredArticles/FeaturedArticles";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import useApi from "../../hooks/useApi";
import { getFeaturedArticles } from "../../services/Article.service";

const Home = () => {
  const {isLoading} = useApi(getFeaturedArticles);
  return (
    <>
      <Navbar />
      {
        isLoading ? <Loader /> : <>
          
          <FeaturedArticles />
          <AllArticles />
          <Footer />
        </>
      }
        
    </>
  )
}

export default Home
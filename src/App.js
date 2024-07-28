import { useEffect, useState } from 'react';
import './App.css';
import Navnews from './components/Navnews';
import apikey from './data/config';
import axios from 'axios';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer';
function App() {
  
  const [category,setCategory] = useState("general");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setNewsResults] = useState();
  const [loadMore,setLoadMore] = useState(20);
  const newsAPI = async()=>{
    try{
      const news =await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      console.log(newsArray);
      console.log(newsResults);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    newsAPI();
  },[newsResults,category,loadMore])
  return (
    <div className="App">
      <Navnews setCategory={setCategory}/>
      <NewsContent
       newsArray={newsArray}
       newsResults={newsResults}
       loadMore={loadMore}
       setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
  );
}

export default App;

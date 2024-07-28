import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'
function NewsContent({newsArray,newsResults,loadMore,setLoadMore}) {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='topMessage'>
          <span className='messageText'>For the best experience download app on your smartphone</span>
          <img className='appStore' height='80%' src='https://assets.inshorts.com/website_assets/images/appstore.png'/>
          <img className='playStore' height='80%' src='https://assets.inshorts.com/website_assets/images/playstore.png'/>
        </div>
        {newsArray.map((newsItem)=>(
          <NewsCard newsItem={newsItem} key={newsItem.title}/>
          ))}
        {loadMore<=newsResults &&
          <>
          <hr/>
          <button className='loadMore' onClick={()=>(setLoadMore(loadMore+20))}>Load More</button>
          </>
        }
      </div>
    </Container>
  )
}

export default NewsContent

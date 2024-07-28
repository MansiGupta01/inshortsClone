import React from 'react'
import './NewsCard.css'
function NewsCard({newsItem}) {
    const fullDate = new Date(newsItem.publishedAt);
    var date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0,2));
  return (
    <div className='newsCard'>
      <img 
        className='newsImage'
        alt={newsItem.title} 
        src={newsItem.urlToImage ? newsItem.urlToImage :'https://upload.wikimedia.org/wikipedia/en/8/82/TheNewsTodayCover.jpg'}
       />
       <div className='newsText'>
        <p className='newsTitle'>{newsItem.title}</p>
        <p className='newsAuthor'>
            <a href={newsItem.url} target='_blank' className='short'>
                <b>short{" "}</b>
            </a> by {" "}
            <span className='muted'>
                {newsItem.author?newsItem.author:'unknown'} /{" "}
                {hour>12?`${hour-12}:${date[4].substring(3,5)}pm`:`${hour}:${date[4].substring(3,5)}am`}{" "}
                on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
        </p>
        <div className='lowerText'>
        <p className='newsDescription'>
            {newsItem.description? newsItem.description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
        </p>
        <p className='readMore'>Read more at{" "}<a href={newsItem.url} target='_blank' className='source'><b>{newsItem.source.name}</b></a></p>
        </div>
       </div>
    
    </div>
  )
}

export default NewsCard

import React from 'react'
import styles from '../css/NewsListItem.module.css'

const NewsItem = ({item}) => {

  return (
    <div className={styles.news_item}>
      <h3>{item.title}</h3>
      <div>
        {item.feed}
      </div>
    </div>
  )
}

export default NewsItem 
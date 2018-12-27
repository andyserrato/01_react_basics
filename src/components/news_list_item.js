import React from 'react'
//import {css} from 'glamor'
import classes from '../css/styles.css'

const NewsItem = ({item}) => {

 /**
  * GLAMOR
  */
 /* let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
    '_hover': {
      color:'red'
    },
    '@media(max-width: 500px)': {
      color: 'blue'
    }
  })

  let item_grey = css({
    background: 'lightgrey'
  })
  <div className={`${news_item} ${item_grey}`}>
  */

  return (
    <div className={classes.news_item}>
      <h3>{item.title}</h3>
      <div>
        {item.feed}
      </div>
    </div>
  )
}

export default NewsItem 
import React from 'react'
import "./ProductCard.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const ProductCard = () => {
  return (
    <div>
        {/* <div class="instagram-card">
  <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="Изображение"/>
  <div class="card-content">
    <h3>Заголовок</h3>
    <p>Описание карточки</p>
    <a href="ссылка">Подробнее</a>
  </div>
</div> */}
<div class="instagram-card">
  <div class="card-header">
    <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="Аватарка"/>
    <span class="username">_soltonbekov_</span>
  </div>
  <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" alt="Изображение" style={{width:"100%"}}/>
  <div class="card-content">
   
    <div class="caption">
      <span class="username">_soltonbekov_</span>
      <span class="caption-text">Это я на расслабоне отдыхаю от городской суеты...</span>
    </div>
    <div className='funcline'>
        <div className='funcline-left'>
    <div class="likes">
      <IconButton className='like-icon'>
              <FavoriteIcon color='error'/>
            </IconButton>
      <span class="like-count">100</span>
    </div>
    <div class="comments">
      <IconButton className='comment-icon'>
       <ChatBubbleOutlineIcon sx={{color:'black'}} />
      </IconButton>
      <span class="comment-count">10</span>
    </div>
    </div>
    <div>
    <IconButton>
       <TurnedInNotIcon  sx={{color:'black'}} />
      </IconButton>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProductCard
import {useState,useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../routes/estilo.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Conteudo from './Conteudo';


function Home (){
  const [slidePerView, setSlidePerView]=useState(2);

  const imagens =[

    {id:'1', image: './src/assets/img1.png'},
    {id:'2', image: './src/assets/img2.jpg'},
    {id:'3', image: './src/assets/img3.png'},
  ];
  
  useEffect(()=>{
    function handleResize() {
      if(window.innerWidth < 720){
        setSlidePerView(2);
      }else {
        setSlidePerView(1);
      }
    }
    handleResize();
    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[]);


  return(
    <section>
      <Swiper
      slidePerView={ slidePerView}
      pagination={{clickable:true}}
      navigation
      >
        {imagens.map((item)=>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slide' className={styles.slideItem}/>
          </SwiperSlide>
        )}

      </Swiper>
      
      <Conteudo />
    
    </section>
  )
}
export default Home
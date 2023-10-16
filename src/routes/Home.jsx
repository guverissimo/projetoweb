import {useState,useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../routes/estilo.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Conteudo from './Conteudo';
import '../css/Home.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.png'

function Home (){
  const [slidePerView, setSlidePerView]=useState(2);

  const imagens =[

    {id:'1', image: img1},
    {id:'2', image: img2},
    {id:'3', image: img3},
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
    <section className='home-section'>
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
      
      <h1 className='title-section'>Conheça nosso cardapio</h1>
      <Conteudo />
    
    </section>
  )
}
export default Home
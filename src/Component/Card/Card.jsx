import React, { useState } from 'react'
import './Card.css';
import Img1 from '../Images/{5DF8A60C-1463-499C-B731-1A97361E57DB}Img400.jpg'
import Img2 from '../Images/41okhLUZZOL._SX258_BO1,204,203,200_.jpg'
import Img3 from '../Images/51Uqe5PHbML._SX258_BO1,204,203,200_.jpg'
import Img4 from '../Images/61Qfp9IknQL._AC_UF1000,1000_QL80_.jpg'
import Img5 from '../Images/61vg+0-1yGL._AC_UF1000,1000_QL80_.jpg'
import Img6 from '../Images/434454.image0.jpg'
import Img7 from '../Images/54773889.jpg'
import Img8 from '../Images/9781138436374.jpg'
import Img9 from '../Images/C-Primer-Plus-6th-Edition.jpg'
import Img10 from '../Images/download (1).jpeg'
import Img11 from '../Images/Full-Stack-React.jpg'
import Img12 from '../Images/image-4.webp'
import Img13 from '../Images/images (1).jpeg'
import Img14 from '../Images/images (2).jpeg'
import Img15 from '../Images/images (3).jpeg'
import Img16 from '../Images/images (4).jpeg'
import Img17 from '../Images/images (5).jpeg'
import Img18 from '../Images/images (6).jpeg'
import Img20 from '../Images/images (7).jpeg'
import Img21 from '../Images/images (8).jpeg'
import Img22 from '../Images/python-basics-book.webp'
import Img23 from '../Images/Python-Crash-Course-cover.jpg'
import Img25 from '../Images/React-16.jpg'
import Img26 from '../Images/the-modern-c-challenger.jpg'






function Card() {
  const [filter, setFilter] = useState('');
  const searchText = (event) =>{
    setFilter(event.target.value);
  }
const data ={
  cardData:[
    {
      id:1,
      img: Img5,
      title: 'React',
      desc: 'Read book',
    },
    {
      id:2,
      img: Img2,
      title: 'C++',
      desc: 'Read book',
    },
    {
      id:3,
      img: Img14,
      title: 'Java',
      desc: 'Read book',
    },
    
    {
      id:4,
      img: Img10,
      title: 'python',
      desc: 'Read book',
    },
    {
      id:6,
      img: Img6,
      title: 'Java Programing',
      desc: 'Read book',
    },
    {
      id:7,
      img: Img7,
      title: 'C++ Quickly',
      desc: 'Read book',
    },
    {
      id:8,
      img: Img8,
      title: 'C++ MFC',
      desc: 'Read book',
    },
    {
      id:9,
      img: Img9,
      title: 'C++ Premer',
      desc: 'Read book',
    },

    {
      id:11,
      img: Img11,
      title: 'Full React project',
      desc: 'Read book',
    },
    {
      id:12,
      img: Img12,
      title: 'React native',
      desc: 'Read book',
    },
    {
      id:13,
      img: Img13,
      title: 'Think Java',
      desc: 'Read book',
    },
    
    {
      id:15,
      img: Img15,
      title: 'Java Illuminited',
      desc: 'Read book',
    },
    {
      id:16,
      img: Img16,
      title: 'React js pattern',
      desc: 'Read book',
    },
    {
      id:17,
      img: Img17,
      title: 'Python Dumis',
      desc: 'Read book',
    },
    {
      id:18,
      img: Img18,
      title: 'Python Data',
      desc: 'Read book',
    },
    {
      id:19,
      img: Img22,
      title: 'Python Basic',
      desc: 'Read book',
    },
  ]
}

let dataSearch = data.cardData.filter(item =>{
  return Object.keys(item).some(key =>
    item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  
  })
  return (
<>
    <div className='hero'></div>
 <section className='py-4 container'>
 <div className="row">
 <div className="searchbar">
  <div className="row justify-content-center">
  <div className="col-lg-8">
    <div className="head-text">
<h1>FIND YOUR BOOK CHOOSE</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt eveniet saepe pariatur reiciendis, non qui porro magnam voluptates necessitatibus? Laboriosam fugiat sequi eveniet et voluptatibus nobis ipsum magni repellat numquam ut maxime blanditiis repellendus ducimus consequuntur eius qui, odio modi maiores itaque. Nulla voluptatem officiis voluptatum, libero dignissimos mollitia quisquam.</p>
        <div className="search">
            <input type="search" placeholder='Search Programing Books'  value={filter} onChange={searchText.bind(this)}
   />
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
    </div>
</div>
</div>
</div>
<h2 style={{textAlign:'center', paddingTop:20, paddingBottom:20, fontSize:50}}>Choose your Books</h2>
{dataSearch.map((item, index) =>{
return(
  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 overflow-hidden h-200 shadow mt-4">
  <div className="card p-0 overflow-hidden shadow card-img">
  <img src={item.img} className='card-img-top' alt="" />
  <div className="card-body">
    <h1 className='card-title'>{item.title}</h1>
    <button className='btn btn-primary card-btn'>{item.desc}</button>
  </div>
  </div>
</div>
)
})}
  </div>
 </section>
 </>
  )
}

export default Card













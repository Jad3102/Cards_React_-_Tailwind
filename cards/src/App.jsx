import React from 'react'
import Card from './components/Card'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import CardStacker from './components/CardStacker'

const App = () => {

  const data = [
    {
      title: 'Kirby',
      subtitle: 'Star Allies',
      rating: '4.7',
      backgroundColors: { top: '#51D1F7', bottom: '#5B8FEF' },
      image: img1,
    },
    {
      title: 'Mario',
      subtitle: 'Super Bros',
      rating: '4.8',
      backgroundColors: { top: '#F85B6B', bottom: '#E83842' },
      image: img2,
    },
    {
      title: 'Pokemon',
      subtitle: 'Bulbasaur',
      rating: '4.9',
      backgroundColors: { top: '#28DFAB', bottom: '#26CBCF' },
      image: img3,
    },
    {
      title: 'Sonic',
      subtitle: 'Blue Sonic',
      rating: '4.9',
      backgroundColors: { top: '#6F3FF1', bottom: '#6E3CCA' },
      image: img4,
    },
    {
      title: 'Pokemon',
      subtitle: 'Pikachu',
      rating: '5.0',
      backgroundColors: { top: '#FBDA35', bottom: '#E3A237' },
      image: img5,
    },
  ];
  return (
    <div className="w-screen h-screen overflow-hidden bg-black flex items-center justify-center"> 
      <CardStacker Data={data} />
    </div>
  )
}

export default App
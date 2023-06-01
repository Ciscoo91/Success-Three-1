import {useState, useEffect} from 'react'
import {
  m,
  motion,
  AnimatePresence
} from "framer-motion";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function HeroGallery(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    useEffect(()=>{
      const interval = setInterval(changeImage, 3000)

      return () => {
        clearInterval(interval);
      }
    }, [currentIndex])

    return (
        <div 
          className="min-h-full"
        >
          <AnimatePresence exitBeforeEnter>
            <motion.img 
              className="min-w-full min-h-full object-cover"
              src={images[currentIndex].original}
              alt={`carousel items`} 
              initial={{x: 300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: -300, opacity: 0}}
            />
          </AnimatePresence>
        </div>
    )

}
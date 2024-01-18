import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import LeftBanner from '@/components/LeftBanner'
import CardLeft from '@/components/CardLeft'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <div className='main '>
          <Navbar className='' />
    <Search />
    <LeftBanner/>
    <div className=''>
    <CardLeft />
    </div>
    <Footer/>
    </div>



  )
}

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import LeftBanner from '@/components/LeftBanner'
import CardLeft from '@/components/CardLeft'



export default function Home() {
  return (
  <main className='main'>
    <Navbar />
    <Search />
    <LeftBanner/>
    <div className='max-w-screen-2xl mx-auto'>
    <CardLeft />
   
    </div>
  </main>
  )
}

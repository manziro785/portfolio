import './mainPage.css'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Aboutus from '../../components/aboutus/aboutus'

export default function mainPage() {
  return (
    <div>
      <Header/>
      main
      <Banner/>
      <Aboutus/>
      <Footer/>
    </div>
  )
}
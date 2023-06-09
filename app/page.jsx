import Slider from '@components/homepage/slideShow'
import FlashSale from '@components/homepage/flashSale'
import Footer from '@components/footer'

const Home = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col">
      <Slider />
      <FlashSale />

      {/* <Footer /> */}
    </section>
  )
}

export default Home
import Slider from '@components/homepage/slideShow'
import FlashSale from '@components/homepage/flashSale'
import Product from '@components/homepage/product'
import Info from '@components/homepage/info'

const Home = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col">
      <Slider />
      <FlashSale />
      <Product />
      <Info />

    </section>
  )
}

export default Home
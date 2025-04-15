import React from 'react'
import Image from 'next/image';
import men from '../../public/categories/men.jpeg'
import women from '../../public/categories/women.jpeg'
import homeFurnishing from '../../public/categories/homeFurnishing.jpeg'
import fabrics from '../../public/categories/fabrics.jpeg'
import { Caveat } from "next/font/google";
import background from '../../public/categories/background.jpeg'
import pashmina from '../../public/categories/pashmina.jpeg'
import nanda from '../../public/categories/nanda.jpeg'
import almora from '../../public/categories/almora.jpeg'
import kausani from '../../public/categories/kausani.jpeg'
import sustainable from '../../public/categories/sustainable.webp'
import foot from '../../public/categories/foot.webp'
import ethical from '../../public/categories/ethical.webp'
import Link from "next/link"
import UserIcon from './components/UserIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './components/Footer';
import Slider from './components/Slider'
import about from "../../public/categories/about-group.jpg";
import WhatsAppButton from './components/WhatsAppButton';
import localFont from "next/font/local";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });

const gellatio = localFont({
  src: "./fonts/gellatio.ttf",
})

export default function Home() {
  return (
    <>
      <main className='font-poppins '>
        <section className='mt-7 py-12 bg-neutral-800 text-white'>
          <Slider />
          <div className='container mx-auto max-w-5xl pt-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center p-6 border border-white/20 rounded-xl'>
                <div className='text-5xl font-bold mb-2 text-yellow-600'>
                  500+
                </div>
                <div className='text-lg text-white/80'>
                  Women Weavers Empowered
                </div>
                <div className='mt-4'>
                  <div className='w-full bg-white/20 h-2 rounded-full overflow-hidden'>
                    <div className='bg-white h-full w-10 rounded-full'></div>
                  </div>
                  <div className='mt-2 text-sm text-white/60'>
                    Target: 5000
                  </div>
                </div>
              </div>

              <div className='text-center p-6 border border-white/20 rounded-xl'>
                <div className='text-5xl font-bold mb-2 text-yellow-600'>
                  1995
                </div>
                <div className='text-lg text-white/80'>
                  Strengthening Weavers since
                </div>
              </div>

              <div className='text-center p-6 border border-white/20 rounded-xl'>
                <div className='text-5xl font-bold mb-2 text-yellow-600'>
                  30+
                </div>
                <div className='text-lg text-white/80'>
                  Years of Transforming Lives
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className='pt-12 md:py-10 bg-gray-50'>
          <div className='max-w-auto mx-auto px-2 md:px-4'>

            <h1 className={`font-bold md:font-normal text-center mb-12 text-yellow-600 ${gellatio.className} text-6xl `}>Timeless Elegance for Everyone</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16 place-items-center">
              {[
                { src: men, title: "Men", desc: "Timeless menswear crafted with tradition" },
                { src: women, title: "Women", desc: "Elegant womenswear with cultural heritage" },
                { src: homeFurnishing, title: "Home Furnishing", desc: "Transform your space with handcrafted elegance" },
                { src: fabrics, title: "Fabrics", desc: "Premium handwoven fabrics for every need" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/category"
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] w-full max-w-[300px] transition-transform hover:-translate-y-2 bg-gradient-to-t from-black/80 via-black/60 to-black/50"
                >
                  <Image
                    src={item.src}
                    alt={`${item.title}-image`}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-2xl md:text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-xl md:text-xs sm:text-sm text-gray-200">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>


          </div>

        </section>

        <div className='relative mt-8 w-full h-[350px] bg-cover bg-no-repeat bg-center items-center justify-center text-white'>
          <Image src={background} className='w-full h-full object-cover absolute mix-blend-darken' alt='fabric-image' />
          <div className={`relative z-10 text-center flex flex-col pt-15 gap-6 font-black ${caveat.className}`}>
            <h1 className='text-6xl font-semibold tracking-wide hover:text-yellow-600 transition-all duration-500'>
              Beautiful
            </h1>
            <h1 className='text-6xl font-semibold tracking-wide hover:text-yellow-600 transition-all duration-500'>
              Purposeful
            </h1>
            <h1 className='text-6xl font-semibold tracking-wide hover:text-yellow-600 transition-all duration-500'>
              Sustainable
            </h1>
          </div>
        </div>

        <section className='py-2'>
          <div className='max-w-auto mx-auto px-4 md:px-18 pt-8'>
            <h2 className={`text-6xl font-extrabold md:font-normal text-center mb-4 md:mb-12 text-yellow-600 ${gellatio.className} `}>Our Collections</h2>

            <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
              <div className=''>
                <h2 className='text-xl md:text-3xl font-semibold text-gray-900 '>
                  PREMIUM PANCHACHULI PRIDE
                </h2>
                <h2 className='text-xl font-semibold mb-2 text-yellow-600'>Pashmina</h2>
                <p className='md:text-lg text-justify text-gray-950 font-light leading-snug md:leading-snug'>
                  The Panchachuli collection of pure luxurious Pashminas is inspired by the high-altitude home of the Mongolian nomad, called Munsiyari. Munsyari is the last town before the frontier and is dominated by the massive Panchachuli range towering above the town to the North. Over time, we have not only maintained the authenticity and understated luxury of these rare pashmina, fibers but also created a beautiful products that are sustainable and of the extraordinary contribution of the artisans. The word &apos;pashmina&apos; comes from the Persian word &apos;pashm&apos; meaning &apos;wool&apos; and refers to the undercoat of the Changthang goat, which lives at high altitudes in the Himalayas, where harsh winters necessitate the growth of this exceptionally fine fiber to provide insulation.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden h-[200px] md:h-[400px] relative">
                <Image
                  src={pashmina}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="image"
                />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
              <div className='md:order-2'>
                <h2 className='text-xl md:text-3xl font-semibold text-gray-900 '>
                  NANDA DEVI COLLECTION
                </h2>
                <h2 className='text-xl font-semibold mb-2 text-yellow-600'>Merino and Lambswool</h2>
                <p className='md:text-lg text-justify text-gray-950 font-light leading-snug md:leading-snug'>
                  Spirit of gentle, traditional and immense hills and valleys of Nanda Devi, this collection is made with natural resources available in the Himalayas. We select the finest Merino, which comes from Merino sheeps and transform them into the quality handwoven fashion accessories and fabric.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image src={nanda} className="w-full h-auto transition-transform hover:scale-105 duration-700 object-cover" alt="image" />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
              <div className=''>
                <h2 className='text-xl md:text-3xl font-semibold text-gray-900 '>
                  ALMORA TWEED
                </h2>
                <h2 className='text-xl font-semibold mb-2 text-yellow-600'>Merino Wool</h2>
                <p className='md:text-lg text-justify text-gray-950 font-light leading-snug md:leading-snug'>
                  The story of Almora tweed is about the revival of the art of tweed making by the women of Almora, Uttarakhand. The Almora pattern has been passed down through generations, but the practice had almost disappeared due to time and circumstances. The beautiful handcrafted tweed is suitable for any occasion to give you a stylish and classy look and feel.
                </p>
              </div>
              <div className='relative h-[350px] rounded-2xl overflow-hidden'>
                <Image src={almora} className='absolute insert-0 bg-cover bg-center transition-transform hover:scale-105 duration-700' alt='image' />
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-12 items-center mb-20'>
              <div className='md:order-2'>
                <h2 className='text-xl md:text-3xl font-semibold text-gray-900 '>
                  KAUSANI COLLECTION
                </h2>
                <h2 className='text-xl font-semibold mb-2 text-yellow-600'>Hemp|Nettle|Bamboo|Organic Cotton</h2>
                <p className='md:text-lg text-justify text-gray-950 font-light leading-snug md:leading-snug'>
                  Inspired by the cool breeze and lush landscapes of Kausani, this collection brings the freshness of the mountains into everyday life. Moving beyond wool and winter wear, we are working with natural, breathable yarns — hemp, nettle, bamboo, and organic cotton — to create a range that is perfect for warmer days. From lightweight clothing to soft home furnishings, every piece is crafted with sustainability at its core. Handwoven by skilled artisans, this collection carries the essence of Kumaon — rooted in tradition, designed for comfort, and made for all seasons.
                </p>
              </div>
              <div className='relative h-[350px] rounded-2xl overflow-hidden md:order-1'>
                <Image src={kausani} className='absolute insert-0 bg-cover bg-center transition-transform hover:scale-105 duration-700' alt='image' />
              </div>
            </div>

          </div>
        </section>

        <div className='w-full overflow-hidden'>
          <h2 className={`text-6xl font-normal text-center my-8 mt-24 px-4 text-yellow-600 ${gellatio.className}`}>
            You make a difference with every purchase!
          </h2>

          <div className='relative w-full h-96 sm:h-[450px] md:h-[550px] lg:h-screen bg-no-repeat bg-center bg-cover overflow-hidden'>
            <Image
              src={about}
              alt='fabric-image'
              fill
              className='object-cover absolute inset-0 z-0'
            />

            <div className="bg-white/40 backdrop-blur-sm p-4 mt-[60vh] mr-[40vh] rounded-lg shadow-lg w-11/12 sm:w-96 mx-auto relative z-10">
              <h1 className='text-gray-800 text-justify text-xl'>
                Every time you choose Panchachuli, you support countless women in the Himalayas, giving them the opportunity to transform their lives, achieve financial independence, and keep their rich weaving traditions alive.
              </h1>
            </div>
          </div>
        </div>


        <div className='flex flex-wrap lg:h-screen justify-center items-center'>

          <div className='relative h-[600px] sm:h-[600px] md:h-[600px] lg:h-screen mt-10 rounded-lg overflow-hidden'>
            <Image
              src={sustainable}
              alt='photo'
              className='w-full h-full object-cover'
            />
          </div>



          <div className="relative min-h-[400px] sm:min-h-[800px] md:min-h-[550px] lg:min-h-screen w-full md:w-1/2 mt-10 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 sm:p-6 overflow-hidden">

            <div className={`text-3xl sm:text-5xl md:text-7xl font-regular text-yellow-600 text-center ${gellatio.className}`}>
              Sustainable
            </div>

            <div className="flex flex-col md:flex-row mt-6 md:mt-8 w-full justify-evenly items-center gap-6 md:gap-0">

              <div className="flex flex-col items-center w-full md:w-1/3 px-4">
                <Image src={foot} alt="foot" className="w-20 h-20 object-contain" />
                <h1 className="text-base sm:text-lg font-bold mt-4 text-center">NEGLIGIBLE</h1>
                <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
                  Practically immeasurable Carbon Footprint
                </p>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/3 px-4">
                <Image src={ethical} alt="ethical" className="w-20 h-20 object-contain" />
                <h1 className="text-base sm:text-lg font-bold mt-4 text-center">100%</h1>
                <p className="mt-2 text-center text-sm sm:text-base text-gray-600">
                  Ethical practices only
                </p>
              </div>
            </div>

            <p className="mt-6 sm:mt-8 px-2 sm:px-5 text-center text-sm sm:text-base text-gray-700 max-w-xl">
              Panchachuli is committed to preserving and giving back to the environment.
            </p>
          </div>


          <section className='py-6  md:py-10 px-4 transition-opacity '>
            <div className='container mx-auto max-w-5xl'>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-800 mb-2 text-center'>A Positive Impact </h2>
              <p className='text-xl text-neutral-600 mb-16 text-center'>A step towards change</p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='flex justify-center mb-6'>
                    <div className=' bg-neutral-100 rounded-full py-3 px-4'><div><UserIcon /></div></div>
                  </div>
                  <h3 className='text-xl font-semibold mb-4 text-neutral-800 text-center'>Economic Empowerment</h3>
                  <p className='text-neutral-600 text-center'>Women now have the power to earn, make independent financial choices, and build a secure future reducing reliance on agriculture and its uncertainties.</p>
                </div>

                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='flex justify-center mb-6'>
                    <div className='p-4 bg-neutral-100 rounded-full'><FontAwesomeIcon icon="heart" className="text-red-500 text-2xl" /></div>
                  </div>
                  <h3 className='text-xl font-semibold mb-4 text-neutral-800 text-center'>Better Quality of Life</h3>
                  <p className='text-neutral-600 text-center'>With stable incomes, families can now access quality education and healthcare, paving the way for a brighter future for their children.</p>
                </div>

                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
                  <div className='flex justify-center mb-6'>
                    <div className='p-4 bg-neutral-100 rounded-full'><FontAwesomeIcon icon={["fas", "map"]} className="text-xl" /></div>
                  </div>
                  <h3 className='text-xl font-semibold mb-4 text-neutral-800 text-center'>Preserving Tradition</h3>
                  <p className='text-neutral-600 text-center'>We hope to revive handloom by making this one-of-a-kind textile accessible to the international market.</p>
                </div>
              </div>
            </div>
          </section>
          <WhatsAppButton />
          <Footer />

        </div>

      </main>
    </>
  );
}



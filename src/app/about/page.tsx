"use client";
import React from 'react'
{/*import { Caveat } from "next/font/google";*/ }
import story from "../../../public/categories/story.png"
import Image from 'next/image';
import aim from "../../../public/categories/aim.png"
import strength from "../../../public/categories/strength.png"
import usp from "../../../public/categories/usp.png"
import hills from "../../../public/categories/hills.jpg"
import Link from 'next/link';
import wool from "../../../public/categories/wool.png"
import vincularfoundation from "../../../public/categories/vincularfoundation.png"
import handspinning from "../../../public/categories/handspinning.png"
import dyeing from "../../../public/categories/dyeing.png"
import weaving from "../../../public/categories/weaving.png"
import fabrics from "../../../public/categories/fabrics.jpeg"
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import localFont from "next/font/local";


{/*const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });*/ }
const gellatio = localFont({
    src: "../fonts/gellatio.ttf",
})

function about() {
    return (
        <>
            <div className='min-h-screen pt-10 bg-neutral-50 font-poppins mt-22' id="ourStory">
                <section id="mission" className='py-6 md:py-6 px-4 transition-opacity duration-1000 opacity-100'>
                    <div className='container mx-auto max-w-7xl'>
                        <h1 className={`text-2xl md:text-4xl text-yellow-600 mb-10 text-center ${gellatio.className}`}>Our Story</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
                            <div>
                                <h2 className='text-2xl md:text-3xl font-semibold text-neutral-800 mb-6'>Supporting Rural Women in Kumaon Region of Uttarakhand</h2>
                                <p className='text-gray-800 text-sm md:text-lg leading-snug mb-6 text-justify font-[300]'>Panchachuli Handlooms is an initiative by the Vincular Foundation, a non-profit organization committed to uplifting the weavers of Uttarakhand. Our journey began in 1991 when we witnessed the fading legacy of traditional handwoven textiles and the immense talent of women weavers going unnoticed. In rural Kumaon, most families relied on agriculture, leaving them vulnerable to unpredictable weather and financial instability. Their earnings were barely enough to survive.</p>
                                <p className='text-gray-800 text-sm md:text-lg leadding-snug text-justify font-[300]'>Determined to bring change, we set out to provide these skilled artisans with the training, resources, and opportunities they needed to revive Uttarakhands rich weaving heritage. Our first employee, Munni Mehta, went door to door, urging women to turn their craft into a means of livelihood. However, during that time, it was uncommon for women to work outside their homes, making many hesitant to step forward. Yet, with persistence and unwavering belief, a handful of women joined us. Over time, this small group grew into a strong and united community of artisans.</p>
                            </div>
                            <div className='relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl'>
                                <Image src={story} alt='image' className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="impact" className='py-6 md:py-10 px-4 transition-opacity duration-1000 opacity-100'>
                    <div className='container mx-auto max-w-5xl'>
                        <div className='bg-neutral-100 p-2 md:p-12 rounded-2xl'>
                            <h2 className='text-xl font-semibold text-neutral-800 mb-4 text-center'>Crafting Excellence with Natural Materials</h2>
                            <p className='text-neutral-700 text-sm md:text-lg leading-relaxed mb-6'>Our vision was not just to revive handloom weaving but to create something truly exceptional. We committed to using only natural materials, including vegetable dyes, pure cashmere wool, and locally sourced fibres.</p>
                            <p className='text-gray-800 text-sm md:text-lg leading-relaxed'>To bring this vision to life, our team travelled to the remote mountains of Tibet and Kailash Mansarovar, sourcing raw cashmere directly from nomadic herders. With dedication and training, our women artisans refined their technical and design skills, transforming their heritage craft into luxurious, handcrafted textiles that now reach global markets.</p>
                        </div>
                    </div>
                </section>

                <div className='max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20'>

                        <div className='flex flex-col md:flex-row items-center justify-between mb-20'>
                            <div className='flex flex-col md:flex-row md:pr-12 gap-8 w-full'>

                               
                                <div className='md:w-1/2 w-full order-1 md:order-1 px-2 md:px-0'>
                                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center md:text-left'>
                                        OUR AIM
                                    </h2>
                                    <p className='text-base sm:text-lg text-gray-800 text-justify font-[300] leading-snug'>
                                        The primary objective is to promote local handicrafts and artworks that are symbols of the Himalayan cultural heritage.
                                        In so doing, we also create sustainable livelihood avenues for the marginalized craft communities who are living in some of
                                        the most remote areas of the Himalayas in India. These artisans are at the far end of the supply chain and yet have amazing
                                        traditional wisdom and skills. We intend to create a sustainable hub for the handloom products of the state and act as a robust
                                        link between primary producers and destined international markets. The aim is to strengthen traditional craft value chains thereby
                                        bringing the desired change in society.
                                    </p>
                                </div>

                                
                                <div className='md:w-1/2 w-full order-2 md:order-2'>
                                    <Image src={aim} alt="Our Aim Image" className='rounded-lg shadow-lg w-full h-auto object-cover' />
                                </div>

                            </div>
                        </div>



                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-between mb-20'>
                        <div className='mb-8 md:mb-0 md:pr-12 flex flex-col gap-8 md:flex-row'>

                            <div className='md:w-1/2 w-full order-1 md:order-2 px-2 md:px-0'>
                                <h2 className='text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center md:text-left'>OUR STRENGTH</h2>
                                <p className='text-base sm:text-lg text-gray-800 text-justify font-[300] leading-snug'>
                                    We have well equipped in-house production centers coupled with a dedicated team of highly skilled master craft persons (producers), technical experts (subject matter specialist), and design professionals. Together, we design and create fashionable and sustainable textiles and products that meet the needs of our most discerning buyers.
                                </p>
                            </div>

                            <div className='md:w-1/2 w-full order-2 md:order-1'>
                                <Image src={strength} alt="image" className='rounded-lg shadow-lg w-full h-auto object-cover' />
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row items-center justify-between mb-20 px-4 md:px-8">
                        <div className="mb-8 md:mb-0 md:pr-12 w-full">
                            <div className="flex flex-col md:flex-row items-center gap-6">

                                <div className="w-full md:w-1/2">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                        OUR USP
                                    </h2>
                                    <p className="text-lg text-gray-800 text-justify font-light leading-snug">
                                        Our aim is to highlight local skills, keep pace with modern fashion trends
                                        through our innovative designs and use of modern technology and ensure that
                                        we maintain our quality standards at all times. Our emphasis on
                                        environmentally friendly and energy-efficient craft practices and our
                                        commitment to the upliftment and security of our women-artisans is of
                                        paramount importance to us. We pride ourselves on being able to showcase
                                        our contemporary heritage products which come with a distinct human touch.
                                    </p>
                                </div>

                                <div className="w-full md:w-1/2">
                                    <Image
                                        src={usp}
                                        alt="USP image"
                                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='relative mt-8 w-full h-[420px] bg-cover bg-no-repeat bg-center items-center justify-center text-white'>
                    <Image src={hills} className='w-full h-full object-cover absolute mix-blend-darken' alt='fabric-image' />
                    <div className={`relative z-10 text-center flex flex-col pt-15 gap-6 font-black`}>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join Our Mission</h2>
                        <p className='text-black text-xl font-light mb-10 max-w-xl mx-auto bg-white/70 rounded '>Every purchase directly supports women artisans in Uttarakhand, preserves cultural heritage, and creates sustainable livelihoods.</p>
                        <div className='flex flex-col md:flex-row gap-4 justify-center'>
                            <Link href="/shop">
                                <button className='px-8 py-3 bg-white text-neutral-800 font-medium rounded-full hover:bg-white/90 transition-colors'>Shop Our Collection</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='min-h-screen bg-neutral-50 mt-4 md:mt-0' id='weavingProcess'>
                    <header className='bg-cover h-72 flex items-center justify-center'>
                        <div className='container mx-auto px-6 flex justify-center items-center h-full'>
                            <div className='max-w-2xl bg-white/80 backdrop-blur-sm p-1 rounded-lg text-center'>
                                <h1 className={`text-4xl md:text-5xl font-light text-amber-900 mb-4 ${gellatio.className}`}>Our Weaving Process</h1>
                                <p className='text-lg text-amber-800'>Centuries of tradition meet sustainable innovation in our carefully crafted products. Each piece tells a story of artisanship passed down through generations.</p>
                            </div>
                        </div>
                    </header>

                    <section className='container mx-auto px-16 py-2'>
                        <div className='max-w-3xl mx-uto mb-16 text-center items-center'>
                            <h2 className='text-2xl md:text-3xl font-serif text-amber-900 mb-6'>From Fiber to Fabric</h2>
                            <p className='text-sm md:text-lg leading-snug text-gray-700 text-justify'>
                                Every product we create undergoes a meticulous seven-step process, combining ancient techniques with sustainable practices. Our commitment to traditional craftsmanship ensures each piece is unique, ethical, and made to last for generations.
                            </p>
                        </div>

                        <div className='space-y-24'>

                            <div className='flex flex-col md:flex-row gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>1</div>
                                        <Image src={wool} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 1: Wool and Yarn Procurement
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        We carefully source high-quality natural fibres like pashmina, merino wool, hemp, and bamboo from ethical and sustainable suppliers, ensuring eco-conscious practices from the start.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>2</div>
                                        <Image src={handspinning} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 2: Hand Spinning
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        Each thread is lovingly spun by hand on local charkha (spinning wheel), preserving traditional techniques while each thread goes through the trained women&#39;s fingers.
                                    </p>
                                    <p className='italic text-amber-700'>&quot;Each thread holds the touch of skilled hands that have preserved this art for generations.&quot;</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>3</div>
                                        <Image src={dyeing} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 3: Dyeing (Natural and Azo-Free)
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        Our dyeing process uses natural and azo-free dyes that are gentle on the environment and safe for everyone, creating vibrant hues without harmful chemicals.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>4</div>
                                        <Image src={aim} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 4: Warping
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        Then the yarns are meticulously arranged on the warping drum as per the design and colour combination, a process that blends precision and artistry to prepare for weaving. This is where the weft of the product is being prepared.
                                    </p>

                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>5</div>
                                        <Image src={strength} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 5: Drafting and Denting
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        This tedious process involves threading the yarn through the loom&#39;s heddles and reed, ensuring even tension and flawless weaving. Each thread is manually inserted into the respective reed which translates the design, structure and construction of the fabric.
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>6</div>
                                        <Image src={weaving} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 6: Weaving
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        Our weavers finally bring the fabric to life using handlooms, crafting each piece with care and precision while honouring the heritage of Himalayan craftsmanship. We believe in quality and no product is made in rush to ensure we deliver what we promise.
                                    </p>
                                    <p className='italic text-amber-700'>&quot;The rhythmic sound of our looms tells a story that began centuries ago in the Himalayan foothills.&quot;</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row gap-8 items-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='relative'>
                                        <div className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center text-3xl font-serif text-amber-800'>7</div>
                                        <Image src={fabrics} alt='image' className='w-full h-64 md:h-96 object-cover rounded-lg shadow-lg' />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 space-y-4'>
                                    <h3 className='text-2xl font-serif text-amber-800'>
                                        Step 7: Finishing
                                    </h3>
                                    <p className='text-gray-700 leading-snug md:leading-relaxed text-justify'>
                                        Every product is completed with a final touch of refinement, ensuring a premium look and feel while maintaining our commitment to sustainability.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className='bg-amber-50 py-16'>
                        <div className='container mx-auto px-6'>
                            <div className='max-w-2xl mx-auto text-center'>
                                <h2 className='text-3xl font-serif text-amber-900 mb-6'>
                                    Our Commitment to Sustainability
                                </h2>
                                <p className='text-gray-700 mb-8 text-justify'>
                                    Every step in our process is guided by respect for nature and people. From sourcing ethical materials to using natural dyes, we ensure that our beautiful products don&#39;t come at the expense of our planet.
                                </p>
                                <button className='px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition'>Explore Our Collection</button>

                            </div>
                        </div>
                    </section>

                </div>

                <section className='bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 md:px-8 rounded-xl my-12 max-w-7xl mx-auto' id='vincularFoundation'>
                    <div className='max-w-5xl mx-auto'>
                        <div className='flex flex-col md:flex-row items-center gap-8'>
                            <div className='md:w-1/2'>
                                <h2 className='text-3xl md:text-4xl font-bold text-indigo-900 mb-4'>Our Social Impact Initiative</h2>
                                <h3 className='text-xl md:text-2xl font-semibold text-blue-800 mb-6'>Shaping a Progressive and Tolerant Society</h3>
                                <p className='text-gray-700 mb-6 leading-relaxed text-justify'>Driven by our company values, we are making continuous advancements towards a cohesive workforce for delivering value to our customers, partners, employees &ndash; and fulfilling our responsibility to shape the future of society.</p>
                                <div className='mt-8'>

                                    <a className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg' href='https://vincularfoundation.org/'>Visit Vincular Foundation</a>

                                </div>
                            </div>
                            <div className='md:w-1/2 mt-8 md:mt-0'>
                                <div className='relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white'>
                                    <a className='block absolute inset-0' href='https://vincularfoundation.org/'>
                                        <div className='absolute inset-0 bg-gray-900 opacity-0 hover:opacity-20 transition-opacity duration-300 z-10'></div>
                                        <Image src={vincularfoundation} alt='' className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' />
                                        <div className='absolute bottom-4 right-4 bg-white text-indigo-900 px-3 py-1 rounded-md text-sm font-medium shadow-md z-20 flex items-center gap-1'>
                                            vincularfoundation.org
                                            icon
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <WhatsAppButton />

                <Footer />

            </div >
        </>

    )
}

export default about

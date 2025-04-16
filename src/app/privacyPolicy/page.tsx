import React from 'react'
import Footer from '../components/Footer';
import { Poppins } from 'next/font/google'
import FloatingActions from '../components/FloatingActions'

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const page = () => {
    return (
        <div>
            <div className={`pt-20 ml-10 mr-5 sm:ml-10 md:ml-35 ${poppins.className}`}>
                <div>
                    <h2 className='text-5xl font-bold mt-10'>Privacy Policy for Vincular Testing Labs India Pvt. Ltd.</h2>
                    <div className='pt-7'>
                        <h3 className='font-bold text-3xl'>Effective Date: April 11, 2025</h3>
                        <div className='pt-6 '>
                            <p>Vincular Testing Labs India Pvt. Ltd. (“we”, “our”, or “us”) is committed to protecting your privacy.</p>
                            <p>This Privacy Policy outlines how we collect, use, and safeguard your data in accordance with the</p>
                            <p>Digital Personal Data Protection Act (DPDP Act) 2023 of India.</p>
                        </div>

                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>1. Information We Collect</h3>
                        <p className='pt-5'>a. Personal Information: Name, email, phone number, company details, job title.</p>
                        <p>b. Non-Personal Information: IP address, browser type, device information, usage data.</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>2. Use of Information</h3>
                        <p className='pt-5'>We use your data to:</p>
                        <p>&ndash; Respond to your inquiries and provide services</p>
                        <p>&ndash; Improve our website experience</p>
                        <p>&ndash; Send marketing communications (if opted in)</p>
                        <p>&ndash; Analyze traffic and user behavior using tools like Google Analytics, Google Ads, and HubSpot</p>
                        <p>&ndash; Comply with legal requirements</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>3. Data Sharing</h3>
                        <p className='pt-5'>&ndash; We do not sell your data. We may share it with:</p>
                        <p>&ndash; Trusted third-party tools: Google Analytics, Google Ads, HubSpot</p>
                        <p>&ndash; Legal authorities as required</p>
                        <p>&ndash; Internal teams for operational purposes</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>4. Cookies & Tracking</h3>
                        <p className='pt-5'>We use cookies for:</p>
                        <p>&ndash; Website functionality</p>
                        <p>&ndash; Analytics and performance monitoring (Google Analytics)</p>
                        <p>&ndash; Advertising (Google Ads, HubSpot tracking)</p>
                        <p>You may disable cookies via browser settings.</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>5. Data Security</h3>
                        <p className='pt-5'>We take reasonable steps to protect your data, but no online method is 100% secure.</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>6. Your Rights under DPDP Act 2023</h3>
                        <p className='pt-5'>You have the right to:</p>
                        <p>&ndash; Access and correct your personal data</p>
                        <p>&ndash; Withdraw consent for data processing</p>
                        <p>&ndash; Request data erasure</p>
                        <p>&ndash; Lodge complaints with the Data Protection Board of India</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>7. Third-Party Links</h3>
                        <p className='pt-5'>Our website may contain links to other websites. We are not responsible for their privacy practices.</p>
                    </div>

                    <div className='pt-8'>
                        <h3 className='font-bold text-3xl'>8. Updates</h3>
                        <p className='pt-5'>We may update this Privacy Policy from time to time. Revisions will be posted on this page.</p>
                    </div>

                    <div className='pt-8 pb-8'>
                        <h3 className='font-bold text-3xl'>9. Contact Us</h3>
                        <p className='pt-5'>If you have questions, contact:</p>
                        <p>Email: privacy@vincular.in</p>
                        <p>Address: Surya Building, 3rd Floor, 27th Main, 1st Cross, HSR Layout, Bangalore 560102</p>
                    </div>

                </div>

            </div>
            <FloatingActions />
            <Footer />
        </div>
    )
}

export default page
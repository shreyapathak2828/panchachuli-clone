"use client"
import { useEffect, useState } from "react";
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsAppButton";

interface NewsItem {
  _id: string;
  title: string;
  content: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        if (data.success) {
          setNews(data.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div className="h-screen">
    <section className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:mt-12 font-poppins">
      <div className="flex flex-col items-center mb-8 sm:mb-12 pt-12 sm:pt-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-regular text-yellow-600 bg-clip-text">News</h1>
      </div>
     
      {news.map((item) => (
        <div key={item._id} className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 md:flex-row h-auto p-9 justify-center items-center max-w-4xl mx-auto ">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">{item.title}</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">{item.content}</p>
        </div>
      ))}

    </section>

    
  </div>
  <WhatsAppButton />
  <Footer />
  </div>
    
  );
}
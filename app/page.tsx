'use client'

import Image from 'next/image'
import { MapPin, Calendar, Clock, Palette } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const images = ['/photo.JPG', '/photo1.JPG', '/photo2.JPG']

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 400) // White screen duration
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleAddressClick = () => {
    const address = encodeURIComponent('No 7 chief Anthony Eze street, Ago palace way okota Lagos, Nigeria')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50/40 via-white to-purple-50/40 flex items-center justify-center relative overflow-hidden">
      {/* Celebratory confetti pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle, #9f1239 4px, transparent 4px),
          radial-gradient(circle, #f472b6 3px, transparent 3px),
          radial-gradient(circle, #be123c 4px, transparent 4px),
          radial-gradient(circle, #fb923c 3.5px, transparent 3.5px),
          radial-gradient(circle, #881337 3px, transparent 3px)
        `,
        backgroundSize: '60px 60px, 80px 80px, 100px 100px, 70px 70px, 90px 90px',
        backgroundPosition: '0 0, 20px 20px, 40px 40px, 10px 30px, 30px 10px',
        opacity: 0.15
      }}></div>
      
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-rose-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-rose-300 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="w-full max-w-7xl min-h-screen md:h-screen flex items-center justify-center p-3 md:p-6 relative z-10">
        {/* Main Container */}
        <div className="w-full md:h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-auto md:overflow-hidden flex flex-col">
          {/* Strictly By Invitation Banner */}
          <div className="bg-gradient-to-r from-rose-900 to-rose-800 py-2 px-4 text-center">
            <p className="text-sm md:text-base text-white font-semibold tracking-widest uppercase">Strictly By Invitation</p>
          </div>

          <div className="grid md:grid-cols-5 gap-0 flex-1 overflow-hidden">
            {/* Left Side - Photo Gallery */}
            <div className="md:col-span-3 relative p-3 md:p-6 flex items-center justify-center bg-gradient-to-br from-stone-50 to-white">
              {/* Photo Gallery */}
              <div className="relative w-full h-full flex items-center justify-center gap-3">
                {/* Main Center Photo - Auto-rotating */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-rose-300 via-rose-200 to-rose-300 opacity-0 group-hover:opacity-15 blur-xl transition-all duration-700"></div>
                  <div className="relative bg-white p-2 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                    <div className="relative w-[280px] h-[370px] md:w-[320px] md:h-[420px] overflow-hidden bg-white">
                      <Image
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt="Lolo Nkechi Eze"
                        fill
                        className={`object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Side Photos - Desktop only, also rotating */}
                <div className="hidden md:flex flex-col gap-3">
                  {/* Photo 1 - Next image */}
                  <div className="relative group">
                    <div className="relative bg-white p-2 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
                      <div className="relative w-[140px] h-[185px] overflow-hidden bg-white">
                        <Image
                          key={`side1-${currentImageIndex}`}
                          src={images[(currentImageIndex + 1) % images.length]}
                          alt="Lolo Nkechi Eze"
                          fill
                          className={`object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Photo 2 - Previous image */}
                  <div className="relative group">
                    <div className="relative bg-white p-2 shadow-lg transform hover:scale-[1.02] transition-all duration-500">
                      <div className="relative w-[140px] h-[185px] overflow-hidden bg-white">
                        <Image
                          key={`side2-${currentImageIndex}`}
                          src={images[(currentImageIndex + 2) % images.length]}
                          alt="Lolo Nkechi Eze"
                          fill
                          className={`object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-2 relative p-4 md:p-6 flex flex-col justify-center bg-white">
              <div className="space-y-4">
                {/* Title */}
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-stone-800 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                    Lolo Nkechi Eze
                  </h1>
                  <div className="w-16 h-1 bg-rose-900"></div>
                </div>

                {/* Subtitle - More Celebratory */}
                <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-4 border-l-4 border-rose-900">
                  <p className="text-2xl md:text-3xl font-bold text-rose-900 mb-1" style={{fontFamily: 'Georgia, serif'}}>
                    60th Birthday Lunch
                  </p>
                  <p className="text-lg font-light text-stone-600" style={{fontFamily: 'Georgia, serif'}}>
                    Celebration 🎉
                  </p>
                </div>

                {/* Event Details - Compact */}
                <div className="space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-3 bg-stone-50 p-3 rounded">
                    <Calendar className="w-5 h-5 text-rose-900" />
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Date</p>
                      <p className="text-lg text-stone-800 font-semibold">14th December 2025</p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-3 bg-stone-50 p-3 rounded">
                    <Clock className="w-5 h-5 text-rose-900" />
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Time</p>
                      <p className="text-lg text-stone-800 font-semibold">2:00 PM Prompt</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 bg-stone-50 p-3 rounded">
                    <MapPin className="w-5 h-5 text-rose-900" />
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Location</p>
                      <p className="text-sm text-stone-800 font-semibold leading-snug">
                        No 7 Chief Anthony Eze Street,<br />
                        Ago Palace Way, Okota, Lagos
                      </p>
                    </div>
                  </div>

                  {/* Dress Code */}
                  <div className="flex items-center gap-3 bg-rose-50 p-3 rounded border-l-4 border-rose-900">
                    <Palette className="w-5 h-5 text-rose-900" />
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wide font-semibold">Color of the Day</p>
                      <p className="text-xl text-rose-900 font-bold">TOUCH OF WHITE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

'use client'

import Image from 'next/image'
import { MapPin, Calendar, Clock, Palette } from 'lucide-react'

export default function Home() {
  const handleAddressClick = () => {
    const address = encodeURIComponent('No 7 chief Anthony Eze street, Ago palace way okota Lagos, Nigeria')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50/50 via-rose-50/50 to-purple-50/50 flex items-center justify-center relative overflow-hidden">
      {/* Celebratory confetti pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle, #fbbf24 4px, transparent 4px),
          radial-gradient(circle, #f472b6 3px, transparent 3px),
          radial-gradient(circle, #a78bfa 4px, transparent 4px),
          radial-gradient(circle, #fb923c 3.5px, transparent 3.5px),
          radial-gradient(circle, #ec4899 3px, transparent 3px)
        `,
        backgroundSize: '60px 60px, 80px 80px, 100px 100px, 70px 70px, 90px 90px',
        backgroundPosition: '0 0, 20px 20px, 40px 40px, 10px 30px, 30px 10px',
        opacity: 0.15
      }}></div>
      
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-rose-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="w-full max-w-7xl h-full min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
        {/* Main Container */}
        <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0 min-h-[700px]">
            {/* Left Side - Photo */}
            <div className="md:col-span-3 relative p-4 md:p-8 flex items-center justify-center bg-gradient-to-br from-stone-50 to-white">
              {/* Photo Frame with Animation */}
              <div className="relative group w-full h-full flex items-center justify-center">
                {/* Animated glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-300 opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700"></div>
                
                {/* Main Photo Frame - Minimal */}
                <div className="relative bg-white p-3 shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
                  <div className="relative w-[420px] h-[560px] md:w-[480px] md:h-[640px] overflow-hidden">
                    <Image
                      src="/photo.JPG"
                      alt="Lolo Nkechi Eze"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-2 relative p-6 md:p-8 flex flex-col justify-center bg-white">
              <div className="space-y-6">
                {/* Title */}
                <div className="space-y-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                    Lolo Nkechi Eze
                  </h1>
                  <div className="w-16 h-1 bg-stone-800"></div>
                </div>

                {/* Subtitle - More Celebratory */}
                <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 border-l-4 border-amber-500">
                  <p className="text-3xl md:text-4xl font-bold text-stone-800 mb-2" style={{fontFamily: 'Georgia, serif'}}>
                    60th Birthday
                  </p>
                  <p className="text-xl font-light text-stone-600" style={{fontFamily: 'Georgia, serif'}}>
                    Celebration. 🎉
                  </p>
                </div>

                {/* Save the Date */}
                <div className="space-y-2">
                  <p className="text-base font-serif italic text-amber-700">
                    Save the Date
                  </p>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    You are cordially invited to celebrate this special milestone
                  </p>
                </div>

                {/* Date Display */}
                <div className="flex items-baseline gap-3 text-stone-800 bg-stone-50 p-4 inline-block">
                  <span className="text-xl font-bold uppercase tracking-widest">DEC</span>
                  <span className="text-6xl font-bold">14</span>
                  <span className="text-xl font-bold">2025</span>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-block bg-stone-800 hover:bg-stone-900 text-white px-10 py-3 text-sm font-medium tracking-widest transition-all transform hover:scale-105 hover:shadow-lg uppercase"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div id="details" className="py-20 px-8 md:px-16 bg-white">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-stone-800 text-center mb-16" style={{fontFamily: 'Georgia, serif'}}>
                Event Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                {/* Date & Time */}
                <div className="bg-white p-10 border border-stone-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">When</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-stone-500 font-semibold uppercase tracking-widest mb-2">Date</p>
                      <p className="text-2xl text-stone-800 font-light">14th December 2025</p>
                    </div>
                    <div className="pt-4 border-t border-stone-200">
                      <p className="text-xs text-stone-500 font-semibold uppercase tracking-widest mb-2">Time</p>
                      <p className="text-2xl text-stone-800 font-light">2:30 PM Prompt</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div 
                  className="bg-white p-10 border border-stone-200 cursor-pointer hover:shadow-lg transition-all duration-300 group"
                  onClick={handleAddressClick}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-stone-800 flex items-center justify-center group-hover:bg-stone-900 transition-colors">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">Where</h4>
                  </div>
                  <div>
                    <p className="text-lg text-stone-700 font-light mb-4 leading-relaxed">
                      No 7 Chief Anthony Eze Street,<br />
                      Ago Palace Way, Okota, Lagos
                    </p>
                    <p className="text-xs text-stone-500 font-medium uppercase tracking-widest group-hover:text-stone-700 transition-colors">
                      Click to open in Google Maps →
                    </p>
                  </div>
                </div>

                {/* Dress Code */}
                <div className="bg-white p-10 border border-stone-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">Dress Code</h4>
                  </div>
                  <p className="text-5xl font-light text-stone-800 tracking-wider">
                    ALL WHITE
                  </p>
                </div>

                {/* Event Type */}
                <div className="bg-white p-10 border border-stone-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-stone-800 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-semibold text-stone-800">Event</h4>
                  </div>
                  <p className="text-3xl font-light text-stone-800 mb-2">
                    Birthday Lunch
                  </p>
                  <p className="text-sm text-stone-500 font-light">
                    A celebration of 60 wonderful years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-stone-900 py-16 px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-3xl md:text-4xl text-white font-light tracking-wide" style={{fontFamily: 'Georgia, serif'}}>
                Strictly By Invitation
              </p>
              <div className="w-24 h-px bg-white/30 mx-auto"></div>
              <p className="text-base text-white/70 font-light">
                We look forward to celebrating this special day with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

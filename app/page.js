'use client'

import { MapPin, Calendar, Clock, Palette } from 'lucide-react'

export default function Home() {
  const handleAddressClick = () => {
    const address = encodeURIComponent('No 7 chief Anthony Eze street, Ago palace way okota Lagos, Nigeria')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-white to-gray-100 p-12 text-center border-b-4 border-gray-200">
            <div className="mb-6">
              <div className="inline-block">
                <h2 className="text-xl md:text-2xl text-gray-600 font-light tracking-widest mb-2">
                  YOU ARE CORDIALLY INVITED TO
                </h2>
                <div className="h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight">
              Lolo Nkechi Eze
            </h1>
            
            <div className="text-3xl md:text-4xl text-gray-700 font-light mb-6">
              60th Birthday Celebration
            </div>
            
            <div className="inline-block bg-white px-8 py-3 rounded-full shadow-md">
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                All White Birthday Lunch
              </p>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 md:p-12 space-y-6">
            {/* Date */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Calendar className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Date</p>
                <p className="text-2xl text-gray-800 font-semibold">14th December 2025</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Clock className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Time</p>
                <p className="text-2xl text-gray-800 font-semibold">2:30 PM Prompt</p>
              </div>
            </div>

            {/* Location */}
            <div 
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
              onClick={handleAddressClick}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Location</p>
                <p className="text-xl text-gray-800 font-semibold group-hover:text-blue-600 transition-colors underline decoration-2 decoration-transparent group-hover:decoration-blue-600">
                  No 7 Chief Anthony Eze Street,<br />
                  Ago Palace Way, Okota, Lagos
                </p>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-blue-600 transition-colors">
                  Click to open in Google Maps
                </p>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <Palette className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Color of the Day</p>
                <p className="text-2xl text-gray-800 font-bold">WHITE</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-gray-100 to-white p-6 text-center border-t-4 border-gray-200">
            <p className="text-lg text-gray-700 font-semibold tracking-wide">
              STRICTLY BY INVITATION
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>We look forward to celebrating with you</p>
        </div>
      </div>
    </main>
  )
}

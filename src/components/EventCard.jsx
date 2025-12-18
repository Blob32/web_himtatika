import React from "react"

const EventCard = ({ event, onClick }) => {
  return (
    <div
      onClick={() => onClick(event.id)}
      className="
        group cursor-pointer 
        bg-white rounded-2xl 
        border border-gray-100
        shadow-xl md:shadow-md hover:shadow-xl
        overflow-hidden 
        transform transition-all duration-300
        h-full flex flex-col
      "
    >
      {/* Gambar */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay gradient tipis */}
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(12deg,_#00000073_1%_10%,_transparent_90%)]"></div>
        
        {/* Judul di atas gambar (Opsional, agar hemat tempat di mobile stack) */}
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-white font-bold font-title text-xl drop-shadow-md">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Konten Text */}
      <div className="p-5 flex-1 flex flex-col">
        {event.theme && (
          <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">
            {event.theme}
          </p>
        )}
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <span className="text-brand-dark text-sm font-semibold group-hover:text-brand-red transition-colors flex items-center gap-2">
            Lihat Detail 
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default EventCard
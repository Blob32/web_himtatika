import React from "react"
import { events } from "../data/event"
import EventCard from "./EventCard"

const EventSection = ({ onEventClick }) => {
  return (
    <section id="event" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-brand-dark font-bold mb-4">
            Kegiatan Kami
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-body text-gray-700">
            Berikut adalah beberapa program kerja unggulan yang kami
            selenggarakan untuk mahasiswa dan masyarakat.
          </p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 relative">
          {events.map((event, index) => {
            // Hitung posisi sticky hanya untuk Mobile
            const stickyTop = 100 + index * 20; 

            return (
              <div
                key={event.id}
                className="sticky md:static mb-12 md:mb-0"
                style={{
                  top: `${stickyTop}px`, 
                  zIndex: index + 1
                }}
              >
                {/* Kirim prop 'index' agar card bisa ganti warna/style jika mau */}
                <EventCard event={event} onClick={onEventClick} />
              </div>
            )
          })}
        </div>
        
        {/* Spacer khusus Mobile agar kartu terakhir tidak terpotong footer */}
        <div className="h-20 md:hidden"></div>
      </div>
    </section>
  )
}

export default EventSection
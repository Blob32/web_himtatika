import React from "react"
import { exploreItems } from "../data/explore"
import ExploreCard from "./ExploreCard"

const ExploreSection = () => {
  return (
    <section id="eksplore" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-brand-dark font-bold mb-4">
            Eksplorasi Konten
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-body text-gray-700">
            Temukan berbagai konten menarik dan edukatif dari kami, mulai dari
            podcast, materi, hingga dokumentasi kegiatan.
          </p>
        </div>
        {/* Horizontal Scroll */}
        <div className="overflow-hidden">
          <div
            className="
              flex overflow-x-scroll gap-6 px-4 py-4
              scroll-smooth snap-x snap-mandatory
              [&::-webkit-scrollbar]:hidden
            "
          >
            {/* Urutan sesuai ID */}
            {/* {exploreItems.map((item) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[70%] sm:w-[50%] lg:w-[33%]"
              >
                <ExploreCard item={item} />
              </div>
            ))} */}

            {/* Urutan sesuai ID dengan Reverse */}
            {[...exploreItems].reverse().map(item => (
              <div key={item.id} className="snap-center shrink-0 w-[70%] sm:w-[50%] lg:w-[33%]">
                <ExploreCard item={item} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ExploreSection

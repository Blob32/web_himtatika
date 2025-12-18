import React, { useEffect, useState, useRef } from "react";
import GambarBG from "../assets/mainHero.webp";

const Hero = () => {
  // Gunakan useRef untuk memanipulasi gambar langsung tanpa re-render komponen
  const imgRef = useRef(null);
  
  // State khusus Typewriter (tetap pakai state karena ini ubah konten teks)
  const [text, setText] = useState("");
  const fullText = "Lebih dari Sekedar Angka";

  useEffect(() => {
    // Variable untuk menyimpan ID request animation frame
    let requestID;

    const handleScroll = () => {
      // requestAnimationFrame menjamin animasi sinkron dengan refresh rate layar (smooth)
      requestID = requestAnimationFrame(() => {
        if (imgRef.current) {
          const scrollY = window.scrollY;
          // Gunakan translate3d untuk mengaktifkan GPU Acceleration (Hardware)
          // Ini mencegah gambar "goyang" atau tearing
          imgRef.current.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Logic Typewriter (sama seperti sebelumnya) ---
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestID); // Bersihkan sisa animasi saat unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="home"
      // Tambahkan 'overflow-hidden' agar jika gambar bergeser terlalu jauh, tidak membuat scrollbar aneh
      className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden"
    >
      {/* BACKGROUND WRAPPER */}
<div className="absolute inset-0 z-0 select-none">
  <img
    ref={imgRef}
    src={GambarBG}
    alt="Main Hero Image"
    // UBAH DARI: -top-[10vh] MENJADI: -top-[15vh] atau top-0 jika ragu
    // UBAH DARI: h-[120vh] MENJADI: h-[130vh]
    // Ini memberikan "ruang lebih" di atas agar saat parallax menarik gambar, tidak ada celah putih.
    className="absolute w-full h-[120vh] object-cover -top-[15vh] left-0 will-change-transform"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 w-full h-screen bg-gradient-to-t from-[#240000] via-[#240000]/60 to-transparent z-10"></div>
</div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-left md:text-center pt-20">
        <h1 className="text-6xl font-extrabold leading-tight text-white drop-shadow-lg min-h-[160px] md:min-h-[auto]">
          <span className="inline-block border-r-4 border-brand-red pr-2 animate-pulse">
            {text}
          </span>
          <br />
          <span className="opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
            Kami adalah Keluarga
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
          HIMATIKA UIN Sunan Gunung Djati Bandung adalah wadah bagi mahasiswa
          Pendidikan Matematika untuk belajar, berkarya, dan mengabdi sejak
          1999.
        </p>

        <a
          href="#event"
          className="mt-10 inline-block bg-brand-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition transform hover:-translate-y-1 hover:shadow-lg opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]"
        >
          Lihat Kegiatan Kami
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
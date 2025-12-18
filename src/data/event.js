import logoAbsolute from "../assets/brand/logoAbsolute.webp"
import logoHimabdi from "../assets/brand/logoHimabdi.webp"
import logoTeo from "../assets/brand/logoTeo.webp"
import logoGamma from "../assets/brand/logoGamma.webp"
import logo from "../assets/brand/hima.webp"
const absoluteFiles = import.meta.glob('../assets/img/event/absolute/*.webp', { eager: true });
const himaabdiFiles = import.meta.glob('../assets/img/event/himaabdi/*.webp', { eager: true });
// const teoFiles = import.meta.glob('../assets/img/event/teorema/*.webp', { eager: true });
// const gammaFiles = import.meta.glob('../assets/img/event/gamma/*.webp', { eager: true });

// 2. Buat fungsi helper sederhana untuk mengubah hasil import menjadi Array URL
const getImagesFromArray = (modules) => {
  return Object.values(modules).map((mod) => mod.default);
};

export const events = [
  {
    id: 1,
    title: "ABSOLUTE",
    theme: "Abillity Skill and Learning Math Competition",
    description:
      "ABSOLUTE (Accurate, Brave, Smart, Outstanding, and Talented) merupakan lomba matematika tingkat nasional yang diselenggarakan oleh HIMATIKA untuk siswa SMA/sederajat. Acara ini bertujuan untuk meningkatkan minat dan kemampuan siswa dalam bidang matematika.",
    logoUrl: [[logoAbsolute]],
    images: getImagesFromArray(absoluteFiles), 
    aftermovieUrl: ""
  },
  {
    id: 2,
    title: "HIMATIKA Mengabdi",
    theme: "Pengabdian kepada Masyarakat bersama HIMATIKA",
    description:
      "Sebagai wujud dari Tridarma Perguruan Tinggi, HIMATIKA Mengabdi adalah program pengabdian kepada masyarakat di berbagai daerah. Kegiatan ini meliputi bakti sosial, pengajaran matematika, dan penyuluhan pendidikan.",
    logoUrl: [[logoHimabdi]],
    images: getImagesFromArray(himaabdiFiles), 
    aftermovieUrl: "https://youtu.be/ETuY2fCgCz8?si=YKxoY7HxpaKq_srJ"
  },
  {
    id: 3,
    title: "TEOREMA",
    theme: "Ta'aruf Edukasi Orientasi Jurusan Pendidikan Matematika",
    description:
      "TEOREMA adalah kegiatan pengenalan program studi dan lingkungan kampus bagi mahasiswa baru Pendidikan Matematika, dikemas secara edukatif dan menyenangkan.",
      logoUrl: [[logoTeo]],
    images: getImagesFromArray(absoluteFiles), 
    aftermovieUrl: "https://youtu.be/PQ5KT2fKVDo?si=7GwvVCVLwSu56kTW"
  },
  {
    id: 4,
    title: "STUKOM",
    theme: "Studi Komparatif",
    description:
    "STUKOM adalah program studi banding ke Himpunan Mahasiswa Matematika di universitas lain untuk bertukar pikiran, memperluas wawasan, dan menjalin jejaring.",
    logoUrl: "https://picsum.photos/seed/stukom/400/400",
    images: [
      "https://picsum.photos/seed/stukom1/400/300",
      "https://picsum.photos/seed/stukom2/400/300"
    ]
  },
  {
    id: 5,
    title: "GAMMA FEST",
    theme: "Generation of Mathematics Education Festival",
    description:
      "GAMMA FEST adalah serangkaian acara perlombaan internal yang bertujuan untuk mengasah kemampuan akademik dan non-akademik mahasiswa Pendidikan Matematika UIN Sunan Gunung Djati Bandung.",
    logoUrl: [[logoGamma]],
    images: getImagesFromArray(absoluteFiles), 
    aftermovieUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  // {
  //   id: 6,
  //   title: "MUSKOM",
  //   theme: "Musyawarah Komisariat",
  //   description:
  //     "STUKOM (Studi Komparatif) adalah program studi banding ke Himpunan Mahasiswa Matematika di universitas lain untuk bertukar pikiran, memperluas wawasan, dan menjalin jejaring.",
  //   logoUrl: [[logoStukom]],
  //   images: getImagesFromArray(absoluteFiles), 
  // }
]

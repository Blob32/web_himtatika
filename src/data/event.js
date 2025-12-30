import logoAbsolute from "../assets/brand/logoAbsolute.webp"
import logoHimabdi from "../assets/brand/logoHimabdi.webp"
import logoTeo from "../assets/brand/logoTeo.webp"
import logoGamma from "../assets/brand/logoGamma.webp"
import logo from "../assets/brand/hima.webp"
const absoluteFiles = import.meta.glob('../assets/img/event/absolute/*.webp', { eager: true });
const himaabdiFiles = import.meta.glob('../assets/img/event/himaabdi/*.webp', { eager: true });
const teoFiles = import.meta.glob('../assets/img/event/teorema/*.webp', { eager: true });
const gammaFiles = import.meta.glob('../assets/img/event/gamma/*.webp', { eager: true });
const stukomFiles = import.meta.glob('../assets/img/event/stukom/*.webp', { eager: true });

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
      "ABSOLUTE Abillity Skill and Learning Math Competition, merupakan Event yang diselenggarakan oleh HIMATIKA UIN SGD Bandung dan merupakan Kegiatan besar pertama yang dilaksanakan. Acara ini bertujuan untuk meningkatkan minat dan kemampuan Mahasiswa dalam bidang matematika, mapun bakat.",
    logoUrl: [[logoAbsolute]],
    images: getImagesFromArray(absoluteFiles), 
    aftermovieUrl: ""
  },
  {
    id: 2,
    title: "HIMATIKA Mengabdi",
    theme: "Pengabdian kepada Masyarakat bersama HIMATIKA",
    description:
      "Sebagai wujud pemenuhan Tri Dharma Perguruan Tinggi, khususnya pada aspek pengabdian kepada masyarakat. Melalui kegiatan ini, mahasiswa didorong untuk menumbuhkan dan mengembangkan kesadaran sosial sehingga lebih peka terhadap kondisi masyarakat. Selain itu, kegiatan ini juga menjadi wadah bagi Mahasiswa Pendidikan Matematika untuk mengasah kreativitas, serta berkontribusi nyata dalam memberikan manfaat bagi lingkungan sekitar. ",
    logoUrl: [[logoHimabdi]],
    images: getImagesFromArray(himaabdiFiles), 
    aftermovieUrl: "https://youtu.be/ETuY2fCgCz8?si=YKxoY7HxpaKq_srJ"
  },
  {
    id: 3,
    title: "TEOREMA",
    theme: "Ta'aruf Edukasi Orientasi Jurusan Pendidikan Matematika",
    description:
      "TEOREMA merupakan bentuk pembinaan mahasiswa baru untuk menumbuhkan kesadaran spiritual, intelektual, dan sosial melalui pengalaman belajar yang menyeluruh. Program kerja ini diorientasikan pada penanaman nilai beradab, berwawasan, kreatif, serta bersinergi agar mahasiswa mampu berkembang secara utuh. Dengan begitu, TEOREMA menjadi sarana menanamkan nilai keislaman, pendidikan, dan keorganisasian sebagai fondasi awal berproses di HIMATIKA.",
      logoUrl: [[logoTeo]],
    images: getImagesFromArray(teoFiles), 
    aftermovieUrl: "https://youtu.be/PQ5KT2fKVDo?si=7GwvVCVLwSu56kTW"
  },
  {
    id: 4,
    title: "STUKOM",
    theme: "Studi Komparatif",
    description:
    "Studi Komparatif merupakan kegiatan kunjungan dan forum diskusi yang diselenggarakan HIMATIKA UIN Sunan Gunung Djati sebagai sarana pertukaran gagasan, pengalaman, serta wawasan keorganisasian dengan himpunan mahasiswa lain. Kegiatan ini difokuskan pada pemaparan program kerja, sistem kepengurusan, dan manajemen organisasi guna membandingkan serta mengambil praktik-praktik terbaik yang dapat diadaptasi, sehingga tercipta hubungan kelembagaan yang harmonis dan peluang kerja sama yang berkelanjutan.",
    logoUrl: null,
    images: getImagesFromArray(stukomFiles), 
  },
  {
    id: 5,
    title: "GAMMA FEST",
    theme: "Generation of Mathematics Education Festival",
    description:
      "GAMMA FEST adalah event terakhir yang diselenggarakan oleh HIMATIKA sekaligus sebagai perayaan milad HIMATIKA UIN SGD Bandung.",
    logoUrl: [[logoGamma]],
    images: getImagesFromArray(gammaFiles), 
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

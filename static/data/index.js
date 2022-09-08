export const heroImages = [
  {
    id: 1,
    image: '/images/banners/1.webp',
    title: 'Portal Jabar'
  },
  {
    id: 2,
    image: '/images/banners/2.webp',
    title: 'Portal Jabar'
  },
  {
    id: 3,
    image: '/images/banners/3.webp',
    title: 'Portal Jabar'
  }
]

export const navigationMenu = [
  {
    id: 1,
    title: 'Berita Jawa Barat',
    link: '/berita',
    items: [
      {
        id: 1,
        title: 'Ekonomi',
        description: 'Menyajikan artikel perkembangan ekonomi Jawa Barat terpercaya',
        icon: '/icons/navigation/ekonomi.svg',
        link: '/berita?kategori=ekonomi'
      },
      {
        id: 2,
        title: 'Kesehatan',
        description: 'Kabar dan situasi terkini kesehatan di Jawa Barat',
        icon: '/icons/navigation/kesehatan.svg',
        link: '/berita?kategori=kesehatan'
      },
      {
        id: 3,
        title: 'Pendidikan',
        description: 'Informasi terbaru dari dunia pendidikan dan kebudayaan',
        icon: '/icons/navigation/pendidikan.svg',
        link: '/berita?kategori=pendidikan'
      },
      {
        id: 4,
        title: 'Pemerintahan',
        description: 'Pembaruan Jawa Barat resmi dari pemerintah',
        icon: '/icons/navigation/pemerintahan.svg',
        link: '/berita?kategori=pemerintahan'
      },
      {
        id: 5,
        title: 'Infrastruktur',
        description: 'Menyajikan artikel perkembangan infrastruktur di Jawa Barat',
        icon: '/icons/navigation/infrastruktur.svg',
        link: '/berita?kategori=infrastruktur'
      },
      {
        id: 6,
        title: 'Sosial',
        description: 'Kondisi terbarukan tentang kesejahteraan sosial',
        icon: '/icons/navigation/sosial.svg',
        link: '/berita?kategori=sosial'
      },
      {
        id: 7,
        title: 'Teknologi',
        description: 'Informasi terkait perkembangan teknologi di Jawa Barat',
        icon: '/icons/navigation/teknologi.svg',
        link: '/berita?kategori=teknologi'
      }
    ],
    gtagEvent: 'click_menu_berita',
    gtagEventSitemap: 'click_sitemap_berita'
  },
  {
    id: 2,
    title: 'Layanan Publik',
    link: '',
    items: [
      {
        id: 1,
        title: 'Kependudukan dan Tempat Tinggal',
        description: 'Urus Perizinan kependudukan dan tempat tinggal dengan mudah',
        icon: '/icons/navigation/kependudukan.svg',
        link: 'https://disdukcapil.jabarprov.go.id/portal'
      },
      {
        id: 2,
        title: 'Pendidikan dan Pembelajaran',
        description: 'Dapat informasi program pemerintah bagi siswa dan pelajar',
        icon: '/icons/navigation/pendidikan.svg',
        link: 'https://disdik.jabarprov.go.id'
      },
      {
        id: 3,
        title: 'Kesehatan',
        description: 'Akses layanan untuk Legalisir STR dan STRTTK bagi Tenaga Kesehatan di Provinsi Jawa Barat',
        icon: '/icons/navigation/kesehatan.svg',
        link: 'https://bit.ly/legalisirSTR'
      },
      {
        id: 4,
        title: 'Pajak',
        description: 'Cari semua informasi terkait perpajakan di Jawa Barat',
        icon: '/icons/navigation/pajak.svg',
        link: 'https://bapenda.jabarprov.go.id'
      },
      {
        id: 5,
        title: 'Sosial dan Keluarga',
        description: 'Akses ke berbagai layanan bagi anak-anak, perempuan dan masyarakat',
        icon: '/icons/navigation/sosial.svg',
        link: 'https://dinsos.jabarprov.go.id'
      },
      {
        id: 6,
        title: 'Ketenagakerjaan',
        description: 'Cari lowongan kerja gratis dan terpercaya',
        icon: '/icons/navigation/ketenagakerjaan.svg',
        link: 'https://jabarjawara.id'
      },
      {
        id: 7,
        title: 'PIKOBAR',
        description: 'Media komunikasi dan informasi penanganan Covid-19 satu pintu di Jawa Barat',
        icon: '/icons/navigation/covid19.svg',
        link: 'https://pikobar.jabarprov.go.id'
      },
      {
        id: 8,
        title: 'Perizinan Online',
        description: 'Layanan informasi dan kepengurusan perizinan usaha secara online',
        icon: '/icons/navigation/perijinan-online.svg',
        link: 'https://dpmptsp.jabarprov.go.id/jelita/main/pendaftaranbaru/perizinanonline'
      }
    ],
    gtagEvent: 'click_menu_layanan',
    gtagEventSitemap: 'click_sitemap_layanan'
  },
  {
    id: 3,
    title: 'Dashboard Publik',
    link: '',
    items: [
      {
        id: 1,
        title: 'Kesehatan',
        description: 'Dapatkan informasi kesehatan terutama terkait Covid-19 di Jawa Barat',
        icon: '/icons/navigation/kesehatan.svg',
        link: 'https://dashboard.jabarprov.go.id/id/topic/kesehatan'
      },
      {
        id: 2,
        title: 'Kependudukan',
        description: 'Dapatkan ragam informasi soal kependudukan di Jawa Barat',
        icon: '/icons/navigation/kependudukan.svg',
        link: 'https://dashboard.jabarprov.go.id/id/topic/kependudukan'
      },
      {
        id: 3,
        title: 'Industri',
        description: 'Dapatkan data ekonomi di Jawa Barat mulai dari UMKM hingga keuangan daerah',
        icon: '/icons/navigation/industri.svg',
        link: 'https://dashboard.jabarprov.go.id/id/topic/industri'
      },
      {
        id: 4,
        title: 'Pendidikan',
        description: 'Dapatkan ragam informasi terkait pendidikan di Jawa Barat',
        icon: '/icons/navigation/pendidikan.svg',
        link: 'https://dashboard.jabarprov.go.id/id/topic/pendidikan'
      },
      {
        id: 5,
        title: 'Informasi Covid-19',
        description: 'Dapatkan informasi terkait perkembangan Covid-19 di Jawa Barat',
        icon: '/icons/navigation/covid19.svg',
        link: 'https://dashboard.jabarprov.go.id/id/dashboard-pikobar/trace/statistik'
      },
      {
        id: 6,
        title: 'BIAN',
        description: 'Dapatkan informasi terkait Bulan Imunisasi Anak Nasional',
        icon: '/icons/navigation/bian.svg',
        link: 'https://dashboard.jabarprov.go.id/id/topic/bian'
      }
    ],
    gtagEvent: 'click_menu_dashboard',
    gtagEventSitemap: 'click_sitemap_dashboard'
  },
  {
    id: 4,
    title: 'Profil Jawa Barat',
    link: '',
    items: [
      {
        id: 1,
        title: 'Selayang Pandang',
        description: 'Kilas perjalanan Jawa Barat menuju Jabar Juara Lahir Batin',
        icon: '/icons/navigation/selayang-pandang.svg',
        link: '/selayang-pandang'
      },
      {
        id: 2,
        title: 'Tentang Jawa Barat',
        description: 'Cari tahu sejarah, pimpinan, dan pemerintahan Jawa Barat selengkapnya',
        icon: '/icons/navigation/informasi.svg',
        link: '/tentang-jawa-barat'
      },
      {
        id: 3,
        title: 'Arsip dan Dokumen',
        description: 'Akses dan unduh dokumen resmi yang dirilis pemerintah Jawa Barat',
        icon: '/icons/navigation/arsip-dan-dokumen.svg',
        link: '/arsip-dan-dokumen'
      },
      {
        id: 4,
        title: 'Jaringan Dokumentasi dan Informasi Hukum',
        description: 'Layanan transparansi informasi produk hukum terpadu di lingkungan Pemdaprov Jawa Barat',
        icon: '/icons/navigation/arsip-dan-dokumen.svg',
        link: 'https://jdih.jabarprov.go.id'
      },
      {
        id: 5,
        title: 'Layanan Pengadaan Secara Elektronik',
        description: 'Sistem pengadaan berbasis E-Procurement (SPSE) Pemerintah Provinsi Jawa Barat',
        icon: '/icons/navigation/arsip-dan-dokumen.svg',
        link: 'https://lpse.jabarprov.go.id'
      }
    ],
    gtagEvent: 'click_menu_profil',
    gtagEventSitemap: 'click_sitemap_profil'
  },
  {
    id: 5,
    title: 'PPID',
    link: '',
    items: [
      {
        id: 1,
        title: 'Profil PPID',
        description: 'Cari tahu tentang Profil PPID, Struktur Organisasi, Visi & Misi, dan Uraian Tugas dari PPID Jawa Barat',
        icon: '/icons/navigation/pemerintahan.svg',
        link: 'https://ppid.jabarprov.go.id/page/414-TENTANG-PPID'
      },
      {
        id: 2,
        title: 'Alur Layanan Informasi Publik',
        description: 'Informasi seputar pengajuan permohonan informasi publik PPID Provinsi Jawa Barat',
        icon: '/icons/navigation/teknologi.svg',
        link: 'https://ppid.jabarprov.go.id/page/561-TATA-CARA-MEMPEROLEH-INFROMASI'
      },
      {
        id: 3,
        title: 'Permohonan Informasi Publik',
        description: 'Ajukan permohonan informasi publik kepada PPID Provinsi Jawa Barat',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/permohonan'
      },
      {
        id: 4,
        title: 'Pengajuan Keberatan',
        description: 'Informasi tata cara pengajuan keberatan terkait permohonan informasi kepada PPID Provinsi Jawa Barat',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/563-FORM-PENGAJUAN-KEBERATAN'
      },
      {
        id: 5,
        title: 'Daftar Informasi Publik',
        description: 'Daftar informasi publik Pemerintah Provinsi Jawa Barat yang tersedia dan dapat diakses masyarakat',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/3448-Daftar-Informasi-Publik'
      },
      {
        id: 6,
        title: 'Informasi Publik Berkala',
        description: 'Informasi yang wajib diperbaharui kemudian disediakan dan diumumkan kepada publik secara rutin atau berkala sekurang-kurangnya setiap 6 bulan sekali',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/568-Informasi-Berkala'
      },
      {
        id: 7,
        title: 'Informasi Publik Serta Merta',
        description: 'Informasi yang berkaitan dengan hajat hidup orang banyak dan ketertiban umum dan wajib diumumkan secara serta merta tanpa penundaan',
        icon: '/icons/navigation/sosial.svg',
        link: 'https://ppid.jabarprov.go.id/page/756-Informasi-Serta-Merta'
      },
      {
        id: 8,
        title: 'Tata Cara Penyelesaian Sengketa',
        description: 'Informasi tata cara penyelesaian sengketa informasi ke Komisi Informasi',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/645-TATA-CARA-PENYELSAIAN-SENGKETA'
      },
      {
        id: 9,
        title: 'Tata Cara Pengaduan',
        description: 'Informasi tata cara pengaduan penyalahgunaan wewenang atau pelanggaran yang dilakukan oleh Pejabat Badan Publik',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/3900-Tata-Cara-Pengaduan-Penyalahgunaan-Wewenang-atau-Pelaporan-Yang-Dilakukan-oleh-Pejabat-Badan-Publik'
      }
    ],
    gtagEvent: 'click_menu_ppid',
    gtagEventSitemap: 'click_sitemap_ppid'
  }
]

export const mostPopularServicesMenu = [
  {
    id: 1,
    name: 'Wargi',
    icon: '/icons/layanan-terpopuler/wargi.svg',
    items: [
      {
        id: 1,
        title: 'Layanan Kependudukan',
        description: 'Informasi mengenai syarat dan tata cara mendapatkan layanan kependudukan di seluruh Kabupaten/Kota di Jawa Barat.',
        link: 'https://disdukcapil.jabarprov.go.id/portal',
        icon: '/icons/layanan-terpopuler/layanan-kependudukan.svg'
      },
      {
        id: 2,
        title: 'Pajak Kendaraan Bermotor (PKB)',
        description: 'Temukan informasi dan layanan mengenai Pajak Kendaran Bermotor (PKB) di sini.',
        link: 'https://bapenda.jabarprov.go.id/infopkb',
        icon: '/icons/layanan-terpopuler/pajak-kendaraan-bermotor.svg'
      },
      {
        id: 3,
        title: 'Jabar Jawara',
        description: 'Layanan informasi seputar lowongan pekerjaan, pengembangan diri, beasiswa, hingga cara untuk mengembangkan bisnis untuk pelaku UMKM di Jawa Barat.',
        link: 'https://www.jabarjawara.id',
        icon: '/icons/layanan-terpopuler/jabar-jawara.svg'
      }
    ]
  },
  {
    id: 2,
    name: 'Usaha',
    icon: '/icons/layanan-terpopuler/usaha.svg',
    items: [
      {
        id: 4,
        title: 'SPP-IRT',
        description: 'Layanan sertifikasi atau perizinan khusus industri pangan kelas rumahan.',
        link: 'https://sppirt.pom.go.id/',
        icon: '/icons/layanan-terpopuler/perizinan-industri-rumah-tangga.svg'
      },
      {
        id: 5,
        title: 'Perizinan Usaha',
        description: 'Layanan informasi dan kepengurusan perizinan usaha.',
        link: 'https://dpmptsp.jabarprov.go.id/web/pages/detail/220-layanan-online/87',
        icon: '/icons/layanan-terpopuler/perizinan-usaha.svg'
      },
      {
        id: 6,
        title: 'Pengajuan Sertifikasi Halal',
        description: 'Temukan informasi dan layanan mengenai pengajuan sertifikasi halal di sini.',
        link: 'https://www.halalmui.org/mui14/main/page/prosedur-sertifikasi-halal-mui',
        icon: '/icons/layanan-terpopuler/pengajuan-sertifikasi-halal.svg'
      }
    ]
  },
  {
    id: 3,
    name: 'Wisatawan',
    icon: '/icons/layanan-terpopuler/wisatawan.svg',
    items: [
      {
        id: 7,
        title: 'Info Wisata Jabar',
        description: 'Temukan informasi mengenai destinasi wisata yang wajib dikunjungi di Jawa Barat.',
        link: 'https://disparbud.jabarprov.go.id',
        icon: '/icons/layanan-terpopuler/info-wisata-jabar.svg'
      },
      {
        id: 8,
        title: 'Informasi Rute Angkutan Umum',
        description: 'Temukan informasi rute angkutan umum yang terdapat di Jawa Barat.',
        link: 'http://dishub.jabarprov.go.id/angkutan.html',
        icon: '/icons/layanan-terpopuler/informasi-rute-angkutan-umum.svg'
      },
      {
        id: 9,
        title: 'Daerah Wisata Jawa Barat',
        description: 'Temukan informasi mengenai tempat wisata di Jawa Barat yang wajib dikunjungi.',
        link: 'https://disparbud.jabarprov.go.id',
        icon: '/icons/layanan-terpopuler/daerah-wisata-di-jawa-barat.svg'
      }
    ]
  }
]

export const featuredProgramMenu = [
  {
    id: 1,
    title: 'Sapawarga',
    description: 'Sapawarga bantu warga salurkan aspirasi, dapatkan informasi penting, dan akses layanan publik secara digital.',
    icon: '/icons/program-unggulan/sapawarga.svg',
    link: 'https://digitalservice.jabarprov.go.id/sapawarga'
  },
  {
    id: 2,
    title: 'Desa Digital',
    description: 'Desa Digital merupakan program pemberdayaan masyarakat melalui pemanfaatan teknologi digital dan internet dalam pengembangan potensi desa, pemasaran, dan percepatan akses serta pelayanan informasi. Melalui peningkatan literasi digital, masyarakat dapat memanfaatkan akses internet untuk meningkatkan kualitas hidup masyarakat dalam berbagai aspek, di antaranya pengelolaan lingkungan, ekonomi, pendidikan, peluang inovasi, dan stabilitas sosial.',
    icon: '/icons/program-unggulan/desa-digital.svg',
    link: 'https://desadigital.jabarprov.go.id/'
  },
  {
    id: 3,
    title: 'Ekosistem Data Jabar',
    description: 'Ekosistem Data Jabar adalah portal terintegrasi untuk pengelolaan, keterbukaan, dan kemudahan akses data bagi warga dan pemerintah Jawa Barat.',
    icon: '/icons/program-unggulan/ekosistem-data-jabar.svg',
    link: 'http://data.jabarprov.go.id'
  }
]

export const quickLinkMenu = [
  {
    id: 1,
    title: 'Kependudukan',
    description: 'Ketahui lebih lanjut tentang semua hal hebat yang ditawarkan Jawa Barat.',
    icon: '/icons/akses-cepat/kependudukan.svg',
    link: 'https://disdukcapil.jabarprov.go.id/portal'
  },
  {
    id: 2,
    title: 'PPID Jabar',
    description: 'Cari tahu mengenai Pejabat Pengelola Informasi dan Dokumentasi Jawa Barat.',
    icon: '/icons/akses-cepat/ppid-jabar.svg',
    link: 'http://ppid.jabarprov.go.id'
  },
  {
    id: 3,
    title: 'Sasaran Kinerja Pegawai',
    description: 'Aplikasi penilaian secara daring kinerja dan prestasi Pegawai Negeri Sipil.',
    icon: '/icons/akses-cepat/sasaran-kinerja-pegawai.svg',
    link: 'https://kinerja.jabarprov.go.id/login'
  },
  {
    id: 4,
    title: 'Info Harga Komoditas Pangan',
    description: 'Dapatkan info harga rata-rata komoditas harian di daerah sekitar Jawa Barat.',
    icon: '/icons/akses-cepat/info-harga-pangan.svg',
    link: 'http://silinda.jabarprov.go.id/komoditas'
  },
  {
    id: 5,
    title: 'E-Samsat',
    description: 'Cara mudah untuk pajak kendaraan secara daring dimana saja dan kapan saja.',
    icon: '/icons/akses-cepat/e-samsat.svg',
    link: 'https://bapenda.jabarprov.go.id/e-samsat-jabar'
  },
  {
    id: 6,
    title: 'Satu Data',
    description: 'Tata kelola data antar OPD di lingkungan Pemerintah Daerah Provinsi Jawa Barat.',
    icon: '/icons/akses-cepat/satu-data.svg',
    link: 'https://satudata.jabarprov.go.id/auth/login?returnUrl=%2Fhome'
  },
  {
    id: 7,
    title: 'Saber Pungli',
    description: 'Laporkan segala aktivitas Pungutan Liar (Pungli) di sekitarmu!',
    icon: '/icons/akses-cepat/saber-pungli.svg',
    link: 'http://saberpungli.jabarprov.go.id'
  },
  {
    id: 8,
    title: 'Laporan Pengaduan Masyarakat',
    description: 'Sarana penyampaian aspirasi dan pengaduan masyarakat Jawa Barat',
    icon: '/icons/akses-cepat/lapor.svg',
    link: 'https://inspektorat.jabarprov.go.id/sarana-pengaduan-masyarakat'
  }
]

export const publicServiceMenu = [
  {
    id: 1,
    title: 'Kependudukan',
    link: 'http://disdukcapil.jabarprov.go.id/portal'
  },
  {
    id: 2,
    title: 'Perpajakan',
    link: 'https://bapenda.jabarprov.go.id'
  },
  {
    id: 3,
    title: 'Perizinan',
    link: 'https://dpmptsp.jabarprov.go.id/jelita/main/pendaftaranbaru/perizinanonline'
  },
  {
    id: 4,
    title: 'Pariwisata dan Ekonomi Kreatif',
    link: 'http://disparbud.jabarprov.go.id/applications/frontend/index.php'
  },
  {
    id: 5,
    title: 'Program Unggulan',
    link: '/tentang-jawa-barat/program-unggulan'
  },
  {
    id: 6,
    title: 'Pengaduan Publik',
    link: 'https://www.lapor.go.id'
  }
]

export const socialMediaSites = [
  {
    id: 1,
    name: 'Facebook',
    icon: 'facebook',
    link: 'https://www.facebook.com/jabarprov'
  },
  {
    id: 2,
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/jabarprovgoid'
  },
  {
    id: 3,
    name: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/jabarprovgoid'
  },
  {
    id: 4,
    name: 'YouTube',
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UCiDN1p49p87vtkhMC5BhdXA'
  }
]

export const newsCategories = ['ekonomi', 'kesehatan', 'pendidikan', 'pemerintahan', 'infrastruktur', 'sosial', 'teknologi']

export const searchDomains = {
  news: 'Berita Jawa Barat',
  information: 'Informasi',
  public_service: 'Layanan Publik',
  announcement: 'Pengumuman',
  about: 'Tentang Jawa Barat',
  featured_program: 'Program Unggulan'
}

export const featuredProgramCategory = [
  'pendidikan',
  'ekonomi',
  'destinasi dan infrastruktur pariwisata',
  'membangun desa',
  'meningkatkan akses pendidikan',
  'meningkatkan inovasi pelayanan publik',
  'infrastruktur konektivitas wilayah',
  'mewujudkan pesantren juara',
  'memberikan subsidi gratis',
  'pemberdayaan masyarakat',
  'revolusi pencarian data',
  'pelestarian lingkungan hidup'
]

export const jabarAchievementsCategory = [
  'Hukum dan HAM',
  'Kepegawaian',
  'Personal Gubernur',
  'Kehumasan',
  'Pemberdayaan Masyarakat',
  'Pembangunan',
  'Tranparasi Keuangan',
  'Ketenagakerjaan',
  'Sumber Daya Energi dan Mineral',
  'Olahraga',
  'Inovasi dan Digitalisasi',
  'Investasi',
  'Sosial Budaya'
]

export const popularSearchSuggestions = [
  'Jawa Barat',
  'Ridwan Kamil',
  'Covid-19',
  'G20',
  'Minyak Goreng'
]

export const archiveAndDocumentTopics = [
  {
    label: 'Dokumen Perencanaan',
    value: 'dokumen perencanaan'
  },
  {
    label: 'Laporan Pertanggungjawaban',
    value: 'laporan pertanggungjawaban'
  },
  {
    label: 'Produk Hukum',
    value: 'produk hukum'
  },
  {
    label: 'Transparansi Kepegawaian',
    value: 'transparansi kepegawaian'
  },
  {
    label: 'Transparansi Pengelolaan Keuangan Daerah',
    value: 'transparansi pengelolaan keuangan daerah'
  }
]

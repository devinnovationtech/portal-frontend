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
        description: 'Temukan informasi, panduan, dan layanan terkait urusan administratif tempat tinggal Anda.',
        icon: '/icons/navigation/kependudukan.svg',
        link: '/layanan?kategori=Kependudukan dan Tempat Tinggal'
      },
      {
        id: 2,
        title: 'Pendidikan dan Pembelajaran',
        description: 'Jelajahi informasi dan layanan terkait untuk membantu kebutuhan pendidikan dan pembelajaran Anda.',
        icon: '/icons/navigation/pendidikan.svg',
        link: '/layanan?kategori=Pendidikan dan Pembelajaran'
      },
      {
        id: 3,
        title: 'Kesehatan',
        description: 'Temukan informasi, dukungan, dan fasilitas untuk hidup sehat dan bahagia.',
        icon: '/icons/navigation/kesehatan.svg',
        link: '/layanan?kategori=Kesehatan'
      },
      {
        id: 4,
        title: 'Sosial dan Keluarga',
        description: 'Temukan bantuan, pemberdayaan, dan kesempatan untuk meningkatkan kesejahteraan sosial bersama.',
        icon: '/icons/navigation/sosial.svg',
        link: '/layanan?kategori=Sosial dan Keluarga'
      },
      {
        id: 5,
        title: 'Lingkungan',
        description: 'Temukan informasi dan layanan pengelolaan lingkungan yang berkelanjutan untuk hidup yang lebih baik.',
        icon: '/icons/navigation/lingkungan.svg',
        link: '/layanan?kategori=Lingkungan'
      },
      {
        id: 6,
        title: 'Ekonomi, Bisnis dan Profesi',
        description: 'Temukan wawasan, dukungan, dan layanan seputar ekonomi, bisnis, dan profesi Anda.',
        icon: '/icons/navigation/bisnis.svg',
        link: '/layanan?kategori=Ekonomi, Bisnis dan Profesi'
      },
      {
        id: 7,
        title: 'Teknologi dan Komunikasi',
        description: 'Dapatkan informasi dan layanan terkini yang mendekatkan Anda dengan transformasi digital.',
        icon: '/icons/navigation/teknologi-dan-komunikasi.svg',
        link: '/layanan?kategori=Teknologi dan Komunikasi'
      },
      {
        id: 8,
        title: 'Sarana dan Prasarana',
        description: 'Temukan fasilitas umum, dukungan, dan regulasi yang mendorong kemajuan bersama.',
        icon: '/icons/navigation/sarana-prasarana.svg',
        link: '/layanan?kategori=Sarana dan Prasarana'
      },
      {
        id: 9,
        title: 'Khusus',
        description: 'Jelajahi beragam informasi dan layanan yang disesuaikan dengan kebutuhan Anda.',
        icon: '/icons/navigation/khusus.svg',
        link: '/layanan?kategori=Khusus'
      },
      {
        id: 10,
        title: 'PIKOBAR',
        description: 'Media komunikasi dan informasi penanganan Covid-19 satu pintu di Jawa Barat',
        icon: '/icons/navigation/covid19.svg',
        link: 'https://pikobar.jabarprov.go.id'
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
      },
      {
        id: 6,
        title: 'Sapawarga',
        description: 'Aplikasi layanan publik digital di Jawa Barat yang terintegrasi',
        icon: '/icons/navigation/sapawarga.svg',
        link: '/sapawarga'
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
        title: 'Informasi yang Wajib Tersedia Setiap Saat',
        description: 'Informasi yang harus disediakan oleh Badan Publik dan siap tersedia apabila terdapat Permohon Informasi Publik.',
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
      },
      {
        id: 10,
        title: 'Daftar Informasi Dikecualikan ',
        description: 'Daftar informasi yang tidak dapat diakses oleh Pemohon Informasi Publik sebagaimana dimaksud dalam UU No 14 Tahun 2008 tentang Keterbukaan Informasi Publik',
        icon: '/icons/navigation/informasi.svg',
        link: 'https://ppid.jabarprov.go.id/page/5095-Informasi-Dikecualikan'
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
      // Hide link temporarily
      // {
      //   id: 8,
      //   title: 'Informasi Rute Angkutan Umum',
      //   description: 'Temukan informasi rute angkutan umum yang terdapat di Jawa Barat.',
      //   link: 'http://dishub.jabarprov.go.id/angkutan.html',
      //   icon: '/icons/layanan-terpopuler/informasi-rute-angkutan-umum.svg'
      // },
      {
        id: 9,
        title: 'Daerah Wisata Jawa Barat',
        description: 'Temukan informasi mengenai tempat wisata di Jawa Barat yang wajib dikunjungi.',
        link: 'https://smilingwestjava.com/',
        icon: '/icons/layanan-terpopuler/daerah-wisata-di-jawa-barat.svg'
      }
    ]
  }
]

export const featuredProgramMenu = [
  {
    id: 1,
    title: 'Sapawarga',
    description: 'Sapawarga adalah aplikasi layanan publik digital terintegrasi di Jawa Barat yang menyediakan berbagai kebutuhan masyarakat dalam satu aplikasi.',
    icon: '/icons/program-unggulan/sapawarga.svg',
    link: 'https://sapawarga.digitalservice.id/'
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
  },
  {
    id: 4,
    title: 'Jabar Saber Hoaks',
    description: 'Unit kerja di bawah Pemdaprov Jabar yang membantu proses verifikasi informasi atau rumor yang beredar di masyarakat untuk menghadirkan informasi yang akurat dan terpercaya.',
    icon: '/icons/program-unggulan/jabar-saber-hoaks.svg',
    link: 'https://saberhoaks.jabarprov.go.id/v2/home'
  },
  {
    id: 5,
    title: 'One Pesantren One Product',
    description: 'Program ini bantu menciptakan kemandirian ekonomi di lingkungan pondok pesantren.',
    icon: '/icons/program-unggulan/one-pesantren-one-product.svg',
    link: 'https://opop.jabarprov.go.id'
  },
  {
    id: 6,
    title: 'Citarum Harum',
    description: 'Upaya mengatasi pencemaran air sungai melalui 13 Program Rencana Aksi Citarum Harum.',
    icon: '/icons/program-unggulan/citarum-harum.svg',
    link: 'https://citarumharum.jabarprov.go.id'
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

export const publicServiceCategories = [
  'Kependudukan dan Tempat Tinggal',
  'Pendidikan dan Pembelajaran',
  'Kesehatan',
  'Sosial dan Keluarga',
  'Lingkungan',
  'Ekonomi, Bisnis dan Profesi',
  'Teknologi dan Komunikasi',
  'Sarana dan Prasarana',
  'Khusus'
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
  'Masjid Al Jabbar',
  'Ridwan Kamil',
  'Jawa Barat',
  'Wisata Jabar'
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

export const PREVIOUS_GOVERNORS = [
  {
    id: 1,
    name: 'Mochamad Ridwan Kamil',
    period: 'September 2018 - September 2023',
    image: '/images/about/pimpinan/ridwan-kamil-small.png'
  },
  {
    id: 2,
    name: 'Ahmad Heryawan',
    period: 'Juni 2008 - Juni 2018',
    image: '/images/about/pimpinan/ahmad-heryawan.png'
  },
  {
    id: 3,
    name: 'Danny Setiawan',
    period: 'Juni 2003 - Juni 2008',
    image: '/images/about/pimpinan/danny-setiawan.png'
  },
  {
    id: 4,
    name: 'HR. Nuriana',
    period: '1993 - Juni 2003',
    image: '/images/about/pimpinan/nuriana.png'
  },
  {
    id: 5,
    name: 'Yogie Suardi Memet',
    period: '1985 - 1993',
    image: '/images/about/pimpinan/yogie.png'
  },
  {
    id: 6,
    name: 'Aang Kunaefi',
    period: '1975 - 1985',
    image: '/images/about/pimpinan/aang.png'
  },
  {
    id: 7,
    name: 'Solihin GP',
    period: '1970 - 1974',
    image: '/images/about/pimpinan/solihin.png'
  },
  {
    id: 8,
    name: 'Mashudi',
    period: '1960 - 1970',
    image: '/images/about/pimpinan/mashudi.png'
  },
  {
    id: 9,
    name: 'Ipik Gandamana',
    period: '1956 - 1959',
    image: '/images/about/pimpinan/ipik.png'
  },
  {
    id: 10,
    name: 'Sanusi Hardjadinata',
    period: '1951 - 1956',
    image: '/images/about/pimpinan/sanusi.png'
  },
  {
    id: 11,
    name: 'R. Mas Sewaka',
    period: '1950 - 1956',
    image: '/images/about/pimpinan/sewaka.png'
  },
  {
    id: 12,
    name: 'Ukar Bratakusumah',
    period: '1948 - 1950',
    image: '/images/about/pimpinan/ukar.png'
  },
  {
    id: 13,
    name: 'R. Mas Sewaka',
    period: '1946 - 1948',
    image: '/images/about/pimpinan/sewaka.png'
  },
  {
    id: 14,
    name: 'Murdjani',
    period: '1946 - 1946',
    image: '/images/about/pimpinan/murdjani.png'
  },
  {
    id: 15,
    name: 'Datuk Djamin',
    period: '1945 - 1945',
    image: '/images/about/pimpinan/datuk.png'
  },
  {
    id: 16,
    name: 'Mas Sutardjo Kertohadikusumo',
    period: '1945 - 1945',
    image: '/images/about/pimpinan/sutardjo.png'
  }
]

export const GOVERNOR_PROFILE = {
  gubernur: {
    title: 'PJ Gubernur',
    name: 'Bey Triadi Machmudin, S.E., M.T.',
    dateOfBirth: 'Cirebon, 15 April 1970',
    educations: [
      {
        id: 1,
        description: 'Magister Teknik dari Institut Teknologi Bandung'
      },
      {
        id: 2,
        description: 'Sarjana Ekonomi dari Universitas Katolik Parahyangan'
      }
    ],
    careers: [
      {
        id: 1,
        description: 'Penjabat Gubernur Jawa Barat (5 September - sekarang)'
      },
      {
        id: 2,
        description: 'Deputi Bidang Protokol, Pers, dan Media Sekretariat Presiden Republik Indonesia (2021 - 2023)'
      },
      {
        id: 3,
        description: 'Asisten Deputi Dokumentasi dan Diseminasi Informasi di Sekretariat Wakil Presiden Republik Indonesia'
      },
      {
        id: 4,
        description: 'Kepala Biro Pers, Media dan Informasi Sekretariat Presiden Republik Indonesia (Setpres RI)(2015)'
      },
      {
        id: 5,
        description: 'Komisaris PT Pertamina Patra Niaga (2019 - 2020)'
      },
      {
        id: 6,
        description: 'Komisaris PT Kialng Pertamina Internasional (2021)'
      }
    ],
    awards: [],
    about: 'Birokrat Indonesia yang menjabat Deputi Bidang Protokol, Pers, dan Media Sekretariat Presiden Republik Indonesia sejak 2021. Presiden Joko Widodo menunjuk menjadi Penjabat Gubernur Jawa Barat pada 5 September 2023 dilantik oleh Menteri Dalam Negeri RI.',
    image: '/images/about/profil/bey-triadi-machmudin.png',
    lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/1.%20LHKPN_PJ%20Gubernur%20Jabar.pdf',
    instagram: 'bey.machmudin'
  },
  'wakil gubernur': {
    title: 'Wakil Gubernur',
    name: 'H. Uu Ruzhanul Ulum, SE.',
    dateOfBirth: 'Tasikmalaya, 10 Mei 1969',
    educations: [
      {
        id: 1,
        description: 'Program Sarjana (S1), Fakultas Ekonomi Manajemen, Universitas Siliwangi (1997)'
      },
      {
        id: 2,
        description: 'SMA Pasundan Tasikmalaya (1988)'
      }
    ],
    careers: [
      {
        id: 1,
        description: 'Wakil Gubernur Provinsi Jawa Barat (2018-sekarang)'
      },
      {
        id: 2,
        description: 'Bupati Kabupaten Tasikmalaya (2011-2018)'
      },
      {
        id: 3,
        description: 'Anggota DPRD Kabupaten Tasikmalaya (2009-2011)'
      },
      {
        id: 4,
        description: 'Ketua DPRD Kabupaten Tasikmalaya (2004-2009)'
      },
      {
        id: 5,
        description: 'Anggota DPRD Kabupaten Tasikmalaya (1999-2004)'
      }
    ],
    awards: [
      {
        id: 1,
        description: 'Peduli Jurnalis dari Persatuan Wartawan Indonesia (2021)'
      },
      {
        id: 2,
        description: 'Lencana Adhitya Karya Mahatva Yodha Kategori Pembina Umum Karang Taruna Terbaik (2018)'
      },
      {
        id: 3,
        description: 'Satya Lencana Jasa Bhakti Koperasi dari Kementrian Koperasi dan Usaha Kecil Menengah Republik Indonesia (2017)'
      },
      {
        id: 4,
        description: 'Penghargaan Adhikarya Pangan Nusantara  Tahun 2016 Kategori Pembina Ketahanan Pangan Kabupaten/Kota Tingkat Provinsi Jawa Barat, Gubernur Jawa Barat (2016)'
      },
      {
        id: 5,
        description: 'Penghargaan Peningkatan Pembangunan di Bidang Pertanian serta Peningkatan Produksi Gabah, Gubernur Jawa Barat (2014)'
      }
    ],
    about: 'Berlatar belakang seorang politisi yang pernah menjabat sebagai Ketua DPRD dan Bupati di Kabupaten Tasikmalaya, kini Uu Ruzhanul Ulum resmi memimpin Jawa Barat bersama Ridwan Kamil.',
    image: '/images/about/profil/uu-ruzhanul-ulum.png',
    lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/LHKPN%20Wagub%20Jabar%20-%20UU%20Ruzhanul%20Ulum.pdf',
    instagram: 'ruzhanul'
  },
  'sekretaris daerah': {
    title: 'Plh Sekretaris Daerah',
    name: 'Dr. Ir. Setiawan Wangsaatmaja, Dipl., S.E., M.Eng.',
    dateOfBirth: 'Bandung, 26 Agustus 1963',
    educations: [
      {
        id: 1,
        description: 'Program Doktoral (S3), Doktor Teknik Lingkungan, Institut Teknologi Bandung (2004)'
      },
      {
        id: 2,
        description: 'Program Magister (S2), Master of Engineering in Environmental Engineering, Asian Insititute of Technology, Thailand (1996-1997)'
      },
      {
        id: 3,
        description: 'Program Magister (S2), Dipl. SE in Sanitary Engineering, IHE Delft, Netherlands (1993-1994)'
      },
      {
        id: 4,
        description: 'Program Sarjana (S1), Insinyur Teknik Lingkungan, Institut Teknologi Bandung (1989)'
      }
    ],
    careers: [
      {
        id: 1,
        description: 'Sekretaris Daerah Provinsi Jawa Barat (2020-sekarang)'
      },
      {
        id: 2,
        description: 'Komisaris PT Perusahaan Perdagangan Indonesia (2018-sekarang)'
      },
      {
        id: 3,
        description: 'Komisaris PT Bhanda Ghara Reksa (2017-2021)'
      },
      {
        id: 4,
        description: 'Deputi Bidang SDM Aparatur, Kementerian PANRB (2013-2020)'
      },
      {
        id: 5,
        description: 'Kepala Badan Pengendalian Lingkungan Hidup Provinsi Jawa Barat (2008-2013)'
      }
    ],
    awards: [
      {
        id: 1,
        description: 'Satyalancana Karya Satya 30 Tahun, Presiden RI (2021)'
      },
      {
        id: 2,
        description: 'Wibawa Seroja Nugraha, Gubernur LEMHANAS RI (2012)'
      },
      {
        id: 3,
        description: 'Makarti Bhakti Nagari, Kepala LAN RI (2006)'
      },
      {
        id: 4,
        description: '3rd Mens Softball Championship, Atlet Nasional RI (1985)'
      },
      {
        id: 5,
        description: 'Medali Perunggu Kontingen PON XI Jawa Barat (1985)'
      }
    ],
    about: 'Memulai karir politiknya sebagai Aparatur Sipil Negara di Badan Pengendalian Lingkungan Hidup Daerah (BPLHD) Provinsi Jawa Barat beserta pengalaman kepemimpinannya sebagai Deputi Bidang SDM di Kementerian PAN RB selama 7 tahun, kini Setiawan Wangsaatmaja yang menjabat sebagai Sekretaris Daerah Provinsi Jawa Barat bersama dengan Gubernur dan Wakil Gubernur terpilih memiliki visi untuk mewujudkan Jawa Barat Juara Lahir Batin dengan inovasi dan kolaborasi di tahun 2018-2023.',
    image: '/images/about/profil/setiawan-wangsaatmaja.png',
    lhkpn: 'https://file.jabarprov.go.id/live/media/docs/west-java-profiles/1.%20LHKPN%20SEKRETARIAT%20DAERAH.pdf',
    instagram: 'swangsaatmaja'
  }
}

export const GPR_SCRIPT_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  TIMEOUT: 'TIMEOUT'
}

export const COUNTER_SCRIPT_STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  TIMEOUT: 'TIMEOUT'
}

export const socialMediaSapawarga = [
  {
    id: 1,
    name: 'Facebook',
    icon: 'facebook',
    image: '/images/sapawarga/facebook.svg',
    link: 'https://www.facebook.com/302983417213311/posts/995589351286044/'
  },
  {
    id: 2,
    name: 'Twitter',
    icon: 'twitter',
    image: '/images/sapawarga/twitter.svg',
    link: 'https://twitter.com/jabardigital'
  },
  {
    id: 3,
    name: 'Instagram',
    icon: 'instagram',
    image: '/images/sapawarga/instagram.svg',
    link: 'https://www.instagram.com/jabardigitalservice/'
  }
]

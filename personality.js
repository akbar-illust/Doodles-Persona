const theDoodles = [
    {
        personality: {
            ISTJ: {
                image:'images/01ISTJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ISTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISTJ cenderung memiliki lingkaran sosial yang kecil, terdiri dari teman-teman dekat dan keluarga yang mereka kenal dengan baik.</li>
                        <li>Tidak terlalu suka dengan interaksi sosial yang berlebihan atau keramaian besar dan lebih suka waktu sendiri untuk merenung atau beraktivitas secara individual.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Selalu dipenuhi dengan tugas-tugas yang terstruktur dan jadwal yang jelas. Mereka cenderung melakukan rutinitas yang sama setiap hari.</li>
                        <li>ISTJ sangat tepat waktu dan pandai dalam menggunakan waktu.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Mereka memiliki sedikit teman dekat yang mereka kenal dengan baik dan dapat diandalkan.</li>
                        <li>ISTJ cenderung mencari pertemanan yang stabil dan dapat diandalkan, bukan hubungan yang bersifat sangat sosial atau bersifat sementara.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Mereka menyukai keteraturan, konsistensi, dan kepastian dalam kehidupan sehari-hari.</li>
                        <li>ISTJ juga menghargai kejujuran, integritas, dan tanggung jawab dalam hubungan dan pekerjaan.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ISTJ cenderung mencari pekerjaan yang menawarkan struktur yang jelas, tugas-tugas yang terorganisir, dan tanggung jawab yang jelas.</li>
                        <li>Mereka sangat cocok dengan pekerjaan yang membutuhkan ketelitian, penyelesaian tugas-tugas detail, dan konsistensi dalam kinerja.</li>
                    </ul>
                    `,
                }
            },
        }
    },
    {
        personality: {
            ISFJ: {
                image:'images/02ISFJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ISFJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFJ adalah individu yang peduli dan perhatian terhadap orang lain. Mereka cenderung memiliki hubungan yang dekat dengan keluarga dan teman-teman, dan mereka siap membantu orang lain dalam situasi sulit.</li>
                        <li>Mereka tidak suka konflik dan cenderung menciptakan lingkungan yang hangat dan damai di sekitar mereka.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ISFJ sering diisi dengan tugas-tugas perawatan, baik untuk diri sendiri maupun untuk orang lain. Mereka bisa jadi terlibat dalam memasak, membersihkan, atau merawat tanaman dan hewan peliharaan.</li>
                        <li>Mereka juga dapat menghabiskan waktu untuk melakukan kegiatan yang mereka sukai, seperti membaca, menonton film, atau berkebun.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFJ adalah teman yang setia dan bisa diandalkan. Mereka biasanya memiliki hubungan yang erat dengan beberapa orang, dan mereka akan berusaha keras untuk menjaga hubungan tersebut.</li>
                        <li>Mereka cenderung menjadi pendengar yang baik dan memberikan dukungan emosional kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFJ sangat menghargai kehangatan dan kedekatan dalam hubungan mereka. Mereka juga menyukai kegiatan yang melibatkan pelayanan kepada orang lain dan memberikan bantuan yang praktis.</li>
                        <li>Mereka sering menghargai tradisi dan menghabiskan waktu bersama keluarga atau teman-teman dekat dalam acara-acara yang berarti bagi mereka.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ISFJ cenderung mencari pekerjaan yang memungkinkan mereka untuk merawat dan membantu orang lain, seperti pekerjaan dalam bidang kesehatan, pendidikan, atau pelayanan sosial.</li>
                        <li>Mereka adalah pekerja keras yang rajin dan teliti, dengan kecenderungan untuk melakukan tugas-tugas yang diperlukan untuk menyelesaikan pekerjaan dengan baik.</li>
                    </ul>
                    `,
                }
            },
        }
    },
    {
        personality: {
            ESTJ: {
                image:'images/03ESTJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ESTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTJ adalah individu yang suka berinteraksi dengan orang lain dan biasanya memiliki lingkaran sosial yang luas. Mereka terlibat dalam berbagai aktivitas sosial dan cenderung menonjol dalam lingkungan kerja dan komunitas.</li>
                        <li>Mereka suka memimpin dan memiliki kemampuan organisasi yang baik, sering menjadi pemimpin dalam kelompok atau tim.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ESTJ diisi dengan aktivitas yang terstruktur dan terorganisir. Mereka memiliki jadwal yang ketat dan cenderung membagi waktu mereka dengan efisien antara pekerjaan, keluarga, dan kegiatan lainnya.</li>
                        <li>Mereka sering melakukan tugas-tugas rumah tangga dengan efisien dan bisa jadi terlibat dalam aktivitas fisik atau olahraga untuk menjaga kesehatan mereka.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTJ adalah individu yang ramah dan mudah bergaul, membuatnya mudah untuk berhubungan dengan orang lain. Mereka memiliki banyak teman dan kenalan, dan mereka biasanya menjadi pusat perhatian dalam pertemuan sosial.</li>
                        <li>Mereka cenderung memiliki hubungan yang kuat dengan teman-teman dan kolega, dan mereka siap membantu mereka dalam situasi apapun.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTJ menyukai keberhasilan dan pencapaian dalam pekerjaan dan kehidupan pribadi. Mereka menghargai ketegasan, keteraturan, dan tanggung jawab.</li>
                        <li>Mereka juga suka pada aktivitas yang menantang secara intelektual dan memberikan kesempatan untuk berkembang dan tumbuh.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ESTJ cenderung mencari pekerjaan yang memungkinkan mereka untuk memimpin dan mengelola orang lain. Mereka cocok dengan posisi manajemen, kepemimpinan, atau bidang yang menuntut tanggung jawab besar.</li>
                        <li>Mereka adalah pengambil keputusan yang cepat dan tegas, sering kali mengambil inisiatif untuk menyelesaikan masalah atau menangani situasi sulit.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ESFJ: {
                image: 'images/04ESFJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ESFJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFJ adalah individu yang sangat sosial dan ramah. Mereka menikmati interaksi dengan orang lain dan cenderung menjadi pusat perhatian dalam kelompok sosial.</li>
                        <li>Mereka peduli dan perhatian terhadap perasaan orang lain, sering kali bertindak sebagai penengah dalam konflik dan memberikan dukungan emosional kepada teman-teman mereka.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ESFJ diisi dengan interaksi sosial dan pelayanan kepada orang lain. Mereka sering terlibat dalam aktivitas yang melibatkan kelompok atau tim, baik dalam pekerjaan maupun di luar pekerjaan.</li>
                        <li>Mereka juga cenderung melakukan tugas-tugas rumah tangga dengan penuh perhatian terhadap kebutuhan keluarga dan anggota rumah tangga lainnya.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFJ adalah individu yang hangat dan ramah, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka memiliki banyak teman dan kenalan dari berbagai latar belakang.</li>
                        <li>Mereka sangat memperhatikan kebutuhan teman-teman mereka dan sering menjadi penyokong yang kuat dalam hubungan persahabatan.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFJ menyukai keberadaan di tengah-tengah orang lain dan mendapatkan energi dari interaksi sosial. Mereka menghargai harmoni dan kedekatan dalam hubungan.</li>
                        <li>Mereka juga suka pada aktivitas yang melibatkan pelayanan kepada orang lain, seperti menjadi relawan atau membantu dalam acara sosial.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ESFJ cenderung mencari pekerjaan yang memungkinkan mereka untuk berinteraksi dengan orang lain dan memberikan bantuan yang praktis kepada mereka. Mereka cocok dengan posisi yang melibatkan pelayanan kepada pelanggan atau dukungan kepada rekan kerja.</li>
                        <li>Mereka adalah tim player yang hebat, sering kali menjadi kolaborator yang efektif dan penuh perhatian terhadap kebutuhan tim.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ISTP: {
                image: 'images/05ISTP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ISTP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISTP cenderung lebih introvert dan cenderung memiliki lingkaran sosial yang lebih kecil dibandingkan beberapa tipe kepribadian lainnya. Mereka tidak terlalu memprioritaskan interaksi sosial yang sering atau mendalam.</li>
                        <li>Mereka mungkin lebih suka menghabiskan waktu sendiri atau dengan beberapa teman dekat daripada dalam keramaian besar.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ISTP cenderung diisi dengan kegiatan yang praktis dan memecahkan masalah. Mereka suka menghabiskan waktu untuk merenung atau memperbaiki hal-hal, seperti mobil atau peralatan rumah tangga.</li>
                        <li>Mereka cenderung terlibat dalam aktivitas fisik atau petualangan, seperti olahraga ekstrim atau hobi yang melibatkan risiko dan tantangan.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Meskipun cenderung lebih introvert, ISTP bisa memiliki beberapa teman dekat yang mereka anggap sebagai rekan setara. Mereka menghargai kebebasan dan kemandirian dalam hubungan.</li>
                        <li>Mereka cenderung lebih suka teman yang praktis dan suka hal-hal yang sama, seperti hobi mekanik atau olahraga luar ruangan.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISTP menyukai kebebasan, tantangan, dan kemungkinan untuk eksplorasi. Mereka menghargai kebebasan untuk mengeksplorasi ide-ide dan menemukan cara yang baru untuk menyelesaikan masalah.</li>
                        <li>Mereka juga suka pada aktivitas yang melibatkan keterampilan praktis, seperti memperbaiki barang-barang atau merakit sesuatu.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ISTP cenderung mencari pekerjaan yang memungkinkan mereka untuk menggunakan keterampilan praktis dan memecahkan masalah. Mereka cocok dengan pekerjaan di bidang teknik, perbaikan, atau olahraga ekstrim.</li>
                        <li>Mereka adalah tipe yang tangguh dan siap bertindak dalam situasi darurat, dengan kecenderungan untuk menemukan solusi yang cepat dan efisien untuk masalah yang muncul.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ISFP: {
                image: 'images/06ISFP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ISFP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFP adalah individu yang hangat, ramah, dan sensitif terhadap perasaan orang lain. Mereka cenderung memiliki lingkaran sosial yang kecil tetapi erat, dengan beberapa teman dekat yang mereka kenal dengan baik.</li>
                        <li>Mereka bisa menjadi pendengar yang baik dan memberikan dukungan emosional kepada teman-teman mereka.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ISFP sering diisi dengan kegiatan yang kreatif dan ekspresif. Mereka suka melibatkan diri dalam seni, musik, atau aktivitas lain yang memungkinkan mereka untuk mengekspresikan diri.</li>
                        <li>Mereka juga bisa menikmati waktu sendiri untuk merenung atau berkreasi tanpa gangguan dari lingkungan luar.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFP adalah individu yang loyal dan setia terhadap teman-teman mereka. Mereka menghargai kedalaman dalam hubungan dan bisa menjadi teman yang sangat dapat diandalkan.</li>
                        <li>Mereka cenderung lebih suka teman yang memiliki minat dan nilai-nilai yang sama, terutama dalam hal seni dan kreativitas.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISFP menyukai kreativitas, kebebasan, dan keindahan dalam hidup. Mereka menikmati kesempatan untuk mengekspresikan diri melalui seni atau musik, serta untuk menjelajahi dunia di sekitar mereka.</li>
                        <li>Mereka juga menghargai kedamaian dan kedekatan dengan alam, sering kali menikmati waktu di luar ruangan atau menikmati keindahan alam.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ISFP cenderung mencari pekerjaan yang memungkinkan mereka untuk mengekspresikan kreativitas mereka. Mereka cocok dengan pekerjaan di bidang seni, desain, musik, atau bidang lain yang memungkinkan mereka untuk bekerja dengan cara yang ekspresif.</li>
                        <li>Mereka adalah individu yang inovatif dan sensitif, dengan kecenderungan untuk melihat dunia dengan cara yang unik dan menawarkan perspektif yang berbeda dalam pekerjaan mereka.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ESTP: {
                image: 'images/07ESTP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ESTP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTP adalah individu yang ekstrovert dan energik, suka berada di tengah-tengah keramaian dan sering menjadi pusat perhatian dalam kelompok sosial.</li>
                        <li>Mereka mudah bergaul dan memiliki kemampuan beradaptasi yang baik, membuatnya mudah untuk berinteraksi dengan berbagai macam orang.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ESTP diisi dengan aktivitas yang menarik dan menghibur. Mereka suka mencari sensasi dan sering terlibat dalam kegiatan yang menantang, seperti olahraga atau petualangan.</li>
                        <li>Mereka cenderung hidup dalam momen dan menikmati kebebasan untuk bereksperimen dan menjelajahi hal baru.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTP adalah individu yang ramah dan mudah bergaul, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka suka bertemu dengan teman-teman dan menghabiskan waktu bersama dalam kegiatan yang seru dan menantang.</li>
                        <li>Mereka cenderung memiliki lingkaran sosial yang luas dan menikmati interaksi dengan berbagai macam orang.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESTP menyukai petualangan, kebebasan, dan sensasi. Mereka menikmati aktivitas yang menantang dan memberikan adrenalin, seperti olahraga ekstrim atau perjalanan yang seru.</li>
                        <li>Mereka juga suka pada hal-hal praktis dan konkret, menemukan kepuasan dalam menyelesaikan masalah atau mencari solusi yang efektif dalam situasi yang menantang.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ESTP cenderung mencari pekerjaan yang menarik dan menghibur, serta memungkinkan mereka untuk menggunakan keterampilan fisik dan taktis mereka. Mereka cocok dengan pekerjaan di bidang olahraga, hiburan, atau bidang lain yang menawarkan tantangan dan kebebasan.</li>
                        <li>Mereka adalah pemecah masalah yang cepat dan tangguh, dengan kecenderungan untuk bertindak secara cepat dan tegas dalam situasi darurat atau tekanan.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ESFP: {
                image: 'images/08ESFP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ESFP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFP adalah individu yang ekstrovert, ramah, dan sangat sosial. Mereka menikmati interaksi dengan orang lain dan cenderung menjadi pusat perhatian dalam kelompok sosial.</li>
                        <li>Mereka mudah bergaul dan suka membuat suasana ceria dalam setiap kesempatan.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ESFP diisi dengan aktivitas yang menyenangkan dan menghibur. Mereka suka mencari sensasi dan sering terlibat dalam kegiatan yang menyenangkan, seperti pesta, pertunjukan, atau acara sosial lainnya.</li>
                        <li>Mereka cenderung hidup dalam momen dan menikmati setiap momen dengan penuh semangat dan antusiasme.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFP adalah individu yang hangat, ramah, dan mudah bergaul, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka suka bertemu dengan teman-teman dan menghabiskan waktu bersama dalam kegiatan yang seru dan menyenangkan.</li>
                        <li>Mereka cenderung memiliki lingkaran sosial yang luas dan menikmati interaksi dengan berbagai macam orang.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ESFP menyukai kebebasan, kesenangan, dan sensasi. Mereka menikmati setiap momen dengan penuh semangat dan mencari kesenangan dalam segala hal yang mereka lakukan.</li>
                        <li>Mereka juga suka pada hal-hal yang artistik dan kreatif, seperti musik, seni, atau pertunjukan.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ESFP cenderung mencari pekerjaan yang menyenangkan dan menghibur, serta memungkinkan mereka untuk berinteraksi dengan orang lain. Mereka cocok dengan pekerjaan di bidang hiburan, seni, atau bidang lain yang menawarkan kesenangan dan kesempatan untuk mengekspresikan diri.</li>
                        <li>Mereka adalah individu yang fleksibel dan kreatif, dengan kemampuan untuk beradaptasi dengan cepat dalam situasi yang berubah dan memberikan kontribusi positif dalam lingkungan kerja yang dinamis.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            INFJ: {
                image: 'images/09INFJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">INFJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFJ adalah individu yang hangat, empatik, dan memiliki pemahaman yang mendalam tentang perasaan orang lain. Mereka cenderung memiliki hubungan yang mendalam dengan beberapa orang yang mereka anggap dekat.</li>
                        <li>Meskipun mereka introvert, mereka memiliki kemampuan untuk berinteraksi secara mendalam dan bermakna dengan orang lain.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang INFJ cenderung diisi dengan refleksi, eksplorasi ide, dan pencarian makna dalam kehidupan. Mereka suka menghabiskan waktu sendiri untuk merenung atau mengejar minat intelektual mereka.</li>
                        <li>Mereka mungkin terlibat dalam kegiatan yang mendukung nilai-nilai mereka, seperti membaca, menulis, atau berpartisipasi dalam aktivitas yang melibatkan pertumbuhan pribadi.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFJ adalah individu yang memiliki sedikit teman, tetapi hubungan yang mereka miliki sangat dalam dan bermakna. Mereka cenderung mencari hubungan yang otentik dan saling mendukung.</li>
                        <li>Mereka adalah pendengar yang baik dan memberikan dukungan emosional yang kuat kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFJ menyukai makna, kedalaman, dan pemahaman yang mendalam. Mereka menikmati waktu untuk merenung tentang kehidupan, nilai-nilai, dan tujuan mereka, serta mencari cara untuk membuat dunia menjadi tempat yang lebih baik.</li>
                        <li>Mereka juga menghargai kreativitas dan ekspresi diri, sering mengejar minat dalam seni, sastra, atau bidang lain yang memungkinkan mereka untuk mengekspresikan pemikiran dan perasaan mereka.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, INFJ cenderung mencari pekerjaan yang memungkinkan mereka untuk membantu orang lain dan membuat perbedaan yang positif dalam dunia. Mereka cocok dengan pekerjaan di bidang konseling, pendidikan, atau pekerjaan sosial.</li>
                        <li>Mereka adalah pengamat yang peka dan pemikir strategis, dengan kecenderungan untuk memahami kompleksitas situasi dan menawarkan solusi yang berempati dan bermakna.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            INFP: {
                image: 'images/10INFP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">INFP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFP adalah individu yang hangat, pemikir, dan penuh empati. Mereka cenderung memiliki hubungan yang mendalam dan bermakna dengan beberapa orang yang mereka anggap dekat.</li>
                        <li>Meskipun mereka introvert, mereka memperhatikan perasaan orang lain dan cenderung memiliki pemahaman yang mendalam tentang dunia emosi.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang INFP cenderung diisi dengan refleksi, imajinasi, dan pencarian makna dalam kehidupan. Mereka suka menghabiskan waktu sendiri untuk merenung, menulis, atau mengekspresikan diri melalui karya seni atau tulisan.</li>
                        <li>Mereka mungkin terlibat dalam aktivitas yang mendukung nilai-nilai mereka, seperti berpartisipasi dalam acara amal atau mempelajari tentang isu-isu sosial.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFP adalah individu yang memiliki sedikit teman, tetapi hubungan yang mereka miliki sangat dalam dan bermakna. Mereka cenderung mencari hubungan yang otentik dan saling mendukung, dengan orang-orang yang mereka anggap memiliki nilai-nilai dan minat yang serupa.</li>
                        <li>Mereka adalah pendengar yang baik dan memberikan dukungan emosional yang kuat kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INFP menyukai kreativitas, keindahan, dan kedalaman. Mereka menikmati waktu untuk mengekspresikan diri melalui seni, tulisan, atau musik, serta mencari cara untuk menggali kedalaman emosi dan makna dalam hidup.</li>
                        <li>Mereka juga menghargai kebebasan dan kemandirian, sering kali mengejar minat yang tidak konvensional atau berbeda dari norma sosial.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, INFP cenderung mencari pekerjaan yang memungkinkan mereka untuk mengekspresikan diri secara kreatif dan membuat perbedaan yang positif dalam dunia. Mereka cocok dengan pekerjaan di bidang seni, penulisan, konseling, atau advokasi sosial.</li>
                        <li>Mereka adalah pemikir visioner dan pemimpin yang inspiratif, dengan kecenderungan untuk memahami kompleksitas emosi manusia dan menawarkan solusi yang berempati dan kreatif.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ENFJ: {
                image: 'images/11ENFJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ENFJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFJ adalah individu yang ekstrovert, ramah, dan sangat peduli terhadap kebutuhan orang lain. Mereka cenderung menjadi pusat perhatian dalam situasi sosial dan memiliki kemampuan untuk menginspirasi dan memotivasi orang lain.</li>
                        <li>Mereka suka berada di tengah-tengah orang dan sering kali menjadi pemimpin dalam kelompok atau tim.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ENFJ cenderung diisi dengan kegiatan yang mendukung orang lain dan membangun hubungan. Mereka suka menghabiskan waktu untuk berinteraksi dengan orang lain, memberikan dukungan, dan membantu mereka mencapai potensi terbaik mereka.</li>
                        <li>Mereka juga cenderung terlibat dalam aktivitas yang melibatkan organisasi acara sosial atau penggalangan dana untuk tujuan yang mereka anggap penting.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFJ adalah individu yang hangat, ramah, dan mudah bergaul, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka memiliki lingkaran sosial yang luas dan cenderung memiliki banyak teman dan kenalan.</li>
                        <li>Mereka adalah pendengar yang baik dan siap memberikan dukungan emosional kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFJ menyukai interaksi sosial, keterlibatan dalam komunitas, dan membantu orang lain mencapai potensi terbaik mereka. Mereka menikmati waktu untuk berinteraksi dengan orang lain dan memberikan dukungan yang mereka butuhkan.</li>
                        <li>Mereka juga menghargai keadilan, nilai-nilai moral, dan membuat perbedaan yang positif dalam dunia.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ENFJ cenderung mencari pekerjaan yang memungkinkan mereka untuk membantu orang lain dan membuat perbedaan yang positif dalam masyarakat. Mereka cocok dengan pekerjaan di bidang konseling, pendidikan, manajemen acara, atau pekerjaan sosial.</li>
                        <li>Mereka adalah pemimpin yang karismatik dan visioner, dengan kecenderungan untuk memahami kebutuhan orang lain dan menggerakkan orang lain menuju tujuan bersama.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            ENFP: {
                image: 'images/12ENFP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ENFP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFP adalah individu yang ekstrovert, ramah, dan penuh semangat. Mereka cenderung menjadi pusat perhatian dalam situasi sosial dan memiliki kemampuan untuk membuat orang lain merasa termotivasi dan terinspirasi.</li>
                        <li>Mereka menikmati berada di tengah-tengah orang dan sering kali menjadi penyemangat dalam kelompok atau tim.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ENFP cenderung diisi dengan kegiatan yang kreatif dan penuh dengan variasi. Mereka suka mencari tantangan baru dan menjelajahi berbagai minat dan hobi.</li>
                        <li>Mereka bisa terlibat dalam berbagai aktivitas, mulai dari seni, musik, olahraga, hingga petualangan dan perjalanan.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFP adalah individu yang hangat, ramah, dan mudah bergaul, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka memiliki lingkaran sosial yang luas dan cenderung memiliki banyak teman dan kenalan.</li>
                        <li>Mereka adalah pendengar yang baik dan siap memberikan dukungan emosional kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENFP menyukai kreativitas, kebebasan, dan kebebasan berekspresi. Mereka menikmati waktu untuk mengekspresikan diri melalui seni, musik, tulisan, atau aktivitas lain yang memungkinkan mereka untuk mengekspresikan keunikan mereka.</li>
                        <li>Mereka juga menghargai petualangan dan penjelajahan, sering mencari pengalaman baru dan mencoba hal-hal yang berbeda.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ENFP cenderung mencari pekerjaan yang memungkinkan mereka untuk mengekspresikan kreativitas mereka dan membuat perbedaan yang positif dalam dunia. Mereka cocok dengan pekerjaan di bidang seni, konseling, pendidikan, atau advokasi sosial.</li>
                        <li>Mereka adalah pemikir yang inovatif dan inspiratif, dengan kecenderungan untuk memahami kebutuhan orang lain dan menawarkan solusi yang kreatif dan bermakna.</li>
                    </ul>
                    `,
                },
            },
        }
    },
    {
        personality: {
            INTJ: {
                image: 'images/13INTJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">INTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTJ adalah individu yang cenderung lebih introvert, fokus pada pemikiran dan analisis. Mereka tidak terlalu terlibat dalam interaksi sosial yang tidak produktif atau dangkal.</li>
                        <li>Meskipun demikian, mereka mungkin memiliki hubungan yang mendalam dengan beberapa orang yang mereka anggap memiliki pikiran yang sama atau dapat memberikan nilai tambah bagi tujuan mereka.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang INTJ cenderung diisi dengan pemikiran yang mendalam, perencanaan, dan pengembangan strategi. Mereka suka menghabiskan waktu sendiri untuk merenung, merencanakan, dan memecahkan masalah yang kompleks.</li>
                        <li>Mereka mungkin terlibat dalam aktivitas yang menantang secara intelektual, seperti membaca buku, meneliti topik tertentu, atau mengembangkan proyek-proyek yang ambisius.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTJ adalah individu yang cenderung memiliki sedikit teman, tetapi hubungan yang mereka miliki sangat mendalam dan bermakna. Mereka mencari teman yang dapat memahami dan menghargai cara mereka berpikir yang analitis dan strategis.</li>
                        <li>Mereka menghargai kejujuran dan kecerdasan dalam hubungan, dan cenderung memiliki sedikit toleransi terhadap ketidaktepatan atau ketidakjujuran.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTJ menyukai pemecahan masalah, penemuan, dan pengetahuan. Mereka menikmati tantangan intelektual dan kesempatan untuk mengembangkan solusi yang efektif untuk masalah yang rumit.</li>
                        <li>Mereka juga menghargai kemandirian dan kebebasan untuk mengejar minat dan tujuan pribadi mereka tanpa terganggu oleh konvensi sosial atau tekanan dari luar.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, INTJ cenderung mencari pekerjaan yang memungkinkan mereka untuk menggunakan kecerdasan dan kemampuan analitis mereka untuk mencapai tujuan yang jelas dan strategis. Mereka cocok dengan pekerjaan di bidang manajemen, konsultasi, teknologi informasi, atau riset.</li>
                        <li>Mereka adalah pemikir yang visioner dan strategis, dengan kemampuan untuk melihat gambaran besar dan mengembangkan rencana yang efektif untuk mencapai tujuan mereka.</li>
                    </ul>
                    `,
                },
            },            
        }
    },
    {
        personality: {
            INTP: {
                image: 'images/14INTP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">INTP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTP adalah individu yang cenderung lebih introvert, fokus pada pemikiran dan analisis yang mendalam. Mereka mungkin tidak terlalu aktif dalam interaksi sosial yang dangkal atau tidak produktif.</li>
                        <li>Meskipun demikian, mereka dapat memiliki hubungan yang mendalam dengan beberapa orang yang mereka anggap memiliki minat atau pandangan yang serupa.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang INTP cenderung diisi dengan eksplorasi konsep-konsep baru, penelitian, dan refleksi. Mereka suka menghabiskan waktu sendiri untuk memahami dunia di sekitar mereka dan mengembangkan pemikiran-pemikiran yang kompleks.</li>
                        <li>Mereka mungkin terlibat dalam aktivitas yang menantang secara intelektual, seperti membaca, meneliti, atau memecahkan masalah yang rumit.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTP adalah individu yang cenderung memiliki sedikit teman, tetapi hubungan yang mereka miliki sangat mendalam dan bermakna. Mereka mencari teman yang dapat menghargai dan memahami cara mereka berpikir yang analitis dan kreatif.</li>
                        <li>Mereka menghargai diskusi yang menantang dan stimulasi intelektual dalam hubungan, dan cenderung menikmati pertemanan dengan orang-orang yang dapat memicu pikiran mereka.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>INTP menyukai penemuan, pemecahan masalah, dan pengetahuan. Mereka menikmati eksplorasi ide dan konsep baru, serta mencari cara untuk memahami dunia di sekitar mereka dengan lebih baik.</li>
                        <li>Mereka juga menghargai kreativitas dan kemandirian, sering mengejar minat dan proyek-proyek pribadi yang menantang dan bermakna bagi mereka.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, INTP cenderung mencari pekerjaan yang memungkinkan mereka untuk menggunakan pemikiran analitis dan kreatif mereka untuk memecahkan masalah yang kompleks. Mereka cocok dengan pekerjaan di bidang teknologi, riset, pengembangan produk, atau ilmu pengetahuan.</li>
                        <li>Mereka adalah pemikir yang kritis dan inovatif, dengan kecenderungan untuk melihat masalah dari berbagai sudut pandang dan menemukan solusi yang unik dan efektif.</li>
                    </ul>
                    `,
                },
            },            
        }
    },
    {
        personality: {
            ENTP: {
                image: 'images/15ENTP.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ENTP</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTP adalah individu yang ekstrovert, energik, dan penuh semangat. Mereka suka berinteraksi dengan orang lain dan sering menjadi pusat perhatian dalam situasi sosial.</li>
                        <li>Mereka memiliki kecenderungan untuk menantang status quo dan mengajukan pertanyaan yang tajam dalam percakapan, membuat mereka menjadi teman yang menarik dan menghibur.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ENTP cenderung diisi dengan eksplorasi ide, penelitian, dan percobaan. Mereka suka mencari tantangan baru dan mengejar minat dan proyek-proyek yang menantang secara intelektual.</li>
                        <li>Mereka bisa terlibat dalam berbagai aktivitas, mulai dari berdiskusi tentang topik yang menarik, mencoba hobi baru, atau mengembangkan ide-ide kreatif.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTP adalah individu yang hangat, ramah, dan mudah bergaul, membuatnya mudah untuk menjalin hubungan dengan berbagai macam orang. Mereka suka bertemu dengan teman-teman dan menghabiskan waktu bersama dalam diskusi yang menarik dan menginspirasi.</li>
                        <li>Mereka adalah pendebat yang baik dan suka tantangan intelektual dalam hubungan, dan cenderung menikmati pertemanan dengan orang-orang yang dapat memicu pikiran mereka.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTP menyukai penjelajahan ide, kreativitas, dan tantangan intelektual. Mereka menikmati waktu untuk memecahkan masalah yang rumit, mengembangkan ide-ide baru, dan mencari cara untuk mengubah dunia di sekitar mereka.</li>
                        <li>Mereka juga menghargai kebebasan dan kemandirian, sering mengejar minat yang tidak konvensional atau mencoba hal-hal baru yang menarik.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ENTP cenderung mencari pekerjaan yang memungkinkan mereka untuk menggunakan kreativitas dan kecerdasan mereka untuk menciptakan solusi yang inovatif dan efektif. Mereka cocok dengan pekerjaan di bidang pengembangan produk, konsultasi, pemasaran, atau pengajaran.</li>
                        <li>Mereka adalah pemikir yang visioner dan inovatif, dengan kemampuan untuk melihat peluang di mana orang lain mungkin tidak melihatnya dan mengembangkan strategi yang unik dan efektif.</li>
                    </ul>
                    `,
                },
            },            
        }
    },
    {
        personality: {
            ENTJ: {
                image: 'images/16ENTJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ENTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTJ adalah individu yang ekstrovert, ambisius, dan suka mengambil peran kepemimpinan dalam berbagai situasi sosial. Mereka memiliki kemampuan untuk mempengaruhi dan memotivasi orang lain.</li>
                        <li>Mereka cenderung menonjol dalam situasi-situasi yang memerlukan pengambilan keputusan cepat dan strategis.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ENTJ cenderung diisi dengan aktivitas yang produktif dan terarah. Mereka suka merencanakan kegiatan mereka dengan cermat dan bekerja menuju mencapai tujuan-tujuan yang mereka tetapkan.</li>
                        <li>Mereka bisa terlibat dalam berbagai aktivitas, mulai dari mengatur jadwal hingga mengembangkan strategi untuk mencapai kesuksesan.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTJ adalah individu yang percaya diri, tegas, dan cenderung memiliki sedikit teman yang mereka anggap dekat. Mereka mencari teman yang dapat menghargai pandangan dan tujuan mereka, serta mendukung upaya-upaya mereka dalam mencapai kesuksesan.</li>
                        <li>Mereka menghargai hubungan yang produktif dan saling menguntungkan, dan cenderung memiliki sedikit toleransi terhadap ketidakproduktifan atau ketidakjujuran dalam hubungan.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ENTJ menyukai tantangan, kesempatan untuk memimpin, dan mencapai kesuksesan dalam segala hal yang mereka lakukan. Mereka menikmati waktu untuk merencanakan dan melaksanakan strategi untuk mencapai tujuan-tujuan yang mereka tetapkan.</li>
                        <li>Mereka juga menghargai kekuatan, otoritas, dan kontrol, dan cenderung mencari posisi-posisi yang memungkinkan mereka untuk mengambil peran kepemimpinan.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Dalam pekerjaan, ENTJ cenderung mencari pekerjaan yang memungkinkan mereka untuk memimpin dan mengatur orang lain menuju mencapai tujuan-tujuan yang ditetapkan. Mereka cocok dengan pekerjaan di bidang manajemen, konsultasi, kepemimpinan, atau pengembangan bisnis.</li>
                        <li>Mereka adalah pemimpin yang kuat dan strategis, dengan kemampuan untuk melihat gambaran besar dan mengembangkan rencana yang efektif untuk mencapai kesuksesan.</li>
                    </ul>
                    `,
                },
            },
        }
    },
]

    function personalityDisplay() {
        const personalityElement = document.getElementById('personality');
        let personalityContent = '';
        
        for(const doodle of theDoodles) {
            if (doodle.personality !== undefined && doodle.personality !== null) {
                const personalityKey = Object.keys(doodle.personality)[0];
                
                if (personalityKey) {
                    const title = doodle.personality[personalityKey].title;
                    const image = doodle.personality[personalityKey].image;
                    const description = doodle.personality[personalityKey].description;
                    
                    personalityContent += `
                    <div class="grid justify-center select-none">
                        <div class="card bg-emerald-800 grid justify-center p-5 rounded-2xl">
                            <div class="grid items-center sm:grid-cols-1 md:grid-cols-2 gap-5">
                                <div class="grid justify-center">
                                    <img src="${image}" width="300px" alt="${personalityKey}">
                                </div>
                                <div class="flex justify-center gap-x-2">
                                    <div class="text-center mb-2 md:text-start md:mb-0 text-4xl md:text-6xl">The</div>
                                    <div class="text-center mb-2 md:text-start md:mb-0">${title}</div>
                                </div>
                            </div>
                            <div>
                                <div class="">
                                    ${description.social_relations}<br>
                                </div>
                                <div>
                                    ${description.daily_life}<br>
                                </div>
                                <div>
                                    ${description.friendship}<br>
                                </div>
                                <div>
                                    ${description.favorite_things}<br>
                                </div>
                                <div>
                                    ${description.jobs}<br>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                } else {
                    console.log('error')
                }
            } else {
                console.log('error')
            }
        }
        personalityElement.innerHTML = personalityContent;
    }
    
    personalityDisplay();
    
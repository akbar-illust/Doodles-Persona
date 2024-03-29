const theDoodles = [
    {
        personality: {
            ISTJ: {
                image:'01ISTJ.png',
                title: `<h1 class="text-4xl md:text-6xl underline underline-offset-4">ISTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>ISTJ cenderung memiliki lingkaran sosial yang kecil, terdiri dari teman-teman dekat dan keluarga yang mereka kenal dengan baik.</li>
                        <li>Mereka tidak terlalu suka dengan interaksi sosial yang berlebihan atau keramaian besar. Mereka lebih suka waktu sendiri untuk merenung atau beraktivitas secara individual.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-xl md:text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="text-sm md:text-lg list-disc ms-5">
                        <li>Keseharian seorang ISTJ dipenuhi dengan tugas-tugas yang terstruktur dan jadwal yang jelas. Mereka cenderung melakukan rutinitas yang sama setiap hari.</li>
                        <li>Aktivitas mereka meliputi menyelesaikan tugas-tugas rumah tangga, bekerja, menata jadwal, dan waktu untuk rekreasi yang terencana.</li>
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
                image:'02ISFJ.png',
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
                image:'03ESTJ.png',
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
                image:'04ESFJ.png',
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
                image:'05ISTP.png',
                title: 'ISTP',
                description: "You're the ISTP "
            },
        }
    },
    {
        personality: {
            ISFP: {
                image: '06ISFP.png',
                title: 'ISFP',
                description: "You're the ISFP "
            },
        }
    },
    {
        personality: {
            ESTP: {
                image: '07ESTP.png',
                title: 'ESTP',
                description: "You're the ESTP "
            },
        }
    },
    {
        personality: {
            ESFP: {
                image: '08ESFP.png',
                title: 'ESFP',
                description: "You're the ESFP "
            },
        }
    },
    {
        personality: {
            INFJ: {
                image: '09INFJ.png',
                title: 'INFJ',
                description: "You're the INFJ "
            },
        }
    },
    {
        personality: {
            INFP: {
                image: '10INFP.png',
                title: 'INFP',
                description: "You're the INFP "
            },
        }
    },
    {
        personality: {
            ENFJ: {
                image: '11ENFJ.png',
                title: 'ENFJ',
                description: "You're the ENFJ "
            },
        }
    },
    {
        personality: {
            ENFP: {
                image: '12ENFP.png',
                title: 'ENFP',
                description: "You're the ENFP "
            },
        }
    },
    {
        personality: {
            INTJ: {
                image: '13INTJ.png',
                title: 'INTJ',
                description: "You're the INTJ "
            },            
        }
    },
    {
        personality: {
            INTP: {
                image: '14INTP.png',
                title: 'INTP',
                description: "You're the INTP "
            },            
        }
    },
    {
        personality: {
            ENTP: {
                image: '15ENTP.png',
                title: 'ENTP',
                description: "You're the ENTP "
            },            
        }
    },
    {
        personality: {
            ENTJ: {
                image: '16ENTJ.png',
                title: 'ENTJ',
                description: "You're the ENTJ "
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
                            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                                <img src="${image}" alt="${personalityKey}">
                                <div class="text-center mb-2 md:text-start md:mb-0">${title}</div>
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
    
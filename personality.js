const theDoodles = [
    {
        personality: {
            ISTJ: {
                image:'01ISTJ.png',
                title: `<h1 class="text-6xl underline underline-offset-4">ISTJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="list-disc ms-5">
                        <li>ISTJ cenderung memiliki lingkaran sosial yang kecil, terdiri dari teman-teman dekat dan keluarga yang mereka kenal dengan baik.</li>
                        <li>Mereka tidak terlalu suka dengan interaksi sosial yang berlebihan atau keramaian besar. Mereka lebih suka waktu sendiri untuk merenung atau beraktivitas secara individual.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="list-disc ms-5">
                        <li>Keseharian seorang ISTJ dipenuhi dengan tugas-tugas yang terstruktur dan jadwal yang jelas. Mereka cenderung melakukan rutinitas yang sama setiap hari.</li>
                        <li>Aktivitas mereka meliputi menyelesaikan tugas-tugas rumah tangga, bekerja, menata jadwal, dan waktu untuk rekreasi yang terencana.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="list-disc ms-5">
                        <li>Mereka memiliki sedikit teman dekat yang mereka kenal dengan baik dan dapat diandalkan.</li>
                        <li>ISTJ cenderung mencari pertemanan yang stabil dan dapat diandalkan, bukan hubungan yang bersifat sangat sosial atau bersifat sementara.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="list-disc ms-5">
                        <li>Mereka menyukai keteraturan, konsistensi, dan kepastian dalam kehidupan sehari-hari.</li>
                        <li>ISTJ juga menghargai kejujuran, integritas, dan tanggung jawab dalam hubungan dan pekerjaan.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="list-disc ms-5">
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
                title: `<h1 class="text-6xl underline underline-offset-4">ISFJ</h1>`,
                description: {
                    social_relations: `
                    <h3 class="text-2xl font-semibold underline">relasi sosial</h3>
                    <ul class="list-disc ms-5">
                        <li>ISFJ adalah individu yang peduli dan perhatian terhadap orang lain. Mereka cenderung memiliki hubungan yang dekat dengan keluarga dan teman-teman, dan mereka siap membantu orang lain dalam situasi sulit.</li>
                        <li>Mereka tidak suka konflik dan cenderung menciptakan lingkungan yang hangat dan damai di sekitar mereka.</li>
                    </ul>
                    `,
                    daily_life: `
                    <h3 class="text-2xl font-semibold underline">Keseharian</h3>
                    <ul class="list-disc ms-5">
                        <li>Keseharian seorang ISFJ sering diisi dengan tugas-tugas perawatan, baik untuk diri sendiri maupun untuk orang lain. Mereka bisa jadi terlibat dalam memasak, membersihkan, atau merawat tanaman dan hewan peliharaan.</li>
                        <li>Mereka juga dapat menghabiskan waktu untuk melakukan kegiatan yang mereka sukai, seperti membaca, menonton film, atau berkebun.</li>
                    </ul>
                    `,
                    friendship: `
                    <h3 class="text-2xl font-semibold underline">Pertemanan</h3>
                    <ul class="list-disc ms-5">
                        <li>ISFJ adalah teman yang setia dan bisa diandalkan. Mereka biasanya memiliki hubungan yang erat dengan beberapa orang, dan mereka akan berusaha keras untuk menjaga hubungan tersebut.</li>
                        <li>Mereka cenderung menjadi pendengar yang baik dan memberikan dukungan emosional kepada teman-teman mereka dalam situasi sulit.</li>
                    </ul>
                    `,
                    favorite_things: `
                    <h3 class="text-2xl font-semibold underline">Hal Yang Disukai</h3>
                    <ul class="list-disc ms-5">
                        <li>ISFJ sangat menghargai kehangatan dan kedekatan dalam hubungan mereka. Mereka juga menyukai kegiatan yang melibatkan pelayanan kepada orang lain dan memberikan bantuan yang praktis.</li>
                        <li>Mereka sering menghargai tradisi dan menghabiskan waktu bersama keluarga atau teman-teman dekat dalam acara-acara yang berarti bagi mereka.</li>
                    </ul>
                    `,
                    jobs: `
                    <h3 class="text-2xl font-semibold underline">Pekerjaan</h3>
                    <ul class="list-disc ms-5">
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
                title: 'ESTJ',
                description: "You're the ESTJ "
            },
        }
    },
    {
        personality: {
            ESFJ: {
                image:'04ESFJ.png',
                title: 'ESFJ',
                description: "You're the ESFJ "
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
                                <div>${title}</div>
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
                                ${description.favorite_things}<br>
                                ${description.jobs}<br>
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
    
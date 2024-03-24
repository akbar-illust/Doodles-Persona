const theDoodles = [
    {
        personality: {
            ISTJ: {
                image:'01ISTJ.png',
                title: 'ISTJ',
                description: "Nope :P Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum, nesciunt vero perferendis aperiam sint natus? Sit totam repellendus quidem."
            },
        }
    },
    {
        personality: {
            ISFJ: {
                image:'02ISFJ.png',
                description: "You're the ISFJ "
            },
        }
    },
    {
        personality: {
            ESTJ: {
                image:'03ESTJ.png',
                description: "You're the ESTJ "
            },
        }
    },
    {
        personality: {
            ESFJ: {
                image:'04ESFJ.png',
                description: "You're the ESFJ "
            },
        }
    },
    {
        personality: {
            ISTP: {
                image:'05ISTP.png',
                description: "You're the ISTP "
            },
        }
    },
    {
        personality: {
            ISFP: {
                image: '06ISFP.png',
                description: "You're the ISFP "
            },
        }
    },
    {
        personality: {
            ESTP: {
                image: '07ESTP.png',
                description: "You're the ESTP "
            },
        }
    },
    {
        personality: {
            ESFP: {
                image: '08ESFP.png',
                description: "You're the ESFP "
            },
        }
    },
    {
        personality: {
            INFJ: {
                image: '09INFJ.png',
                description: "You're the INFJ "
            },
        }
    },
    {
        personality: {
            INFP: {
                image: '10INFP.png',
                description: "You're the INFP "
            },
        }
    },
    {
        personality: {
            ENFJ: {
                image: '11ENFJ.png',
                description: "You're the ENFJ "
            },
        }
    },
    {
        personality: {
            ENFP: {
                image: '12ENFP.png',
                description: "You're the ENFP "
            },
        }
    },
    {
        personality: {
            INTJ: {
                image: '13INTJ.png',
                description: "You're the INTJ "
            },            
        }
    },
    {
        personality: {
            INTP: {
                image: '14INTP.png',
                description: "You're the INTP "
            },            
        }
    },
    {
        personality: {
            ENTP: {
                image: '15ENTP.png',
                description: "You're the ENTP "
            },            
        }
    },
    {
        personality: {
            ENTJ: {
                image: '16ENTJ.png',
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
                    const image = doodle.personality[personalityKey].image;
                    const description = doodle.personality[personalityKey].description;
                    
                    personalityContent += `
                    <div class="grid justify-center">
                        <div class="card bg-emerald-800 grid justify-center text-center p-5">
                            <img src="${image}" alt="${personalityKey}">
                            <p class="text-wrap">${description}</p>
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
    
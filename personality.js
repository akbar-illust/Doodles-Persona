const theDoodles = [
    {
        personality: {
            ISTJ: {
                image:'01ISTJ.png',
                text: "You're the ISTJ "
            },
        }
    },
    {
        personality: {
            ISFJ: {
                image:'02ISFJ.png',
                text: "You're the ISFJ "
            },
        }
    },
    {
        personality: {
            ESTJ: {
                image:'03ESTJ.png',
                text: "You're the ESTJ "
            },
        }
    },
    {
        personality: {
            ESFJ: {
                image:'04ESFJ.png',
                text: "You're the ESFJ "
            },
        }
    },
    {
        personality: {
            ISTP: {
                image:'05ISTP.png',
                text: "You're the ISTP "
            },
        }
    },
    {
        personality: {
            ISFP: {
                image: '06ISFP.png',
                text: "You're the ISFP "
            },
        }
    },
    {
        personality: {
            ESTP: {
                image: '07ESTP.png',
                text: "You're the ESTP "
            },
        }
    },
    {
        personality: {
            ESFP: {
                image: '08ESFP.png',
                text: "You're the ESFP "
            },
        }
    },
    {
        personality: {
            INFJ: {
                image: '09INFJ.png',
                text: "You're the INFJ "
            },
        }
    },
    {
        personality: {
            INFP: {
                image: '10INFP.png',
                text: "You're the INFP "
            },
        }
    },
    {
        personality: {
            ENFJ: {
                image: '11ENFJ.png',
                text: "You're the ENFJ "
            },
        }
    },
    {
        personality: {
            ENFP: {
                image: '12ENFP.png',
                text: "You're the ENFP "
            },
        }
    },
    {
        personality: {
            INTJ: {
                image: '13INTJ.png',
                text: "You're the INTJ "
            },            
        }
    },
    {
        personality: {
            INTP: {
                image: '14INTP.png',
                text: "You're the INTP "
            },            
        }
    },
    {
        personality: {
            ENTP: {
                image: '15ENTP.png',
                text: "You're the ENTP "
            },            
        }
    },
    {
        personality: {
            ENTJ: {
                image: '16ENTJ.png',
                text: "You're the ENTJ "
            },
        }
    },
]

function personalityDisplay() {
    function personalityDisplay() {
        const personalityElement = document.getElementById('personality');
        let personalityContent = '';
        
        for(const doodle of theDoodles) {
            if (doodle.personality !== undefined && doodle.personality !== null) {
                const personalityKey = Object.keys(doodle.personality)[0];
                
                if (personalityKey) {
                    const image = doodle.personality[personalityKey].image;
                    const text = doodle.personality[personalityKey].text;
                    
                    personalityContent += `
                        <div>
                            <img src="${image}" alt="${personalityKey}">
                            <p>${text}</p>
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
    
}
personalityDisplay()
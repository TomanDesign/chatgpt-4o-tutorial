const openAI = require('openai')
require('dotenv').config()

const openai = new openAI({apiKey: process.env.OPENAI_API_KEY})

async function getText() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                "role": "system",
                "content": "You are a helpfoul assisitant."
            },
            {
                "role": "user",
                "content":[
                    {
                        type: "text",
                        text : "What is the diferent between creatures?"
                    }, {
                        type: "image",
                        image_url: {
                            "url": "https://i.pinimg.com/originals/3e/d8/8e/3ed88edbab588459ad492a1f762d6abf.jpg"
                        }
                    }, {
                        type: "image",
                        image_url: {
                            "url": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f00904dc-5860-471f-9493-0ee3112f972d/dfhv0ji-b7840f70-255d-4d56-87f4-b85724071a6e.png/v1/fill/w_400,h_400,q_80,strp/duron4_cute_creature_in_forest_original_fantasy_ar_by_duronbcartoons_dfhv0ji-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwMDkwNGRjLTU4NjAtNDcxZi05NDkzLTBlZTMxMTJmOTcyZFwvZGZodjBqaS1iNzg0MGY3MC0yNTVkLTRkNTYtODdmNC1iODU3MjQwNzFhNmUucG5nIiwiaGVpZ2h0IjoiPD00MDAiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cL2YwMDkwNGRjLTU4NjAtNDcxZi05NDkzLTBlZTMxMTJmOTcyZFwvZHVyb25iY2FydG9vbnMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.r6e8h4pQU6urWPZ0pB7v6JMHi0QHwYDc_55HcKLTBy8"
                        }
                    }
                ]
            }

        ],
        model: "gpt-4o"
    })
    console.log(completion.choses[0].message.content)
}

getText()


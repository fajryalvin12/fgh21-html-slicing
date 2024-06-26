// navigation-bar-home

const menuButton = document.getElementById("menu")
        const nav = document.getElementById("nav")
        const navCenter = document.body.getElementsByClassName("menu-bar").item(0)
        const navRight = document.body.getElementsByClassName("button").item(0)
        menuButton.onclick = () => {
            if (navCenter.getAttribute("style")) {
                navCenter.removeAttribute("style")
            } else {
                navCenter.setAttribute("style", "display: none;")
            }

            if (navRight.getAttribute("style")) {
                navRight.removeAttribute("style")
            } else {
                navRight.setAttribute("style", "display: none;")
            }
        }

// footer-home
    const footer1 = document.getElementById("footer-1")
    const footer2 = document.getElementById("footer-2")
    const footer3 = document.getElementById("footer-3")

    function addContent (targetElement, content){
        content.forEach(item => {
            const textContainer = document.createElement("li")
            textContainer.textContent = item 
            targetElement.appendChild(textContainer)
        })
    }

const content = [
    ["About us", "Features", "Blog", "Payment", "Mobile Apps"],
    ["Booking", "Create Event", "Discover", "Register"],
    ["Partnership", "Help", "Terms of Service","Privacy Policy", "Sitemap"],
]

addContent(footer1, content[0])
addContent(footer2, content[1])
addContent(footer3, content[2])

//homepage event-list

    const events = [ 
        {
            title: "Meet and Greet with Antony",
            date: "Sat, 11 Jul, 10:00 AM",
            image: "./asset/images/event-3.jpg"
        },
        {
            title: "It's Mudryk Times",
            date: "Sun, 20 Aug, 10:00 AM",
            image: "./asset/images/event-4.jpg"
        },
        {
            title: "Darwin's Special Session",
            date: "Mon, 07 Sep, 10:00 AM",
            image: "./asset/images/event-5.jpg"
        },
        {
            title: "Meet 'Southgate' at Southgate",
            date: "Tue, 12 Mar, 10:00 AM",
            image: "./asset/images/event-6.jfif"
        }
    ]

    events.forEach(event => {
        const listEvents = document.getElementById("event-list")

        const eventsDisplay = document.createElement("div")
        eventsDisplay.classList.add("events-display")
    
        const img = document.createElement("img")
        img.setAttribute("src", event.image)
        img.setAttribute("alt", event.title)
    
        eventsDisplay.appendChild(img)
        
        const eventDetail = document.createElement("div")
        eventDetail.classList.add("event-details")
    
        const eventText = document.createElement("div")
        eventText.classList.add("event-text")
    
        const eventDate = document.createElement("div")
        eventDate.textContent = event.date
    
        eventText.appendChild(eventDate)
    
        const eventTitle = document.createElement("div")
        eventTitle.textContent = event.title
    
        eventText.appendChild(eventTitle)
    
        const person = document.createElement("div")
        person.classList.add("person")
    
        const personPic = [
            "./asset/images/avatar1.png",
            "./asset/images/avatar2.png",
            "./asset/images/avatar3.png",
            "./asset/images/avatar4.png",
        ] 
    
        personPic.forEach(link => {
            const picContainer = document.createElement("div")
            const pic = document.createElement("img")
            pic.setAttribute("src", link)
            pic.setAttribute("alt", "person")
            picContainer.appendChild(pic)
            person.appendChild(picContainer)
        })
    
        eventDetail.appendChild(eventText)
        eventDetail.appendChild(person)
    
        eventsDisplay.appendChild(eventDetail)
        
        listEvents.appendChild(eventsDisplay)
    })

   


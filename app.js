//MENU HANDLING

const menuToggle = document.querySelector(".menuToggle i")
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const main = document.querySelector("main")


const navList = document.querySelectorAll("nav li")

const navEvenElements = function ()
{
  let arr = []
  for (let i = 0; i < navList.length; i++)
  {
    if (i % 2 === 0) arr.push(navList[i])
  }

  return arr
}()

const navOddElements = function ()
{
  let arr = []
  for (let i = 0; i < navList.length; i++)
  {
    if (i % 2 != 0) arr.push(navList[i])
  }

  return arr
}()

navEvenElements.forEach(e => e.style.transform = "translateX(100%)")
navOddElements.forEach(e => e.style.transform = "translateX(-100%)")

navList.forEach(e => e.style.transition = "all 1s")
main.style.transition = "all 1s"


menuToggle.addEventListener("click", () =>
{

  if (body.classList.contains("menuOpen"))
  {
    setTimeout(function ()
    {
      nav.style.visibility = "hidden"
      body.classList = []
      menuToggle.className = "fas fa-bars"
    }, 1000)

    navEvenElements.forEach(e => e.style.transform = "translateX(100%)")
    navOddElements.forEach(e => e.style.transform = "translateX(-100%)")
    main.style.opacity = 1
  }
  else 
  {
    nav.style.visibility = "visible"

    setTimeout(function ()
    {
      menuToggle.className = "fas fa-times"
      body.classList.add("menuOpen")
    }, 1000)

    navList.forEach(e => e.style.transform = "translateX(0)")
    main.style.opacity = 0.5


  }
})

body.addEventListener("click", (event) =>
{
  if (event.target != menuToggle && body.classList.contains("menuOpen"))
  {
    setTimeout(function ()
    {
      nav.style.visibility = "hidden"
      body.classList = []
      menuToggle.className = "fas fa-bars"
    }, 1000)

    navEvenElements.forEach(e => e.style.transform = "translateX(100%)")
    navOddElements.forEach(e => e.style.transform = "translateX(-100%)")
    main.style.opacity = 1
  }
})


//PAGE OFFSET
const header = document.querySelector("header")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const logo = document.querySelector(".logo")


window.addEventListener("scroll", () =>
{
  header.style.transition = "all 1s"
  h1.style.transition = "all 1s"
  h2.style.transition = "all 1s"
  nav.style.transition = "all 1s"
  logo.style.transition = "all 1s"


  if (window.pageYOffset > 0)
  {
    header.style.height = "6rem"
    h1.style.transform = "translateY(-14rem)"
    h2.style.transform = "translateY(-14rem)"
    nav.style.transform = "translateY(-6rem)"
    h1.style.opacity = "0"
    h2.style.opacity = "0"
    logo.style.transform = "translateY(0)"
    logo.style.opacity = "1"

  }
  else
  {
    header.style.height = "14rem"
    h1.style.transform = "translateY(0)"
    h2.style.transform = "translateY(0)"
    nav.style.transform = "translateY(0)"
    h1.style.opacity = "1"
    h2.style.opacity = "1"
    logo.style.transform = "translateY(-6rem)"
    logo.style.opacity = "0"
  }
})

//LANG SWITCH
const englishLang =
{
  langswitch: "HU",
  h2: "Front-End Developer",
  section1Title: "About Me",
  section1Paragraph: "I'm a junior level developer, I create websites and web-applications. My basic needs involve caffeine and listening to music.",
  resumeLink: "Read my resume",

  section2Title: "Tech Stack",

  section3Title: "Projects",
  project1Title: "Personal website",
  project1Paragraph: "The site basically evolves as my coding skills grow. It contains every project that I did while learning to code and I write a blog about my journey.",
  project2Title: "Music player app",
  project2Paragraph: "A music player app, with which the user can create a playlist from the songs I like. Other songs can be added by pasting in YouTube links. The app works with.",
  project3Title: "Weather app",
  project3Paragraph: "A weather app that works with a web API. You can use it with location or you can search for a city. It also shows the local time of the searched location. Based on the browser's language the app can display the content in hungarian or in english.",

  footerTitle: "Contact"
}

const hunLang =
{
  langswitch: "EN",
  h2: "Front-End Fejlesztő",
  section1Title: "Rólam",
  section1Paragraph: "Junior szintű fejlesztő vagyok, weboldalakat és webes alkalmazásokat készítek. A koffein és a zenehallgatás az alapvető szükségleteim közé tartoznak.",
  resumeLink: "Nézd meg az önéletrajzom",

  section2Title: "Technológiák",

  section3Title: "Projektek",
  project1Title: "Személyes weoldal",
  project1Paragraph: "Az oldal lényegében velem együtt fejlődik. Tartalmaz minden projektet, amit tanulás közben készítettem és egy blogot is vezetek a folyamatról.",
  project2Title: "Zenejátszó alkalmazás",
  project2Paragraph: "Zenejátszó alkalmazás, amivel az általam kedvelt zenékből készíthet lejátszási listát a felhasználó. YouTube linkek bemásolásával saját zenék is hozzáadhatók a listához. Az app JavaScript-el működik (könyvtárak nélkül) és főleg DOM elemek manipulálásából áll.",
  project3Title: "Időjárás alkalmazás",
  project3Paragraph: "Időjárás alkalmazás, ami egy web API segítségével működik. Használható helymeghatározással vagy kereséssel is, és az aktuális város helyi idejét is mutatja. A böngésző nyelve alapján magyar vagy angol nyelvű az alkalmazás.",

  footerTitle: "Elérhetőség"
}

const langswitch = document.querySelector(".lang")
const nav1 = document.querySelectorAll("nav ul li a")[0]
const nav2 = document.querySelectorAll("nav ul li a")[1]
const nav3 = document.querySelectorAll("nav ul li a")[2]
const nav4 = document.querySelectorAll("nav ul li a")[3]
const section1Title = document.querySelector(".about h3")
const section1Paragraph = document.querySelector(".about p")
const resumeLink = document.querySelector(".resumeLink")
const section2Title = document.querySelector(".techStack h3")
const section3Title = document.querySelector(".projects h3")
const project1Title = document.querySelectorAll(".projects h4")[0]
const project1Paragraph = document.querySelectorAll(".projects p")[0]
const project2Title = document.querySelectorAll(".projects h4")[1]
const project2Paragraph = document.querySelectorAll(".projects p")[1]

const project3Title = document.querySelectorAll(".projects h4")[2]
const project3Paragraph = document.querySelectorAll(".projects p")[2]
const footerTitle = document.querySelector("footer h3")

const line = document.querySelector(".line")

langswitch.addEventListener("click", () =>
{
  if (langswitch.innerText === "EN")
  {
    h2.innerText = englishLang.h2
    nav1.innerText = englishLang.section1Title
    nav2.innerText = englishLang.section2Title
    nav3.innerText = englishLang.section3Title
    nav4.innerText = englishLang.footerTitle

    section1Title.innerText = englishLang.section1Title
    section1Paragraph.innerText = englishLang.section1Paragraph
    resumeLink.innerText = englishLang.resumeLink
    line.style.width = "7rem"
    section2Title.innerText = englishLang.section2Title
    section3Title.innerText = englishLang.section3Title
    project1Title.innerText = englishLang.project1Title
    project1Paragraph.innerText = englishLang.project1Paragraph
    project2Title.innerText = englishLang.project2Title
    project2Paragraph.innerText = englishLang.project2Paragraph
    project3Title.innerText = englishLang.project3Title
    project3Paragraph.innerText = englishLang.project3Paragraph
    footerTitle.innerText = englishLang.footerTitle
    langswitch.innerText = englishLang.langswitch
  }
  else
  {
    h2.innerText = hunLang.h2
    nav1.innerText = hunLang.section1Title
    nav2.innerText = hunLang.section2Title
    nav3.innerText = hunLang.section3Title
    nav4.innerText = hunLang.footerTitle

    section1Title.innerText = hunLang.section1Title
    section1Paragraph.innerText = hunLang.section1Paragraph
    resumeLink.innerText = hunLang.resumeLink
    line.style.width = "15rem"
    section2Title.innerText = hunLang.section2Title
    section3Title.innerText = hunLang.section3Title
    project1Title.innerText = hunLang.project1Title
    project1Paragraph.innerText = hunLang.project1Paragraph
    project2Title.innerText = hunLang.project2Title
    project2Paragraph.innerText = hunLang.project2Paragraph
    project3Title.innerText = hunLang.project3Title
    project3Paragraph.innerText = hunLang.project3Paragraph
    footerTitle.innerText = hunLang.footerTitle
    langswitch.innerText = hunLang.langswitch
  }

})
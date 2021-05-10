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
  section1Title: "About me",
  section1Paragraph: "I'm a junior level developer, I create websites and web-applications. My basic needs involve caffeine.",
  resumeLink: "Read my resume",

  section2Title: "Tech Stack",

  section3Title: "Some of my Projects",
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
  section1Paragraph: "Junior szintű fejlesztő vagyok, weboldalakat és webes alkalmazásokat készítek. A koffein az alapvető szükségleteim közé tartozik.",
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

langswitch.addEventListener("click", () =>
{

})
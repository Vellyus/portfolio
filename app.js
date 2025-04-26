//MENU HANDLING

const menuToggle = document.querySelector(".menuToggle i")
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const main = document.querySelector("main")


const navList = document.querySelectorAll("nav li")

const navEvenElements = function () {
  let arr = []
  for (let i = 0; i < navList.length; i++) {
    if (i % 2 === 0) arr.push(navList[i])
  }

  return arr
}()

const navOddElements = function () {
  let arr = []
  for (let i = 0; i < navList.length; i++) {
    if (i % 2 != 0) arr.push(navList[i])
  }

  return arr
}()

navEvenElements.forEach(e => e.style.transform = "translateX(100%)")
navOddElements.forEach(e => e.style.transform = "translateX(-100%)")

navList.forEach(e => e.style.transition = "all 1s")
main.style.transition = "all 1s"


menuToggle.addEventListener("click", () => {

  if (body.classList.contains("menuOpen")) {
    setTimeout(function () {
      nav.style.visibility = "hidden"
      body.classList = []
      menuToggle.className = "fas fa-bars"
    }, 1000)

    navEvenElements.forEach(e => e.style.transform = "translateX(100%)")
    navOddElements.forEach(e => e.style.transform = "translateX(-100%)")
    main.style.opacity = 1
  }
  else {
    nav.style.visibility = "visible"

    setTimeout(function () {
      menuToggle.className = "fas fa-times"
      body.classList.add("menuOpen")
    }, 1000)

    navList.forEach(e => e.style.transform = "translateX(0)")
    main.style.opacity = 0.5


  }
})

body.addEventListener("click", (event) => {
  if (event.target != menuToggle && body.classList.contains("menuOpen")) {
    setTimeout(function () {
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


window.addEventListener("scroll", () => {
  header.style.transition = "all 1s"
  h1.style.transition = "all 1s"
  h2.style.transition = "all 1s"
  nav.style.transition = "all 1s"
  logo.style.transition = "all 1s"


  if (window.pageYOffset > 0) {
    header.style.height = "6rem"
    h1.style.transform = "translateY(-14rem)"
    h2.style.transform = "translateY(-14rem)"
    nav.style.transform = "translateY(-6rem)"
    h1.style.opacity = "0"
    h2.style.opacity = "0"
    logo.style.transform = "translateY(0)"
    logo.style.opacity = "1"

  }
  else {
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
  h1: "Gábor Szalai",
  h2: "Front-End Developer",
  section1Title: "About Me",
  section1Paragraph: "I work in front-end development, mainly with modern technologies like React, Next.js, and Tailwind. I’ve gained experience through personal projects and team collaborations, where not only coding but also problem-solving and teamwork played a key role. As a junior developer, I’m constantly expanding my knowledge and enjoy learning new things, whether it’s about technologies or workflows. I find it important to create clean solutions, pay attention to details, and write code that’s not only functional but also easy to understand.",
  resumeLink: "Read my resume",
  resumeSource: "resume_english.pdf",

  section2Title: "Tech Stack",
  techSection1: "Frontend development",
  techSection2: "Backend & Databases",
  techSection3: "Design & Prototyping",
  techSection4: "Tools & Workflow",
  techSection5: "Hosting & Deployment",

  section3Title: "Projects",
  project1Title: "Frontender",
  project1Paragraph: "A site offering frontend courses. Users can register and subscribe to courses, which include text, images, and video content.The site is under development, and I’m working on it with my mentor. This is a much larger and more complex project compared to my previous ones, and it’s also the first time I worked with someone else(stories in Notion, pull requests on GitHub).Some of the more complex stories I wrote: password reset handling, course navigation on mobile view, event calendar, various text and image blocks, bug fixes. \n (The code is in a private GitHub repository.)",
  project2Title: "Blog with admin panel",
  project2Paragraph: "A blog where the owner can register and log into an admin panel to edit content. The number of users is limited in Firebase. This was the first project where I implemented custom authentication and pagination. Currently, only one image can be uploaded per blog post. The app could be enhanced by allowing multiple image uploads and replacing the HTML-based content entry with a rich text editor.",
  project3Title: "Notebook",
  project3Paragraph: "Full-stack application for note-taking with a custom domain and SSL certification. The biggest challenges during development were using the Google API for authentication and setting up hosting on DigitalOcean.",
  project4Title: "Personal website",
  project4Paragraph: "The site basically evolves as my coding skills grow. It contains every project that I did while learning to code and I write a blog about my journey.",

  linktitle_github: "View code",
  linktitle_website: "Visit website",

  footerTitle: "Contact"
}

const hunLang =
{
  langswitch: "EN",
  h1: "Szalai Gábor",
  h2: "Front-End Fejlesztő",
  section1Title: "Rólam",
  section1Paragraph: "Front-end fejlesztéssel foglalkozom, főleg modern technológiákkal, mint a React, Next.js és Tailwind. Saját projekteken és csapatmunkákban szereztem tapasztalatot, ahol nemcsak a kódolás, hanem a problémamegoldás és az együttműködés is kulcsszerepet kapott.Junior fejlesztőként folyamatosan bővítem a tudásom, szeretek új dolgokat tanulni, legyen szó technológiákról vagy munkafolyamatokról.Fontosnak tartom a letisztult megoldásokat, a részletekre figyelést és azt, hogy a kód ne csak működjön, hanem átlátható is legyen.",
  resumeLink: "Nézd meg az önéletrajzom",
  resumeSource: "resume.pdf",


  section2Title: "Technológiák",
  techSection1: "Frontend fejlesztés",
  techSection2: "Backend és adatbázisok",
  techSection3: "Tervezés és prototípus készítés",
  techSection4: "Eszközök és munkafolyamatok",
  techSection5: "Tárhely és üzemeltetés",

  section3Title: "Projektek",
  project1Title: "Frontender",
  project1Paragraph: "Frontend kurzusokat tartalmazó oldal. A felhasználó regisztrálhat, majd előfizethet kurzusokra, amik szöveges-képes és videós tartalmakat is magukba foglalnak. Az oldal fejlesztés alatt áll, a mentorommal dolgozunk rajta. Ez a korábbiakhoz képest jóval nagyobb és komplexebb projekt, valamint ezen dolgoztam együtt valakivel először (story-k Notion-ben és pull requestek Github-on). Néhány bonyolultabb story, amiket én írtam: elfelejtett jelszó kezelése, kurzus navigáció mobil nézeten, eseménynaptár, különféle szöveges és képes blockok, bug javítások. \n (A kód privát GitHub tárban van.)",
  project2Title: "Blog admin felülettel",
  project2Paragraph: "Blog, aminek a tulajdonosa egy admin felületre regisztrálva, majd belépve szerkesztheti a tartalmat. Firebase-ben korlátozva van a felhasználók száma. Ezen a projekten írtam először saját autentikációt és foglalkoztam lapozhatósággal. Jelenleg egy blog bejegyzéshez csak egy képet lehet feltölteni. Több kép feltöltésével és a tartalom HTML-ben való megadása helyett egy szövegszerkesztővel lehetne bővíteni az alkalmazást.",
  project3Title: "Notebook",
  project3Paragraph: "Full stack alkalmazás jegyzetelésre saját domain névvel és SSL certifikációval. A Google API használata az autentikációhoz és a DigitalOcean-ön való hostolás megoldása jelentették a legnyagyobb kihívást a fejlesztés során.",
  project4Title: "Személyes weoldal",
  project4Paragraph: "Az oldal lényegében velem együtt fejlődik. Tartalmaz minden projektet, amit tanulás közben készítettem és egy blogot is vezetek a folyamatról.",

  linktitle_github: "Kód megtekintése",
  linktitle_website: "Weboldal megtekintése",


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
const techSection1 = document.querySelectorAll(".techStack h4")[0]
const techSection2 = document.querySelectorAll(".techStack h4")[1]
const techSection3 = document.querySelectorAll(".techStack h4")[2]
const techSection4 = document.querySelectorAll(".techStack h4")[3]
const techSection5 = document.querySelectorAll(".techStack h4")[4]
const section3Title = document.querySelector(".projects h3")
const project1Title = document.querySelectorAll(".projects h4")[0]
const project1Paragraph = document.querySelectorAll(".projects p")[0]
const project2Title = document.querySelectorAll(".projects h4")[1]
const project2Paragraph = document.querySelectorAll(".projects p")[1]

const project3Title = document.querySelectorAll(".projects h4")[2]
const project3Paragraph = document.querySelectorAll(".projects p")[2]
const project4Title = document.querySelectorAll(".projects h4")[3]
const project4Paragraph = document.querySelectorAll(".projects p")[3]


const githubLinks = document.querySelectorAll(".githubLink")
const websiteLinks = document.querySelectorAll(".websiteLink")

const footerTitle = document.querySelector("footer h3")

const line = document.querySelector(".line")

langswitch.addEventListener("click", () => {
  if (langswitch.innerText === "EN") {
    h1.innerText = englishLang.h1
    h2.innerText = englishLang.h2
    nav1.innerText = englishLang.section1Title
    nav2.innerText = englishLang.section2Title
    nav3.innerText = englishLang.section3Title
    nav4.innerText = englishLang.footerTitle

    section1Title.innerText = englishLang.section1Title
    section1Paragraph.innerText = englishLang.section1Paragraph
    resumeLink.innerText = englishLang.resumeLink
    resumeLink.href = englishLang.resumeSource
    line.style.width = "7rem"
    section2Title.innerText = englishLang.section2Title
    techSection1.innerText = englishLang.techSection1
    techSection2.innerText = englishLang.techSection2
    techSection3.innerText = englishLang.techSection3
    techSection4.innerText = englishLang.techSection4
    techSection5.innerText = englishLang.techSection5
    section3Title.innerText = englishLang.section3Title
    project1Title.innerText = englishLang.project1Title
    project1Paragraph.innerText = englishLang.project1Paragraph
    project2Title.innerText = englishLang.project2Title
    project2Paragraph.innerText = englishLang.project2Paragraph
    project3Title.innerText = englishLang.project3Title
    project3Paragraph.innerText = englishLang.project3Paragraph
    project4Title.innerText = englishLang.project4Title
    project4Paragraph.innerText = englishLang.project4Paragraph
    githubLinks.forEach(e => e.title = englishLang.linktitle_github)
    websiteLinks.forEach(e => e.title = englishLang.linktitle_website)
    footerTitle.innerText = englishLang.footerTitle
    langswitch.innerText = englishLang.langswitch
  }
  else {
    h1.innerText = hunLang.h1
    h2.innerText = hunLang.h2
    nav1.innerText = hunLang.section1Title
    nav2.innerText = hunLang.section2Title
    nav3.innerText = hunLang.section3Title
    nav4.innerText = hunLang.footerTitle

    section1Title.innerText = hunLang.section1Title
    section1Paragraph.innerText = hunLang.section1Paragraph
    resumeLink.innerText = hunLang.resumeLink
    resumeLink.href = hunLang.resumeSource
    line.style.width = "15rem"
    section2Title.innerText = hunLang.section2Title
    techSection1.innerText = hunLang.techSection1
    techSection2.innerText = hunLang.techSection2
    techSection3.innerText = hunLang.techSection3
    techSection4.innerText = hunLang.techSection4
    techSection5.innerText = hunLang.techSection5
    section3Title.innerText = hunLang.section3Title
    project1Title.innerText = hunLang.project1Title
    project1Paragraph.innerText = hunLang.project1Paragraph
    project2Title.innerText = hunLang.project2Title
    project2Paragraph.innerText = hunLang.project2Paragraph
    project3Title.innerText = hunLang.project3Title
    project3Paragraph.innerText = hunLang.project3Paragraph
    project4Title.innerText = hunLang.project4Title
    project4Paragraph.innerText = hunLang.project4Paragraph
    githubLinks.forEach(e => e.title = hunLang.linktitle_github)
    websiteLinks.forEach(e => e.title = hunLang.linktitle_website)
    footerTitle.innerText = hunLang.footerTitle
    langswitch.innerText = hunLang.langswitch
  }

})
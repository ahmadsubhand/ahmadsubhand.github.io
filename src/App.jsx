import { useState } from "react"

function App({ isDark }) {
  return (
    <div className="bg-white relative dark:bg-[#030712]">
      
      <Header isDark={isDark} />
      <Main />
      <Footer />
    </div>
  )
}

function Header({ isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDark);

  const sidebar = document.querySelector('#sidebar');

  function handleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleTheme() {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkTheme(true);
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add("dark");
    }
  }

  function handleClickOutside(e) {
    if (!(e.target === sidebar)) return
    setIsMenuOpen(false);
  }

  return (
    <header className="px-4 py-4 w-full flex justify-between items-center lg:px-28">
      <Logo fontSize={'text-3xl'}/>
      <Button onClick={handleOpenMenu} className={'lg:hidden'}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      
      <nav 
        className={`${isMenuOpen ? 'fixed' : 'hidden'} w-full h-screen top-0 left-0 bg-gray-900/10 z-10 dark:bg-white/10 lg:block lg:static lg:w-fit lg:h-fit`}
        id="sidebar" onClick={(e) => handleClickOutside(e)}
      >
        <div className="w-80 h-full bg-white absolute top-0 right-0 dark:bg-[#030712] lg:static lg:w-full lg:flex lg:items-center gap-6">
          <div className="flex p-4 justify-between items-center border-b-gray-100 border-b dark:border-b-[#1F2937] lg:hidden">
            <Logo fontSize={'text-2xl'} />
            <Button onClick={handleOpenMenu}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </div>

          <NavMenu handleOpenMenu={handleOpenMenu} />

          <div className="hidden lg:block w-[1px] h-6 bg-gray-100 dark:bg-[#1F2937]"></div>

          <div className="flex flex-col p-4 gap-4 lg:flex-row lg:p-0">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 font-normal text-base dark:text-[#D1D5DB] lg:hidden">Switch Theme</p>
              <Button onClick={handleTheme} className={'dark:hidden'}>
                <i className="fa-regular fa-sun"></i>
              </Button>
              <Button onClick={handleTheme} className={'hidden dark:block'}>
                <i className="fa-solid fa-circle-half-stroke"></i>
              </Button>
            </div>
            <button className="w-full py-1.5 px-4 rounded-xl bg-gray-900 text-gray-50 font-medium text-base hover:bg-gray-700 active:bg-gray-800 cursor-pointer dark:text-[#111827] dark:bg-[#F9FAFB] dark:hover:bg-[#E5E7EB] dark:active:bg-[#F3F4F6]">
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function Logo({ fontSize }) {
  return (
    <div className={`text-gray-900 font-bold ${fontSize} dark:text-[#F9FAFB]`}>&lt;ASD /&gt;</div>
  )
}

function NavMenu({ handleOpenMenu }) {
  const menus = ["About", "Skills", "Projects", "Contact"];

  return (
    <ul className="flex flex-col p-4 gap-4 border-b-gray-100 border-b dark:border-b-[#1F2937] lg:flex-row lg:border-0 lg:gap-6 lg:p-0">
      {menus.map((menu, key) => {
        return (
          <li className="text-gray-600 hover:text-gray-900 active:text-gray-600 font-medium text-base dark:text-[#D1D5DB] dark:hover:text-[#F9FAFB] dark:active:text-[#D1D5DB]" key={key}>
            <a onClick={handleOpenMenu} href={`#${String(menu).toLowerCase()}`}>
              {`${String(menu).charAt(0).toUpperCase()}${String(menu).slice(1)}`} {/* Capitalize */}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function Button({ children, onClick, className }) {
  return (
    <button className={`${className} text-gray-600 text-2xl px-2 pt-1 pb-0.5 hover:bg-gray-100 rounded-lg active:bg-gray-200 cursor-pointer dark:text-[#D1D5DB] dark:hover:bg-[#1F2937] dark:active:bg-[#374151]`} onClick={onClick}>
      {children}
    </button>
  )
}

function ButtonLink({ children, href, className }) {
  return (
    <a href={href} className={`${className} text-2xl px-2 pt-1 pb-0.5 text-gray-600 hover:bg-gray-100 rounded-lg active:bg-gray-200 cursor-pointer dark:text-[#D1D5DB] dark:hover:bg-[#1F2937] dark:active:bg-[#374151]`} target="_blank">
      {children}
    </a>
  )
}

function Main() {
  return (
    <main>
      <Section className={'lg:px-28 lg:flex-row-reverse items-center'}>
        <MainImage 
          source={'profil1.webp'}
          alternate={'First photo profile'}
          className1={'w-70 h-70 bg-gray-200 border-8 border-white mx-auto mt-5 dark:border-[#030712] dark:bg-[#374151] lg:ml-auto lg:mx-0 lg:w-70 lg:h-80 lg:mt-10'}
          className2={'w-60 h-70 border-8 border-white absolute top-0 left-[50%] -translate-x-1/2 dark:border-[#030712] lg:right-0 lg:left-auto lg:-translate-x-10 lg:w-70 lg:h-80'}
        />

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 font-semibold text-4xl dark:text-[#F9FAFB] lg:text-6xl">Hi, I&apos;m Subhan 👋</h1>
            <p className="text-gray-600 text-base dark:text-[#D1D5DB]">I&apos;m a student of IPB University majoring in Computer Science. I have learned Web Development since I was in high school, especially about frontend. Currently, I&apos;ve been diving deeper into backend development while still exploring new things in frontend, especially with React. I&apos;m always eager to expand my skills and take on new challenges in software development.</p>
          </div>

          <div className="flex flex-col gap-2">
            <HeroMore content={'Jakarta, Indonesia'}>
              <i className="text-2xl text-gray-600 dark:text-[#D1D5DB] fa-solid fa-location-dot"></i>
            </HeroMore>
            <HeroMore content={'Active student'}>
              <i className="text-xs text-[#10B981] fa-solid fa-circle mx-1"></i>
            </HeroMore>
          </div>

          <Platforms />
        </div>
      </Section>

      <Section id={'about'} className={'lg:px-28'}>
        <Title title={'About me'}/>
        <Wrapper className={'lg:flex-row'}>
          <MainImage 
            source={'profil2.webp'}
            alternate={'Second photo profile'}
            className1={'w-80 h-90 bg-gray-200 border-8 border-gray-50 mx-auto mt-5 dark:border-[#111827] dark:bg-[#374151] lg:mr-auto lg:mx-0 lg:w-100 lg:h-120 lg:mt-10'}
            className2={'w-70 h-90 border-8 border-gray-50 absolute top-0 left-[50%] -translate-x-1/2 dark:border-[#111827] lg:left-0 lg:translate-x-10 lg:w-100 lg:h-120'}
          />

          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-gray-900 font-semibold text-2xl dark:text-[#F9FAFB] lg:text-3xl">Curious about me? Here you have it:</h3>
            <div className="flex flex-col gap-4 text-gray-600 font-normal text-base dark:text-[#D1D5DB]">
              <p>
                I&apos;m a student, so I have lots of time to learn new things. Even though studying a lot is tiring,
                I always try to keep the focus and spirit, like imagine who I want to be in the future. Besides that,
                I like to know about technological development, especially programming. 
                So I don&apos;t get bored easily when studying.
              </p>
              <p>
                I started coding when I was in high school, that&apos;s around 2019. 
                When I wanted to start learning programming, I was very confused about the various things I could learn there. 
                Until I found a video on YouTube that told important benefits from learning web programming. 
                Such as creating a portofolio to promote ourselves and projects that we have created easily.
              </p>
              <p>
                One day, I was given a campus assignment to build a website. 
                That was the moment I discovered the excitement of developing a system, especially translating real-world problems 
                and business processes into a structured database schema. Django was my first weapon of choice. 
                Even though I had never learned Python before, my solid foundation in programming made the language transition seamless. 
                I chose Django due to its rapid development capabilities, which were crucial given the tight deadline,
                unlike other frameworks that require a deeper understanding of behind-the-scenes processes.
              </p>
              <p>
                Now, I&apos;m diving deeper into backend development with Express, 
                as JavaScript remains my primary language of expertise.
                One last thing, if you want to know about becoming a Computer Science student at IPB University, 
                I&apos;m available to share my experience. So feel free to reach out and say hello in my social media. Cya 😉
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section id={'skills'}>
        <div className="w-full flex flex-col gap-6">
          <Title title={'Skills'} subtitle={'The skills, tools and technologies I am really good at:'} />
          <Skills />
        </div>
      </Section>

      <Section id={'projects'}>
        <div className="w-full flex flex-col gap-6 lg:px-8">
          <Title title={'Projects'} subtitle={'Some of projects I have built:'} />
          <Projects />
        </div>
      </Section>

      <Section id={'contact'}>
        <div className="w-full flex flex-col items-center gap-6 lg:gap-12">
          <Title title={'Get in touch'} subtitle={'What\'s next? Feel free to reach out to me if you\'re looking for a developer, have a query, or simply want to connect.'} className={'text-xl'} />
          <Contact />
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-600 font-normal text-base dark:text-[#D1D5DB]">You may also find me on these platforms!</p>
            <Platforms />
          </div>
        </div>
      </Section>
    </main>
  )
}

function Section({ children, id, className }) {
  return (
    <section className={`${className} px-4 py-16 flex flex-col gap-12 odd:bg-white even:bg-gray-50 dark:odd:bg-[#030712] dark:even:bg-[#111827] lg:px-20 lg:py-24`} id={id}>
      {children}
    </section>
  )
}

function Wrapper({ children, className }) {
  return (
    <div className={`${className} flex flex-col gap-12`}>
      {children}
    </div>
  )
}

function MainImage({ source, alternate, className1, className2 }) {
  return (
    <div className="w-full relative">
      <div className={`${className1}`}></div>
      <div className={`${className2}`}>
        <img src={source} alt={alternate} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

function HeroMore({ children, content }) {
  return (
    <div className="flex gap-2 items-center">
      {children}
      <p className="text-gray-600 text-base dark:text-[#D1D5DB]">{content}</p>
    </div>
  )
}

function Title({ title, subtitle, className }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="py-1 px-5 bg-gray-200 rounded-xl font-medium text-sm text-gray-600 w-fit mx-auto dark:text-[#D1D5DB] dark:bg-[#374151]">{title}</h2>
      {subtitle && <p className={`${className} text-gray-600 font-normal text-lg text-center dark:text-[#D1D5DB] lg:text-xl`}>{subtitle}</p>}
    </div>
  )
}

function Skills() {
  const skills = [
    {
      name: 'Tailwindcss',
      src: 'tailwindcss.svg',
      alt: 'tailwindcss',
      href: 'https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss'
    },
    {
      name: 'React',
      src: 'react.svg',
      alt: 'react',
      href: 'https://icons8.com/icon/123603/react-native'
    },
    {
      name: 'Django',
      src: 'django.svg',
      srcDark: 'django-2.svg',
      alt: 'django',
      href: 'https://icons8.com/icon/qV-JzWYl9dzP/django',
    },
    {
      name: 'Express.js',
      src: 'express-js.svg',
      srcDark: 'express-js-2.svg',
      alt: 'express-js',
      href: 'https://icons8.com/icon/SDVmtZ6VBGXt/express-js',
    },
    {
      name: 'Prisma ORM',
      src: 'prisma-orm.svg',
      alt: 'prisma-orm',
      href: 'https://icons8.com/icon/zJh5Gyrd6ZKu/prisma-orm'
    },
    {
      name: 'PostgreSQL',
      src: 'postgresql.svg',
      alt: 'postgresql',
      href: 'https://icons8.com/icon/38561/postgresql'
    },
  ]

  return (
    <ul className="grid grid-cols-3 gap-4 lg:grid-cols-6">
      {skills.map((skill, key) => (
        <li className="h-24 flex flex-col justify-between items-center lg:h-26" key={key}>
          {skill.srcDark ? (
            <>
              <img className="h-16 dark:hidden" src={skill.src} alt={skill.alt} />
              <img className="h-16 hidden dark:block" src={skill.srcDark} alt={skill.alt} />
              <a className="text-gray-600 font-normal text-base dark:text-[#D1D5DB] lg:text-lg" target="_blank" href={skill.href}>{skill.name}</a>
            </>
          ) : (
            <>
              <img className="h-16" src={skill.src} alt={skill.alt} />
              <a className="text-gray-600 font-normal text-base dark:text-[#D1D5DB] lg:text-lg" target="_blank" href={skill.href}>{skill.name}</a>
            </>
          )}  
        </li>
      ))}
    </ul>
  )
}

function Projects() {
  const projects = [
    {
      name: 'AirHopper',
      src: 'airhopper.webp',
      alt: 'air hopper',
      desc: 'A flight ticket booking website. This project is a result of the learning activities in Binar Academy MBKM conducted in 2024. The project was completed in one month with a team of four frontend and four backend developers. I played a role as a backend developer, primarily handling authentication and database design. The backend tech stack includes Express with Prisma ORM and PostgreSQL as the database.',
      tags: ['Express.js', 'Prisma ORM', 'PostgreSQL', 'JWT', 'Google OAuth', 'ImageKit', 'Swagger', 'Jest'],
      href: 'https://airhopper.padek.tech/',
      github: 'https://github.com/AirHopper/'
    },
  ]
  return (
    <ul className="flex flex-col flew-wrap gap-6 lg:gap-12">
      {projects.map((project, key) => (
        <li className="overflow-hidden rounded-xl shadow-md lg:flex lg:even:flex-row-reverse" key={key}>
          <div className="w-full h-64 p-8 bg-gray-200 dark:bg-[#374151] lg:p-12 lg:h-120 ">
            <img src={project.src} alt={project.alt} className="w-full h-full object-cover rounded-xl drop-shadow-lg"/>
          </div>

          <div className="flex flex-col gap-6 px-8 py-8 bg-white dark:bg-[#030712] lg:p-12 lg:w-full">
            <h3 className="text-gray-900 font-semibold text-lg dark:text-[#F9FAFB] lg:text-xl">{project.name}</h3>
            <p className="text-gray-600 font-normal text-base dark:text-[#D1D5DB]">{project.desc}</p>
            <ul className="flex gap-2 flex-wrap">
              {project.tags.map((tag, key) => (
                <li className="px-5 py-1 bg-gray-200 text-gray-600 font-medium text-sm rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB]" key={key}>{tag}</li>
              ))}
            </ul>
            <div className="flex gap-2">
              <ButtonLink href={project.github} className={'w-fit'}>
                <i className="fa-brands fa-github"></i>
              </ButtonLink>
              <ButtonLink href={project.href} className={'w-fit'}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </ButtonLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Contact() {
  const contacts = [
    {
      name: 'asdcode@gmail.com',
      class: 'fa-envelope'
    },
    {
      name: '+62 895331741078',
      class: 'fa-phone'
    },
  ]

  return (
    <ul className="flex flex-col items-center">
      {contacts.map((contact, key) => (
        <li className="relative flex items-center gap-4 lg:gap-5" key={key}>
          <i className={`text-gray-600 text-2xl px-1.5 py-1.5 dark:text-[#D1D5DB] lg:text-3xl fa-solid ${contact.class}`}></i>
          <p className="text-gray-900 font-semibold text-lg dark:text-[#F9FAFB] lg:text-4xl">{contact.name}</p>
          <Button onClick={(e) => copy(e)}>
            <i className="fa-solid fa-copy lg:text-3xl"></i>
          </Button>
          <div className="hidden right-10 bg-gray-200 text-gray-600 text-xs pl-2 pr-1.5 py-1.5 rounded-xl rounded-bl-3xl lg:text-sm lg:-right-20 lg:rounded-bl-xl lg:rounded-br-3xl lg:pl-1.5 lg:pr-2">Copied!</div>
        </li>
      ))}
    </ul>
  )

  function copy(e) {
    const textToCopy = e.currentTarget.parentElement.querySelector('p').textContent;
    const div = e.currentTarget.parentElement.querySelector('div');

    navigator.clipboard.writeText(textToCopy);
    div.classList.add('absolute');
    div.classList.remove('hidden');
    
    setTimeout(() => {
      div.classList.remove('absolute');
      div.classList.add('hidden');
    }, 2000)
  }
}

function Platforms() {
  const platforms = [
    {
      name: 'github',
      href: 'https://github.com/ahmadsubhand'
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/ahmadsubhand'
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/ahmadsubhand/'
    },
  ];

  return (
    <ul className="flex flex-wrap gap-1">
      {platforms.map((platform, key) => (
        <li key={key}>
          <ButtonLink className={''} href={platform.href}>
            <i className={`fa-brands fa-${platform.name}`}></i>
          </ButtonLink>
        </li>
      ))}
    </ul>
  )
}

function Footer() {
  return (
    <footer className="px-4 py-6 flex flex-col gap-12 bg-gray-50 dark:bg-[#111827]">
      <p className="text-gray-600 font-normal text-sm text-center dark:text-[#D1D5DB]">
        <i className="mr-2 fa-regular fa-copyright"></i>
        2025 | Coded by Ahmad Subhan D
      </p>
    </footer>
  )
}

export default App

const blogs = [
    {
      "title": "Hacker News",
      "img": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2xUbynPb33CHkOPI-ar4YA.png",
      "desc": "It was 2007 when Paul Graham, a world-renowned technology expert, decided to dedicate himself to cybersecurity by creating a special blog. Initially, the website appeared to be a platform for regular news related to online security. It also aimed to make users more aware of online security.\n\nToday, the platform gathers millions of views each month and has more than three million subscribers on social networks. Currently, this blog deserves the title of one of the most professional resources, which covers security on the Internet, keeping users informed about the latest developments and technologies in the industry. Among the readers of the blog are both top-class experts and amateurs who are simply interested in the issue."
    },
    {
      "title": "DEV",
      "img": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DewhefHYHYeid4HIGwWnLA.png",
      "desc": "There is probably no IT expert who has not dealt with the DEV community, dedicated to many fields of programming and development. The platform is attractive to both newcomers and true professionals of the industry.\n\nThe community is growing very fast, offering users a huge variety of activities, including communication in the forum as well as access to special help sections, tutorials, tips, and the latest industry news. By reaching out to the Dev community, you’re sure to get a professional and in-depth answer to anything that interests you. If you want to learn as much as you can about development, this is the perfect place."
    },
    {
      "title": "Hackr.io",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Qh-B_ouyrhifbAZbIOHPBg.png",
      "desc": "This website is a platform where users advise on various educational courses related to software development. This blog is just a treasure trove of valuable information for IT fans since you can find helpful tutorials and guides for programmers here. It’s worth noting that if you’re interested in a particular programming language, this blog can be a bit confusing, as the authors publish materials related to any aspect of the info-technology world. Still, you can learn much about different frameworks for both web and mobile development, Java projects, software testing, and much more."
    },
    {
      "title": "Hackernoon",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*gGvfCd41EU0M_myPz8XWcw.png",
      "desc": "Hacker Noon has a very wide range of activities. It is a portal that tackles issues related to technology, software development, cryptocurrencies, and blockchain technology. You can find mostly technical articles that provide really interesting insights.\n\nToday, Hacker Noon has more than four million visitors per month, the publication gets 100% of its revenue from advertising, and readers help optimize the platform with blockchain-based features, for example, storing comments in their browsers so that Hacker Noon can save on resources. This platform is quite popular among technical specialists and tech fans, as it is an independent resource dedicated to sharing any kind of technology news stories and expert opinions."
    },
    {
      "title": "FreeCodeCamp",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*MUSJfsFV2VzHBzta6Eub7w.png",
      "desc": "This platform emerged back in 2014 as a nonprofit organization, becoming one of the best free programming platforms for learning code and web development. Along with training courses, users can discuss projects with other members of the community and use this website to get ready for job openings as a developer.\n\nThe key advantage of using freeCodeCamp is that the learning process is divided into modules, which makes your experience easy and fun, and at the end of the training program, you can also get certificates in programming that can help you get a job as a developer."
    },
    {
      "title": "HoneyPot.cult",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*sVlIEfM-pislkENnMxnFSA.png",
      "desc": "When you visit the HoneyPot .cult blog, you will see that it is full of various stories from the life of developers, which can provide you with plenty of interesting and original ideas.\n\nThis blog will appeal to both software developers and businesses who want to create and choose the proper software solutions. There are many categories available here, covering careers, coding, and offering users a variety of guides, such as “What is open-source software?” The content of the blog is constantly updated, which will surely turn you into a keen user of this platform."
    },
    {
      "title": "The Daily WTF",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*e9QaKuPx9qiSyICb8p0fnw.png",
      "desc": "The Daily WTF is an ironic blog run by pro developer Alex Papadimoulis. In his words, the blog is about what to avoid when developing software. Alex shares stories of devastating cases, including projects that went wrong and quite ridiculous decisions on coding.\n\nThis platform will be a goldmine for newcomers in the industry, helping to avoid embarrassing decisions and mistakes. If you want to enjoy an unforgettable evening reading real-life stories from an experienced programmer, then this is a place you’ll definitely like."
    },
    {
      "title": "Sitepoint",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*lriyOt_UQNaTc5GdNErEow.png",
      "desc": "If you’re looking for a large and friendly online community of web developers from around the world, then check out this blog. Here you’ll find plenty of classes on coding and web programming languages. The site covers a lot of web development and programming topics, which will allow you to improve your coding in a short time. Here you can find a lot of useful information and where you can benefit from learning from the best experts in the field."
    },
    {
      "title": "David Walsh Blog",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*o5axNYVDt1n-nExV-alf2Q.png",
      "desc": "It is of the most well-known personal blogs run by a single developer. He is a senior web developer and front-end engineer, providing Internet users with the coolest programming tutorials. If you’re in search of tutorials to improve your coding and web development skills, this blog is the best place to start with. The great thing about using this blog is that you will see real examples of the programming world. You can also find free trial versions of the software in his blog."
    },
    {
      "title": "Sessionstack",
      "img": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5l_WX7qCVrbj5Gk-wK705g.png",
      "desc": "SessionStack is a Bulgarian software company founded in 2016 that offers the same name software product. They launched its own corporate blog where they share articles devoted to various programming topics with users. Moreover, each article is supplemented with clear illustrations and infographics, which help to perceive the information better visually."
    },
    {
      "title": "The Netflix Tech Blog",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Elmi_A2kzCQR80vF-3T9Ow.png",
      "desc": "Today, there is probably no one who hasn’t heard about Netflix. Besides the streaming service, the company runs a special blog on Medium, which will be useful for developers and IT specialists.\n\nHere you’ll learn about Netflix’s world-class developments, company culture, product innovation, and much more. The blog covers topics ranging from product development and engineering advances to how they’ve embraced microservices architecture."
    },
    {
      "title": "The Airbnb Tech Blog",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*DdylBjsQvKySynLoXl3lzQ.png",
      "desc": "The $35 billion short-term rental service runs a blog which ranks among the world’s most popular corporate blogs. The platform is dedicated to Engineering & Data Science news and employee stories.\n\nThe site features different sections such as Data, AI & Machine Learning, Mobile, Web Development at Airbnb, Infrastructure, and Open Source. However, not all of the content is technical, so even the less experienced users will find some posts worth reflecting on, whether it’s an infographic or more general insights about data availability at the company scale."
    },
    {
      "title": "PandaDoc Tech Blog",
      "img": "https://miro.medium.com/v2/resize:fit:828/format:webp/1*UbRu6BH3kZMUsFFUInplAw.png",
      "desc": "The American technology company based in San Francisco offers a range of services related to building and managing documents in a single application. The platform is also well-known for its blog with great advice for web developers.\n\nWhat’s special about this blog is that its articles are devoted to solving engineering issues in the software world, and here you can find out how PandaDoc’s engineers managed to improve their customers’ experience. The company managed to gather some of the best experts in software development and launch their own corporate blog."
    },
  ]
  
  export default blogs
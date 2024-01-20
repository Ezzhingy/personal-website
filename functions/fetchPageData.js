export function fetchFaireData() {
  return ["Work in Progress!"];
}

export function fetchCiviliaData() {
  return [
    "/logo-civilia.jpeg",
    "**Preamble**",
    "The dreaded first co-op. For most, a hastily put-together resume flung desperately at any second glancing employer. Hundreds of uWaterloo co-op students, waiting anxiously to hear back from the select few companies willing to offer them an interview. Welcome to recruiting season.",
    "Searching for employment while only undergoing four months of university learning was an interesting experience. Especially given the mass layoffs and uncertain economy in the tech sector, I was definitely rattled.",
    "It was a combination of my non-existent (relevant) work experience and the above factors that pushed me to apply to ~100 companies. I heard back from three. Luckily for me, I got an offer from one. I coded quite a bit the summer prior and open-sourced all my projects on my [GitHub](https://github.com/Ezzhingy). A recruiter noticed this and reached out for an interview. I went through two interviews with that company before they gave me an offer.",
    "I was employed.",
    "**The work**",
    "I worked my first internship at Civilia as a software developer during the S23 term. Civilia is a transit technology company that provides solutions related to urban mobility. I primarily collaborated with their management and tech teams.",
    "Civilia works a lot with General Transit Feed Specification (GTFS) files, a collection of transit data that contains everything you could want to know about transportation. However, their main way of retrieving and filtering this data has been through the tech team itself; the management team doesn’t understand the intricacies well enough. Thus, there have been some efficiency issues with managing GTFS files. That’s where I come in!",
    "I was tasked with building a GTFS management tool, a file storage system that should be intuitive enough for either team to use, and which would effectively organize and display GTFS data on demand. Users should be able to upload a GTFS file to the tool, edit it, view its corresponding map and tables, and export it as a zip file.",
    "My employer gave me full ownership of this project. I had to scope out how to implement features, how to design the app, and how I wanted to build it.",
    "**The tool**",
    "I decided to build the app in *TypeScript*—having a statically typed language could prove super beneficial in the long run. I combined this with *Node.js* and *Express.js* on the backend, and *React*, *TailwindCSS* and *ChakraUI* on the frontend. I chose not to use a database, since I’d only be storing GTFS archive files, which felt slightly redundant. Instead, I’d have all the files sit in a separate folder. Unfortunately, no database meant I couldn’t leverage any ORM/ODM software. However, I still needed a medium to convert the GTFS files into digestible objects. Thus, I created a custom ORM/ODM-like tool to grapple with the GTFS data and allow me to filter it accordingly.",
    "I spent a lot of my time planning. This project had a lot of parts to it, so it was important for me to organize my thoughts. I also learned to pace myself. Four months for one project is a lot of time, so I had to properly manage my work to maintain good productivity throughout.",
    "By the end of my internship, I had built a fully functioning app that the Civilia team could use. With a few more changes, the team had voiced making the app accessible for public use as well!",
    "**Final thoughts**",
    "I definitely improved a lot as a developer throughout these four months. It felt rewarding taking a project from end-to-end and I’m thankful to have been allowed to be so hands-on with my learning.",
    "Although the internship is over, I’ll always have my GitHub contribution graph as a souvenir for the work I put in 😅",
    "/contribution-graph.jpeg",
  ];
}

export function fetchUwblueprintData() {
  return [
    "/bp-preview.jpeg",
    "**Preamble**",
    "I remember stumbling across the engineering building at my university. Aisles of cardboard booths strewn across the hall, students proudly presenting their rehearsed pitch to the crowd of people gathered around. This was our school’s annual design team fair, an event that happens once every term. I made a mental note to check it out sometime.",
    "In my second term, I found myself in the eng building once again. After learning about a few subteams, I turned my attention to a representative from *UWBlueprint*, a software design team dedicated to building technology for social good. I’ve previously done volunteer work for small non-profit organizations, and combined with my interest in computer science, seemed like a fitting opportunity. Unfortunately, this specific design team is known for having a super arduous application process. I didn’t care much for it though and applied regardless; what’s the worst that could happen? I wouldn’t know, since I successfully navigated through it (😋) and became a *software developer* and member of UWBlueprint.",
    "**Timeline**",
    "I worked extensively on the *Children’s Aid Society (CAS)* subteam within Blueprint from January 2023 to December 2023. CAS is an NPO that provides child protection services and we were helping build a platform for their *Supervised Access Program*. I started my first 8 months as a software developer, then moved up as a technical lead for my last 4 months.",
    "/cas.jpeg",
    "**First term**",
    "During my first term on CAS, our team consisted of 11 students: 1 technical lead with 6 developers and 1 product manager with 3 designers. Up to this point, I’ve only ever had experience creating side projects by myself with the occasional group hackathon, but I’d never coded under someone before and I definitely hadn’t worked in a group as large as CAS either. Essentially, this would be my first time operating in a software team environment.",
    "CAS is built upon a framework consisting of *PostgreSQL*, *Flask (Python)*, and *React (TypeScript)*. I was familiar with Flask and React (JavaScript), but not TypeScript or Postgres. Furthermore, *Docker* was used to run our application and standardize the local working environment for all devs, a platform (and concept) that was super foreign to me. To add icing on the cake, I was unfamiliar with version control in a collaborative setting; creating pull requests, dealing with merge conflicts, and git rebasing were all new material. There was a lot of learning to do.",
    "Since you can’t learn without getting your hands dirty, I dived right into the code. Once again, I was in far-off territory; the codebase was extremely large, with dozens of folders and even more files within—and this was just the frontend. It didn’t help that TypeScript has its own unique structure, one that resembles JavaScript enough for me to get the gist, but not enough for me to completely understand. It was like walking through a foggy day—a once amicable environment, now shrouded in an unfamiliar mist.",
    "Most of my tickets were frontend-related this term. This was a purposeful decision, since I wished to work with visual changes, hoping they would be easier to digest, and my tech lead happily obliged. A lot of my first few work sessions were spent badgering my lead with questions: `“How does prop drilling work with this component?”`, `“How do I use conditional rendering here?”`, `“Why does my branch have 100 commits; only two of them are mine??”`, the list goes on.",
    "However, with time I became more comfortable working in TypeScript and manipulating *Chakra UI* (a React-based design system) components for my own implementations. I learned about the agile methodology and how to pair program with other developers. Things were starting to fall into place.",
    "/bp-term1.jpeg",
    "**Second term**",
    "My goal this term was to familiarize myself with our backend. As such, many of my tickets were backend-focused. Once again, I kept up my onslaught of questions. Since I’ve worked with Flask in the past, I didn’t have to deal with the initial learning curve of syntax as I did with the frontend. I learned how to create class models, write validation in *DTOs*, implement *CRUD services*, and call them through endpoints. Inadvertently, this taught me how to use *Postman*, manage my local database history, and type terminal-based commands in *psql*. It was a really productive 4 months, and I began to understand how our app interacts through the many files found in both the backend and frontend.",
    "Not to mention, we had super neat socials this term too!",
    "/bp-term2.jpeg",
    "**Third term**",
    "Being a technical lead had been in the back of my mind ever since I joined. Now going into my third Blueprint term, I’ve had 8 months of prior CAS full-stack experience, 5 months being a frontend developer at [Hack the North](https://eugenezhang.me/hackthenorth), and 4 months of software developer experience at [Civilia](https://eugenezhang.me/civilia), my first co-op internship. In addition, my prior tech lead had committed to an exchange program this term, thus taking on a more advisory role. It was time to step up.",
    "The responsibilities held by a technical lead were quite daunting. As a lead, you must understand the ins and outs of the project, from low-level implementation to high-level ideas. It is your job to break down the app into manageable tickets, assigning them to developers based on their preferences (stated in the 1:1s you conduct). Since you are working with an NPO, scheduling client meetings and implementing client feedback into your app is also a strict requirement. However, your most important responsibility is to be able to lead a team of developers and cultivate a vibey team culture 😁.",
    "Although I spent the majority of my time helping rather than coding, I incidentally learned a lot of *DevOps*-related operations: integrating updated dependencies, grappling with *Heroku*, working with database administrative tasks, and debugging Docker containers.",
    "/docker-meme.jpeg",
    "When I wasn’t helping or coding, I was constantly brainstorming ways to implement features, reviewing pull requests as they came in, updating documentation and schemas, and planning team socials (I’ve learned that I HATE planning social events; too stressful 😵‍💫).",
    "Overall though, I found being a technical lead super rewarding, and also plenty of fun! It was cool seeing everything come together and it also didn’t hurt to know that we’d be positively impacting dozens of families with our app.",
    "/bp-term3.jpeg",
    "**Final Thoughts**",
    "UWBlueprint was my first exposure to what software development could look like. It surrounded me with a bunch of people who also liked building things and fostered quite a homely community. I really enjoyed my time here.",
    "Maybe I’ll come back as VPE one day 😋",
  ];
}

export function fetchHackthenorthData() {
  return [
    "/htn-preview-img.jpeg",
    "**Preamble**",
    "I never would have thought I would be the one to over-engineer the main website for Canada’s biggest hackathon. Being a part of Hack the North’s frontend team always felt so out of reach; I remember looking through their static sites every year with mouth agape, mystified by their creativity and design. I recall scrolling through the [2022 site](https://2022.hackthenorth.com/), my eyes hungrily darting across the screen, trying to take in all the colours blending beautifully together like an aurora borealis. I didn’t know it was possible to code like that.",
    "/alanTuring.jpeg",
    "However, eventually the shock wore off. From March to October 2023, I was a *frontend developer* and organizer at Hack the North, Canada's biggest hackathon.",
    "**Projects**",
    "Over these past 8 months, I've had the opportunity to work on 4 main projects: the *Hack the North Website*, *Hacker Applications Dashboard*, *Travel Tool*, and *Signage Tool*. Our development process is quite methodical—a tried and true practice that allows us to continue building beautiful websites.",
    "/10-years-dream.jpeg",
    "1. *design<>frontend handoff*. Super crucial step. Frontend might be responsible for building the website itself, but we wouldn’t have anything to build without the design team (massive kudos to them!!). We usually have a few meetings to discuss feasibility and how well the design will transfer over to development. It’s super cool seeing the designers think and talk amongst themselves—I definitely learned a thing or two about UI/UX from them.",
    "2. *backend<>frontend handoff*. When it comes to retrieving or saving data, the backend team is the one to call. They help fill us in on any endpoints/subscriptions they create, any fields they update, and other mystical backend-y things. For instance, if the frontend team needs to display bus info for a given user, the backend team creates the GraphQL endpoint and decides on the parameters needed. They then convey this information to the frontend team, who calls the endpoint with the given parameters.",
    "3. *Delegation of tasks*. Once the above has been sorted out, the frontend team gets to work. There isn’t a special way we divvy up our tasks—we simply slice the site into equal pieces of work, then assign frontend developers to each respective piece.",
    "**The Work**",
    "I’m going to highlight two experiences that showcase the breadth and depth of work that a frontend developer is responsible for.",
    "*Hack the North Website—Footer*",
    "The static site was the first major project that us frontend devs were tasked to work on. Our magnum opus, one could say. The footer was one of the sections I was assigned.",
    "/footer.jpeg",
    "This section does a splendid job of combining many aspects of frontend development: layout, alignment, responsiveness, image resolution, and hooks. Here's a little problem snippet example:",
    "The arrangement of organizer boxes seemed quite sporadic to me, with no clear pattern. Thus, I decided to take advantage of the `grid-template-areas` property to forcefully organize the chaos into the following:",
    "/css-grid.jpeg",
    "One annoying thing I had to consider was optimization. Although making a gorgeous Hack the North site is our top priority, we also want a fast and functional site, to maximize the user experience (and pass Lighthouse tests 😅). Thus, I had to make sure the assets I used wouldn’t make the site explode (ie. resizing, lazy loading images, and reducing the pixels on smaller organizer pictures).",
    "Check out the finished product [here!](https://2023.hackthenorth.com/)",
    "*Travel Tool—DRI*",
    "I was one of the frontend DRIs (directly responsible individuals) for the development of our travel tool. Being a DRI makes you the central point of contact, a beacon of sorts. Thus, it was my responsibility to actively communicate with the other subteams when necessary and ensure our development cycle matches our timelines. For travel tool, this meant reaching out to: the *logistics DRI* to confirm bus locations, capacity, and times, the *backend DRIs* to ask about endpoint descriptions and field name changes, and the *design DRI* to hand off the Figma to the frontend team. Lastly, I, along with my other fellow frontend DRI, had to determine what features we had time to implement and how we wanted to delegate the work; walking a fine line between quality and quantity.",
    "/travel-tool.jpeg",
    "**Final Thoughts**",
    "Overall, this was honestly one of the most rewarding and unique experiences I've ever had, and I'm so grateful to have been a part of it. It felt surreal at times to be working with such a talented group of people, all while shipping real, impactful sites that impact thousands of hackers across the world.",
    "/fe.png",
    "And of course, shout-out to the entire team! From seeing the Hack the North community afar as a hacker, to now contributing to the vibes as an organizer, I’ve had such a blast making memories with you all!",
    "/team.jpg",
    "(although I am coming back as a Frontend Co-Lead, so I’ll be staying around one more year 😁)",
  ];
}

export function fetchSentiviewData() {
  return [
    "/sentiview-main.png",
    "Small businesses and local entrepreneurs are an essential facet of our communities, with the COVID-19 Pandemic demonstrating how much we depend on them and vice versa. However, it can often be difficult for these businesses to know the best trajectory for their growth, with no streamlined method currently existing for gathering and analyzing their customers' feedback. SentiView aims to change that.",
    "Small businesses rely greatly on reviews; they tell them what they're doing right and what to improve. SentiView takes in a set of customer reviews and sorts positive reviews from neutral/negative reviews. Then, it finds the top five keywords that occur the most frequently in the review sets, helping business owners swiftly find the root of their problems.",
    "SentiView takes in a set of customer reviews and uses the power of sentiment analysis in order to determine whether or not they are positive or negative. Then, each review is tokenized and cleaned based on a stoplist. The 5 most common positive and negative words are then displayed to the user; they can then select and scroll through the reviews containing the word, gathering a first-hand view of their business's needs and strengths.",
    "/sentiview-data.png",
    "We developed the application's frontend using React, Bootstrap, and Tailwind. The backend used a Flask server that hosted the data generated from the Cohere API, which we used for sentiment analysis and tokenization purposes.",
    "Over time, SentiView would like to be able to produce graphs that display trends in customer satisfaction to give small businesses a way to assess their improvement. Essentially, to provide bespoke recommendations to businesses.",
  ];
}

export function fetchJournal4meData() {
  return [
    "/bigjournal4me.png",
    "Mental health issues are becoming a more prevalent problem each year. Nearly one in five U.S. adults live with a mental illness, but less than 20% of people actually seek mental health treatment. Furthermore, 47% of Americans believe that seeking therapy is a sign of weakness. Our goal with journal4me is to provide an outlet for people to speak their thoughts; to let it all out.",
    "Journal4me is a journaling app that removes the tediousness of typing out your thoughts. It is well known that journaling can improve one's mental health, but many stray away from the act, intimidated by the monotonous writing involved with jotting down one's feelings. With journal4me, all you need to do is speak! The app automatically processes your words and jots them down for you, so that you can rant about your day effortlessly without having to pause and think about how to spell a word or structure a sentence. At the end of your recording, the app even ranks your mood based on what was depicted from your rant using sentiment analysis!",
    "We developed the application's frontend using React. The backend used a FastAPI server that hosted the data generated from the Cohere and AssemblyAI API, which we used for sentiment analysis and speech-to-text. MongoDB was our database of choice, which we used to store our transcriptions.",
    "To level up journal4me, we could improve the UI to further better the user's journaling experience. Some examples include updating the text as the user speaks, adding a mood board, creating a larger 'emotion rating scale'; there are many improvements that we are considering of making in the future.",
  ];
}

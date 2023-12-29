export function fetchCiviliaData() {
  return [];
}

export function fetchUwblueprintData() {
  return [];
}

export function fetchHackthenorthData() {
  return [
    "/htn-preview-img.jpeg",
    "**Preamble**",
    "I never would have thought I would be the one to over-engineer the main website for Canada’s biggest hackathon. Being a part of Hack the North’s frontend team always felt so out of reach; I remember looking through their static sites every year with mouth agape, mystified by their creativity and design. I recall scrolling through the [*2022 site*](https://2022.hackthenorth.com/), my eyes hungrily darting across the screen, trying to take in all the colours blending beautifully together like an aurora borealis. I didn’t know it was possible to code like that.",
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
    "This section does a splendid job of combining many aspects of frontend development: layout, alignment, responsiveness, image resolution, and hooks. For example, the arrangement of organizer boxes seemed quite sporadic to me, with no clear pattern. Thus, I decided to take advantage of the `grid-template-areas` property to forcefully organize the chaos into the following:",
    "/css-grid.jpeg",
    "One annoying thing I had to consider was optimization. Although making a gorgeous Hack the North site is our top priority, we also want a fast and functional site, to maximize the user experience (and pass Lighthouse tests 😅). Thus, I had to make sure the assets I used wouldn’t make the site explode (ie. resizing, lazy loading images, and reducing the pixels on smaller organizer pictures).",
    "Check out the finished product [*here!*](https://2023.hackthenorth.com/)",
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

export function fetchFaireData() {
  return [];
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

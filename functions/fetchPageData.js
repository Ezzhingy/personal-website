export function fetchSentiviewData() {
  return [
    "Small businesses and local entrepreneurs are an essential facet of our communities, with the COVID-19 Pandemic demonstrating how much we depend on them and vice versa. However, it can often be difficult for these businesses to know the best trajectory for their growth, with no streamlined method currently existing for gathering and analyzing their customers' feedback. SentiView aims to change that.",
    "Small businesses rely greatly on reviews; they tell them what they're doing right and what to improve. SentiView takes in a set of customer reviews and sorts positive reviews from neutral/negative reviews. Then, it finds the top five keywords that occur the most frequently in the review sets, helping business owners swiftly find the root of their problems.",
    "SentiView takes in a set of customer reviews and uses the power of sentiment analysis in order to determine whether or not they are positive or negative. Then, each review is tokenized and cleaned based on a stoplist. The 5 most common positive and negative words are then displayed to the user; they can then select and scroll through the reviews containing the word, gathering a first-hand view of their business's needs and strengths.",
    "We developed the application's front end using React, Bootstrap, and Tailwind. The backend used a Flask server that hosted the data generated from the Cohere API, which we used for sentiment analysis and tokenization purposes.",
    "Over time, SentiView would like to be able to produce graphs that display trends in customer satisfaction to give small businesses a way to assess their improvement. Essentially, to provide bespoke recommendations to businesses.",
  ];
}

export function fetchJournal4meData() {
  return [
    "Mental health issues are becoming a more prevalent problem each year. Nearly one in five U.S. adults live with a mental illness, but less than 20% of people actually seek mental health treatment. Furthermore, 47% of Americans believe that seeking therapy is a sign of weakness. Our goal with journal4me is to provide an outlet for people to speak their thoughts; to let it all out.",
    "Journal4me is a journaling app that removes the tediousness of typing out your thoughts. It is well known that journaling can improve one's mental health, but many stray away from the act, intimidated by the monotonous writing involved with jotting down one's feelings. With journal4me, all you need to do is speak! The app automatically processes your words and jots them down for you, so that you can rant about your day effortlessly without having to pause and think about how to spell a word or structure a sentence. At the end of your recording, the app even ranks your mood based on what was depicted from your rant using sentiment analysis!",
    "We developed the application's front end using React. The backend used a FastAPI server that hosted the data generated from the Cohere and AssemblyAI API, which we used for sentiment analysis and speech-to-text. MongoDB was our database of choice, which we used to store our transcriptions.",
    "To level up journal4me, we could improve the UI to further better the user's journaling experience. Some examples include updating the text as the user speaks, adding a mood board, creating a larger 'emotion rating scale'; there are many improvements that we are considering of making in the future.",
  ];
}

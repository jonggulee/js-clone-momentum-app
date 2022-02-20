const quotes = [
    {
        quote: "Respect a man, he will do the more.",
        author: "James Howell",
    },
    {
        quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don't let yourself be lulled into inaction",
        author: "Bill Gates",
    },
    {
        quote: "I love people who make me laugh. I honestly think it's the thing I like most, to laugh. It cures a multitude of ills. It's probably the most important thing in a person.",
        author: "Audrey Hepburn",
    },
    {
        quote: "Love isn't a decision. It's a feeling. If we could decide who we loved, it would be much simpler, but much less magical.",
        author: "Trey Parker",
    },
    {
        quote: "Never be entirely idle; but either be reading, or writing, or praying or meditating or endeavoring something for the public good.",
        author: "Thomas a Kempis",
    },
    {
        quote: "All that really belongs to us is time; even he who has nothing else has that.",
        author: "Baltasar Gracian",
    },
    {
        quote: "Love the moment, and the energy of that moment will spread beyond all boundaries.",
        author: "Corita Kent",
    },
    {
        quote: "There are admirable potentialities in every human being. Believe in your strength and your youth. Learn to repeat endlessly to yourself, 'It all depends on me.",
        author: "Andre Gide",
    },
    {
        quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle.",
        author: "Albert Einstein",
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
/*jslint browser: true*/
/*global $, jQuery, alert*/
var quotes = [{
    quote: "The true mind can weather all the lies and illusions without being lost. The true heart can touch the poison of hatred without being harmed",
    author: "The Lion Turtle"
}, {
    quote: "Revenge is like a two-headed rat-viper. While you watch your enemy go down, you’re being poisoned yourself",
    author: "Aang"
}, {
    quote: "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame",
    author: "Iroh"
}, {
    quote: "It is important to draw wisdom from different places. If you take it from only one place it becomes rigid and stale",
    author: "Iroh"
}, {
    quote: "I will never, ever turn my back on people who need me",
    author: "Katara"
}, {
    quote: "There’s nothing wrong with a life of peace and prosperity. I suggest you think about what it is that you want from your life, and why.",
    author: "Iroh"
}, {
    quote: "You think you’re the first person to believe their war was justified? Countless others before you have come here, seeking weapons, weaknesses or battle strategies!",
    author: "Wan Shi Tong"
}, {
    quote: "The greatest illusion of this world is the illusions of separation. Things you think are separate and different are actually one and the same. We are all one people, but we live as if divided.",
    author: "Guru Pathik"
}, {
    quote: "I know that no one could give you your honor. It’s something you earn for yourself by choosing to do what is right.",
    author: "Zuko"
}, {
    quote: "We are all one people, but we live as if divided.",
    author: "Guru Pathik"
}, {
    quote: "If you listen hard enough, you can hear every living thing breathing together, you can feel everything growing. We’re all living together, even if most folks don’t act like it. We all have the same roots, and we are all branches of the same tree.",
    author: "Huu"
}, {
    quote: "There’s no different angle, no clever solution, no trickity trick that’s going to move that rock. You’ve got to face it head on.",
    author: "Toph"
}, {
    quote: "Some friendships are so strong, they can even transcend lifetimes",
    author: "Roku"
}, {
    quote: "Instead of seeing what they want you to see, you got to open your brain to the possibilities",
    author: "Bumi"
}, {
    quote: "No matter how things seem to change, never forget who you are",
    author: "Ursa"
}, {
    quote: "The time has come for you to look inward, and start asking yourself the big questions: Who you are? And what do you want?",
    author: "Iroh"
}, {
    quote: "It’s easy to do nothing, but it’s hard to forgive.",
    author: "Aang"
}, {
    quote: "Harsh words won’t solve problems, actions will.",
    author: "Aang"
}, {
    quote: "Destiny is a funny thing. You’ll never know how things are going to work out. But if you keep an open mind and an open heart, I promise you will find your own destiny someday",
    author: "Iroh"
}];

var displayedQuote;
var currentIndx;

function newQuote() {
    "use strict";
    var indx = Math.floor(Math.random() * quotes.length);
    displayedQuote = quotes[indx];
    $("#currentQuote").html(quotes[indx].quote);
    $("#currentAuthor").html(quotes[indx].author);
    currentIndx = indx;
}

function shareTweet() {
    "use strict";
    var quoteToTweet = quotes[currentIndx].quote;
    if (quoteToTweet.length > 120) {
        quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
    }

    quoteToTweet = encodeURI('"' + quoteToTweet + '"');
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "&hashtags=Avatar");
}

$(function () {
    "use strict";
    $("#genQuote").click(newQuote);
    $("#twitter").click(shareTweet);
});

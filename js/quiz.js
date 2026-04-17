const podcast = [
  {
    title: "Up First",
    spotifyLink: "https://open.spotify.com/show/2mTUnDkuKUkhiueKcVWoP0",
    appleLink: "https://podcasts.apple.com/us/podcast/up-first-from-npr/id1222114325",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510318/podcast.xml",
    image:"images/up-first.jpg",
    description: "Start your morning with the biggest headlines explained quickly and clearly by NPR journalists. It’s a fast, smart way to stay informed before your day begins.",
    genre: "News",
    length: "15 minutes",
  },
  {
    title: "NPR Politics Podcast",
    spotifyLink: "https://open.spotify.com/show/2PnWnDNwU3wKesCHCpy252?si=ce02e004d8f240e9",
    appleLink: "https://podcasts.apple.com/us/podcast/the-npr-politics-podcast/id1057255460",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510310/podcast.xml",
    image:"images/politics.jpg",
    description: "Go behind the headlines with sharp analysis and lively conversations about Washington’s biggest stories. The hosts make politics easier to understand and surprisingly fun to follow.",
    genre: "Politics",
    length: "20 minutes",
  },
  {
    title: "It's Been a Minute",
    spotifyLink: "https://open.spotify.com/show/6gcw7EF2i70vXXXJnhBNgA?si=e37f6c97fad84a33",
    appleLink: "https://podcasts.apple.com/us/podcast/its-been-a-minute/id1250180134",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510317/podcast.xml",
    image:"images/itsbeenamin.jpg",
    description: "Dive into culture, trends, and the conversations shaping everyday life. It blends humor, insight, and curiosity into episodes that always feel fresh.",
    genre: "Culture",
    length: "35 minutes",
  },
  {
    title: "NPR News Now",
    spotifyLink: "https://open.spotify.com/show/6BRSvIBNQnB68GuoXJRCnQ?si=1b90ddb1daec4824",
    appleLink: "https://podcasts.apple.com/us/podcast/npr-news-now/id121493675",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/500005/podcast.xml",
    image:"images/now.jpg",
    description: "Get the latest national and world news in a compact update you can hear anytime. It’s perfect for staying current when you only have a few minutes.",
    genre: "News",
    length: "5 minutes",
  },
  {
    title: "Code Switch",
    spotifyLink: "https://open.spotify.com/show/3bExJ9JQpkwNhoHvaIIuyV?si=b98f22ae1b914be2",
    appleLink: "https://podcasts.apple.com/us/podcast/code-switch/id1112190608",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510312/podcast.xml", 
    image:"images/codeswitch.jpg",
    description: "Explore race, identity, and society through thoughtful storytelling and honest conversations. Every episode offers new perspectives that stay with you long after listening.",
    genre: "Society",
    length: "30 minutes",
  },
  {
    title: "Consider This",
    spotifyLink: "https://open.spotify.com/show/3Z6JdCS2d0eFEpXHKI6WqH?si=982becb968244405",
    appleLink: "https://podcasts.apple.com/us/podcast/consider-this-from-npr/id1503226625",
    ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510355/podcast.xml", 
    image: "images/considerthis.png",
    description: "Take one major story of the day and understand why it matters. It delivers deep context in a concise format that fits into busy schedules.",
    genre: "News Analysis",
    length: "15 minutes",
  },
  {
    title: "YUYUの日本語Podcast",
    spotifyLink: "https://open.spotify.com/search/yuyu%20japanese%20podcast",
    appleLink: "https://podcasts.apple.com/us/podcast/yuyu-nihongo-podcast-japanese-podcast/id1480155677",
    ytMusicLink: "https://music.youtube.com/search?q=YUYUの日本語Podcast", 
    image:"images/yuyu.jpg",
    description: "Improve your Japanese with natural conversations and clear explanations from YUYU. It feels like chatting with a friendly teacher while learning real-life language.",
    genre: "Language Learning",
    length: "20 minutes",
  },
  {
    title: "Let's Talk in Japanese",
    spotifyLink: "https://open.spotify.com/show/7rzB4zCdrSf67jd3nHm8Vy?si=f4eec3f71ed44ebb",
    appleLink: "https://podcasts.apple.com/us/podcast/lets-talk-in-japanese/id1470844095",
    ytMusicLink: "https://music.youtube.com/search?q=Let's+Talk+in+Japanese", 
    image:"images/letstalk.jpg",
    description: "Practice listening skills with episodes tailored to different Japanese levels. The relaxed style makes studying feel enjoyable and easy to keep up with.",
    genre: "Language Learning",
    length: "15 minutes",
  },
  {
    title: "Haru no Nihongo",
    spotifyLink: "https://open.spotify.com/show/1gQ0ZdFpTOqiyLeOaCCn6U?si=5ac26d874acb45b1",
    appleLink: "https://podcasts.apple.com/us/podcast/haru-no-nihongo/id1519563720",
    ytMusicLink: "https://music.youtube.com/search?q=Haru+no+Nihongo", 
    image:"images/haruno.jpg",
    description: "Learn Japanese through calm, engaging episodes that sound natural and welcoming. It’s a great way to build comprehension while enjoying authentic speech.",
    genre: "Language Learning",
    length: "18 minutes",
  },
  {
    title: "Thinking in Japanese",
    spotifyLink: "https://open.spotify.com/show/0lBMf4PEpcG7W44lG6ORKR?si=8c99a8af15804101",
    appleLink: "https://podcasts.apple.com/us/podcast/thinking-in-japanese-podcast/id1485946726",
    ytMusicLink: "https://music.youtube.com/search?q=Thinking+in+Japanese", 
    image:"images/thikning.jpg",
    description: "Train yourself to understand Japanese directly without translating in your head. The immersive style helps you think naturally in the language over time.",
    genre: "Language Learning",
    length: "12 minutes",
  },
  {
    title: "Welcome to Night Vale",
    spotifyLink: "https://open.spotify.com/show/0s6Wc5qf8SIvCtKZNC6N7s?si=1257e00795284fbe",
    appleLink: "https://podcasts.apple.com/us/podcast/welcome-to-night-vale/id536258179",
    ytMusicLink: "https://music.youtube.com/search?q=Welcome+to+Night+Vale", 
    image:"images/wtnv.jpg",
    description: "Enter a strange desert town where every conspiracy theory is true. This cult favorite mixes humor, horror, and storytelling into a world unlike anything else.",
    genre: "Fiction",
    length: "25 minutes",
  },
  {
    title: "Moral of the Story",
    spotifyLink: "https://open.spotify.com/show/1VoAfPc2yXoHcTrMw8Akim?si=bf41e9d7b8c84638",
    appleLink: "https://podcasts.apple.com/us/podcast/moral-of-the-story/id1763891818",
    ytMusicLink: "https://music.youtube.com/search?q=Moral+of+the+Story+podcast", 
    image:"images/mots.jpg",
    description: "Hear fascinating stories with twists, lessons, and memorable takeaways. Each episode leaves you entertained while giving you something to think about.",
    genre: "Storytelling",
    length: "30 minutes",
  },
  {
    title: "Rotten Mango",
    spotifyLink: "https://open.spotify.com/show/2DZwvzn6Z3xCFZrwZGDrbj?si=fc62bbd553fc43c4",
    appleLink: "https://podcasts.apple.com/us/podcast/rotten-mango/id1517954480",
    ytMusicLink: "https://music.youtube.com/search?q=Rotten+Mango", 
    image: "images/rm.jpg",
    description: "Dive into gripping true crime cases told with suspenseful detail and dramatic pacing. It’s hard to stop listening once each mystery begins to unfold.",
    genre: "True Crime",
    length: "60 minutes",
  },
  {
    title: "If Books Could Kill",
    spotifyLink: "https://open.spotify.com/show/2khJBoF73ujIATWUFtSxLD?si=60a2829069e948e7",
    appleLink: "https://podcasts.apple.com/us/podcast/if-books-could-kill/id1651876897",
    ytMusicLink: "https://music.youtube.com/search?q=If+Books+Could+Kill",
    image: "images/bookskill.jpg",
    description: "Revisit bestselling nonfiction books and uncover what they got wrong. The hosts combine sharp criticism and humor to make every episode entertaining.",
    genre: "Commentary",
    length: "50 minutes",
  }
];


const recFormat = (num)=>{
    console.log(podcast[num].image)
    return (
        `
            <div class="rec">
                <h3>${podcast[num].title}</h3>
                <img src="${podcast[num].image}" alt="${podcast[num].title} logo"/>
                <div class="tags">
                    <p class="tag">${podcast[num].genre}</p>
                    <p class="tag">${podcast[num].length}</p>
                </div>
                <br>
                <p class="desc">${podcast[num].description}</p>
                <br>
                <div class="links">
                    <a href="${podcast[num].spotifyLink}"><button>Spotify Link</button></a>
                    <a href="${podcast[num].appleLink}"><button>Apple Link</button></a>
                    <a href="${podcast[num].ytMusicLink}"><button>YouTube Music Link</button></a>
                </div>
            </div>
        `
    )
}


let scores = {
    quickNews: 0,
    deepNews: 0,
    shortInsight: 0,
    culture: 0,
    story: 0
};

const result=document.querySelector(".result")

document.querySelector("#submit").addEventListener("click", (e)=>{
    e.preventDefault();

    scores = {
        quickNews: 0,
        deepNews: 0,
        shortInsight: 0,
        culture: 0,
        story: 0
    };

    const answerArray = document.querySelectorAll("input[type=radio]:checked")
    for (let i=0; i<answerArray.length; i++){
        const category = answerArray[i].dataset.category;
        const points = parseInt(answerArray[i].dataset.points);
        const category2 = answerArray[i].dataset.category2;
        const points2 = parseInt(answerArray[i].dataset.points2);

        scores[category] += points;
        if (category2 && points2) {
            scores[category2] += points2;
        }
    }

    let topCategory="";
    let highestScore=0;

    for (let category in scores) {
        if (scores[category] > highestScore) {
            highestScore = scores[category];
            topCategory = category;
        }
    }

    if (topCategory=="quickNews"){
        console.log(podcast[3])
        result.innerHTML=(
            recFormat(3)
        )
    } else if (topCategory=="deepNews"){
        if (document.querySelector("#q4a").checked){
            result.innerHTML=(
                recFormat(0)
            )
        } else if(document.querySelector("#q6c").checked){
            result.innerHTML=(
                recFormat(1)
            )
        } else{
            result.innerHTML=(
                `${recFormat(0)}
                <br>
                ${recFormat(1)}`
            )
        }
    } else if (topCategory=="shortInsight"){
        result.innerHTML=(
            recFormat(5)
        )
    } else if (topCategory=="culture"){
        if (document.querySelector("#q5c").checked || document.querySelector("#q9c").checked){
            result.innerHTML=(
                recFormat(4)
            )
        } else {
            result.innerHTML=(
                recFormat(2)
            )
        }
    } else if (topCategory=="story"){
        if (
            document.querySelector("#q10d").checked ||
            document.querySelector("#q1d").checked ||
            document.querySelector("#q6c").checked
        ){
            result.innerHTML=(
                recFormat(12)
            )
        } else if (
            document.querySelector("#q10c").checked ||
            document.querySelector("#q3d").checked ||
            document.querySelector("#q2c").checked
        ) {
            result.innerHTML=(
                recFormat(11)
            )
        } else if (
            document.querySelector("#q10b").checked ||
            document.querySelector("#q3c").checked ||
            document.querySelector("#q2d").checked ||
            document.querySelector("#q1a").checked
        ) {
            result.innerHTML=(
                recFormat(10)
            )
        } else{
            result.innerHTML=(
                recFormat(10)
            )
            result.innerHTML+=recFormat(11)
            result.innerHTML+=recFormat(12)
        }

    }
})

document.querySelector("#reset").addEventListener("click", (e)=>{
    result.innerHTML=("")
})

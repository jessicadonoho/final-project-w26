const podcast = [
    {
      title: "Up First",
      spotifyLink: "https://open.spotify.com/show/2mTUnDkuKUkhiueKcVWoP0",
      appleLink: "https://podcasts.apple.com/us/podcast/up-first-from-npr/id1222114325",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510318/podcast.xml",
      image:"images/up-first.jpg"
    },
    {
      title: "NPR Politics Podcast",
      spotifyLink: "https://open.spotify.com/show/2PnWnDNwU3wKesCHCpy252?si=ce02e004d8f240e9",
      appleLink: "https://podcasts.apple.com/us/podcast/the-npr-politics-podcast/id1057255460",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510310/podcast.xml",
      image:"images/politics.jpg"
    },
    {
      title: "It's Been a Minute",
      spotifyLink: "https://open.spotify.com/show/6gcw7EF2i70vXXXJnhBNgA?si=e37f6c97fad84a33",
      appleLink: "https://podcasts.apple.com/us/podcast/its-been-a-minute/id1250180134",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510317/podcast.xml",
      image:"images/itsbeenamin.jpg"
    },
    {
      title: "NPR News Now",
      spotifyLink: "https://open.spotify.com/show/6BRSvIBNQnB68GuoXJRCnQ?si=1b90ddb1daec4824",
      appleLink: "https://podcasts.apple.com/us/podcast/npr-news-now/id121493675",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/500005/podcast.xml",
      image:"images/now.jpg"
    },
    {
      title: "Code Switch",
      spotifyLink: "https://open.spotify.com/show/3bExJ9JQpkwNhoHvaIIuyV?si=b98f22ae1b914be2",
      appleLink: "https://podcasts.apple.com/us/podcast/code-switch/id1112190608",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510312/podcast.xml", 
      image:"images/codeswitch.jpg"
    },
    {
      title: "Consider This",
      spotifyLink: "https://open.spotify.com/show/3Z6JdCS2d0eFEpXHKI6WqH?si=982becb968244405",
      appleLink: "https://podcasts.apple.com/us/podcast/consider-this-from-npr/id1503226625",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510355/podcast.xml", 
      image: "images/considerthis.png"
    },
    {
      title: "YUYUの日本語Podcast",
      spotifyLink: "https://open.spotify.com/search/yuyu%20japanese%20podcast",
      appleLink: "https://podcasts.apple.com/us/podcast/yuyu-nihongo-podcast-japanese-podcast/id1480155677",
      ytMusicLink: "https://music.youtube.com/search?q=YUYUの日本語Podcast", 
      image:"images/yuyu.jpg"
    },
    {
      title: "Let's Talk in Japanese",
      spotifyLink: "https://open.spotify.com/show/7rzB4zCdrSf67jd3nHm8Vy?si=f4eec3f71ed44ebb",
      appleLink: "https://podcasts.apple.com/us/podcast/lets-talk-in-japanese/id1470844095",
      ytMusicLink: "https://music.youtube.com/search?q=Let's+Talk+in+Japanese", 
      image:"images/letstalk.jpg"
    },
    {
      title: "Haru no Nihongo",
      spotifyLink: "https://open.spotify.com/show/1gQ0ZdFpTOqiyLeOaCCn6U?si=5ac26d874acb45b1",
      appleLink: "https://podcasts.apple.com/us/podcast/haru-no-nihongo/id1519563720",
      ytMusicLink: "https://music.youtube.com/search?q=Haru+no+Nihongo", 
      image:"images/haruno.jpg"
    },
    {
      title: "Thinking in Japanese",
      spotifyLink: "https://open.spotify.com/show/0lBMf4PEpcG7W44lG6ORKR?si=8c99a8af15804101",
      appleLink: "https://podcasts.apple.com/us/podcast/thinking-in-japanese-podcast/id1485946726",
      ytMusicLink: "https://music.youtube.com/search?q=Thinking+in+Japanese", 
      image:"images/thikning.jpg"
    },
    {
      title: "Welcome to Night Vale",
      spotifyLink: "https://open.spotify.com/show/0s6Wc5qf8SIvCtKZNC6N7s?si=1257e00795284fbe",
      appleLink: "https://podcasts.apple.com/us/podcast/welcome-to-night-vale/id536258179",
      ytMusicLink: "https://music.youtube.com/search?q=Welcome+to+Night+Vale", 
      image:"images/wtnv.jpg"
    },
    {
      title: "Moral of the Story",
      spotifyLink: "https://open.spotify.com/show/1VoAfPc2yXoHcTrMw8Akim?si=bf41e9d7b8c84638",
      appleLink: "https://podcasts.apple.com/us/podcast/moral-of-the-story/id1763891818",
      ytMusicLink: "https://music.youtube.com/search?q=Moral+of+the+Story+podcast", 
      image:"images/mots.jpg"
    },
    {
      title: "Rotten Mango",
      spotifyLink: "https://open.spotify.com/show/2DZwvzn6Z3xCFZrwZGDrbj?si=fc62bbd553fc43c4",
      appleLink: "https://podcasts.apple.com/us/podcast/rotten-mango/id1517954480",
      ytMusicLink: "https://music.youtube.com/search?q=Rotten+Mango", 
      image: "images/rm.jpg"
    },
    {
      title: "If Books Could Kill",
      spotifyLink: "https://open.spotify.com/show/2khJBoF73ujIATWUFtSxLD?si=60a2829069e948e7",
      appleLink: "https://podcasts.apple.com/us/podcast/if-books-could-kill/id1651876897",
      ytMusicLink: "https://music.youtube.com/search?q=If+Books+Could+Kill",
      image: "images/bookskill.jpg"
    }
  ];

const recFormat = (num)=>{
    return (
        `
            <div class="rec">
                <h2>${podcast[num].title}</h2>
                <img src="${podcast[num].image}" alt="${podcast[num].title} logo"/>
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
    console.log(scores)
    let topCategory="";
    let highestScore=0;
    console.log(topCategory)
    console.log(highestScore)


    for (let category in scores) {
        if (scores[category] > highestScore) {
            highestScore = scores[category];
            topCategory = category;
            console.log(highestScore, topCategory)
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

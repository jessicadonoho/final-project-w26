const podcasts = [
    {
      key:"upfirst",
      title: "Up First",
      spotifyLink: "https://open.spotify.com/show/2mTUnDkuKUkhiueKcVWoP0",
      appleLink: "https://podcasts.apple.com/us/podcast/up-first-from-npr/id1222114325",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510318/podcast.xml",
      image:"images/up first.jpg"
    },
    {
      key:"politics",
      title: "NPR Politics Podcast",
      spotifyLink: "https://open.spotify.com/show/2PnWnDNwU3wKesCHCpy252?si=ce02e004d8f240e9",
      appleLink: "https://podcasts.apple.com/us/podcast/the-npr-politics-podcast/id1057255460",
      ytMusicLink: "https://music.youtube.com/library/podcasts?addrssfeed=https://feeds.npr.org/510310/podcast.xml",
      image:"images/politics.jpg"
    },
    {
      key: "beenamin",
      title: "It's Been a Minute",
      spotifyLink: "https://open.spotify.com/show/6gcw7EF2i70vXXXJnhBNgA?si=e37f6c97fad84a33",
      appleLink: "https://podcasts.apple.com/us/podcast/its-been-a-minute",
      ytMusicLink: "https://music.youtube.com/search?q=Its+Been+a+Minute+NPR",
      image:"images/itsbeenamin.jpg"
    },
    {
      key:"now",
      title: "NPR News Now",
      spotifyLink: "https://open.spotify.com/show/6BRSvIBNQnB68GuoXJRCnQ?si=1b90ddb1daec4824",
      appleLink: "https://podcasts.apple.com/us/podcast/npr-news-now",
      ytMusicLink: "https://music.youtube.com/search?q=NPR+News+Now",
      image:"images/now.jpg"
    },
    {
      key:"switch",
      title: "Code Switch",
      spotifyLink: "https://open.spotify.com/show/3bExJ9JQpkwNhoHvaIIuyV?si=b98f22ae1b914be2",
      appleLink: "https://podcasts.apple.com/us/podcast/code-switch",
      ytMusicLink: "https://music.youtube.com/search?q=NPR+Code+Switch", 
      image:"images/codeswitch.jpg"
    },
    {
      key:"consider",
      title: "Consider This",
      spotifyLink: "https://open.spotify.com/show/3Z6JdCS2d0eFEpXHKI6WqH?si=982becb968244405",
      appleLink: "https://podcasts.apple.com/us/podcast/consider-this-from-npr",
      ytMusicLink: "https://music.youtube.com/search?q=NPR+Consider+This", 
      image: "images/considerthis.png"
    },
    {
      key:"yuyu",
      title: "YUYUの日本語Podcast",
      spotifyLink: "https://open.spotify.com/search/yuyu%20japanese%20podcast",
      appleLink: "https://podcasts.apple.com/search?term=yuyu%20japanese",
      ytMusicLink: "https://music.youtube.com/search?q=YUYUの日本語Podcast", 
      image:"images/yuyu.jpg"
    },
    {
      key:"letstalk",
      title: "Let's Talk in Japanese",
      spotifyLink: "https://open.spotify.com/show/7rzB4zCdrSf67jd3nHm8Vy?si=f4eec3f71ed44ebb",
      appleLink: "https://podcasts.apple.com/search?term=lets%20talk%20in%20japanese",
      ytMusicLink: "https://music.youtube.com/search?q=Let's+Talk+in+Japanese", 
      image:"images/letstalk.jpg"
    },
    {
      key:"haruno",
      title: "Haru no Nihongo",
      spotifyLink: "https://open.spotify.com/show/1gQ0ZdFpTOqiyLeOaCCn6U?si=5ac26d874acb45b1",
      appleLink: "https://podcasts.apple.com/search?term=haru%20no%20nihongo",
      ytMusicLink: "https://music.youtube.com/search?q=Haru+no+Nihongo", 
      image:"images/haruno.jpg"
    },
    {
      key:"thinking",
      title: "Thinking in Japanese",
      spotifyLink: "https://open.spotify.com/show/0lBMf4PEpcG7W44lG6ORKR?si=8c99a8af15804101",
      appleLink: "https://podcasts.apple.com/search?term=thinking%20in%20japanese",
      ytMusicLink: "https://music.youtube.com/search?q=Thinking+in+Japanese", 
      image:"images/thikning.jpg"
    },
    {
      key:"welcome",
      title: "Welcome to Night Vale",
      spotifyLink: "https://open.spotify.com/show/0s6Wc5qf8SIvCtKZNC6N7s?si=1257e00795284fbe",
      appleLink: "https://podcasts.apple.com/us/podcast/welcome-to-night-vale",
      ytMusicLink: "https://music.youtube.com/search?q=Welcome+to+Night+Vale", 
      image:"images/wtnv.jpg"
    },
    {
      key:"moral",
      title: "Moral of the Story",
      spotifyLink: "https://open.spotify.com/show/1VoAfPc2yXoHcTrMw8Akim?si=bf41e9d7b8c84638",
      appleLink: "https://podcasts.apple.com/search?term=moral%20of%20the%20story",
      ytMusicLink: "https://music.youtube.com/search?q=Moral+of+the+Story+podcast", 
      image:"images/mots.jpg"
    },
    {
      key:"rotten",
      title: "Rotten Mango",
      spotifyLink: "https://open.spotify.com/show/2DZwvzn6Z3xCFZrwZGDrbj?si=fc62bbd553fc43c4",
      appleLink: "https://podcasts.apple.com/us/podcast/rotten-mango",
      ytMusicLink: "https://music.youtube.com/search?q=Rotten+Mango", 
      image: "images/rm.jpg"
    },
    {
      key:"bookskill",
      title: "If Books Could Kill",
      spotifyLink: "https://open.spotify.com/show/2khJBoF73ujIATWUFtSxLD?si=60a2829069e948e7",
      appleLink: "https://podcasts.apple.com/us/podcast/if-books-could-kill",
      ytMusicLink: "https://music.youtube.com/search?q=If+Books+Could+Kill",
      image: "images/bookskill.jpg"
    }
  ];

const checkboxes = document.querySelectorAll("input")

const recFormat = (podcast)=>{
  return (
      `
          <li class="rec">
              <p>${podcast.title}</p>
              <a href="${podcast.spotifyLink}"><button>Spotify Link</button></a>
              <a href="${podcast.appleLink}"><button>Apple Link</button></a>
              <a href="${podcast.ytMusicLink}"><button>YouTube Music Link</button></a>
          </li>
      `
  )
}

const insertHere = document.querySelector(".selected")

for (let i=0; i<checkboxes.length; i++){
  checkboxes[i].addEventListener("click", (e)=>{
    if (checkboxes[i].checked){
      let podcast=podcasts.find(item=>item.key===checkboxes[i].id)
      insertHere.innerHTML += recFormat(podcast)
  }
  })
}

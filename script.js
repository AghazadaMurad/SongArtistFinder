"use strict";

const searchEl = document.getElementById("search");
const songListEl = document.querySelector(".song-singer-list");

const data = [
  {
    artist: "Drake",
    song: "In My Feelings",
  },
  {
    artist: "Ed Sheeran",
    song: "Shape of You",
  },
  {
    artist: "Billie Eilish",
    song: "Bad Guy",
  },
  {
    artist: "Post Malone",
    song: "Rockstar",
  },
  {
    artist: "Ariana Grande",
    song: "7 Rings",
  },
  {
    artist: "Lil Nas X",
    song: "Old Town Road",
  },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
  },
  {
    artist: "Camila Cabello",
    song: "Havana",
  },
  {
    artist: "Imagine Dragons",
    song: "Believer",
  },
  {
    artist: "Taylor Swift",
    song: "Shake It Off",
  },
  {
    artist: "Shawn Mendes",
    song: "Señorita",
  },
  {
    artist: "Bruno Mars",
    song: "Uptown Funk",
  },
  { artist: "Rihanna", song: "Work" },
  {
    artist: "Justin Bieber",
    song: "Sorry",
  },
  { artist: "Katy Perry", song: "Roar" },

  {
    artist: "Cardi B",
    song: "Bodak Yellow",
  },
  { artist: "Maroon 5", song: "Sugar" },
  { artist: "Halsey", song: "Without Me" },

  { artist: "Dua Lipa", song: "New Rules" },

  {
    artist: "Imagine Dragons",
    song: "Radioactive",
  },
  {
    artist: "The Chainsmokers",
    song: "Closer",
  },
  {
    artist: "Sam Smith",
    song: "Stay with Me",
  },
  { artist: "Beyoncé", song: "Formation" },

  {
    artist: "Coldplay",
    song: "Viva La Vida",
  },
  { artist: "Sia", song: "Cheap Thrills" },
];

const allArtists = data.map((arr) => arr.artist);
const allSongs = data.map((arr) => arr.song);

searchEl.addEventListener("input", (e) => {
  const allData = allArtists.concat(allSongs);
  filterData(allData);
});

const filterData = (data) => {
  const filteredData = new Set(
    data.filter((artist) =>
      artist.toLocaleLowerCase().includes(searchEl.value.toLowerCase())
    )
  );
  const arrArray = Array.from(filteredData);
  displayArtist(arrArray);
};

const displayArtist = (arr) => {
  songListEl.innerHTML = "";

  if (arr.length == 0 || searchEl.value.length == 0) {
    songListEl.classList.add("hidden");
  } else {
    songListEl.classList.remove("hidden");
  }

  if (arr.length > 9) {
    arr = arr.slice(0, 9);
  }

  arr.forEach((artist) => {
    const artistList = document.createElement("li");
    const itemIcon = document.createElement("span");
    const itemName = document.createElement("span");

    artistList.addEventListener("click", () => {
      searchEl.value = itemName.innerText;
    });

    itemIcon.innerHTML = allArtists.find((name) => name == artist)
      ? `<i class="fa-solid fa-user"></i>`
      : `<i class="fa-solid fa-music"></i>`;
    itemName.innerText = artist;
    artistList.classList.add("list-item");

    artistList.insertAdjacentElement("afterbegin", itemIcon);
    artistList.insertAdjacentElement("beforeend", itemName);

    songListEl.append(artistList);
  });
};

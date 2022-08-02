export const links = [
  {
    name: "Navigation",
    submenu: true,
    sublinks: [
      {
        Head: "Home",
        sublink: [
          { name: "BulletJournal", link: "/" },
          { name: "Specials", link: "/" },
          { name: "Extras", link: "/" },
          { name: "CurrentDay", link: "/" },
        ],
      },
      {
        Head: "BulletJournal",
        sublink: [
          { name: "Year", link: "/" },
          { name: "Month", link: "/" },
          { name: "Week", link: "/" },
          { name: "Day", link: "/" },
        ],
      },
      {
        Head: "Extras",
        sublink: [
          { name: "Lists", link: "/" },
          { name: "Tracker", link: "/" },
        ],
      },

      {
        Head: "Specials",
        sublink: [
          { name: "GoogleNews", link: "/" },
          { name: "WheaterApi", link: "/" },
        ],
      },
    ],
  },
];

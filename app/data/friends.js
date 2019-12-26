var friends = [
  {
    name: "Chris Hemsworth",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.insider.com%2F5d4c880edcc1e7141a789532%3Fwidth%3D1100%26format%3Djpeg%26auto%3Dwebp&imgrefurl=https%3A%2F%2Fwww.insider.com%2Fchris-hemsworth-facts-2019-8&docid=SVASXKWqeLeHEM&tbnid=AWTb203x7Id6yM%3A&vet=10ahUKEwipjp2a9MPmAhUGILcAHQtEAdkQMwh9KAQwBA..i&w=1100&h=825&safe=active&bih=625&biw=1366&q=chris%20hemsworth&ved=0ahUKEwipjp2a9MPmAhUGILcAHQtEAdkQMwh9KAQwBA&iact=mrc&uact=8",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 4]
  },
  {
    name: "Hugh Jackman",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.hellomagazine.com%2Fimagenes%2Fcelebrities%2F2019081176363%2Fhugh-jackman-shocks-fans-new-photo%2F0-370-305%2Fhugh-jackman-close-up-t.jpg&imgrefurl=https%3A%2F%2Fwww.hellomagazine.com%2Ftags%2Fhugh-jackman%2F&docid=DNUHLiHQriqFAM&tbnid=WI6Xum-4Xzv-tM%3A&vet=10ahUKEwji9cHQ9sPmAhWzheYKHTBECZgQMwhwKAQwBA..i&w=1200&h=720&safe=active&bih=625&biw=1366&q=hugh%20jackman%20pictures&ved=0ahUKEwji9cHQ9sPmAhWzheYKHTBECZgQMwhwKAQwBA&iact=mrc&uact=8",
    score: [5, 3, 3, 5, 1, 4, 1, 2, 2, 4]
  },
  {
    name: "Matthew McConaughey",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstudybreaks.com%2Fwp-content%2Fuploads%2F2018%2F03%2FMM-e1521147029111.jpg&imgrefurl=https%3A%2F%2Fstudybreaks.com%2Ftvfilm%2Fmatthew-mcconaughey-comedies%2F&docid=rUKj2n33J6lVxM&tbnid=cCrBPXyTxuQKYM%3A&vet=10ahUKEwiC9PSZ98PmAhWxkOYKHQoMBcgQMwioASgiMCI..i&w=484&h=336&safe=active&bih=625&biw=1366&q=matthew%20mcconaughey&ved=0ahUKEwiC9PSZ98PmAhWxkOYKHQoMBcgQMwioASgiMCI&iact=mrc&uact=8",
    score: [3, 5, 5, 5, 2, 2, 4, 1, 1, 2]
  },
  {
    name: "Bradley Cooper",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FBradley_Cooper_%25283699322472%2529_%2528cropped%2529.jpg%2F220px-Bradley_Cooper_%25283699322472%2529_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_Bradley_Cooper_performances&docid=7UNMgBjiTDn0GM&tbnid=4j8tHBqKX4-LJM%3A&vet=10ahUKEwjvjaWI-MPmAhWSIbcAHYI8Di4QMwh6KAAwAA..i&w=220&h=312&safe=active&bih=625&biw=1366&q=bradley%20cooper&ved=0ahUKEwjvjaWI-MPmAhWSIbcAHYI8Di4QMwh6KAAwAA&iact=mrc&uact=8",
    score: [5, 5, 5, 1, 2, 2, 3, 3, 4, 4]
  },
  {
    name: "Jessica Chastain",
    photo:
      "https://www.google.com/search?q=jessica+chastain+photos&safe=active&rlz=1C1ZKTG_enAU880&sxsrf=ACYBGNTVcDw9MhquoSe6OMLwhcXHGdgZMw:1576835560843&tbm=isch&source=iu&ictx=1&fir=yq3sTgnx26z1vM%253A%252CbKDMlNQY032mUM%252C_&vet=1&usg=AI4_-kSXYBH0TeAsnSr98oGnEaCa6Fg00w&sa=X&ved=2ahUKEwicreSb-sPmAhUEzDgGHch1B7cQ9QEwBXoECAoQLA#",
    score: [2, 3, 1, 1, 4, 5, 5, 3, 2, 4]
  },
  {
    name: "Kate Winslet",
    photo:
      "https://www.google.com/search?q=kate+winslet+photos&safe=active&rlz=1C1ZKTG_enAU880&sxsrf=ACYBGNQ1RM3lSihJaiATr2pCq_BeFXTL-A:1576835653613&tbm=isch&source=iu&ictx=1&fir=z_UZOeAKb8dYAM%253A%252CkBrz-ZOx5VQUBM%252C_&vet=1&usg=AI4_-kQ7Pt5Ubyuz68NsJzxoABVRohhsZg&sa=X&ved=2ahUKEwiLwILI-sPmAhU6xDgGHSKvCk4Q9QEwA3oECAoQKA#",
    score: [3, 3, 1, 2, 2, 4, 4, 5, 5, 1]
  },
  {
    name: "Natalie Portman",
    photo:
      "https://www.google.com/search?q=natalie+portman+photos&safe=active&rlz=1C1ZKTG_enAU880&sxsrf=ACYBGNRxUTQx_AraClcFDFpbz3KqtdO12w:1576835732984&tbm=isch&source=iu&ictx=1&fir=kA3plPVKqJ8lTM%253A%252CPo8QDmOvFF5YcM%252C_&vet=1&usg=AI4_-kQ-hwVFBjQN3Hp2N7wIsabKRe7x6w&sa=X&ved=2ahUKEwjF--7t-sPmAhWOzDgGHbsgCfgQ9QEwC3oECAkQPw#",
    score: [5, 5, 1, 1, 2, 2, 3, 4, 3, 4]
  },
  {
    name: "Jennifer Lawrence",
    photo:
      "https://www.google.com/search?q=jennifer+lawrence+photos&safe=active&rlz=1C1ZKTG_enAU880&sxsrf=ACYBGNRKmaNYFuda_qVCgXElAYfqRQQ8Fg:1576835856651&tbm=isch&source=iu&ictx=1&fir=FyAtxt1RBYTjMM%253A%252C_WzCWYZUEoOq4M%252C_&vet=1&usg=AI4_-kS3QYO-ttKqJNUDRowOO_0bPg1MaA&sa=X&ved=2ahUKEwi6_uqo-8PmAhWuyzgGHRhUCB4Q9QEwBXoECAoQLg#",
    score: [4, 1, 1, 3, 2, 5, 5, 5, 4, 2]
  }
];

module.exports = friends;

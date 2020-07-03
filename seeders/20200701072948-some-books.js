"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "The Idiot",
          author: "Fyodor Dostoevsky",
          genre: "fiction",
          year: "1868",
          price: "20.00",
          image: "https://m.media-amazon.com/images/I/41vcir8ILAL.jpg",
          review: "The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolayevich Myshkin, a young man whose goodness, open-hearted simplicity and guilelessness lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting \"the positively good and beautiful man.\"[1] The novel examines the consequences of placing such a unique individual at the centre of the conflicts, desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes involved.",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Journal Of Happiness",
          author: "Nicolae Steinhardt",
          genre: "biography",
          year: "1991",
          price: "25.00",
          image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420506917l/24313200.jpg",
          review: "Today we’re excited to share with you selections from the groundbreaking Romania masterpiece The Journal of Joy by Nicolae Steinhardt, one of the most revered dissidentnames in Romanian literature and philosophy. Born from a Jewish father and a Romanian mother, Nicolae Steinhardt (July 12, 1912 – March 29, 1989) was a Romanian writer Orthodox hermit and father confessor. He was subject to anti-semitic discrimination during the fascist governments of World War II Romania and, after the war, he was persecuted and imprisoned by the communist regime. He was sentenced to 13 years of forced labor at Jilava Prison for “the crime of conspiracy against the social order.” In prison, on March 15th, 1960, he converted to Christianity under the direction of Mina Dobzeu, a Bessarabian hieromonk. In 1980, Steinhardt became a monk and lived in the Rohia Monastery working as a librarian until his death in March 1989, without getting the chance to see his country free of communism. The Journal of Joy, his best known and most celebrated work, was confiscated by the Securitate (the Romanian secret police) in 1972, restituted in 1975, and confiscated again in 1984. In the end, Steinhardt edited several versions, one of which was broadcast in a series of episodes via Radio Free Europe. Due to political reasons, most of Steinhardt’s work has been published postmortem in its uncensored version after the communist regime collapse in 1989.",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};

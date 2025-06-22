export interface Book {
  id: number;
  title: string;
  author: string;
  genre: "художественная литература" | "справочники" | "интерактивные игры";
  description: string;
  coverImage: string;
  year: number;
  isInteractive?: boolean;
  interactiveUrl?: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "V - значит Вендетта",
    author: "Алан Мур",
    genre: "интерактивные игры",
    description:
      "Интерактивная история о борьбе за свободу в мрачном будущем. Ваши решения определяют судьбу героев.",
    coverImage:
      "https://i.pinimg.com/736x/09/b8/dd/09b8dd289144f54e863e0928f615fc1f.jpg",
    year: 2023,
    isInteractive: true,
    interactiveUrl: "https://interactive-book-vendetta--preview.poehali.dev/",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    genre: "справочники",
    description:
      "Практическое руководство по садоводству с проверенными советами для начинающих и опытных садоводов.",
    coverImage:
      "https://i.pinimg.com/736x/0d/b5/47/0db547fd818f4680cfacfb65534d69bb.jpg",
    year: 2022,
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    genre: "справочники",
    description:
      "Исследование уникальной архитектуры таинственного города Дасквуд с детальными чертежами и историческими фактами.",
    coverImage:
      "https://i.pinimg.com/736x/1a/10/49/1a10499bcf41685218b149b19538a5a2.jpg",
    year: 2021,
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    genre: "художественная литература",
    description:
      "Мрачная история о загадочной эпидемии, охватившей город Дасквуд. Триллер, который не отпустит до последней страницы.",
    coverImage:
      "https://i.pinimg.com/736x/00/a0/21/00a02143c4dca82ebfa829a3cea44c1f.jpg",
    year: 2020,
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    genre: "художественная литература",
    description:
      "Мистический роман о событиях, происходящих в Дасквуде после полуночи. Атмосферная история полная тайн и загадок.",
    coverImage:
      "https://i.pinimg.com/736x/52/79/08/5279085d8852503a31fb3640de695aa8.jpg",
    year: 2019,
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    genre: "справочники",
    description:
      "Полный справочник растений и животных региона Дасквуд с красочными иллюстрациями и научными описаниями.",
    coverImage:
      "https://i.pinimg.com/736x/15/e9/6c/15e96ce334c761bdaf7b995e1936e084.jpg",
    year: 2021,
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Everbyte Studio",
    genre: "интерактивные игры",
    description:
      "Текстовая приключенческая игра в жанре хоррор. Исследуйте заброшенный город и раскройте его темные секреты.",
    coverImage:
      "https://everbytestudio.com/wp-content/uploads/2018/11/Text-Adventure-Dead-City-Android-iOS.jpg",
    year: 2018,
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Everyte Studio",
    genre: "интерактивные игры",
    description:
      "Интерактивная история о мистическом городке Moonvale, где каждое решение влияет на развитие сюжета.",
    coverImage:
      "https://everbytestudio.com/wp-content/uploads/2023/05/MOONVALE-Web-Selection-Button.jpg",
    year: 2023,
  },
];

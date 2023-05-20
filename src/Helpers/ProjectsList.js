import proj1 from '../../public/assets/images/proj1.png';
import proj2 from '../../public/assets/images/proj2.png';
import proj4 from '../../public/assets/images/proj4.png';
import proj5 from '../../public/assets/images/proj5.png';
import proj6 from '../../public/assets/images/proj6.png';
import proj8 from '../../public/assets/images/proj8.png';
import proj9 from '../../public/assets/images/proj9.png';

const ProjectsList = [
  {
    id: 1,
    name: 'Fragrances Website',
    description:
      'The Fragrances Website made for a client is a beautifully designed website that showcases a range of fragrances. It was built using Styled Components and Vite, which allowed for a fast and efficient development process. With its elegant design and easy-to-use interface, the website provides an enjoyable user experience for anyone looking to explore the world of fragrances.',
    image: proj9,
    link: 'https://fragrances-website.netlify.app',
    technologies: [
      '/assets/images/react.png',
      '/assets/images/styled-comp.png',
      '/assets/images/javascript.png',
    ],
  },
  {
    id: 2,
    name: 'Movie Website Tmdb Clone',
    description:
      'Movie Website Tmdb Clone is a responsive web application built using React and styled with Material-UI that clones the functionality of The Movie Database (TMDb) website. Users can sign up and log in using Firebase Authentication, browse popular and upcoming movies, search for movies by title, and view movie details including ratings, reviews, and similar movies. The application utilizes TMDb API for fetching movie data, and Firebase Firestore for storing user data and movie bookmarks.',
    image: proj6,
    link: 'https://tmdb-clone-react-wageh.netlify.app',
    technologies: [
      '/assets/images/firebase.svg',
      '/assets/images/react.png',
      '/assets/images/styled-comp.png',
      '/assets/images/vite.svg',
      '/assets/images/javascript.png',
    ],
  },
  {
    id: 3,
    name: 'Photo Gallery Website',
    description:
      ' Photo Gallery Website is a visually stunning project that allows users to store their personal photos in a secure and organized manner. It offers a range of features, including sign-in and logout functionality using Firebase authentication, as well as a light and dark mode toggle for customization. The use of styled components and Vite for the React framework ensures that the website is highly responsive and user-friendly.',
    image: proj1,
    link: 'https://awesome-gallery-wageh.netlify.app',
    technologies: [
      '/assets/images/firebase.svg',
      '/assets/images/react.png',
      '/assets/images/styled-comp.png',
      '/assets/images/framer.svg',
      '/assets/images/javascript.png',
    ],
  },
  {
    id: 4,
    name: 'Crypto Currency Website',
    description:
      ' Crypto Currency Website is a simple yet functional project that retrieves data from an API and displays the latest crypto currency prices. This website was created using React and CSS styling and was made during the learning phase of API and React development.',
    image: proj4,
    link: 'https://wageh-cryptoapp.netlify.app',
    technologies: ['/assets/images/react.png', '/assets/images/css3.png'],
  },
  {
    id: 5,
    name: 'chat app website',
    description:
      "Chat App Website is a modern messaging platform built with Styled Components and Firebase Authentication. With an intuitive user interface, users can sign in, chat with friends, and log out seamlessly. It's a reliable and secure way to stay connected with friends and loved ones, all while enjoying the sleek design of the app.",
    image: proj5,
    link: 'https://wageh-chatapp-react.netlify.app',
    technologies: [
      '/assets/images/firebase.svg',
      '/assets/images/react.png',
      '/assets/images/styled-comp.png',
      '/assets/images/javascript.png',
    ],
  },
  {
    id: 8,
    name: 'Netflix Html Ui',
    description:
      "Netflix HTML UI is a project that emulates the Netflix user interface using HTML and CSS. It includes a navigation bar, banner, movie listings, and various hover effects. It's a great project for practicing front-end web development skills.",
    image: proj8,
    link: 'https://wagehzaietr.github.io/Netflix-clone-Ui/',
    technologies: ['/assets/images/css3.png', '/assets/images/html.png'],
  },
  {
    id: 9,
    name: 'Restaurant Website',
    description:
      'Restaurant Website is a beautifully designed website built using React and styled-components. It features various food categories and a user-friendly interface for easy navigation. With its clean and modern design, this website is sure to impress restaurant-goers and food enthusiasts alike.',
    image: proj2,
    link: 'https://restaurant-react-ui.netlify.app',
    technologies: [
      '/assets/images/react.png',
      '/assets/images/styled-comp.png',
      '/assets/images/css3.png',
      '/assets/images/javascript.png',
    ],
  },
  // Add more unique projects here
];

export { ProjectsList };

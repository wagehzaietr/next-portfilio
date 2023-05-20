import Contact1 from '../../public/assets/images/instagram.png';
import Contact2 from '../../public/assets/images/linkedin.png';
import Contact3 from '../../public/assets/images/github.png';
import { AiFillPhone } from 'react-icons/ai';
import { RiMapPin2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const ContactInfo = [
  {
    id: 1,
    name: 'name',
    icon: <FaUser size={15} />,
    info: 'Wageh zaietr',
  },
  {
    id: 1,
    name: 'email',
    icon: <IoMdMail size={15} />,
    info: 'bad1game1@hotmail.com',
  },
  {
    id: 1,
    name: 'phone',
    icon: <AiFillPhone size={15} />,
    info: '+963 960902967',
  },
  {
    id: 1,
    name: 'address',
    icon: <RiMapPin2Fill size={15} />,
    info: 'Damascus syria',
  },
];


const technobuild = [
  {
    id: 1,
    img: '/assets/images/nextjs.svg',
  },
  {
    id: 2,
    img: '/assets/images/tailwind1.png',
  },
  {
    id: 3,
    img: '/assets/images/react.png',
  },
];

const ItemsList = [
  {
    title: 'Home',
    path: '/',
  },
  { title: 'projects', path: '/Projects' },
  {
    title: 'Contact',
    path: '/Contact',
  },
];

const Btn = [
  { button: Contact3, link: 'https://github.com/wagehzaietr' },
  { button: Contact1, link: 'https://www.instagram.com/wageh_zaetr/' },
  {
    button: Contact2,
    link: 'https://www.linkedin.com/in/wageh-zaietr-2b5bb5265/',
  },
];

const Skillsletters = [
  { letter: 'S' },
  {
    letter: 'k',
  },
  {
    letter: 'i',
  },
  {
    letter: 'l',
  },
  {
    letter: 'l',
  },
  {
    letter: 's',
  },
];

const ProjectsLetters = [
  { letter: 'P' },
  {
    letter: 'r',
  },
  {
    letter: 'o',
  },
  {
    letter: 'j',
  },
  {
    letter: 'e',
  },
  {
    letter: 'c',
  },
  {
    letter: 't',
  },
  {
    letter: 's',
  },
];

const Aboutme = [
  {
    letter: 'A',
  },
  {
    letter: 'b',
  },
  {
    letter: 'o',
  },
  {
    letter: 'u',
  },
  {
    letter: 't',
  },
];

// const emojis = [
//   {
//     id: 1,
//     emoji: <BsEmojiSunglasses />,
//     className: 'text-[2.5rem] absolute top-[-20%] left-[25%] text-text',
//   },
//   {
//     id: 2,
//     emoji: <BsEmojiHeartEyesFill />,
//     className: 'text-[2.5rem] absolute top-[30%] left-[-15%] text-text',
//   },
//   {
//     id: 3,
//     emoji: <BsEmojiWinkFill />,
//     className: 'text-[2.5rem] absolute top-[20%] right-[-20%] text-text',
//   },
//   {
//     id: 4,
//     emoji: <GiConsoleController />,
//     className: 'text-[2.5rem] absolute top-[-15%] right-[20%] text-text',
//   },
// ];

export { ItemsList, Btn, Skillsletters, ProjectsLetters, Aboutme, technobuild, ContactInfo };

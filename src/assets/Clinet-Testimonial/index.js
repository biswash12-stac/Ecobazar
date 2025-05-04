import InvertedComma from './InvertedComma.svg'
import Client1 from './Client1.svg'
import Client2 from './Client2.svg'
import Client3 from './Client3.svg'
import Ellipse from './Ellipse 5.png'
import Client4 from './Client4.svg'
export { InvertedComma,Client4, Client1, Client2, Client3, Ellipse}


export const ClientDetails = [
    {
        id: 1,
        name: 'Robert Fox',
        role: 'Customer',
        images: Client3,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
        comma:InvertedComma
    },
    {
        id: 2,
        name: 'Eleanor Pena',
        role: 'Customer',
        images: Client4,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
        comma:InvertedComma

    },
    {
        id: 3,
        name: 'Dianne Russell',
        role: 'Customer',
        images: Client1,  // Use the imported variable instead of the string
        description: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
        rating: 5,
        comma:InvertedComma

    },
    {
        id:4,
        name:"Biswash Mainali",
        role:"customer",
        images:Ellipse,
        description:"Hi i am biswash mainali i am a regular customer of shopper i found it very amusing using shoppery . Shopper has help me in my needs of veggies . My kids love vegies from shoppery.",
        ratingIcon:4,
        comma:InvertedComma
    }
];

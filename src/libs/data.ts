import { Category, Video } from "./definitions";


const categories: Category[] = [
    {
        "id": 1,
        "name": "tutoriales",
        "example" : "aBfqXqv-8wk",
        "link" : "https://www.youtube.com/playlist?list=PLYIkCBHIxkBfrhsNPoa4ouzggiunlnUYO",
       
    },
    {
        "id": 2,
        "name": "vlogs",
        "example": "CMa1I6dn_UA",
        "link" : "https://www.youtube.com/playlist?list=PLYIkCBHIxkBf9RCUn-afN2GHMSgxDOgk0",
       
    },
    
    
]

const videos: Video[] = [
    { id: 1, name: "Ruta 99 (parte 1)", url: "https://www.youtube.com/watch?v=x3c9vZb5lA0&t=1s", thumb: "/thumb-1.webp" },
    { id: 2, name: "El Trial de Higueruela", url: "https://www.youtube.com/watch?v=z2k0x2NGluM&t=8s", thumb: "/thumb-2.webp" },
    { id: 3, name: "El Trial de Higueruela", url: "https://www.youtube.com/watch?v=z2k0x2NGluM&t=8s", thumb: "/thumb-2.webp" },
  ];


export { categories, videos };
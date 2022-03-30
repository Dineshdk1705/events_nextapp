const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'CPP',
      description:
        'C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language.',
      location: 'Building 445, 12500 Bengaluru Somewhereo',
      date: '2021-06-17',
      image: 'images/cpp.png',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'JAVA',
      description:
        'Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS.',
      location: 'Street 15, 225 Hydrabad Somewhereo',
      date: '2022-01-10',
      image: 'images/java.jpEg',
      isFeatured: true,
    },
    {
      id: 'e6',
      title: 'Python',
      description:
        "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.",
      location: 'E-Tower 17, 225 Mumbai Somewhereo',
      date: '2022-05-17',
      image: 'images/python.png',
      isFeatured: true,
    },
    {
      id: 'e7',
      title: 'HTML',
      description:
        'HTML, or HyperText Markup Language, allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, it’s worth noting that HTML is not considered a programming language as it can’t create dynamic functionality.',
      location: 'Street 64, 22445 Gujrat Somewhereo',
      date: '2021-08-22',
      image: 'images/html.png',
      isFeatured: true,
    },
    {
      id: 'e8',
      title: 'CSS',
      description:
        'CSS (Cascading Style Sheets) is used to style and lay out web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.',
      location: 'Building G 45, 12345 Goa Somewhereo',
      date: '2021-06-12',
      image: 'images/css.webp',
      isFeatured: true,
    },
    {
      id: 'e9',
      title: 'JavaScript',
      description:
        "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.",
      location: 'Adayar 525, 12345 Chennai Somewhereo',
      date: '2021-07-15',
      image: 'images/javascript.webp',
      isFeatured: true,
    },
    {
      id: 'e10',
      title: 'ReactJs',
      description:
        "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
      location: 'Street 31, 41114 Pune Somewhereo',
      date: '2021-05-12',
      image: 'images/react.webp',
      isFeatured: true,
    },
    {
      id: 'e11',
      title: 'NodeJs',
      description:
        'Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.',
      location: 'Somestreet 75, 12345 Delhi Somewhereo',
      date: '2022-05-12',
      image: 'images/nodejs.jpg',
      isFeatured: true,
    },
    {
      id: 'e12',
      title: 'Data Structure & Algo',
      description:
        'Data Structures are a specialized means of organizing and storing data in computers in such a way that we can perform operations on the stored data more efficiently.',
      location: 'Bulding DK 17, 12345 San Somewhereo',
      date: '2022-03-25',
      image: 'images/datastructure.png',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
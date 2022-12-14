const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Books' },
    { name: 'Food' },
    { name: 'Misc' },
    { name: 'Pets' },
    { name: 'Electronics' },
    { name: 'Toys' },
    { name: 'All' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Turntable',
      category: categories[4]._id,
      description: 'To every season, turn, turn, turn...',
      image: 'turntable.jpg',
      price: 69.0,
      quantity: 14,
    },
    {
      name: 'Happy Pill',
      category: categories[1]._id,
      description: "Don't worry, be happy!",
      image: 'happypill.jpg',
      price: 120.0,
      quantity: 8,
    },
    {
      name: 'Edison Bulb',
      category: categories[4]._id,
      description:'Let there be light!',
      image: 'edisonbulb.jpg',
      price: 22.0,
      quantity: 270,
    },
    {
      name: 'Mercury Rover',
      category: categories[4]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'mercuryrover.jpg',
      price: 30000.0,
      quantity: 3,
    },
    {
      name: 'Thigamajig',
      category: categories[5]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'thigamajig.jpg',
      price: 14.0,
      quantity: 179,
    },
    {
      name: 'Smugglebox',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'smugglebox.jpg',
      price: 270.0,
      quantity: 92,
    },
    {
      name: 'Jackelope',
      category: categories[3]._id,
      description: "Fast as fast can be, you'll never catch me!",
      image: 'jackelope.jpg',
      price: 225.0,
      quantity: 3,
    },
    {
      name: 'Snozberry Ice Cream',
      category: categories[1]._id,
      description: "The snozberries taste like real snozberries!",
      image: 'blueicecream.jpg',
      price: 4.0,
      quantity: 187,
    },    
    {
      name: 'Attack Drone',
      category: categories[4]._id,
      description: "Up in the sky, it's a bird, it's a plane, no, it's <*BOOM*> ",
      image: 'drone.jpg',
      price: 825.0,
      quantity: 21,
    },
    {
      name: 'Endangered Oogabooga',
      category: categories[3]._id,
      description: "A coder's spirit animal.",
      image: 'oogabooga.jpg',
      price: 1125.0,
      quantity: 5,
    },
    // {
    //   name: 'Fresh Caught Cheddar',
    //   category: categories[1]._id,
    //   description:
    //     'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
    //   image: 'soap.jpg',
    //   price: 3.99,
    //   quantity: 58,
    // },
    {
      name: 'VR Headset',
      category: categories[4]._id,
      description: "Don't forget to check your surroundings.",
      image: 'VRheadset.jpg',
      price: 399.0,
      quantity: 97,
    },    
    
    // {
    //   name: 'Blackberry Juice',
    //   description:
    //     'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
    //   image: 'canned-coffee.jpg',
    //   category: categories[1]._id,
    //   price: 1.99,
    //   quantity: 524,
    // },    
    // {
    //   name: 'Webb Telescope Model',
    //   category: categories[5]._id,
    //   description:
    //     'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
    //   image: 'camera.jpg',
    //   price: 399.99,
    //   quantity: 31,
    // },
    {
      name: 'Fighter Jet',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'jet.jpeg',
      price: 15000000.0,
      quantity: 2,
    },
    {
      name: 'Good Boi',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'goodboi.jpg',
      category: categories[3]._id,
      price: 2500.0,
      quantity: 1,
    },
    // {
    //   name: 'Clean Toilet Paper',
    //   category: categories[2]._id,
    //   description:
    //     'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
    //   image: 'toilet-paper.jpg',
    //   price: 7.99,
    //   quantity: 20,
    // },
    {
      name: '1 Ring Way, The Shire, M-E',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'hobbithole.jpg',
      category: categories[2]._id,
      price: 50,
      quantity: 1,
    },
    {
      name: 'Mega-PhoneXL',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 22,
    },
    {
      name: 'Camping Skillet',
      category: categories[2]._id,
      description: "Compact cast-iron skillet.  Sturdy enough for any mouse to use on the resident cat.",
      image: 'campskillet.jpg',
      price: 30.0,
      quantity: 46,
    },
    {
      name: '12 Seashells',
      category: categories[2]._id,
      description: "Styles may vary",
      image: 'twelveseashells.jpg',
      price: 225.0,
      quantity: 3,
    },
    {
      name: 'Encyclopedia XYZ',
      category: categories[0]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 18.0,
      quantity: 26,
    },
    {
      name: '5.25" floppy disk',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'floppy-disk.jpg',
      price: 0.99,
      quantity: 10877,
    },
    // {
    //   name: 'Super Shortbread',
    //   description:
    //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    //   image: 'cookie-tin.jpg',
    //   category: categories[1]._id,
    //   price: 2.99,
    //   quantity: 239,
    // },
    {
      name: 'M551 Sheridan Tank',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'm551-sheridan.jpeg',
      price: 750000.0,
      quantity: 11,
    },
    // {
    //   name: 'Tesseract',
    //   category: categories[2]._id,
    //   description:
    //     'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
    //   image: 'spinning-top.jpg',
    //   price: 1.99,
    //   quantity: 17,
    // },    
    {
      name: 'Street Racer',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'porsche.jpg',
      category: categories[4]._id,
      price: 120000.0,
      quantity: 7,
    },
    // {
    //   name: 'Ted',
    //   category: categories[3]._id,
    //   description:
    //     'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
    //   image: 'teddy-bear.jpg',
    //   price: 7.99,
    //   quantity: 1,
    // },
    {
      name: 'Avocado Toast',
      category: categories[1]._id,
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'avocadotoast.jpg',
      price: 12.0,
      quantity: 162,
    },    
    {
      name: 'Redbull F1 car',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'F1-RedBull.jpeg',
      price: 2400000.0,
      quantity: 1,
    },
    {
      name: 'Lava',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'lavaflow.jpg',
      category: categories[2]._id,
      price: 1.0,
      quantity: 1,
    },
    {
      name: 'Tool Set',
      category: categories[2]._id,
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'toolset.jpg',
      price: 89.0,
      quantity: 17,
    },
    {
      name: 'Vintage Doorbell',
      category: categories[2]._id,
      description:
        'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'vintagedoorbell.jpg',
      price: 37.0,
      quantity: 18,
    },
    // {
    //   name: 'Pig Latin Ocksblay',
    //   category: categories[5]._id,
    //   description:
    //     'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
    //   image: 'alphabet-blocks.jpg',
    //   price: 9.99,
    //   quantity: 26,
    // },    
    {
      name: 'Missle Silo',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'silo.jpg',
      price: 89000.0,
      quantity: 1,
    },
    // {
    //   name: 'Faux Wood Spoons',
    //   category: categories[2]._id,
    //   description:
    //     'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
    //   image: 'wooden-spoons.jpg',
    //   price: 14.99,
    //   quantity: 67,
    // },
    {
      name: 'Europa',
      category: categories[2]._id,
      description: "One of Jupiter's better moons. Delivery not available.",
      image: 'Europa.jpg',
      price: 1400000000.0,
      quantity: 1,
    },
    {
      name: 'Crispbread',
      category: categories[1]._id,
      description: "Mmmm...crispety, crunchety.",
      image: 'crispbread.jpg',
      price: 18.0,
      quantity: 323,
    },
    {
      name: 'Tubbatellies',
      category: categories[3]._id,
      description:
        'Please, the "price" is actually how much we will pay you to take them...',
      image: 'teletubbies.jpeg',
      price: 25.0,
      quantity: 4,
    },
    {
      name: 'Boot(L)',
      category: categories[2]._id,
      description:
        'Boot. Please note this is a left boot only[Not pictured]. Not suitable for someone with two feet (unless their both left).',
      image: 'boot.jpeg',
      price: 300.0,
      quantity: 2,
    },
    // {
    //   name: 'Wild Horses',
    //   category: categories[3]._id,
    //   description:
    //     'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
    //   image: 'plastic-horses.jpg',
    //   price: 2.99,
    //   quantity: 43,
    // },
    {
      name: 'Lemon',
      category: categories[1]._id,
      description: "Bring out the Gimp.  The Gimp's got a lemon.  Well I guess you're gonna have to sell it then, won't you?",
      image: 'lemongimp.jpg',
      price: 8.0,
      quantity: 1,
    },
    {
      name: 'Wind Turbine (used)',
      category: categories[2]._id,
      description: "Great for open spaces.  (Lightning protection not included.)",
      image: 'turbine.jpg',
      price: 12997.0,
      quantity: 1,
    },
    {
      name: 'Brownie Camera',
      category: categories[4]._id,
      description: 'State of the art camera. Only 1 left!',
      image: 'cameraBrownie.jpeg',
      price: 4000.0,
      quantity: 1,
    },    
    
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});

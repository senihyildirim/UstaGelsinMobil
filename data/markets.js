const markets = [
    {
        id: 'market1',
        title: 'Akınlar Beyaz Eşya',
        image: require('../src/assets/images/beyazstore.jpg'),
        subtitle: 'Arçelik ve Beko Beyaz Eşya Satışı',
        rate: 4.8,
        distance: 1.2
    },
    {
        id: 'market2',
        title: 'Gladius Bilgisayar',
        image: require('../src/assets/images/pcshop.jpg'),
        subtitle: 'Bilgisayar ,Laptop, Telefon, Tablet Tamiri',
        rate: 3.8,
        distance: 1.5
    },
    {
        id: 'market3',
        title: 'Sarman Tadilat',
        image: require('../src/assets/images/tadilatshop.jpg'),
        subtitle: 'Parke, Duvar Kağıdı,Tadilat',
        rate: 4.0,
        distance: 2.2
    },
    {
        id: 'market4',
        title: 'Yılmaz Tesisat',
        image: require('../src/assets/images/plumbing.jpeg'),
        subtitle: 'Lorem ipsum dolor sit amet',
        rate: 4.0,
        distance: 2.2,
        Hizmetler: [
            {
                id: 'hizmet1',
                title: 'Akıtma Tesisatı Tamiri',
                price : 1000
            },
            {
                id: 'hizmet2',
                title: 'Mutfak lavabosu Tamiri',
                price : 100
            },
            {
                id: 'hizmet3',
                title: 'Kombi Tamiri',
                price : 300
            },
            {
                id: 'hizmet4',
                title: 'Gider Temizleme',
                price : 200
            },
            {
                id: 'hizmet5',
                title: 'Lavobo Montoj',
                price : 400
            },
            {
                id: 'hizmet6',
                title: 'Duşakan Montaj',
                price : 300
            }
        ]
    },

];

export default markets;
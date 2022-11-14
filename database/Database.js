import Product from '../models/Product';

export const Items = [
    new Product(
        1, // id
        'pills', // category
        'Astel ', // productName
        20, // productPrice
        'מכילה את הכמות הנמוכה ביותר של אסטרוגן- 15 מיקרוגרם. באריזה 28 גלולות הניטלות ברציפות ללא הפסקה בין חפיסה לחפיסה. ארבעת הגלולות האחרונות הצבועות לבן אינן מכילות הורמונים ונועדו כדי לשמור על רצף נטילת הגלולות. המינון הנמוך מצמצם את תופעות הלוואי שפורטו, כמו רגישות בשדיים וצבירת נוזלים. בשל המינון הנמוך עלולות להופיע יותר הכתמות (דימומים פתאומיים בין ויסתיים) ולכן גלולה זו פחות מתאימה לציבור הדתי.', // descreptaion
        true, // isOff
        10, // offPercentage
        // productImage
        require('../assets/images/Pills/Astel/estella 1.jpg'),
        true, // isAvailable
        // productImageList
        [
            require('../assets/images/Pills/Astel/estella 1.jpg'),
            require('../assets/images/Pills/Astel/estella 3.jpg'),
            require('../assets/images/Pills/Astel/estella 4.jpg'),
        ],
    ),
    new Product(
    2,
    'pills',
    'Balara ',
    1986,
    '.',
    false,
    10,
    require('../assets/images/Pills/Balara/belara 1.jpg'),
    true,
        [
            require('../assets/images/Pills/Balara/belara 1.jpg'),
            require('../assets/images/Pills/Balara/belara 2.webp'),
            require('../assets/images/Pills/Balara/belara 3.jpg'),
        ],
    ),
    new Product(
    3,
    'pills',
    'Diana',
    1900,
    '.',
    true,
    10,
    require('../assets/images/Pills/Diana/diane 1.jpg'),
    true,
    [
        require('../assets/images/Pills/Diana/diane 1.jpg'),
        require('../assets/images/Pills/Diana/diane3.jpg'),
        require('../assets/images/Pills/Diana/diane4.jpg'),
    ],
    ),
    new Product(
    4,
    'pills',
    'Minesse',
    250,
    '.',
    true,
    10,
    require('../assets/images/Pills/Minesse/minesse 1.jpg'),
    false,
    [
        require('../assets/images/Pills/Minesse/minesse 3.jpg'),
        require('../assets/images/Pills/Minesse/minesse 4.jpg'),
    ],
    ),
    new Product(
    5,
    'abdominalPain',
    'Altman',
    150,
    '.',
    false,
    10,
    require('../assets/images/AbdominalPain/Altman/Altman 3.jpeg'),
    true,
    [
        require('../assets/images/AbdominalPain/Altman/Altman 3.jpeg'),
        require('../assets/images/AbdominalPain/Altman/Altman 4 .jpeg'),
        require('../assets/images/AbdominalPain/Altman/probiotics 3.png'),
    ],
    ),
    new Product(
    6,
    'abdominalPain',
    'acamol',
    300,
    '.',
    true,
    10,
    require('../assets/images/AbdominalPain/acamol/acamol 1.webp'),
    true,
    [
        require('../assets/images/AbdominalPain/acamol/acamol 1.webp'),
        require('../assets/images/AbdominalPain/acamol/acamol 2.jpg'),
        require('../assets/images/AbdominalPain/acamol/acamol 4.jpg'),
    ],
    ),
    new Product(
    7,
    'abdominalPain',
    'calbaten forte',
    450,
    '.',
    false,
    10,
    require('../assets/images/AbdominalPain/calbaten forte/calbaten forte 1.jpg'),
    false,
    [
        require('../assets/images/AbdominalPain/calbaten forte/calbaten forte 2.jpg'),
        require('../assets/images/AbdominalPain/calbaten forte/calbaten forte 3.jpg'),
        require('../assets/images/AbdominalPain/calbaten forte/calbaten forte 4.jpg'),
    ],
    ),
    new Product(
    8,
    'abdominalPain',
    'probiotics',
    500,
    '.',
    false,
    10,
    require('../assets/images/AbdominalPain/probiotics/probiotics 2.jpg'),
    false,
    [
        require('../assets/images/AbdominalPain/probiotics/probiotics 2.jpg'),
        require('../assets/images/AbdominalPain/probiotics/probiotics 3.png'),
        require('../assets/images/AbdominalPain/probiotics/probiotics 4.webp'),
    ],
    ),
    new Product(
    9,
    'backpain',
    'bengay',
    250,
    '.',
    true,
    10,
    require('../assets/images/BackPain/bengay/bengay 1.jpg'),
    false,
    [
        require('../assets/images/BackPain/bengay/bengay 2.webp'),
        require('../assets/images/BackPain/bengay/bengay 3.png'),
        require('../assets/images/BackPain/bengay/bengay 4.jpg'),
    ],
    ),
    new Product(
        10,
        'backpain',
        'perskindol',
        250,
        '.',
        true,
        10,
        require('../assets/images/BackPain/perskindol/perskindol 1.jpg'),
        true,
        [
            require('../assets/images/BackPain/perskindol/perskindol 2.png'),
            require('../assets/images/BackPain/perskindol/perskindol 3.png'),
            require('../assets/images/BackPain/perskindol/perskindol 4.jpg'),
        ],
        ),
        
    new Product(
        11,
        'backpain',
        'traumeel',
        250,
        '.',
        true,
        10,
        require('../assets/images/BackPain/traumeel/traumeel 1.jpg'),
        true,
        [
            require('../assets/images/BackPain/traumeel/traumeel 2.webp'),
            require('../assets/images/BackPain/traumeel/traumeel 3.png'),
            require('../assets/images/BackPain/traumeel/traumeel 4.webp'),
        ],
        ),
        
    new Product(
        12,
        'backpain',
        'voltaren',
        250,
        '.',
        false,
        10,
        require('../assets/images/BackPain/voltaren/voltaren 1.gif'),
        false,
        [
            require('../assets/images/BackPain/voltaren/voltaren 2.jpeg'),
            require('../assets/images/BackPain/voltaren/voltaren 3.gif'),
            require('../assets/images/BackPain/voltaren/voltaren 4.jpg'),
        ],
        ),
        
    new Product(
        13,
        'headaches',
        'acamol',
        250,
        '.',
        true,
        10,
        require('../assets/images/Headaches/acamol/acamol 1.webp'),
        true,
        [
            require('../assets/images/Headaches/acamol/acamol 2.jpg'),
            require('../assets/images/Headaches/acamol/acamol 3.webp'),
            require('../assets/images/Headaches/acamol/acamol 4.jpg'),
        ],
        ),
        
    new Product(
        14,
        'headaches',
        'advil',
        250,
        '.',
        false,
        10,
        require('../assets/images/Headaches/advil/advil 1.jpg'),
        false,
        [
            require('../assets/images/Headaches/advil/advil 2.webp'),
            require('../assets/images/Headaches/advil/advil 3.jpg'),
            require('../assets/images/Headaches/advil/advil 4.jpg'),
        ],
        ),
        
    new Product(
        15,
        'headaches',
        'combodex',
        250,
        '.',
        false,
        10,
        require('../assets/images/Headaches/combodex/combodex 1.jpg'),
        false,
        [
            require('../assets/images/Headaches/combodex/combodex 2.webp'),
            require('../assets/images/Headaches/combodex/combodex 3.webp'),
            require('../assets/images/Headaches/combodex/combodex 4.jpg'),
        ],
        ),
        
    new Product(
        16,
        'headaches',
        'optalgin',
        250,
        '.',
        false,
        10,
        require('../assets/images/Headaches/optalgin/optalgin 1.jpg'),
        false,
        [
            require('../assets/images/Headaches/optalgin/optalgin 2.jpg'),
            require('../assets/images/Headaches/optalgin/optalgin 3.webp'),
            require('../assets/images/Headaches/optalgin/optalgin 4.jpg'),
        ],
        ),
        
    new Product(
        17,
        'muscleAches',
        'advil',
        250,
        '.',
        false,
        10,
        require('../assets/images/MuscleAches/advil/advil 1.jpg'),
        false,
        [
            require('../assets/images/MuscleAches/advil/advil 2.webp'),
            require('../assets/images/MuscleAches/advil/advil 3.jpg'),
            require('../assets/images/MuscleAches/advil/advil 4.jpg'),
        ],
        ),
        
    new Product(
        18,
        'muscleAches',
        'bengay',
        250,
        '.',
        false,
        10,
        require('../assets/images/MuscleAches/bengay/bengay 1.jpg'),
        false,
        [
            require('../assets/images/MuscleAches/bengay/bengay 2.webp'),
            require('../assets/images/MuscleAches/bengay/bengay 3.png'),
            require('../assets/images/MuscleAches/bengay/bengay 4.jpg'),
        ],
        ),
        
    new Product(
        19,
        'muscleAches',
        'mega',
        250,
        '.',
        false,
        10,
        require('../assets/images/MuscleAches/bengay/bengay 1.jpg'),
        false,
        [
            require('../assets/images/MuscleAches/bengay/bengay 2.webp'),
            require('../assets/images/MuscleAches/bengay/bengay 3.png'),
            require('../assets/images/MuscleAches/bengay/bengay 4.jpg'),
        ],
        ),
        
    new Product(
        20,
        'muscleAches',
        'voltaren',
        250,
        '.',
        false,
        10,
        require('../assets/images/MuscleAches/voltaren/voltaren 1.gif'),
        false,
        [
            require('../assets/images/MuscleAches/voltaren/voltaren 2.jpeg'),
            require('../assets/images/MuscleAches/voltaren/voltaren 3.gif'),
            require('../assets/images/MuscleAches/voltaren/voltaren 4.jpg'),
        ],
        ),
];

export const Coupons = [

    {
        id: 1,
        name: 'coupon-1-10%',
        Discount: 10,
    },

    {
        id: 2,
        name: 'coupon-2-15%',
        Discount: 15,
    },

    {
        id: 3,
        name: 'coupon-3-20%',
        Discount: 20,
    },

    {
        id: 4,
        name: 'coupon-4-25%',
        Discount: 25,
    },
    {
        id: 1,
        name: '1',
        Discount: 0.9,
    },
    
]


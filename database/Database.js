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
        30
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
        28
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
    28
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
    30
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
    20
    ),
    new Product(
    6,
    'abdominalPain',
    'Acamol',
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
    30
    ),
    new Product(
    7,
    'abdominalPain',
    'Calbaten forte',
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
    29
    ),
    new Product(
    8,
    'abdominalPain',
    'Probiotics',
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
    27
    ),
    new Product(
    9,
    'backpain',
    'Bengay',
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
    31
    ),
    new Product(
        10,
        'backpain',
        'Perskindol',
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
        30
        ),
        
    new Product(
        11,
        'backpain',
        'Traumeel',
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
        30
        ),
        
    new Product(
        12,
        'backpain',
        'Voltaren',
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
        30
        ),
        
    new Product(
        13,
        'headaches',
        'Acamol',
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
        30
        ),
        
    new Product(
        14,
        'headaches',
        'Advil',
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
        30
        ),
        
    new Product(
        15,
        'headaches',
        'Combodex',
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
        30
        ),
        
    new Product(
        16,
        'headaches',
        'Optalgin',
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
        30
        ),
        
    new Product(
        17,
        'muscleAches',
        'Advil',
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
        30
        ),
        
    new Product(
        18,
        'muscleAches',
        'Bengay',
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
        30
        ),
        
    new Product(
        19,
        'muscleAches',
        'Mega',
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
        30
        ),
        
    new Product(
        20,
        'muscleAches',
        'Voltaren',
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
        30
        ),
];




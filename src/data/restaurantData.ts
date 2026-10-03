import { MenuItem, Review } from '../types';

import heroImg from '../assets/images/lokma_hero_1791034309992.jpg';
import crepeImg from '../assets/images/lokma_crepe_strips_1791034323956.jpg';
import pizzaSalamiImg from '../assets/images/lokma_pizza_salami_1791034336316.jpg';
import pastramiPizzaImg from '../assets/images/lokma_pastrami_pizza_1791034349404.jpg';
import burgerImg from '../assets/images/lokma_double_burger_1791034360700.jpg';
import crispyMealImg from '../assets/images/lokma_crispy_meal_1791034372503.jpg';
import nutellaCrepeImg from '../assets/images/lokma_nutella_crepe_1791034384210.jpg';

export const RESTAURANT_INFO = {
  name: 'لقمه هنا',
  brandSuffix: 'هنا',
  subtitle: 'LOKMA HENA',
  slogan: 'لقمة صغيرة، تجربة كبيرة • والطعم يكمل',
  phone: '01117420295',
  phoneDisplay: '011 17420295',
  whatsappNumber: '201117420295',
  whatsappUrl: 'https://wa.me/201117420295',
  address: 'شارع الإمام سالم، المرج البحرية، المرج، محافظة القاهرة',
  landmark: 'المرج البحرية — بالقرب من محطة المرج',
  plusCode: '585V+3P El Marg',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=585V%2B3P%20El%20Marg',
  rating: 4.6,
  reviewsCount: 30,
  priceRange: '200 – 400 ج.م للفرد',
  hours: 'يوميًا: 11:00 صباحًا – 4:00 صباحًا (فجرًا)',
  heroImage: heroImg,
  features: [
    'برجر لحم بلدي طازج وسماش برجر مكرمل',
    'كريب مقرمش بحشوات استربس وشاورما',
    'بيتزا إيطالية بعجينة مخمرة وجبنة مطاطية',
    'توصيل سريع وساخن حتى باب بيتك بالمرج',
    'سهر حتى 4:00 الفجر لطلبات آخر الليل'
  ]
};

export const MENU_CATEGORIES = [
  'الكل',
  'برجر',
  'كريب',
  'بيتزا',
  'وجبات وسندوتشات',
  'دجاج',
  'أطباق ومقبلات',
  'حلويات'
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'كريب استربس كرانشي',
    category: 'كريب',
    image: crepeImg,
    description: 'كريب مقرمش محشو قطع فراخ استربس مقرمشة مع مكس جبن موتزاريلا وشيدر سايحة، فلفل ألوان وزيتون مع صوص المايونيز والكاتشب.',
    priceDisplay: 'حسب المنيو',
    isPopular: true,
    tag: 'الأكثر طلبًا'
  },
  {
    id: 2,
    name: 'دبل سماش برجر بالجبنة الشيدر',
    category: 'برجر',
    image: burgerImg,
    description: 'قطعتين لحم بقري صافي مفرودين على الجريل الساخن مع صوص الشيدر السايح، بصل مكرمل، خيار مخلل وصوص لقمه هنا المخصوص في خبز بريوش محمص.',
    priceDisplay: 'حسب المنيو',
    isPopular: true,
    isChefSpecial: true,
    tag: 'توقيع الشيف'
  },
  {
    id: 3,
    name: 'بيتزا بسطرمة بصوص الشيدر',
    category: 'بيتزا',
    image: pastramiPizzaImg,
    description: 'البيتزا الأشهر في لقمه هنا! عجينة إيطالية خفيفة مغطاة بقطع البسطرمة الإسكندراني وصوص الشيدر الذهبي اللذيذ مع الموتزاريلا والفلفل.',
    priceDisplay: 'حسب المنيو',
    isPopular: true,
    tag: 'مفضلة العملاء'
  },
  {
    id: 4,
    name: 'بيتزا سلامي إيطالي',
    category: 'بيتزا',
    image: pizzaSalamiImg,
    description: 'عجينة بيتزا هشة مقرمشة مع صلصة طماطم متبلة بالأعشاب، جبنة موتزاريلا وفيرة وشرائح سلامي بقرية فاخرة ورشة زعتر.',
    priceDisplay: 'حسب المنيو',
    isPopular: true,
    tag: 'كلاسيك'
  },
  {
    id: 5,
    name: 'بربكيو تشيكن مشوي ومقرمش',
    category: 'دجاج',
    image: crispyMealImg,
    description: 'قطع دجاج متبلة ومقلية مقرمشة مغطاة بصوص الباربكيو المدخن الغني مع رشة سمسم وبطاطس فارم فريتس مقرمشة.',
    priceDisplay: 'حسب المنيو',
    tag: 'مدخن ولذيذ'
  },
  {
    id: 6,
    name: 'وجبة كرانشي بوكس سوبريم',
    category: 'وجبات وسندوتشات',
    image: crispyMealImg,
    description: 'وجبة مشبعة تتكون من 4 قطع استربس دجاج ذهبي، بطاطس فارم فريتس، خبز طازج، بولة تومية وبولة صوص شيدر.',
    priceDisplay: 'حسب المنيو',
    isChefSpecial: true,
    tag: 'وجبة كرانشي'
  },
  {
    id: 7,
    name: 'برجر تشيكن زنجر كرانشي',
    category: 'برجر',
    image: burgerImg,
    description: 'صدر دجاج مقرمش سبايسي أو عادي مع خس فريش، طماطم، صوص جبنة شيدر وصوص رانش في عيش سمسم فاخر.',
    priceDisplay: 'حسب المنيو',
    tag: 'كرانشي سبايسي'
  },
  {
    id: 8,
    name: 'كريب نوتيلا بالموز والمكسرات',
    category: 'حلويات',
    image: nutellaCrepeImg,
    description: 'كريب فرنسي طري محشو شوكولاتة نوتيلا أصلية دافئة مع شرائح الموز الطازج وصوص شوكولاتة ورشة مكسرات بندق مقرمشة.',
    priceDisplay: 'حسب المنيو',
    isPopular: true,
    tag: 'حلو لقمه هنا'
  },
  {
    id: 9,
    name: 'كريب كواترو مكس جبن',
    category: 'كريب',
    image: crepeImg,
    description: 'عشاق الجبنة! مكس غني من جبنة موتزاريلا، جبنة شيدر مستوردة، جبنة رومي وجبنة كيري مع الزيتون والفلفل في كريب مقرمش.',
    priceDisplay: 'حسب المنيو',
    tag: 'عشاق الجبن'
  },
  {
    id: 10,
    name: 'طبق بطاطس فرايز بصوص الشيدر والبيكون',
    category: 'أطباق ومقبلات',
    image: crispyMealImg,
    description: 'طبق بطاطس مقلية ذهبية غرقانة في صوص الشيدر الساخن مع قطع بيف بيكون وهالبينو حار حسب الرغبة.',
    priceDisplay: 'حسب المنيو',
    tag: 'سناكس'
  },
  {
    id: 11,
    name: 'بيتزا مارجريتا دبل تشيز',
    category: 'بيتزا',
    image: pizzaSalamiImg,
    description: 'صلصة طماطم بالريحان الإيطالي مع طبقة مضاعفة من جبنة الموتزاريلا الطبيعية الطازجة.',
    priceDisplay: 'حسب المنيو',
    tag: 'نباتي'
  },
  {
    id: 12,
    name: 'اختيار لقمه هنا الملكي',
    category: 'وجبات وسندوتشات',
    image: burgerImg,
    description: 'سندوتش مكس لحم وفراخ مع صوصات خاصة وطبقات جبنة متعددة لكسر الجوع في أي وقت.',
    priceDisplay: 'حسب المنيو',
    isChefSpecial: true,
    tag: 'سبيشال'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    author: 'Ali Omar',
    rating: 5,
    date: 'منذ 4 أشهر',
    comment: 'بصراحة الأكل ممتاز و كواليتي عالية ما شاء الله و مخدوم كويس و التعامل فوق الممتاز ما شاء الله ❤️❤️❤️'
  },
  {
    id: 2,
    author: 'Mohamed Elnagary',
    rating: 5,
    date: 'منذ 4 أشهر',
    comment: 'مطعم تحفه ماشاء الله البيتزا و البرجر ما شاء الله حاجه روعه 🔥'
  },
  {
    id: 3,
    author: 'ahmed aljarawi',
    rating: 5,
    date: 'منذ شهرين',
    comment: 'البيتزا البسطرمه مع صوص الشيدر جميلة جدا والله تستحقو اكتر من كدة'
  },
  {
    id: 4,
    author: 'محمود الصاوي',
    rating: 5,
    date: 'منذ أسبوعين',
    comment: 'الكريب استربس مقرمش ونظيف جداً وسريع في التوصيل بالمرج، خدمة محترمة وأسعار معقولة.'
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: 'برجر وسماش لقمه هنا', category: 'برجر', src: heroImg },
  { id: 2, title: 'كريب استربس مقرمش', category: 'كريب', src: crepeImg },
  { id: 3, title: 'بيتزا بسطرمة وشيدر سايح', category: 'بيتزا', src: pastramiPizzaImg },
  { id: 4, title: 'بيتزا سلامي إيطالي', category: 'بيتزا', src: pizzaSalamiImg },
  { id: 5, title: 'دبل برجر مع بطاطس فارم', category: 'برجر', src: burgerImg },
  { id: 6, title: 'وجبة استربس كرانشي بوكس', category: 'وجبات', src: crispyMealImg },
  { id: 7, title: 'كريب نوتيلا بالموز والبندق', category: 'حلويات', src: nutellaCrepeImg }
];

export function isRestaurantOpenNow(): { isOpen: boolean; message: string } {
  // Lokma Hena is open until 4:00 AM (e.g. 11:00 AM to 04:00 AM)
  const now = new Date();
  const hours = now.getHours(); // 0 to 23
  // Open between 11 AM (11) and 4 AM (0, 1, 2, 3)
  const isOpen = hours >= 11 || hours < 4;
  if (isOpen) {
    return {
      isOpen: true,
      message: 'مفتوح الآن · يغلق 4:00 AM فجرًا'
    };
  } else {
    return {
      isOpen: false,
      message: 'مغلق حاليًا · يفتح الساعة 11:00 صباحًا'
    };
  }
}

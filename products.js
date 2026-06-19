// მობილური მენიუს კოდი
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  if (mobileMenu.classList.contains('hidden')) {
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  } else {
    menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  }
});

const productData = [
    {
        id: 1,
        name: "ოთხეული #1 (2 ტახტი(თეთრი და კრემისფერი) + 2 სავარძელი(ყავისფერი))",
        description: "საუკეთესო არჩევანი. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 1999,
        dimensions: "213სმ x 84სმ x 38სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/squad1.jpeg"
    },
    {
        id: 2,
        name: "ოთხეული #2 (2 ტახტი(თეთრი და ლურჯი) + 2 სავარძელი(ყავისფერი))",
        description: "საუკეთესო არჩევანი. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 1499,
        dimensions: "220სმ x 90სმ x 40სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/squad2.png"
    },
    {
        id: 3,
        name: "ოთხეული #3",
        description: "მდგომარეობა ახალი. უმაღლესი ხარისხის გადახარშულ ტყავზე. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 3999,
        dimensions: "220სმ x 95სმ x 43სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "ახალი"],
        variants: [],
        new: true,
        image: "./images/squad3.png"
    },
    {
        id: 4,
        name: "სამეული #1",
        description: "დივნის საზურგე გადადის უკან. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 1999,
        dimensions: "220სმ x 100სმ x 40სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "ახალი"],
        variants: [],
        new: true,
        image: "./images/trio1.png"
    },
    {
        id: 5,
        name: "ოთხეული #4",
        description: "სახწლურები და საზურგე მოძრავი. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 3999,
        dimensions: "250სმ x 100სმ x 42სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "ახალი"],
        variants: [],
        new: true,
        image: "./images/squad4.png"
    },
    {
        id: 6,
        name: "ოთხეული #5 (2 ტახტი(თეთრი და შინდისფერი) + 2 სავარძელი(თეთრი)",
        description: "არ აქვს გასაშლელი მექანიზმი. მოყვება 2 სავარძელი და 2 ტახტი. დაშლა შესაძლებელია",
        price: 1899,
        dimensions: "220სმ x 85სმ x 40სმ",
        bundle: true,
        tags: ["ნაკრები", "სავარძელი/სკამი", "ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/squad5.png"
    },
    {
        id: 7,
        name: "ტახტი #1",
        description: "არ აქვს გასაშლელი მექანიზმი. დაშლა შესაძლებელია",
        price: 899,
        dimensions: "225სმ x 90სმ x 45სმ",
        bundle: false,
        tags: [ "ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/sofa1.png"
    },
    {
        id: 8,
        name: "ტახტი #2",
        description: "იშლება წიგნივით, არ არქვს სათავსო.",
        price: 799,
        dimensions: "220სმ x 87სმ x 43სმ",
        bundle: false,
        tags: ["ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/sofa2.png"
    },
    {
        id: 9,
        name: "ტახტი #3",
        description: "მდგომარეობა მეორადი, უმაღლესი ხარისხის ნაჭერი და ლატექსის ღრუბლით სახელურები და ზურგი მოძრავ მდგომარეობაში. შესაძლებელია ტახტის ცალკე გაყიდვაც.",
        price: 1199,
        dimensions: "220სმ x 90სმ x 42სმ",
        bundle: false,
        tags: ["ტახტი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/sofa3.jpeg"
    },
    {
        id: 10,
        name: "ტახტი #3",
        description: "დამზადებულია ხავერდის ნაჭერზე და მყარი კარგი ხარისხის ლატექსის ღრუბელზე.",
        price: 1999,
        dimensions: "213სმ x 84სმ x 38სმ",
        bundle: true,
        tags: ["ნაკრები", "ტახტი", "სავარძელი/სკამი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/squad6.png"
    },
    {
        id: 10,
        name: "სამული #2",
        description: "დამზადებულია ხავერდის ნაჭერზე და მყარი კარგი ხარისხის ლატექსის ღრუბელზე.",
        price: 999,
        dimensions: "213სმ x 84სმ x 38სმ",
        bundle: true,
        tags: ["ნაკრები", "ტახტი", "სავარძელი/სკამი", "მეორადი"],
        variants: [],
        new: false,
        image: "./images/duo1.png"
    }
]

const container = document.getElementById('product-container');

function displayProducts(products) {
  container.innerHTML = "";
  products.forEach(product => {
    const newBadge = product.new 
      ? `<span class="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 font-georgian shadow-sm">ახალი</span>` 
      : '';
    const bundleBadge = product.bundle 
      ? `<span class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 font-georgian shadow-sm">ნაკრები</span>` 
      : '';

    const productHTML = `
      <div class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100/80 flex flex-col h-full relative hover:h-[105%]">
        ${newBadge}
        ${bundleBadge}
        <div class="overflow-hidden h-52 bg-gray-100 relative">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        </div>
        <div class="p-5 flex flex-col grow">
          <h3 class="font-bold text-base text-slate-800 mb-1 font-georgian group-hover:text-orange-500 transition-colors line-clamp-2 min-h-[3rem]">
            ${product.name}
          </h3>
          <p class="text-xl font-black text-orange-500 mb-2"><span class="text-slate-900"><s class="text-lg">₾${(parseFloat(product.price * 1.15)).toFixed(0)} </s></span>₾${product.price}</p>
          <p class="text-xs text-slate-400 font-sans mb-3 flex items-center gap-1">
            📏 ზომა: <span class="font-semibold text-slate-500">${product.dimensions}</span>
          </p>
          <p class="text-sm text-gray-500 font-georgian leading-relaxed mb-4 grow line-clamp-3">
            ${product.description}
          </p>
          <div class="pt-2 border-t border-gray-50 text-xs font-semibold text-orange-500 tracking-wider uppercase group-hover:underline cursor-pointer">
            დეტალურად →
          </div>
        </div>
      </div>
    `;
    container.innerHTML += productHTML;
  });
}

displayProducts(productData);

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-filter');

    filterButtons.forEach(btn => {
      btn.classList.remove('bg-orange-500', 'text-white');
      btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-gray-200');
    });
    button.classList.add('bg-orange-500', 'text-white');
    button.classList.remove('bg-white', 'text-slate-700', 'border', 'border-gray-200');

    if (selectedCategory === 'ყველა') {
      displayProducts(productData);
    } else {
      const filtered = productData.filter(product => product.tags.includes(selectedCategory));
      displayProducts(filtered);
    }
  });
});
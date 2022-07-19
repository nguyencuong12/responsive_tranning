export const NavMenu = [
  { title: 'Trang Chủ', href: '/' },
  { title: 'Dịch Vụ', href: '/services' },
  { title: 'Sản Phẩm', href: '/products' ,type :"Dropdown",products:[
    {
      title:"Gas Anh Kiệt",
      href:"/gas-anhkiet"
    },
    {
      title:"Bếp Gas",
      href:"/bep-gas"
    },
    {
      title:"Dây Gas",
      href:"/day-gas"
    }
  ]},
  { title: 'Cửa Hàng', href: '/shop' },
  { title: 'Liên Hệ', href: '/contact' },
];



import { v4 as uuidv4 } from 'uuid';
import { Phone, Search } from 'tabler-icons-react';
export const FooterData = {
  introduce: {
    logo: '/logo-gas.png',
    question:
      'Chúng Tôi Luôn Xây Dựng Để Làm Hài Lòng Khách Hàng Và Hướng Đến Các Sản Phẩm Thân Thiện Với Môi Trường',
    location: 'Địa Chỉ: Nguyễn Văn Bứa , Quận Hóc Môn',
    phone: '0978531164',

    socialMedia: [
      {
        image: '/twitter.png',
        href: '/',
        id: uuidv4(),
      },
      {
        image: '/facebook.png',
        href: '/',
        id: uuidv4(),
      },
      {
        image: '/instagram.png',
        href: '/',
        id: uuidv4(),
      },
      {
        image: '/tiktok.png',
        href: '/',
        id: uuidv4(),
      },
    ],
  },
  policy: [
    {
      title: 'Chính Sách Đổi Trả',
      id: uuidv4(),
    },
    {
      title: 'Chính Sách Bảo Hành',
      id: uuidv4(),
    },
    {
      title: 'Hướng Dẫn Đặt Hàng Online',
      id: uuidv4(),
    },
  ],
  products: [
    {
      title: 'Gas Anh Kiệt',
      id: uuidv4(),
    },
    {
      title: 'Gas Gia Đình',
      id: uuidv4(),
    },
    {
      title: 'Gas Nam Gas',
      id: uuidv4(),
    },
    {
      title: 'Bếp Gas',
      id: uuidv4(),
    },
  ],
  aboutUs: [
    {
      title: 'Cửa Hàng',
      id: uuidv4(),
    },
    {
      title: 'Giới Thiệu',
      id: uuidv4(),
    },
    {
      title: 'Dịch Vụ',
      id: uuidv4(),
    },
    {
      title: 'Liên Hệ',
      id: uuidv4(),
    },
  ],
};

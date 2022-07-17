import { v4 as uuidv4 } from 'uuid';

export const HomeData = {
  policy: [
    {
      title: 'Giao Hàng Miễn Phí',
      subTitle: 'Giao Hàng Nhanh Chóng Trong Khu Vực Hóc Môn',
      image: '/delivery.png',
    },
    {
      title: 'Kiểm Tra Trước Khi Giao Hàng',
      subTitle:
        'Luôn Luôn Kiểm Tra Sản Phẩm Đạt Tiêu Chuẩn Tuyệt Đối Trước Khi Giao Cho Khách Hàng',
      image: '/gas-anhkiet/checked.png',
    },
    {
      title: 'Bảo Trì Gas Miễn Phí',
      subTitle: 'Bảo Trì Và Tư Vấn Miễn Phí Cho Khách Hàng',
      image: '/gas-anhkiet/maintenance.png',
    },
    {
      title: 'Hỗ Trợ Khách Hàng ',
      subTitle:
        'Khách Hàng Có Những Thắc Mắc Có Thể Liên Hệ Đến Cửa Hàng Để Được Hỗ Trợ Tuyệt Đối.',
      image: '/support.png',
    },
  ],
  blogs: [
    {
      image: '/food-cat.png',
      title: 'Cat Foods',
    },
    {
      image: '/care.png',
      title: 'Knowledge Care',
    },
    {
      image: '/health.png',
      title: 'Health',
    },
    {
      image: '/disease.png',
      title: 'Disease',
    },
  ],

  popularBrands: [
    {
      id: uuidv4(),
      image: '/me0.png',
      background: '#f7ee25',
    },
    {
      id: uuidv4(),

      image: '/me0.png',
      background: '#595959',
    },
    {
      id: uuidv4(),
      image: '/me0.png',
      // background: "#f7ee25",
    },
    {
      id: uuidv4(),
      image: '/me0.png',
      background: '#898989',
    },
  ],
};

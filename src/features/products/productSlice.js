import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '1',
      title: 'Blending Variant',
      price: 120,
      originalPrice: 141,
      discount: 15,
      weight: '0.25 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    },
    {
      id: '2',
      title: 'Blending Variant',
      price: 220,
      originalPrice: 259,
      discount: 15,
      weight: '0.5 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    },
    {
      id: '3',
      title: 'Blending Variant',
      price: 400,
      originalPrice: 471,
      discount: 15,
      weight: '1 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    },
    {
      id: '4',
      title: 'Blending Variant',
      price: 1800,
      originalPrice: 2118,
      discount: 15,
      weight: '5 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    },
    {
      id: '5',
      title: 'Blending Variant',
      price: 3400,
      originalPrice: 4000,
      discount: 15,
      weight: '10 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    },
    {
      id: '6',
      title: 'Haryana Special',
      price: 150,
      originalPrice: 176,
      discount: 15,
      weight: '0.25 kg',
      image: 'https://api.jtcchai.com/api/images/HS.png'
    },
    {
      id: '7',
      title: 'Haryana Special',
      price: 280,
      originalPrice: 329,
      discount: 15,
      weight: '0.5 kg',
      image: 'https://api.jtcchai.com/api/images/HS.png'
    },
    {
      id: '8',
      title: 'Haryana Special',
      price: 520,
      originalPrice: 612,
      discount: 15,
      weight: '1 kg',
      image: 'https://api.jtcchai.com/api/images/HS.png'
    },
    {
      id: '9',
      title: 'Haryana Special',
      price: 2400,
      originalPrice: 2824,
      discount: 15,
      weight: '5 kg',
      image: 'https://api.jtcchai.com/api/images/HS.png'
    },
    {
      id: '10',
      title: 'Haryana Special',
      price: 4600,
      originalPrice: 5412,
      discount: 15,
      weight: '10 kg',
      image: 'https://api.jtcchai.com/api/images/HS.png'
    },
    {
      id: '11',
      title: 'Small Double Plus High Quality',
      price: 100,
      originalPrice: 118,
      discount: 15,
      weight: '0.25 kg',
      image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
    },
    {
      id: '12',
      title: 'Small Double Plus High Quality',
      price: 190,
      originalPrice: 224,
      discount: 15,
      weight: '0.5 kg',
      image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
    },
    {
      id: '13',
      title: 'Small Double Plus High Quality',
      price: 360,
      originalPrice: 424,
      discount: 15,
      weight: '1 kg',
      image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
    },
    {
      id: '14',
      title: 'Small Double Plus High Quality',
      price: 1700,
      originalPrice: 2000,
      discount: 15,
      weight: '5 kg',
      image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
    },
    {
      id: '15',
      title: 'Small Double Plus High Quality',
      price: 3200,
      originalPrice: 3765,
      discount: 15,
      weight: '10 kg',
      image: 'https://api.jtcchai.com/api/images/S%2B%2BH.png'
    },
    {
      id: '16',
      title: 'Gold Plus Orthodox Darjeeling',
      price: 180,
      originalPrice: 212,
      discount: 15,
      weight: '0.25 kg',
      image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
    },
    {
      id: '17',
      title: 'Gold Plus Orthodox Darjeeling',
      price: 340,
      originalPrice: 400,
      discount: 15,
      weight: '0.5 kg',
      image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
    },
    {
      id: '18',
      title: 'Gold Plus Orthodox Darjeeling',
      price: 650,
      originalPrice: 765,
      discount: 15,
      weight: '1 kg',
      image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
    },
    {
      id: '19',
      title: 'Gold Plus Orthodox Darjeeling',
      price: 3000,
      originalPrice: 3529,
      discount: 15,
      weight: '5 kg',
      image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
    },
    {
      id: '20',
      title: 'Gold Plus Orthodox Darjeeling',
      price: 5800,
      originalPrice: 6824,
      discount: 15,
      weight: '10 kg',
      image: 'https://api.jtcchai.com/api/images/G%2BOD.png'
    },
    {
      id: '21',
      title: 'Test Chai',
      price: 150,
      originalPrice: 176,
      discount: 15,
      weight: '1000 kg',
      image: 'https://api.jtcchai.com/api/images/B.png'
    }
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
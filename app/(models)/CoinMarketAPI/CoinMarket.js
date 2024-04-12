// import axios from "axios";

// const apiKey = "88a5c167-09c9-4d4b-8605-4ea0a434ef47";
// const basUrl = process.env.COINMARKET_URL;

// const getCoinData = async () => {
//   try {
//     const res = await axios.get(
//       `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
//       {
//         headers: {
//           "X-CMC_PRO_API_KEY": "88a5c167-09c9-4d4b-8605-4ea0a434ef47",
//         },
//       }
//     );

//     const datas = res.data.data.map((item) => {
//       const id = item.id;
//       const name = item.name;
//       let price = item.price;
//       const items = item;
//       return items;
//     });

//     return res;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };

// export { getCoinData };

import React from "react";
import { getCoinData } from "../(models)/CoinMarketAPI/CoinMarket";

export default async function NewsComponent() {
  const { data } = await getCoinData();

  return (
    <>
      {data.data.map((items) => (
        <div key={items.id} className="flex max-w-full w-full">
          <div className="flex max-w-full w-full flex-col justify-center items-center border m-2">
            <div className="flex text-white font-bold m-1">{items.name}</div>
            <div>{items.quote.USD.price.toFixed(3)}</div>
          </div>
        </div>
      ))}
    </>
  );
}

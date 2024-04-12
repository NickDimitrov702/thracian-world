import React from "react";
import HomepageBlocks from "../(components)/HomepageBlocks";
function Landing() {
  const slogan = [
    {
      id: 1,
      text: "Unlock the Secrets of Crypto with Thracian World: Where Experience Meets Education.",
      shortExp:
        " We are not only providing you with the latest AirDrops in Web-3 and Crypto, but also we are validating them - Read more",
    },
    {
      id: 2,
      text: "Empower Yourself with Crypto Knowledge: Trust Thracian World's 4 Years of Expertise.",
      shortExp:
        "In Thracian World you will find a summarized information picked from personal experience and variaity of trusted sources - Read more",
    },
    {
      id: 3,
      text: "Discover the Power of Crypto Education: Backed by Thracian World's Tested Projects.",
      shortExp:
        "Discover the the power in Web3 and go trough the jungle of Web-3 equiped with the knowledge that you can get here - Read More",
    },
  ];

  return (
    <div>
      {slogan.map((slogan) => (
        <HomepageBlocks key={slogan.id} slogan={slogan.text} shortExp={slogan.shortExp} />
      ))}
    </div>
  );
}

export default Landing;

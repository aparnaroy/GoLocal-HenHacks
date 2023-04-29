import TerraCafeGrillPic from "./TerraCafeGrillPic.jpg";
import GreenBoxKitchenPic from "./GreenBoxKitchen.webp";
import EvangelinasPic from "./Evangelina.jpg";
import ArtzScapePic from "./ArtzScape.webp";
import SqueezeBoxPic from "./SqueezeBox.webp";
import StudioOnMarketPic from "./StudioOnMarket.png";

export interface Business {
    name: string;
    description: string;
    category: string;
    location: string;
    website: string;
    image: string;
}

export const TerraCafeGrill: Business = {
    name: "Terra Cafe Grille",
    description: "Picks natural ingredients and prepares every meal in house",
    category: "Restaurant",
    location: "721 N. King Street, Wilmington DE",
    website: "http://terragrillecafe.com",
    image: TerraCafeGrillPic
};

export const GreenBoxKitchen: Business = {
    name: "Green Box Kitchen",
    description: "Specializes in vegan grain bowls, acai bowls, and smoothies!",
    category: "Restaurant",
    location: "400 N Market St Wilmington, DE",
    website: "https://www.greenboxkitchen.com/",
    image: GreenBoxKitchenPic
};

export const Evangelinas: Business = {
    name: "Evangelina's Vegan Cakes and Pastries",
    description: "Crafts hand-made vegan desserts",
    category: "Restaurant",
    location: "280 E Main St. Suite 110 Newark, DE 19711",
    website: "https://www.evangelinas.com/",
    image: EvangelinasPic
};

export const ArtzScape: Business = {
    name: "ArtzScape",
    description: "CBlack owned and operated theater and performance venue",
    category: "Arts and Entertainment",
    location: "205 N. Market Street, Wilmington, DE 19801",
    website: "https://artzscape.com/",
    image: ArtzScapePic
};

export const SqueezeBox: Business = {
    name: "SqueezeBox Records LLC",
    description: "Sells cassettes, jackets, tour apparel, records, and more!",
    category: "Arts and Entertainment",
    location: "1901 W. 11th Street, Wilmington, DE. 19805",
    website: "https://squeezeboxrecords.com/",
    image: SqueezeBoxPic
};

export const StudioOnMarket: Business = {
    name: "Studio On Market",
    description:
        "An affordable, creative, and collaborative space for parties and photo/video shoots",
    category: "Arts and Entertainment",
    location: "219 North Market St, Wilmington DE 19801",
    website: "http://www.studioonmarket.com/",
    image: StudioOnMarketPic
};

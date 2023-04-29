import TerraCafeGrillPic from "./TerraCafeGrillPic.jpg";
import GreenBoxKitchenPic from "./GreenBoxKitchen.webp";
import EvangelinasPic from "./Evangelina.jpg";
import ArtzScapePic from "./ArtzScape.webp";
import SqueezeBoxPic from "./SqueezeBox.webp";
import StudioOnMarketPic from "./StudioOnMarket.png";
import PureYogaPic from "./PureYoga.jpg";
import MedSpaPic from "./MedSpa.jpg";
import HeavenAndHealthPic from "./HeavenAndHealth.png";
import CoralCovePic from "./CoralCove.webp";
import BloomPic from "./Bloom.avif";
import GinghamGracePic from "./GinghamGrace.png";
import KingCreativePic from "./KingCreative.png";
import LCPhotographyPic from "./LCPhotography.jpg";
import SHCreativeStudioPic from "./SHcreativeStudio.png";
import PopInPopsPic from "./PopIn.jpg";
import WaltsChickenPic from "./WaltsChicken.png";
import BooksAndBagelsPic from "./BooksAndBagels.webp";
import HeirloomPic from "./Heirloom.jpg";
import IgniteFitnessPic from "./IgniteFitness.jpg";
import BrewHahaPic from "./BrewHaha.png";
import MercuryPic from "./TheMercury.png";
import GreenbankPic from "./Greenbank.png";

export interface Business {
    name: string;
    description: string;
    category: string;
    location: string;
    website: string;
    image: string;
}

export const MercuryCafe: Business = {
    name: "The Mercury Cafe and Teahouse",
    description: "Cozy vegetarian cafe",
    category: "Restaurant, LGBTQ+ Owned",
    location: "206 Delaware Street, New Castle, DE 19720",
    website: "https://www.themercurynewcastle.com",
    image: MercuryPic
};

export const GreenbankAndPhilips: Business = {
    name: "Greenbank Mills & Philips Farm",
    description: "Living history museum with tours and programs",
    category: "Arts and Entertainment, LGBTQ+ Owned",
    location: "500 Greenbank Rd, Wilmington, DE 19808",
    website: "https://www.greenbankmill.com",
    image: GreenbankPic
};

export const Heirloom: Business = {
    name: "Heirloom",
    description: "Farm-to-table restaurant ",
    category: "Restaurant, Women Owned",
    location: "212 Savannah Road, Lewes, DE 19958",
    website: "http://www.heirloomdelaware.com",
    image: HeirloomPic
};

export const IgniteFitness: Business = {
    name: "Ignite Fitness and Kickboxing",
    description: "Offers a wide variety of fitness classes",
    category: "Health and Wellness, Women Owned",
    location: "35 Commerce Way, Dover, DE 19904",
    website: "https://www.joinignitefitness.com",
    image: IgniteFitnessPic
};

export const BrewHaha: Business = {
    name: "Brew Ha Ha!",
    description:
        "Home-grown chain of cafes, known for their locally roasted coffee",
    category: "Restaurant, Women Owned",
    location: "45 E. Main St. Newark, DE 19711",
    website: "https://www.brewhaha.com",
    image: BrewHahaPic
};

export const PopInPops: Business = {
    name: "Pop In Pops",
    description:
        "Sells artisanal ice pops made fresh daily along with dessert waffle pops",
    category: "Restaurant, Black Owned",
    location: "17 Wood Street, Middletown, DE 19709",
    website: "https://popinpops.com",
    image: PopInPopsPic
};

export const WaltsChicken: Business = {
    name: "Walt's Flavor Crisp Chicken Express",
    description: "Best fried chicken in Delaware",
    category: "Restaurant, Black Owned",
    location: "2601 Carpenter Station Road, Wilmington, DE 19810",
    website: "http://www.waltsexpress.com",
    image: WaltsChickenPic
};

export const BooksAndBagels: Business = {
    name: "Books and Bagels",
    description:
        "Local bookstore that sells general books and highlights local brands",
    category: "Arts and Entertainment, Black Owned",
    location: "1139 W 7th St, Wilmington, DE 19805",
    website: "https://www.booksandbagelsllc.com",
    image: BooksAndBagelsPic
};

export const KingCreative: Business = {
    name: "King Creative",
    description:
        "Full scale video production service and audio recording studio",
    category: "Creative Services",
    location: "727 N Market St, Wilmington, DE 19801",
    website: "https://kingcreative.com/",
    image: KingCreativePic
};

export const LCPhotography: Business = {
    name: "Luigi Ciuffetelli Photography",
    description:
        "Great photographer for portraits, restaurants/food, events, and more!",
    category: "Creative Services, Black Owned",
    location: "105 N Market Street Wilmington, DE 19801",
    website: "https://www.luigic.com/",
    image: LCPhotographyPic
};

export const SHCreativeStudio: Business = {
    name: "Shakira Hunt Creative Studio",
    description:
        "A branding + photography studio serving brands and entrepreneurs with a focus on black women",
    category: "Creative Services",
    location: "1300 North Harrison Street, Wilmington DE 19806 Unit A101",
    website: "https://www.shakirahunt.com/",
    image: SHCreativeStudioPic
};

export const CoralCove: Business = {
    name: "Coral Cove",
    description:
        "Coastal lifestyle shop that sells women’s designer clothing, accessories, home decor, local art, gifts, and more",
    category: "Retail",
    location: "110 Rehoboth Ave, Rehoboth Beach, DE 19971",
    website: "https://pureyogapilatesstudio.com",
    image: CoralCovePic
};

export const Bloom: Business = {
    name: "Bloom",
    description:
        "One-stop shop for customers searching for gifts, jewelry, and apparel",
    category: "Retail",
    location: "162 E Main St, Newark, DE 19711",
    website: " https://bloom-delaware.myshopify.com",
    image: BloomPic
};

export const GinghamGrace: Business = {
    name: "Gingham and Grace",
    description:
        "Online boutique and showroom providing opportunities to shop for stylish and affordable women’s clothing",
    category: "Retail",
    location: "26832 Lewes Georgetown Hwy, Harbeson, DE 19951",
    website: "https://ginghamandgraceclothing.com",
    image: GinghamGracePic
};

export const PureYoga: Business = {
    name: "Pure Yoga Pilates Studio",
    description: "Offers yoga and pilates classes for all levels",
    category: "Health and Wellness",
    location: "14A + 15A Trolley Square",
    website: "https://pureyogapilatesstudio.com",
    image: PureYogaPic
};

export const MedSpa: Business = {
    name: "First State Med Spa",
    description:
        "Aesthetic boutique that offers treatments such as smartlipo, injectables, microneedling, and laser hair removal",
    category: "Health and Wellness",
    location: "1300 N Franklin St, Wilmington, DE 19806",
    website: "https://firststatemedspa.com",
    image: MedSpaPic
};

export const HeavenAndHealth: Business = {
    name: "Heaven & Health",
    description: "Offers medical massage therapy",
    category: "Health and Wellness",
    location: "270 Presidential Drive, Greenville, DE 19807",
    website: "https://heavenhealthllc.com",
    image: HeavenAndHealthPic
};

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

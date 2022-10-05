export enum Categories{
    NO="no",
    BIG="big",
    MEDIUM="medium",
    SMALL="small"
}

export class Product{
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    category:Categories
    constructor(){
        this.id=Date.now();
        this.name="";
        this.price=0;
        this.description="";
        this.image_url="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1";
        this.category=Categories.NO;
    }
}

export const products:Product[] =[
  
    {
        id: 1,
        name: 'Xiaomi Redmi Note 11 Pro 5G 8+128 Atlantic Blue',
        price: 1200,
        description: 'Operating system: Android 11,Processor: Snapdragon 695,Number of processor cores: 8,Processor frequency, GHz: 2.2,RAM, GB: 8,Drive, GB: 128',
        image_url: 'https://static.chipdip.ru/lib/231/DOC017231648.jpg',
        category:Categories.SMALL
    },
    {
        id: 2,
        name: ' Apple iPhone Xs, 256Gb, Silver',
        price: 2000,
        description: 'Screen size, inch: 5.8,Screen resolution: 2436 x 1125 [19.5:9],Matrix type: Super Retina HD',
        image_url: 'https://shop.kz/upload/iblock/774/132868_1.jpg',
        category:Categories.SMALL
    },
    {
        id: 3,
        name: 'MOULINEX COMPANION XL',
        price: 5900,
        description: 'Automatic programs - 12. You can cook two dishes at the same time. The bowl, lid, steam regulator and accessories are dishwasher safe.',
        image_url: 'https://object.pscloud.io/cms/cms/Photo/img_0_33_170_0_1_320.webp',
        category: Categories.MEDIUM
    },
    {
        id: 4,
        name: 'DELONGHI ECP ',
        price: 10900,
        description: 'Power 1100 WType of coffee used GroundWater tank volume 1 lType of control MechanicalPower On Indication.',
        image_url: 'https://object.pscloud.io/cms/cms/Photo/img_0_932_19_0_320.webp',
        category: Categories.MEDIUM
    },
]

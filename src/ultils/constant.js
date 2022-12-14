import {
    FaHome,
    FaInfoCircle,
    FaShoppingCart,
    FaUserCircle,
    FaBoxOpen
} from "react-icons/fa";

import cart_slide_1 from '../img/cart_01.png'
import cart_slide_2 from '../img/cart_02.png'
import cart_slide_3 from '../img/cart_03.png'
import cart_slide_4 from '../img/cart_04.png'
import cart_slide_5 from '../img/cart_05.png'
export const products = [
    // mac01
    {
        brand: "apple",
        id: "mac01",
        name: "Apple MacBook Air M1",
        price: 27490000,
        sale_off_price: 22890000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "grey",
                images: [
                    "///cdn.tgdd.vn/Products/Images/44/231244/grey-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/grey-2-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/grey-3-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/grey-4-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/grey-5-org.jpg"
                ]
            }, {
                color: "Yellow copper",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gold-01-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gold-02-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gold-03-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gold-05-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gold-06-org.jpg"
                ]
            }, {
                color: "silver",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-01-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-02-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-04-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-05-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-06-org.jpg"
                ]
            }
        ],
        description: {
            CPU: "Apple M1 Max400GB/s",
            RAM: "32GB",
            hard_disk: "1 TB SSD",
            screen: "16.2 in Liquid Retina XDR display(3456 x 2234)120Hz",
            card: "Card t??ch h???p32 nh??n GPU",
            connector: "3 x Thunderbolt 4 USB-CHDMIJack tai nghe 3.5 mm",
            special: "C?? ????n b??n ph??m",
            operating_system: "Mac OS",
            design: "V??? kim lo???i nguy??n kh???i",
            size: "D??i 355.7 mm - R???ng 248.1 mm - D??y 16.8 mm - N???ng 2.2 kg"
        }
    },
    // mac02
    {
        brand: "apple",

        id: "mac02",
        name: "Apple MacBook Air M2 2022",
        price: 32990000,
        sale_off_price: 31190000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "grey",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-02.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-03.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-04.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-05.jpg"
                ]
            }, {
                color: "silver",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-02-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-03-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-04-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-05-1.jpg"
                ]
            }, {
                color: "gold",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-02-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-02-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-04-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-05-2.jpg"
                ]
            }
        ],
        description: {
            CPU: "Apple M2100GB/s",
            RAM: "8GB",
            hard_disk: "256 GB SSD",
            screen: "13.6 in Liquid Retina (2560 x 1664)",
            card: "Card t??ch h???p8 nh??n GPU",
            connector: "2 x Thunderbolt 3Jack tai nghe 3.5 mmMagSafe 3",
            special: "C?? ????n b??n ph??m",
            operating_system: "Mac OS",
            design: "V??? kim lo???i nguy??n kh???i",
            size: "D??i 304.1 mm - R???ng 215 mm - D??y 11.3 mm - N???ng 1.24 kg"
        }
    },
    // mac03
    {
        id: "mac03",
        brand: "apple",

        name: "Apple MacBook Pro 14 M1 Max 2021",
        price: 71900000,
        sale_off_price: 64600000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "grey",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263914/macbook-pro-14-m1-max-2021-10-core-cpu-xam-5.jpg"
                ]
            },

        ],
        description: {
            CPU: "Apple M1 Max400GB/ s",
            RAM: "32GB",
            hard_disk: "512 GB SSD",
            screen: "14.2 in Liquid Retina XDR display(3024 x 1964)120Hz",
            card: "Card t??ch h???p24 nh??n GPU",
            connector: "3 x Thunderbolt 4 USB-CHDMIJack tai nghe 3.5 mm",
            special: "C?? ????n b??n ph??m",
            operating_system: "Mac OS",
            design: "V??? kim lo???i nguy??n kh???i",
            size: "D??i 312.6 mm - R???ng 221.2 mm - D??y 15.5 mm - N???ng 1.6 kg"
        }
    },

    // asus
    // asus01
    {
        brand: "asus",
        id: "asus01",
        name: "Asus TUF Gaming FX506LHB",
        price: 19990000,
        sale_off_price: 18190000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/279259/asus-tuf-gaming-fx506lhb-i5-hn188w-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279259/asus-tuf-gaming-fx506lhb-i5-hn188w-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279259/asus-tuf-gaming-fx506lhb-i5-hn188w-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279259/asus-tuf-gaming-fx506lhb-i5-hn188w-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279259/asus-tuf-gaming-fx506lhb-i5-hn188w-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 10300H 2.5GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB + 1 khe r???i)2933 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "15.6 in Full HD(1920 x 1080) 144Hz",
            card: "Card r???iGTX 1650 4GB",
            connector: "LAN (RJ45)USB 2.01x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNCHDMIJack tai nghe 3.5 mm2 x USB 3.2",
            special: "C?? ????n b??n ph??m",
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a",
            size: "D??i 359 mm - R???ng 256 mm - D??y 24.9 mm - N???ng 2.3 kg"
        }
    },
    // asus02
    {
        brand: "asus",

        id: "asus02",
        name: "Asus VivoBook A415EA",
        price: 16990000,
        sale_off_price: 16590000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "silver",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/266203/asus-vivobook-a415ea-i5-am1637w-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266203/asus-vivobook-a415ea-i5-am1637w-xy-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266203/asus-vivobook-a415ea-i5-am1637w-xy-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266203/asus-vivobook-a415ea-i5-am1637w-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266203/asus-vivobook-a415ea-i5-am1637w-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // asus03
    {
        brand: "asus",

        id: "asus03",
        name: "Asus VivoBook X515EA",
        price: 11490000,
        sale_off_price: 11190000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "silver",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/275258/asus-vivobook-x515ea-i3-br2046w-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/275258/asus-vivobook-x515ea-i3-br2046w-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/275258/asus-vivobook-x515ea-i3-br2046w-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/275258/asus-vivobook-x515ea-i3-br2046w-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/275258/asus-vivobook-x515ea-i3-br2046w-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },

    // dell
    // dell01
    {
        brand: "dell",

        id: "dell01",
        name: "Dell Inspiron 15 3511",
        price: 12390000,
        sale_off_price: 12390000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/286260/dell-inspiron-15-3511-i3-p112f001ebl-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286260/dell-inspiron-15-3511-i3-p112f001ebl-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286260/dell-inspiron-15-3511-i3-p112f001ebl-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286260/dell-inspiron-15-3511-i3-p112f001ebl-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286260/dell-inspiron-15-3511-i3-p112f001ebl-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // dell02
    {
        brand: "dell",

        id: "dell02",
        name: "Dell Vostro 3510",
        price: 22990000,
        sale_off_price: 20490000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-p112f002bbl-1-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-p112f002bbl-2-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-p112f002bbl-3-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-p112f002bbl-4-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266280/dell-vostro-3510-i5-p112f002bbl-5-2.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8GB DDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // dell03
    {
        brand: "dell",

        id: "dell03",
        name: "Dell Vostro 5410 i5",
        price: 23090000,
        sale_off_price: 21490000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "grey",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-v4i5214w1-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-v4i5214w1-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-v4i5214w1-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-v4i5214w1-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-v4i5214w1-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // hp01
    {
        brand: "hp",
        id: "hp01",
        name: "HP 340s G7",
        price: 12990000,
        sale_off_price: 9490000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "grey",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/237630/hp-340s-g7-i3-240q4pa-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/237630/hp-340s-g7-i3-240q4pa-2-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/237630/hp-340s-g7-i3-240q4pa-3-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/237630/hp-340s-g7-i3-240q4pa-4-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/237630/hp-340s-g7-i3-240q4pa-5-1-org.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // hp02
    {
        brand: "hp",

        id: "hp02",
        name: "HP 15s",
        price: 18190000,
        sale_off_price: 17490000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "silver",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/284139/hp-15s-fq5078tu-i5-6k798pa-1-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/284139/hp-15s-fq5078tu-i5-6k798pa-2-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/284139/hp-15s-fq5078tu-i5-6k798pa-3-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/284139/hp-15s-fq5078tu-i5-6k798pa-4-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/284139/hp-15s-fq5078tu-i5-6k798pa-5-2.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // hp03
    {
        brand: "hp",

        id: "hp03",
        name: "HP Envy X360 13",
        price: 32990000,
        sale_off_price: 32990000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/296789/hp-envy-x360-13-bf0090tu-i7-76b13pa-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/296789/hp-envy-x360-13-bf0090tu-i7-76b13pa-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/296789/hp-envy-x360-13-bf0090tu-i7-76b13pa-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/296789/hp-envy-x360-13-bf0090tu-i7-76b13pa-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/296789/hp-envy-x360-13-bf0090tu-i7-76b13pa-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // acer01
    {
        brand: "acer",

        id: "acer01",
        name: "Acer Aspire 7 Gaming A715",
        price: 20490000,
        sale_off_price: 20090000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/269533/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/269533/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-xy-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/269533/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-xy-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/269533/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/269533/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-8.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // acer02
    {
        brand: "acer",

        id: "acer02",
        name: "Acer Nitro 5 Gaming AN515",
        price: 26490000,
        sale_off_price: 22590000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/251999/acer-nitro-5-gaming-an515-57-54mv-i5-nhqensv003-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/251999/acer-nitro-5-gaming-an515-57-54mv-i5-nhqensv003-xy-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/251999/acer-nitro-5-gaming-an515-57-54mv-i5-nhqensv003-xy-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/251999/acer-nitro-5-gaming-an515-57-54mv-i5-nhqensv003-4-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/251999/acer-nitro-5-gaming-an515-57-54mv-i5-nhqensv003-5-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // acer03
    {
        brand: "acer",

        id: "acer03",
        name: "Acer Aspire 3 A315",
        price: 12990000,
        sale_off_price: 12000000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/286228/acer-aspire-3-a315-59-314f-i3-nxk6tsv002-1-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286228/acer-aspire-3-a315-59-314f-i3-nxk6tsv002-2-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286228/acer-aspire-3-a315-59-314f-i3-nxk6tsv002-3-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286228/acer-aspire-3-a315-59-314f-i3-nxk6tsv002-4-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/286228/acer-aspire-3-a315-59-314f-i3-nxk6tsv002-5-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // msi01
    {
        brand: "msi",

        id: "msi01",
        name: "MSI Modern 15 A5M",
        price: 15990000,
        sale_off_price: 17990000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-2-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-4-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/263792/msi-modern-15-a5m-r7-237vn-5-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // msi02
    {
        brand: "msi",

        id: "msi02",
        name: "MSI Gaming GE66 Raider",
        price: 77990000,
        sale_off_price: 69800000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-1-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-2-2-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-3-1-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-4-2-org.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-5-2-org.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // msi03
    {
        brand: "msi",

        id: "msi03",
        name: "MSI Gaming Stealth 15M A11UEK",
        price: 41990000,
        sale_off_price: 41990000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-1-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-2-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-3-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-4-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/256265/msi-gaming-stealth-15m-a11uek-i7-254vn-8-2.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // ms01
    {
        brand: "ms",

        id: "ms01",
        name: "Surface Pro 8",
        price: 29800000,
        sale_off_price: 30890000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/276386/surface-pro-8-i5-dr100003-1-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/276386/surface-pro-8-i5-dr100003-2-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/276386/surface-pro-8-i5-dr100003-3-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/276386/surface-pro-8-i5-dr100003-2-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/276386/surface-pro-8-i5-dr100003-1-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // ms02
    {
        brand: "ms",

        id: "ms02",
        name: "Surface Pro 7",
        price: 25390000,
        sale_off_price: 24990000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/266905/surface-pro-7-i5-puv00001-den-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266905/surface-pro-7-i5-puv00001-den-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266905/surface-pro-7-i5-puv00001-den-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266905/surface-pro-7-i5-puv00001-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266905/surface-pro-7-i5-puv00001-2.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // ms03
    {
        brand: "ms",

        id: "ms03",
        name: "Surface Go i5 ",
        price: 25390000,
        sale_off_price: 24990000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/266832/surface-go-i5-thh00001-vang-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266832/surface-go-i5-thh00001-vang-02.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266832/surface-go-i5-thh00001-vang-03.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266832/surface-go-i5-thh00001-vang-04.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/266832/surface-go-i5-thh00001-vang-05.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // lenovo01
    {
        brand: "lenovo",

        id: "lenovo01",
        name: "Lenovo Legion 5 15IAH7 ",
        price: 35490000,
        sale_off_price: 34290000,
        tag: "limited",
        on_sale: false,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-3.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-2.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-4.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/292389/lenovo-legion-5-15iah7-i5-82rc003wvn-5.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // lenovo02
    {
        brand: "lenovo",

        id: "lenovo02",
        name: "Lenovo Ideapad Gaming 3 15IAH7",
        price: 26990000,
        sale_off_price: 25790000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/283775/lenovo-ideapad-gaming-3-15iah7-i5-82s9007tvn-1-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/283775/lenovo-ideapad-gaming-3-15iah7-i5-82s9007tvn-2-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/283775/lenovo-ideapad-gaming-3-15iah7-i5-82s9007tvn-3-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/283775/lenovo-ideapad-gaming-3-15iah7-i5-82s9007tvn-4-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/283775/lenovo-ideapad-gaming-3-15iah7-i5-82s9007tvn-5-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },
    // lenovo03
    {
        brand: "lenovo",

        id: "lenovo03",
        name: " Lenovo Yoga Duet 7 13ITL6",
        price: 35990000,
        sale_off_price: 26990000,
        tag: "limited",
        on_sale: true,
        colors: [
            {
                color: "black",
                images: [
                    "//cdn.tgdd.vn/Products/Images/44/279450/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn-2-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279450/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn-1-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279450/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn-3-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279450/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn-4-1.jpg",
                    "//cdn.tgdd.vn/Products/Images/44/279450/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn-5-1.jpg"
                ]
            },
        ],
        description: {
            CPU: "i5 1135G7 2.4GHz",
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe tr???ng)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (C?? th??? th??o ra, l???p thanh kh??c t???i ??a 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card t??ch h???pIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "V??? nh???a - n???p l??ng b???ng kim lo???i",
            size: "D??i 324 mm - R???ng 215 mm - D??y 17.9 mm - N???ng 1.4 kg"
        }
    },


]

export const links = [
    {
        id: 1,
        text: "Trang ch???",
        link: "/",
        icon: <FaHome />
    }, {
        id: 2,
        text: "V??? ch??ng t??i",
        link: "/about",
        icon: <FaInfoCircle />
    }, {
        id: 3,
        text: 'S???n ph???m',
        link: "/products",
        icon: <FaBoxOpen />
    },
    // {
    //     id: 4,
    //     text: 'Blog',
    //     link: "/blog",
    //     icon: <FaBoxOpen />
    // },
]

export const sideLinks = [
    {
        id: 1,
        text: "Gi??? h??ng",
        link: "/cart",
        icon: <FaShoppingCart />
    }, {
        id: 2,
        text: "????ng nh???p",
        link: "/login",
        icon: <FaUserCircle />
    }
]

export const banners = [
    {
        id: 1,
        img: "https://cdn.tgdd.vn/2022/08/banner/800-200-800x200-66.png",
        link: "/products"
    },
    {
        id: 2,
        img: "https://cdn.tgdd.vn/2022/08/banner/Acer-800-200-800x200.png",
        link: "/products"
    },
    {
        id: 3,
        img: "https://cdn.tgdd.vn/2022/09/banner/800-200-800x200-78.png",
        link: "/products"
    },
    {
        id: 4,
        img: "https://cdn.tgdd.vn/2022/10/banner/800-200-800x200-94.png",
        link: "/products"
    }, {
        id: 5,
        img: "https://cdn.tgdd.vn/2022/08/banner/hp-800-200-800x200-1.png",
        link: "/products"
    }, {
        id: 6,
        img: "https://cdn.tgdd.vn/2022/09/banner/800-200-800x200-127.png",
        link: "/products"
    }
]


export const brands = [
    {
        id: 1,
        name: "apple",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png"
    },
    {
        id: 2,
        name: "asus",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/11/asu-logo.png"
    },
    {
        id: 3,
        name: "dell",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/20/dell.png"
    },
    {
        id: 4,
        name: "hp",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/18/oooo.png"
    }, {
        id: 5,
        name: "msi",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/01/15/anh-chup-man-hinh-2022-01-15-luc-08-49-50.png"
    }, {
        id: 6,
        name: "ms",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/11/microsoft-logo-inkythuatso-01-29-10-05-20.jpg"
    }, {
        id: 7,
        name: "lenovo",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/11/20/whatsapp-image-2021-11-18-at-16-20-33-1.jpeg"
    }, {
        id: 8,
        name: "acer",
        logo: "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/05/30/logo-acer-inkythuatso-2-01-27-15-50-00.jpg"
    }


]

// fake future products
// la nhung san pham co gia cao nhat
export const featureProducts = products.sort((a, b) => {
    return b.price - a.price;
}).slice(0, 5)


// fake products sale off

export const listSaleOff = products.filter((prod) => {
    if (prod.on_sale) {
        return true;
    }
    return false;
})


export const customers = [
    {
        id: 1,
        name: "H??a Minzy",
        info: "l?? m???t n??? ca s?? tr??? ki??m di???n vi??n ng?????i Vi???t Nam. C?? ???????c bi???t ?????n sau khi ?????t gi???i Qu??n qu??n c???a ch????ng tr??nh H???c vi???n Ng??i sao m??a ?????u ti??n v??o n??m 2014. C?? l?? c???u th??nh vi??n nh??m Ruby",
        point: 5,
        feedback: "?? ???, s???n ph???m shop n??y b??n c??ng ???n ??p.",
        thumb: "https://vnn-imgs-f.vgcloud.vn/2019/12/25/08/hoa-minzy-co-thuc-luc-nhung-lan-dan-thi-phi-ngap-dau.jpg"
    },
    {
        id: 2,
        name: "S??n T??ng M-TP",
        feedback: "Oidoioi r??? m?? ch???t l?????ng qu?? anh em ??i...",
        thumb: "https://znews-photo.zingcdn.me/w660/Uploaded/qfssu/2022_10_07/anh1_1.jpg",
        point: 4,
        info: "???????c bi???t ?????n l?? m???t trong s??? nh???ng ca s?? n???i b???t tr??n th??? tr?????ng ??m nh???c Vi???t Nam, s??? h???u nhi???u b???n hit ????nh ????m S??n T??ng M-TP kh??ng ch??? ???????c ????ng ?????o kh??n gi??? trong n?????c y??u m???n v?? c??n r???t ???????c l??ng fan h??m m??? qu???c t???."
    },
    {
        id: 3,
        name: "Mono Vi???t Ho??ng",
        feedback: "Hello xin ch??o m???i ng?????i, l???i l?? m??nh Mono ????y, s???n ph???m x???n qu??.",
        thumb: "https://2sao.vietnamnetjsc.vn/images/2022/10/23/20/35/tran-thanh-mono-3.png",
        point: 5,
        info: "MONO, t??n th???t l?? Nguy???n Vi???t Ho??ng, l?? em trai S??n T??ng M-TP. Anh ch??ng ???? ch??nh th???c c?? m??n debut v???i MV ?????u tay mang t??n Qu??n anh ??i. Ch??? sau ch??a ?????y 2 ng??y, s???n ph???m c???a MONO ???? ch??nh th???c v????n l??n top 1 Trending YouTube v???i h??n 1,7 tri???u l?????t xem"
    },
    {
        id: 4,
        name: "V??",
        feedback: "T??? l??c V?? mua con MacBook Pro 14 M1 Max 1TB n??y ch??a ra ???????c b??i n??o bu???n h???t.",
        thumb: "https://vtv1.mediacdn.vn/thumb_w/650/2021/11/8/2542941324331321881750723617338273617458761n-16363410600761432050028-crop-1636341067411185882379.jpg",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 5,
        name: "MCK",
        feedback: "Suy qu??, v??o l??m con Macbook Air M2 cho ????? s???u ?????i, Wxrdie ?????i anh ??? c???ng tr?????ng.",
        thumb: "https://image.thanhnien.vn/w1024/Uploaded/2022/noktnz/2020_11_24/mck_dsdt.jpg",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 6,
        name: "Wxrdie",
        feedback: "C??ng kh??ng s???u m???y c?? m?? s???n ph???m ???????c qu?? m???i ng?????i ??i",
        thumb: "https://i.scdn.co/image/ab6761610000e5eb7b881c785587294a331b7e26",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 7,
        name: "?????t Villa",
        feedback: "400 tri???u kh??ng ti??u h??i ph??, s???n ph???m ch???t l?????ng, s??? quay l???i mua v??o d???p l??a g?? t???i.",
        thumb: "https://ss-images.saostar.vn/w800/pc/1660186748979/saostar-e1pgg9s2sin2odb2.jpg",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }
]


export const filter_brands = [
    {
        id: 1,
        query: "apple",
        text: "apple"
    }, {
        id: 2,
        query: "hp",
        text: "hp"
    }, {
        id: 3,
        query: "asus",
        text: "asus"
    }, {
        id: 4,
        query: "dell",
        text: "dell"
    },
    {
        id: 5,
        query: "lenovo",
        text: "lenovo"
    },
    {
        id: 6,
        query: "acer",
        text: "acer"
    },
    {
        id: 7,
        query: "ms",
        text: "microsoft"
    },
    {
        id: 8,
        query: 'msi',
        text: "msi"
    }
]

export const filter_more = [
    {
        id: 1,
        query: "hight_to_low",
        text: "Gi?? cao ?????n th???p"
    },
    {
        id: 2,
        query: "low_to_high",
        text: "Gi?? th???p ?????n cao"
    },
    {
        id: 3,
        query: "a_to_z",
        text: "T??? A ?????n Z"
    },
    {
        id: 4,
        query: "z_to_a",
        text: "T??? Z ?????n A"
    }, {
        id: 5,
        query: "on_sale",
        text: "??ang ???????c gi???m gi??"
    }
]

export const filter_price = [
    {
        id: 1,
        query: "8_to_10",
        text: "8 tri???u ?????n 10 tri???u"
    },
    {
        id: 2,
        query: "10_to_15",
        text: "10 tri???u ?????n 15 tri???u"
    },
    {
        id: 3,
        query: "15_to_20",
        text: "15 tri???u ?????n 20 tri???u"
    },
    {
        id: 4,
        query: "20_to_30",
        text: "20 tri???u ?????n 30 tri???u"
    }, {
        id: 5,
        query: "30_up",
        text: "T??? 30 tri???u tr??? l??n"
    }
]


export const cart_slide = [
    {
        id: 1,
        img: cart_slide_1,
        url_product: "/products/mac01"
    },
    {
        id: 2,
        img: cart_slide_2,
        url_product: "/products/mac02"
    },
    {
        id: 3,
        img: cart_slide_3,
        url_product: "/products/mac03"
    },
    {
        id: 4,
        img: cart_slide_4,
        url_product: "/products/hp01"
    }, {
        id: 5,
        img: cart_slide_5,
        url_product: "/products/hp02"
    },
]


export const cart_products = [
    {
        id: 1,
        model: "mac01",
        quantity: 2,
        price: 22890000
    }, {
        id: 2,
        model: "mac02",
        quantity: 2,
        price: 31190000

    }, {
        id: 3,
        model: "mac03",
        quantity: 2,
        price: 64600000

    }, {
        id: 4,
        model: "dell01",
        quantity: 2,
        price: 12390000
    }
]


export const loginFields = [
    {
        title: "T??n t??i kho???n",
        type: "text",
        placeholder: "T??n t??i kho???n c???a b???n"
    }, {
        title: "M???t kh???u",
        type: "password",
        placeholder: "M???t kh???u c???a b???n"
    },

]
export const registerFields = [
    {
        title: "T??i kho???n",
        type: "text",
        placeholder: "Nh???p v??o t??i kho???n"
    },
    {
        title: "H??? v?? t??n",
        type: "text",
        placeholder: "Nh???p v??o h??? v?? t??n"
    },
    {
        title: "M???t kh???u",
        type: "text",
        placeholder: "Nh???p v??o m???t kh???u"
    },
    {
        title: "Nh???p l???i m???t kh???u",
        type: "text",
        placeholder: "Nh???p l???i m???t kh???u"
    }, {
        title: "Email",
        type: "email",
        placeholder: "Nh???p v??o email"
    }, {
        title: "Email",
        type: "email",
        placeholder: "Nh???p v??o email"
    }, {
        title: "S??? ??i???n tho???i",
        type: "email",
        placeholder: "Nh???p v??o s??? ??i???n tho???i "
    },

]


export const aboutData = [{
    title: "Gi???i thi???u chung",
    list: [
        {
            id: 1,
            text: "C??ng ty C??? ph???n X??y d???ng v?? ?????u t?? th????ng m???i Ho??ng H?? s??? h???u chu???i c???a h??ng Ho??ng H?? Mobile - l?? nh?? b??n l??? h??ng ?????u, chuy??n cung c???p c??c s???n ph???m c??ng ngh??? ch??nh h??ng t???i th??? tr?????ng Vi???t Nam. N??m 1996, Ho??ng H?? Mobile ???????c th??nh l???p, t???ng b?????c tr??? th??nh ?????a ch??? ????ng tin c???y c???a ng?????i ti??u d??ng Vi???t. V???i kh???u hi???u ???N???u nh???ng g?? ch??ng t??i kh??ng c??, ngh??a l?? b???n kh??ng c???n???, ch??ng t??i ????, ??ang v?? s??? ti???p t???c n??? l???c ??em ?????n c??c s???n ph???m c??ng ngh??? ch??nh h??ng ??a d???ng, phong ph?? ??i k??m m???c gi?? t???t nh???t ph???c v??? nhu c???u c???a qu?? kh??ch h??ng. "
        },
        {
            id: 2,
            text: "Sau h??n 20 n??m ph??t tri???n, Ho??ng H?? Mobile ???? tr??? th??nh c??i t??n kh??ng c??n xa l??? v???i ng?????i ti??u d??ng trong n?????c. Hi???n nay ch??ng t??i ??ang s??? h???u m???ng l?????i h??n 100 chi nh??nh ph??? tr??n kh???p c??? n?????c, trong ???? bao g???m hai trung t??m b???o h??nh t???i H?? N???i v?? m???t trung t??m b???o h??nh t???i th??nh ph??? H??? Ch?? Minh. ?????n v???i chu???i c???a h??ng c???a Ho??ng H?? Mobile, qu?? kh??ch c?? th??? ho??n to??n y??n t??m v??? uy t??n, ch???t l?????ng s???n ph???m v???i m???c gi?? r??? h??n kho???ng 15-20% so v???i gi?? b??n tr??n th??? tr?????ng. Song song v???i ????, ch??ng t??i c??ng lu??n n??? l???c ph???c v??? ??em ?????n tr???i nghi???m d???ch v??? t???t nh???t cho kh??ch h??ng."
        },
    ]
},
{
    title: "Nh???ng d???u m???c quan tr???ng",
    list: [
        {
            id: 1,
            text: "N??m 1996: Th??nh l???p c???a h??ng Ho??ng H?? Mobile ?????u ti??n t???a l???c tr??n con ph??? s???m u???t c???a Th??? ???? H?? N???i ??? ?????a ch??? 194 L?? Du???n."
        },
        {
            id: 2,
            text: "N??m 2006: V???i kinh nghi???m 10 n??m trong l??nh v???c b??n l???, Ho??ng H?? Mobile ph??t tri???n m???nh m??? v?? li??n t???c m??? th??m nhi???u chi nh??nh m???i."
        }
    ]
},
{
    title: "T??n ch??? ho???t ?????ng ",
    list: [
        {
            id: 1,
            text: "Ho??ng H?? Mobile lu??n ho???t ?????ng d???a tr??n t??n ch??? ?????t kh??ch h??ng l?? trung t??m, m???i n??? l???c ????? ?????t ???????c m???c ti??u cao nh???t l?? l??m h??i l??ng ng?????i d??ng th??ng qua c??c s???n ph???m ???????c cung c???p v?? d???ch v??? kh??ch h??ng. Ho??ng H?? Mobile ??ang t???ng b?????c x??y d???ng d???ch v??? kh??ch h??ng v?????t tr???i, x???ng ????ng l?? ????n v??? b??n l??? h??ng ?????u t???i Vi???t Nam. S??? tin t?????ng v?? ???ng h??? nhi???t t??nh c???a qu?? kh??ch h??ng t???i chu???i chi nh??nh ???? ph???n n??o kh???ng ?????nh hi???u qu??? ho???t ?????ng c???a ?????i ng?? nh??n vi??n Ho??ng H?? Mobile. "
        },
        {
            id: 2,
            text: "?????i v???i qu?? kh??ch h??ng, ch??ng t??i lu??n ?????t c??i t??m l??m g???c, l??m vi???c v???i tinh th???n nghi??m t??c, trung th???c v?? c?? tr??ch nhi???m, ????? mang t???i tr???i nghi???m d???ch v??? t???t nh???t. "
        },
        {
            id: 3,
            text: "?????i v???i ?????ng nghi???p, ch??ng t??i ????? cao v??n h??a h???c h???i, ??o??n k???t, t????ng tr??? l???n nhau t???o n??n m??i tr?????ng l??m vi???c t??n tr???ng - c??ng b???ng - v??n minh cho nh??n vi??n trong c??ng ty."
        },
        {
            id: 4,
            text: "?????i v???i c??c ?????i t??c, Ho??ng H?? Mobile lu??n l??m vi???c d???a tr??n nguy??n t???c t??n tr???ng, c??ng t???o ra gi?? tr??? cho c???ng ?????ng v?? c??ng ph??t tri???n b???n v???ng.  "
        }
    ]
},
{
    title: "T???m nh??n v?? s??? m???nh",
    list: [
        {
            id: 1,
            text: "Nh???ng n??m qua, ch??ng t??i kh??ng ng???ng c???i thi???n d???ch v??? t???i c??c chi nh??nh v?? h??? tr??? kh??ch h??ng qua c??c k??nh online. Ho??ng H?? Mobile cam k???t mang ?????n nh???ng s???n ph???m ch???t l?????ng v?? ch??? ????? b???o h??nh uy t??n, s???n s??ng h??? tr??? kh??ch h??ng trong th???i gian nhanh nh???t."
        },
        {
            id: 2,
            text: "Trong t????ng lai, Ho??ng H?? Mobile s??? ti???p t???c m??? r???ng h??? th???ng chi nh??nh, h?????ng t???i m???c ti??u c?? m???t t???i 63 t???nh th??nh tr??n to??n qu???c. ?????ng th???i, n??ng cao ch???t l?????ng d???ch v???, h???n ch??? nh???ng r???i ro, l???ng nghe v?? ti???p thu g??p ?? c???a qu?? kh??ch h??ng nh???m ??em ?????n tr???i nghi???m t???t nh???t khi mua s???m t???i Ho??ng H?? Mobile. "
        },
        {
            id: 3,
            text: "Cu???i c??ng, Ho??ng H?? Mobile hy v???ng s??? tr??? th??nh nh?? ti??n phong ????a nh???ng s???n ph???m c??ng ngh??? m???i nh???t ?????n tay ng?????i d??ng s???m nh???t, t???o ra cu???c s???ng hi???n ?????i n??i c??ng ngh??? k???t n???i con ng?????i, c??ng ngh??? ph???c v??? con ng?????i"
        },
    ]
}

]

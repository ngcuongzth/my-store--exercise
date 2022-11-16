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
            card: "Card tích hợp32 nhân GPU",
            connector: "3 x Thunderbolt 4 USB-CHDMIJack tai nghe 3.5 mm",
            special: "Có đèn bàn phím",
            operating_system: "Mac OS",
            design: "Vỏ kim loại nguyên khối",
            size: "Dài 355.7 mm - Rộng 248.1 mm - Dày 16.8 mm - Nặng 2.2 kg"
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
            card: "Card tích hợp8 nhân GPU",
            connector: "2 x Thunderbolt 3Jack tai nghe 3.5 mmMagSafe 3",
            special: "Có đèn bàn phím",
            operating_system: "Mac OS",
            design: "Vỏ kim loại nguyên khối",
            size: "Dài 304.1 mm - Rộng 215 mm - Dày 11.3 mm - Nặng 1.24 kg"
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
            card: "Card tích hợp24 nhân GPU",
            connector: "3 x Thunderbolt 4 USB-CHDMIJack tai nghe 3.5 mm",
            special: "Có đèn bàn phím",
            operating_system: "Mac OS",
            design: "Vỏ kim loại nguyên khối",
            size: "Dài 312.6 mm - Rộng 221.2 mm - Dày 15.5 mm - Nặng 1.6 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB + 1 khe rời)2933 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "15.6 in Full HD(1920 x 1080) 144Hz",
            card: "Card rờiGTX 1650 4GB",
            connector: "LAN (RJ45)USB 2.01x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNCHDMIJack tai nghe 3.5 mm2 x USB 3.2",
            special: "Có đèn bàn phím",
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa",
            size: "Dài 359 mm - Rộng 256 mm - Dày 24.9 mm - Nặng 2.3 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8GB DDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
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
            RAM: "8 GBDDR4 2 khe (1 khe 8 GB onboard + 1 khe trống)3200 MHz",
            hard_disk: "512 GB SSD NVMe PCIe (Có thể tháo ra, lắp thanh khác tối đa 1TB)",
            screen: "14 in Full HD(1920 x 1080) ",
            card: "Card tích hợpIntel Iris Xe",
            connector: "USB Type-C1 x USB 3.22 x USB 2.0HDMIJack tai nghe 3.5 mm",
            special: null,
            operating_system: "Windows 11 Home SL",
            design: "Vỏ nhựa - nắp lưng bằng kim loại",
            size: "Dài 324 mm - Rộng 215 mm - Dày 17.9 mm - Nặng 1.4 kg"
        }
    },


]

export const links = [
    {
        id: 1,
        text: "Trang chủ",
        link: "/",
        icon: <FaHome />
    }, {
        id: 2,
        text: "Về chúng tôi",
        link: "/about",
        icon: <FaInfoCircle />
    }, {
        id: 3,
        text: 'Sản phẩm',
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
        text: "Giỏ hàng",
        link: "/cart",
        icon: <FaShoppingCart />
    }, {
        id: 2,
        text: "Đăng nhập",
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
        name: "Hòa Minzy",
        info: "là một nữ ca sĩ trẻ kiêm diễn viên người Việt Nam. Cô được biết đến sau khi đạt giải Quán quân của chương trình Học viện Ngôi sao mùa đầu tiên vào năm 2014. Cô là cựu thành viên nhóm Ruby",
        point: 5,
        feedback: "à ừ, sản phẩm shop này bán cũng ổn áp.",
        thumb: "https://vnn-imgs-f.vgcloud.vn/2019/12/25/08/hoa-minzy-co-thuc-luc-nhung-lan-dan-thi-phi-ngap-dau.jpg"
    },
    {
        id: 2,
        name: "Sơn Tùng M-TP",
        feedback: "Oidoioi rẻ mà chất lượng quá anh em ơi...",
        thumb: "https://znews-photo.zingcdn.me/w660/Uploaded/qfssu/2022_10_07/anh1_1.jpg",
        point: 4,
        info: "Được biết đến là một trong số những ca sĩ nổi bật trên thị trường âm nhạc Việt Nam, sở hữu nhiều bản hit đình đám Sơn Tùng M-TP không chỉ được đông đảo khán giả trong nước yêu mến và còn rất được lòng fan hâm mộ quốc tế."
    },
    {
        id: 3,
        name: "Mono Việt Hoàng",
        feedback: "Hello xin chào mọi người, lại là mình Mono đây, sản phẩm xịn quá.",
        thumb: "https://2sao.vietnamnetjsc.vn/images/2022/10/23/20/35/tran-thanh-mono-3.png",
        point: 5,
        info: "MONO, tên thật là Nguyễn Việt Hoàng, là em trai Sơn Tùng M-TP. Anh chàng đã chính thức có màn debut với MV đầu tay mang tên Quên anh đi. Chỉ sau chưa đầy 2 ngày, sản phẩm của MONO đã chính thức vươn lên top 1 Trending YouTube với hơn 1,7 triệu lượt xem"
    },
    {
        id: 4,
        name: "Vũ",
        feedback: "Từ lúc Vũ mua con MacBook Pro 14 M1 Max 1TB này chưa ra được bài nào buồn hết.",
        thumb: "https://vtv1.mediacdn.vn/thumb_w/650/2021/11/8/2542941324331321881750723617338273617458761n-16363410600761432050028-crop-1636341067411185882379.jpg",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 5,
        name: "MCK",
        feedback: "Suy quá, vào làm con Macbook Air M2 cho đỡ sầu đời, Wxrdie đợi anh ở cổng trường.",
        thumb: "https://image.thanhnien.vn/w1024/Uploaded/2022/noktnz/2020_11_24/mck_dsdt.jpg",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 6,
        name: "Wxrdie",
        feedback: "Cũng không sầu mấy cơ mà sản phẩm được quá mọi người ơi",
        thumb: "https://i.scdn.co/image/ab6761610000e5eb7b881c785587294a331b7e26",
        point: 5,
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi ex eaque expedita tempora corporis nesciunt delectus quasi accusamus suscipit aspernatur eum corrupti inventore nihil, voluptate odio magni reiciendis natus."
    }, {
        id: 7,
        name: "Đạt Villa",
        feedback: "400 triệu không tiêu hơi phí, sản phẩm chất lượng, sẽ quay lại mua vào dịp lùa gà tới.",
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
        text: "Giá cao đến thấp"
    },
    {
        id: 2,
        query: "low_to_high",
        text: "Giá thấp đến cao"
    },
    {
        id: 3,
        query: "a_to_z",
        text: "Từ A đến Z"
    },
    {
        id: 4,
        query: "z_to_a",
        text: "Từ Z đến A"
    }, {
        id: 5,
        query: "on_sale",
        text: "Đang được giảm giá"
    }
]

export const filter_price = [
    {
        id: 1,
        query: "8_to_10",
        text: "8 triệu đến 10 triệu"
    },
    {
        id: 2,
        query: "10_to_15",
        text: "10 triệu đến 15 triệu"
    },
    {
        id: 3,
        query: "15_to_20",
        text: "15 triệu đến 20 triệu"
    },
    {
        id: 4,
        query: "20_to_30",
        text: "20 triệu đến 30 triệu"
    }, {
        id: 5,
        query: "30_up",
        text: "Từ 30 triệu trở lên"
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
        title: "Tên tài khoản",
        type: "text",
        placeholder: "Tên tài khoản của bạn"
    }, {
        title: "Mật khẩu",
        type: "password",
        placeholder: "Mật khẩu của bạn"
    },

]
export const registerFields = [
    {
        title: "Tài khoản",
        type: "text",
        placeholder: "Nhập vào tài khoản"
    },
    {
        title: "Họ và tên",
        type: "text",
        placeholder: "Nhập vào họ và tên"
    },
    {
        title: "Mật khẩu",
        type: "text",
        placeholder: "Nhập vào mật khẩu"
    },
    {
        title: "Nhập lại mật khẩu",
        type: "text",
        placeholder: "Nhập lại mật khẩu"
    }, {
        title: "Email",
        type: "email",
        placeholder: "Nhập vào email"
    }, {
        title: "Email",
        type: "email",
        placeholder: "Nhập vào email"
    }, {
        title: "Số điện thoại",
        type: "email",
        placeholder: "Nhập vào số điện thoại "
    },

]


export const aboutData = [{
    title: "Giới thiệu chung",
    list: [
        {
            id: 1,
            text: "Công ty Cổ phần Xây dựng và Đầu tư thương mại Hoàng Hà sở hữu chuỗi cửa hàng Hoàng Hà Mobile - là nhà bán lẻ hàng đầu, chuyên cung cấp các sản phẩm công nghệ chính hãng tại thị trường Việt Nam. Năm 1996, Hoàng Hà Mobile được thành lập, từng bước trở thành địa chỉ đáng tin cậy của người tiêu dùng Việt. Với khẩu hiệu “Nếu những gì chúng tôi không có, nghĩa là bạn không cần”, chúng tôi đã, đang và sẽ tiếp tục nỗ lực đem đến các sản phẩm công nghệ chính hãng đa dạng, phong phú đi kèm mức giá tốt nhất phục vụ nhu cầu của quý khách hàng. "
        },
        {
            id: 2,
            text: "Sau hơn 20 năm phát triển, Hoàng Hà Mobile đã trở thành cái tên không còn xa lạ với người tiêu dùng trong nước. Hiện nay chúng tôi đang sở hữu mạng lưới hơn 100 chi nhánh phủ trên khắp cả nước, trong đó bao gồm hai trung tâm bảo hành tại Hà Nội và một trung tâm bảo hành tại thành phố Hồ Chí Minh. Đến với chuỗi cửa hàng của Hoàng Hà Mobile, quý khách có thể hoàn toàn yên tâm về uy tín, chất lượng sản phẩm với mức giá rẻ hơn khoảng 15-20% so với giá bán trên thị trường. Song song với đó, chúng tôi cũng luôn nỗ lực phục vụ đem đến trải nghiệm dịch vụ tốt nhất cho khách hàng."
        },
    ]
},
{
    title: "Những dấu mốc quan trọng",
    list: [
        {
            id: 1,
            text: "Năm 1996: Thành lập cửa hàng Hoàng Hà Mobile đầu tiên tọa lạc trên con phố sầm uất của Thủ đô Hà Nội ở địa chỉ 194 Lê Duẩn."
        },
        {
            id: 2,
            text: "Năm 2006: Với kinh nghiệm 10 năm trong lĩnh vực bán lẻ, Hoàng Hà Mobile phát triển mạnh mẽ và liên tục mở thêm nhiều chi nhánh mới."
        }
    ]
},
{
    title: "Tôn chỉ hoạt động ",
    list: [
        {
            id: 1,
            text: "Hoàng Hà Mobile luôn hoạt động dựa trên tôn chỉ đặt khách hàng là trung tâm, mọi nỗ lực để đạt được mục tiêu cao nhất là làm hài lòng người dùng thông qua các sản phẩm được cung cấp và dịch vụ khách hàng. Hoàng Hà Mobile đang từng bước xây dựng dịch vụ khách hàng vượt trội, xứng đáng là đơn vị bán lẻ hàng đầu tại Việt Nam. Sự tin tưởng và ủng hộ nhiệt tình của quý khách hàng tại chuỗi chi nhánh đã phần nào khẳng định hiệu quả hoạt động của đội ngũ nhân viên Hoàng Hà Mobile. "
        },
        {
            id: 2,
            text: "Đối với quý khách hàng, chúng tôi luôn đặt cái tâm làm gốc, làm việc với tinh thần nghiêm túc, trung thực và có trách nhiệm, để mang tới trải nghiệm dịch vụ tốt nhất. "
        },
        {
            id: 3,
            text: "Đối với đồng nghiệp, chúng tôi đề cao văn hóa học hỏi, đoàn kết, tương trợ lẫn nhau tạo nên môi trường làm việc tôn trọng - công bằng - văn minh cho nhân viên trong công ty."
        },
        {
            id: 4,
            text: "Đối với các đối tác, Hoàng Hà Mobile luôn làm việc dựa trên nguyên tắc tôn trọng, cùng tạo ra giá trị cho cộng đồng và cùng phát triển bền vững.  "
        }
    ]
},
{
    title: "Tầm nhìn và sứ mệnh",
    list: [
        {
            id: 1,
            text: "Những năm qua, chúng tôi không ngừng cải thiện dịch vụ tại các chi nhánh và hỗ trợ khách hàng qua các kênh online. Hoàng Hà Mobile cam kết mang đến những sản phẩm chất lượng và chế độ bảo hành uy tín, sẵn sàng hỗ trợ khách hàng trong thời gian nhanh nhất."
        },
        {
            id: 2,
            text: "Trong tương lai, Hoàng Hà Mobile sẽ tiếp tục mở rộng hệ thống chi nhánh, hướng tới mục tiêu có mặt tại 63 tỉnh thành trên toàn quốc. Đồng thời, nâng cao chất lượng dịch vụ, hạn chế những rủi ro, lắng nghe và tiếp thu góp ý của quý khách hàng nhằm đem đến trải nghiệm tốt nhất khi mua sắm tại Hoàng Hà Mobile. "
        },
        {
            id: 3,
            text: "Cuối cùng, Hoàng Hà Mobile hy vọng sẽ trở thành nhà tiên phong đưa những sản phẩm công nghệ mới nhất đến tay người dùng sớm nhất, tạo ra cuộc sống hiện đại nơi công nghệ kết nối con người, công nghệ phục vụ con người"
        },
    ]
}

]

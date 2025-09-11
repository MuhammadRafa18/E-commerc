import cardProduk from "../assets/produk card.png";
import cart from "../assets/cart.svg";
import love from "../assets/love.svg";
import start from "../assets/start.svg";
import produk_1 from "../assets/Gaming.jpg";
import produk_2 from "../assets/Laptop.jpg";
import produk_3 from "../assets/Audio.jpg";
import produk_4 from "../assets/Television.jpg";
import model_1 from "../assets/model(1).png";
import model_2 from "../assets/model(2).png";
import model_3 from "../assets/model(3).png";
import model_4 from "../assets/model(4).png";
import modelAbout1 from "../assets/modelAbout1.png";
import modelAbout2 from "../assets/modelAbout2.png";
import modelAbout3 from "../assets/modelAbout3.png";
import modelAbout4 from "../assets/modelAbout4.png";
import barchart from "../assets/bar-chart.png"
import wallet from "../assets/wallet.png"
import antiage from "../assets/anti-age.svg"
import Serum from "../assets/Arlivaserum.png";
import Bca from "../assets/Bca.svg"
import Mandiri from "../assets/Mandiri.svg"
import Gopay from "../assets/gopay.svg"
import Bri from "../assets/Bri.svg";
import Qris from "../assets/QRIS.svg";
import ovo from "../assets/ovo.svg"

 const siteData =  {
   
    ProdukSkintype : [
      { id:1, gambar:produk_1, text:"Gaming"},
      { id:2, gambar:produk_2, text:"Laptop"},
      {id:3, gambar:produk_3, text:"Audio"},
      { id:4, gambar:produk_4, text:"Television"}
    ],
    ResultProduk : [
      {id:1, gambar:model_1},
      {id:2, gambar:model_2},
      {id:3, gambar:model_3},
      {id:4, gambar:model_4},
    ],
    CategoryProduk : [
        {id:1, filter:"All"},
        {id:2, filter:"Moisturizer"},
        {id:3, filter:"Facewash"},
        {id:4, filter:"Sunscreen"},
        {id:5, filter:"Serum"}
      ],
    Category : [
        {id:1, category:"Bestseller"},
        {id:2, category:"New Product"},
        {id:3, category:"Sensitive skin"},
        {id:4, category:"Dry skin"},
        {id:5, category:"Oil Skin"},
        {id:6, category:"Normal Skin"}
  
      ],
      AboutSection: [
          {id:1, gambar:modelAbout1},
          {id:2, gambar:modelAbout2},
          {id:3, gambar:modelAbout2},
          {id:4, gambar:modelAbout2},
          {id:5, gambar:modelAbout3},
          {id:6, gambar:modelAbout4}
      ],
      PargrafAbout: [
        {id:1, text:"We believe that every Indonesian woman has the right to appear confident, regardless of her age and skin condition."},
        {id:2, text:"Taking care of your skin is not just about beauty — it's about self-respect."},
        {id:3, text:"Specially formulated for tropical skin with safe, halal and friendly ingredients for all ages."},
        {id:4, text:"From teenagers to mothers, Arliva is here to accompany every phase of Indonesian women's journey."}
      ],
      PowerSkincare: [
         {id:1, icon:antiage, benefit:"Nurtures long-term skin health and graceful aging"},
         {id:2, icon:barchart, benefit:"Boosts self-confidence and personal well-being"},
         {id:3, icon:wallet, benefit:"Supports social and economic opportunities "}
      ],
      paragrafSection: [
        {id:1, text:"We believe every Indonesian woman has the right to appear confident, regardless of their skin condition or age."},
        {id:2, text:"Arliva was born from our personal experiences — a mother and daughter who both felt the difficulty of finding local skincare that was safe, tropical skin-friendly, and easily accessible to all groups."},
        {id:3, text:"We want to build a culture of healthy self-care, starting from teenagers to mothers. Skincare isn't just about beauty—it's about self-esteem, health, and self-love."},
        {id:4, text:"We create products with safe, halal ingredients tailored to tropical skin. We don't have a large team, just our sincere intentions and hard work—a mother and daughter who want to make a difference."},
        {id:5, text:"Arliva is not just about products, but about the spirit of Indonesian women to take care of themselves and dare to shine."}
      ],
      Payment: [
        {id:1, name:"Bca", logo:Bca}, 
        {id:2, name:"BRI", logo:Bri},
        {id:3, name:"Mandiri", logo:Mandiri}, 
        {id:4, name:"Qris", logo:Qris},
        {id:5, name:"Gopay", logo:Gopay},
        {id:6, name:"OVO", logo:ovo}
      ],
      Delevery: [
        {id:1, name:"JNT"},
        {id:2, name:"JNE"},
        {id:3, name:"TIKI"}
      ],
      Faq: [
        {id:1,judul:"Product", quest1:"How do I choose a product that suits my skin type?", quest2:"Are Arliva products suitable for all skin types?", quest3:"Does Arliva use natural ingredients?"},
        {id:2,judul:"Company", quest1:"What is Arliva and what is the brand's mission?", quest2:"Where are Arliva products manufactured?", quest3:"Is Arliva cruelty-free and eco-friendly?"},
        {id:3,judul:"Other", quest1:"Can I return the product if it doesn't fit?", quest2:"How long will it take to ship my order?", quest3:"How to contact the Arliva team?"}
      ], 
      setProvinsi : [
        {id:1, provinsi: "Jawa Tengah",
    kota: [
      "Semarang",
      "Surakarta",
      "Magelang",
      "Tegal",
      "Kabupaten Banyumas",
      "Kabupaten Boyolali",
      "Kabupaten Cilacap",
      "Kabupaten Demak",
      "Kabupaten Grobogan",
      "Kabupaten Jepara"
    ]
  }, 
  { id:2, provinsi: "Jawa Barat",
    kota: [
      "Bandung",
      "Bekasi",
      "Bogor",
      "Depok",
      "Cimahi",
      "Sukabumi",
      "Cirebon",
      "Tasikmalaya",
      "Banjar",
      "Kabupaten Bandung",
      "Kabupaten Bekasi",
      "Kabupaten Bogor",
      "Kabupaten Ciamis",
      "Kabupaten Cianjur",
      "Kabupaten Cirebon",
      "Kabupaten Garut",
      "Kabupaten Indramayu",
      "Kabupaten Karawang",
      "Kabupaten Kuningan",
      "Kabupaten Majalengka",
      "Kabupaten Purwakarta",
      "Kabupaten Subang",
      "Kabupaten Sukabumi",
      "Kabupaten Sumedang",
      "Kabupaten Tasikmalaya"
    ]}
      ]
      

  }


export default siteData;

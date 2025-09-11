import CereMatcha from "../assets/CereMatcha.png";
import YanoMatcha from "../assets/YanoMatcha.png";
import LateMatcha from "../assets/LateMatcha.png";
import CuliMatcha from "../assets/CuliMatcha.png";
import JasmineMatcha from "../assets/JasmineMatcha.png";
import Houjicha from "../assets/Houjicha.png";

const ListProducts = [
  {
    id: 1,
    src: CereMatcha,
    name: "Bột Matcha CEREMONIAL GRADE",
    weight: ["50", "100", "500"],
    price: [125000, 230000, 950000], // Giá cho gói 50gr, 100gr, 500gr
  },
  {
    id: 2,
    src: YanoMatcha,
    name: "Bột Matcha UJI YANO",
    weight: ["100", "500"],
    price: [295000, 1080000], // Giá cho gói 100gr, 500gr
  },
  {
    id: 3,
    src: LateMatcha,
    name: "Bột Matcha LATTE GRADE",
    weight: ["100", "500"],
    price: [190000, 825000], // Giá cho gói 100gr, 500gr
  },
  {
    id: 4,
    src: CuliMatcha,
    name: "Bột Matcha CULINARY GRADE",
    weight: ["100", "500"],
    price: [175000, 750000], // Giá cho gói 100gr, 500gr
  },
  {
    id: 5,
    src: JasmineMatcha,
    name: "Bột Matcha JASMINE (Hương Nhài)",
    weight: ["50", "100", "500"],
    price: [80000, 170000, 725000], // Giá cho gói 50gr, 100gr, 500gr
  },
  {
    id: 6,
    src: Houjicha,
    name: "Bột HOUJICHA (Trà Rang)",
    weight: ["50", "100", "500"],
    price: [90000, 185000, 735000], // Giá cho gói 50gr, 100gr, 500gr
  },
];

export default ListProducts;

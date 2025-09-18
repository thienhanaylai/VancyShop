/**
 * @param {String} - truyền vào một chuỗi url bằng useLocation()
 * @returns {Array} - trả về array item để truyền vào breadcrum
 */

import { Link } from "react-router";
import GetProductbyId from "./GetProductbyId";
import ListProducts from "../data/ListMatcha";
import expandProductVariants from "./expandProductVariants";

const ListDetailProducts = [
  ...ListProducts,
  expandProductVariants(ListProducts),
].flat(1);

function translate(str) {
  let segment = "";
  switch (str) {
    case "about":
      segment = "Về chúng tôi";
      break;
    case "product":
      segment = "Sản phẩm";
      break;
    case "contact":
      segment = "Liên hệ";
      break;
    default:
      "";
  }
  return segment;
}

export default function GetBreadcrumItem(pathname) {
  const segments = pathname.split("/").filter((segment) => segment);
  const breadcrumbItems = [
    {
      title: (
        <Link className="breadcrum-children" to="/">
          Trang chủ
        </Link>
      ),
    },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    breadcrumbItems.push({
      title: isLast ? (
        GetProductbyId(ListDetailProducts, segment).name
      ) : (
        <Link className="breadcrum-children" to={currentPath}>
          {translate(segment)}
        </Link>
      ),
    });
  });

  return breadcrumbItems;
}

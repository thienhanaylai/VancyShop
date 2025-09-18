/**
 * Sắp xếp một mảng các đối tượng theo một key và hướng cho trước.
 * @param {Array} array Mảng cần sắp xếp.
 * @param {string} key Tên thuộc tính cần sắp xếp (ví dụ: 'price' hoặc 'name').
 * @param {string} [direction='ascending'] Hướng sắp xếp: 'ascending' (tăng dần) hoặc 'descending' (giảm dần).
 * @returns {Array} Một mảng mới đã được sắp xếp.
 */

export default function FillterListProduct(
  array,
  key,
  direction = "ascending"
) {
  if (!Array.isArray(array)) {
    return [];
  }

  // Hàm trợ giúp để lấy giá trị từ key, kể cả key lồng nhau
  const getValue = (obj, path) => {
    // Tách key thành các phần dựa trên dấu chấm
    const keys = path.split(".");
    // Dùng reduce để duyệt sâu vào trong đối tượng
    return keys.reduce((acc, currentKey) => {
      // Nếu acc (đối tượng hiện tại) tồn tại và có thuộc tính currentKey, đi sâu vào
      // Nếu không, trả về undefined
      return acc && acc[currentKey] !== undefined ? acc[currentKey] : undefined;
    }, obj);
  };

  // Tạo một bản sao của mảng để không thay đổi mảng gốc
  const sortedArray = [...array];

  sortedArray.sort((a, b) => {
    const valueA = getValue(a, key);
    const valueB = getValue(b, key);

    const typeA = typeof valueA;
    const typeB = typeof valueB;

    // Ưu tiên: đẩy các giá trị null/undefined xuống cuối
    if (valueA == null) return 1; // a xuống cuối
    if (valueB == null) return -1; // b xuống cuối

    let comparison = 0;

    // Nếu cả hai đều là chuỗi, dùng localeCompare cho tiếng Việt
    if (typeA === "string" && typeB === "string") {
      comparison = valueA.localeCompare(valueB, "vi");
    }
    // Nếu cả hai đều là số (hoặc có thể chuyển thành số)
    else if (typeA === "number" && typeB === "number") {
      comparison = valueA - valueB;
    }
    // Trường hợp khác (ví dụ: boolean), so sánh mặc định
    else {
      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }
    }

    // Đảo ngược kết quả nếu sắp xếp giảm dần
    return direction === "descending" ? comparison * -1 : comparison;
  });

  return sortedArray;
}

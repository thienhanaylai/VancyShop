export default function GetProductbyId(ListPrd, id) {
  return ListPrd.find((product) => {
    return product.id.toString().localeCompare(id, "vi") === 0; //so sanh 2 id
  });
}

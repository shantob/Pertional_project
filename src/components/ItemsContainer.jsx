import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-8 md:ml-20 px-5 py-16">
      <Item Links={RESOURCES} title="RESOURCES TO LEARN" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT BY" />
    </div>
  );
};

export default ItemsContainer;
import { ChartNoAxesGantt, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div  className="flex justify-between items-center font-[W3] font-light p-6 bg-white text-black">
      <div  className="flex gap-4 font-[W4] ">
        <ChartNoAxesGantt />
        <h1>MENU</h1>
      </div>

      <h1 className="text-2xl ">Brkthru</h1>

      <div className="flex gap-4">
        <Search />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;

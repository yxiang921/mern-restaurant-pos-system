import { Sidebar } from "./component";

import { Routes, Route } from "react-router-dom";
import { Home, Order, Menu, Analytics, SelectTable, NewOrder } from "./pages";
import { useSidebarContext } from "./context/SidebarContext";

import { IoMenuOutline } from "react-icons/io5";


function App() {
  const {setOpen, isOrder } = useSidebarContext();
  return (
    <div className="w-full h-screen flex flex-row justify-start items-start">
      { isOrder ? "" : <Sidebar />}
      <div className="btn btn-square fixed top-2 left-2 shadow-lg bg-stone-200 lg:hidden"
        onClick={() => {setOpen(true)}}
      >
        <IoMenuOutline />
      </div>
      {/* Website Content Here */}
      <div className="w-full h-screen scrollbar-hide bg-gray-color">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/order/table" element={<SelectTable />} />
          <Route path="/order/table/new" element={<NewOrder />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

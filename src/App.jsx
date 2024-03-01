import { Sidebar } from "./component";

import { Routes, Route } from "react-router-dom";
import { Home, Order, Menu, Analytics, SelectTable, NewOrder } from "./pages";

function App() {
  return (
    <>
      <Sidebar>
        {/* Website Content Here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/order/table" element={<SelectTable />} />
          <Route path="/order/table/new" element={<NewOrder />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;

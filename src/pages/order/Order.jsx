const Order = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-md w-full h-[40rem]">
        <h1 className="px-10 pt-4 text-lg font-medium text-neutral-700">Order Management</h1>
        {/* table start */}

        <div className="overflow-x-auto m-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Order Number</th>
                <th>Table Number</th>
                <th>Orders</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold">#ORD123</div>
                      <div className="text-sm opacity-50">12.34pm</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">#5</div>
                </td>
                <td className="w-1/4">
                  <span>5 Items</span>
                </td>
                <td>
                  <div className="bg-yellow-300 bg-opacity-55 h-8 rounded-md flex justify-center items-center">
                    <span className="font-medium text-yellow-700">
                      Processing
                    </span>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default Order;

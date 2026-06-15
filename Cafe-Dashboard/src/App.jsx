function App() {
  return (
    <div data-theme="business">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-5">
          <label htmlFor="my-drawer" className="btn btn-primary hidden">
            ☰ Menu
          </label>

          <div className="drawer-content p-5">
            <div className="navbar bg-base-100 shadow rounded-xl mb-5">
              <div className="flex-1">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-square btn-ghost lg:hidden"
                >
                  ☰
                </label>

                <a className="text-2xl font-bold ml-2">Dashboard</a>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered"
                />

                <button className="btn btn-circle">🔔</button>

                <button className="btn btn-circle">👤</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Total Orders</h2>

                <p className="text-3xl font-bold">120</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Revenue</h2>

                <p className="text-3xl font-bold">₹45,230</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Customers</h2>

                <p className="text-3xl font-bold">320</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Products</h2>

                <p className="text-3xl font-bold">85</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow mt-6">
            <div className="card-body">
              <h2 className="card-title">Recent Orders</h2>

              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>

                      <th>Customer</th>

                      <th>Item</th>

                      <th>Price</th>

                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>101</td>

                      <td>Ruturaj</td>

                      <td>Coffee</td>

                      <td>₹100</td>

                      <td>
                        <div className="badge badge-success">Completed</div>
                      </td>
                    </tr>

                    <tr>
                      <td>102</td>

                      <td>Abhishek</td>

                      <td>Burger</td>

                      <td>₹150</td>

                      <td>
                        <div className="badge badge-warning">Pending</div>
                      </td>
                    </tr>

                    <tr>
                      <td>103</td>

                      <td>Rushikesh</td>

                      <td>Pizza</td>

                      <td>₹250</td>

                      <td>
                        <div className="badge badge-error">Cancelled</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay "></label>

          <ul className=" flex flex-col min-h-full w-80 p-5 gap-4">
            <h1 className="text-2xl font-bold ">Cafe Dashboard</h1>
            <li>
              <a>Dashboard</a>
            </li>

            <li>
              <a>Orders</a>
            </li>

            <li>
              <a>Customers</a>
            </li>

            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

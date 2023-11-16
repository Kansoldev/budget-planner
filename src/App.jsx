function App() {
  return (
    <>
      <div className="">
        <table className="">
          <thead>
            <tr>
              <th>Project</th>
              <th className="text-3xl">Task</th>
              <th className="">Members</th>
              <th className="">Status</th>
              <th className="">Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">Frontend Development</a>
              </td>
              <td className="">25</td>
              <td className=""></td>
              <td className=""></td>
              <td>
                <div className="">
                  <div className="">
                    <div className="progress-bar"></div>
                  </div>
                  <small className="">%53</small>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

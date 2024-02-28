const Purchase = () => {
  return (
    <div className="rounded-lg m-6 w-1/3 h-60 bg-white-color">
      <div className="flex flex-row justify-between items-center p-4">
        <h1 className="font-bold text-lg text-neutral-700">Purchases</h1>
        <select defaultValue={"month"} className="select select-xs select-bordered  h-12">
          <option value={"week"}>This Week</option>
          <option value={"month"}>This Month</option>
          <option value={"year"}>This Year</option>
        </select>
      </div>
      <div>
        <div>
            <div>
                <div>icon</div>
                <div>desc</div>
                <div>value</div>
            </div>
            <div>
                progress...
            </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

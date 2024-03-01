const TableCard = () => {
  return (
    <a
      href="/order/table/new"
      className="w-48 h-48 cursor-pointer rounded-md m-4 flex justify-center items-center bg-sky-100"
    >
      <h1 className="font-bold text-lg text-neutral-700">Table 1</h1>
    </a>
  );
};

const SelectTable = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="w-full h-full flex flex-row justify-start items-start flex-wrap">
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
        <TableCard />
      </div>
    </div>
  );
};

export default SelectTable;

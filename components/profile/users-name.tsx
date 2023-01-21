const UsersName = () => {
  return (
    <div className="mt-4 mb-10">
      {/* parent flex container */}
      <div className="flex gap-4 items-center">
        <div className="text-paper flex items-center justify-center w-[60px] uppercase h-[60px] rounded-full bg-neutral-300 text-4xl font-bold font-sec">
          {"John".slice(0, 2)}
        </div>
        <div>
          <h1 className="font-sec font-bold text-xl text-paper">John Doe</h1>
          <h2 className="font-sec text-sm font-semibold text-red-600 capitalize">
            not Verified
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UsersName;

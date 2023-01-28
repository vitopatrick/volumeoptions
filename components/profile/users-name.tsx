import { UserType } from "../../hooks/useFetchUser";
import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";

const UsersName = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  return (
    <div className="mt-4 mb-10 px-3">
      {/* parent flex container */}
      <div className="flex gap-4 items-center">
        {loading && <SkeletonCircle height={60} width={60} />}
        {!loading && (
          <div className="text-bg flex items-center justify-center w-[60px] uppercase h-[60px] rounded-full bg-gray_bg text-4xl font-bold font-sec">
            {user.Name.slice(0, 2)}
          </div>
        )}

        <div>
          {loading && <SkeletonText height={5} width={200} />}
          {!loading && (
            <h1 className="font-sec font-bold text-xl text-paper capitalize">
              {user.Name}
            </h1>
          )}
          {loading && <SkeletonText height={5} width={200} />}
          {!loading && (
            <h2 className="font-sec text-sm font-semibold text-red capitalize">
              {user.verfied ? "Verified" : "Not Verified"}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersName;

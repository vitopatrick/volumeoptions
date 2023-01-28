import UserVerification from "../../components/profile/user-verification";
import UsersDetails from "../../components/profile/users-details";
import UsersName from "../../components/profile/users-name";
import { useFetchUser } from "../../hooks/useFetchUser";
import Layout from "../../shared/dashboard-layout/Layout";

const AccountProfilePage = () => {
  const { error, loading, userState: user } = useFetchUser();

  return (
    <Layout>
      <UsersName user={user} loading={loading} />
      <UserVerification />
      <UsersDetails user={user} loading={loading} />
    </Layout>
  );
};

export default AccountProfilePage;

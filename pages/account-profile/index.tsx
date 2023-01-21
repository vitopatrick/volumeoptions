import UserVerification from "../../components/profile/user-verification";
import UsersDetails from "../../components/profile/users-details";
import UsersName from "../../components/profile/users-name";
import Layout from "../../shared/dashboard-layout/Layout";

const AccountProfilePage = () => {
  return (
    <Layout>
      <UsersName />
      <UserVerification />
      <UsersDetails />
    </Layout>
  );
};

export default AccountProfilePage;

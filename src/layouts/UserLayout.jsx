import HeaderUser from '../components/HeaderUser';
import FooterUser from '../components/FooterUser';

function UserLayout({ children }) {
  return (
    <>
      <HeaderUser />
      <main>{children}</main>
      <FooterUser />
    </>
  );
}

export default UserLayout;

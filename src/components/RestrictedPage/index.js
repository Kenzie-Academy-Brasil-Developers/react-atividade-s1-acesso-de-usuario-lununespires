import Button from "../Button";

function RestrictedPage({ isLoggedIn, user, Login }) {
  return (
    <>
      <div className="Login">
        {isLoggedIn ? (
          <p>Welcome, {user}.</p>
        ) : (
          <p>You cannot access this page. Please, check your user.</p>
        )}
        <Button Login={Login} loginState={isLoggedIn} />
      </div>
    </>
  );
}

export default RestrictedPage;

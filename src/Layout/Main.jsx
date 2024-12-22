

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
        <Navbar></Navbar>
        <div className="min-h-screen ">
        <Outlet />
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;
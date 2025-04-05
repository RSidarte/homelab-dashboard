import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

const Header = () => {
  return (
    <div className="bg-white px-6 py-4 shadow flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo Labaky" className="h-10 w-auto" />
        <h1 className="text-2xl font-bold text-gray-800">Labaky</h1>
      </div>
      <img src={banner} alt="Banner" className="h-12 w-auto" />
    </div>
  );
};

export default Header;

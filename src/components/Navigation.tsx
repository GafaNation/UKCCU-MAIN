import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cross, Heart, Users, Calendar, BookOpen, Camera, Mail, Compass, Book, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Heart },
    { name: "About", path: "/about", icon: Users },
    { name: "Leadership", path: "/leadership", icon: UserCheck },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Gallery", path: "/gallery", icon: Camera },
    { name: "Ministries", path: "/ministries", icon: Cross },
    { name: "Resources", path: "/resources", icon: Book },
    { name: "WhatsApp Groups", path: "/whatsapp-groups", icon: Compass },
    { name: "Connect", path: "/connect", icon: Compass },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 lg:h-18 items-center">
          <div className="flex items-center flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-1 rounded-lg inline-block">
                <img src="photos and videos/UKCCU_LOGO-removebg-preview (1).png" alt="UKCCU LOGO" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 object-contain"/>
              </div>
            </Link>
          </div>

          {/* Center title - visible on all screen sizes */}
          <div className="flex flex-1 justify-center">
            <div className="text-center">
              <h1 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 leading-tight">UPPER KABETE CAMPUS CHRISTIAN UNION</h1>
            </div>
          </div>

          {/* Menu button - visible on all screen sizes */}
          <div className="flex items-center flex-1 justify-end">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu - visible on all screen sizes when open */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-w-7xl mx-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

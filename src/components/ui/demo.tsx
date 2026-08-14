import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home, Info, ShoppingBag, Award, Mail } from "lucide-react";

interface CircularNavbarProps {
  onNavigate: (section: string) => void
  activeSection: string
}

export default function CircularNavbar({ onNavigate, activeSection }: CircularNavbarProps) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-full border border-slate-200/80 bg-white/95 p-2 backdrop-blur-xl shadow-[0_10px_35px_rgba(10,25,47,0.15)]">
      <div className="flex items-center justify-between px-2">
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'home' ? 'default' : 'ghost'}
          onClick={() => onNavigate('home')}
          style={{ backgroundColor: activeSection === 'home' ? '#1b4d3e' : 'transparent', color: activeSection === 'home' ? 'white' : '#0a192f' }}
        >
          <Home className="h-5 w-5" />
          <span className="sr-only">Home</span>
        </Button>
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'about' ? 'default' : 'ghost'}
          onClick={() => onNavigate('about')}
          style={{ backgroundColor: activeSection === 'about' ? '#1b4d3e' : 'transparent', color: activeSection === 'about' ? 'white' : '#0a192f' }}
        >
          <Info className="h-5 w-5" />
          <span className="sr-only">About</span>
        </Button>
        <Button
          size="icon"
          className="rounded-full w-14 h-14 -mt-6 bg-molten-500 text-white shadow-lg border-4 border-white"
          onClick={() => onNavigate('products')}
        >
          <ShoppingBag className="h-6 w-6" />
          <span className="sr-only">Products</span>
        </Button>
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'quality' ? 'default' : 'ghost'}
          onClick={() => onNavigate('quality')}
          style={{ backgroundColor: activeSection === 'quality' ? '#1b4d3e' : 'transparent', color: activeSection === 'quality' ? 'white' : '#0a192f' }}
        >
          <Award className="h-5 w-5" />
          <span className="sr-only">Quality</span>
        </Button>
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'contact' ? 'default' : 'ghost'}
          onClick={() => onNavigate('contact')}
          style={{ backgroundColor: activeSection === 'contact' ? '#1b4d3e' : 'transparent', color: activeSection === 'contact' ? 'white' : '#0a192f' }}
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Contact</span>
        </Button>
      </div>
    </nav>
  );
}

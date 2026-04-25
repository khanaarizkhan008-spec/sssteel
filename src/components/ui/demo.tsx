import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home, Info, ShoppingBag, Award, Mail } from "lucide-react";

interface CircularNavbarProps {
  onNavigate: (section: string) => void
  activeSection: string
}

export default function CircularNavbar({ onNavigate, activeSection }: CircularNavbarProps) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-full border border-white/10 bg-midnight-950/90 p-2 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-2">
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'home' ? 'default' : 'ghost'}
          onClick={() => onNavigate('home')}
          style={{ backgroundColor: activeSection === 'home' ? '#FF4500' : 'transparent', color: activeSection === 'home' ? 'white' : 'rgba(255,255,255,0.6)' }}
        >
          <Home className="h-5 w-5" />
          <span className="sr-only">Home</span>
        </Button>
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'about' ? 'default' : 'ghost'}
          onClick={() => onNavigate('about')}
          style={{ backgroundColor: activeSection === 'about' ? '#FF4500' : 'transparent', color: activeSection === 'about' ? 'white' : 'rgba(255,255,255,0.6)' }}
        >
          <Info className="h-5 w-5" />
          <span className="sr-only">About</span>
        </Button>
        <Button
          size="icon"
          className="rounded-full w-14 h-14 -mt-6 bg-molten-500 text-white shadow-lg border-4 border-midnight-950"
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
          style={{ backgroundColor: activeSection === 'quality' ? '#FF4500' : 'transparent', color: activeSection === 'quality' ? 'white' : 'rgba(255,255,255,0.6)' }}
        >
          <Award className="h-5 w-5" />
          <span className="sr-only">Quality</span>
        </Button>
        <Button 
          size="icon" 
          className="rounded-full w-12 h-12" 
          variant={activeSection === 'contact' ? 'default' : 'ghost'}
          onClick={() => onNavigate('contact')}
          style={{ backgroundColor: activeSection === 'contact' ? '#FF4500' : 'transparent', color: activeSection === 'contact' ? 'white' : 'rgba(255,255,255,0.6)' }}
        >
          <Mail className="h-5 w-5" />
          <span className="sr-only">Contact</span>
        </Button>
      </div>
    </nav>
  );
}

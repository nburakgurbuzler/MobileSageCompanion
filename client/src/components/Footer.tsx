import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export function Footer() {
  const [paddingBottom, setPaddingBottom] = useState("0px");
  
  // Set body padding to accommodate fixed footer
  useEffect(() => {
    const updatePadding = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerHeight = footer.offsetHeight;
        setPaddingBottom(`${footerHeight}px`);
      }
    };
    
    updatePadding();
    window.addEventListener('resize', updatePadding);
    
    return () => {
      window.removeEventListener('resize', updatePadding);
    };
  }, []);
  
  useEffect(() => {
    document.body.style.paddingBottom = paddingBottom;
  }, [paddingBottom]);
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border py-4 px-4 z-10">
      <div className="container mx-auto max-w-screen-lg flex justify-center space-x-8">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </footer>
  );
}

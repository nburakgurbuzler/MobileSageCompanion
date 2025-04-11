import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardScroller } from "@/components/CardScroller";
import { categories } from "@/data/aiTools";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 pb-6 max-w-screen-lg">
      <Header />
      <main className="space-y-3 mb-16">
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="text-xl font-semibold mb-3 text-left text-foreground tracking-tight">
              {language === "tr" ? category.title.tr : category.title.en}
            </h2>
            <CardScroller tools={category.tools} />
          </section>
        ))}
      </main>
      
      <Footer />
    </div>
  );
}

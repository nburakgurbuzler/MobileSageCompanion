import { AITool } from "@/types/aiTools";
import { useLanguage } from "@/context/LanguageContext";

interface AICardProps {
  tool: AITool;
}

export function AICard({ tool }: AICardProps) {
  const { language } = useLanguage();
  
  return (
    <div className="card-container flex-shrink-0 w-64" data-card-id={tool.id}>
      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`rounded-xl p-4 shadow-md ${tool.gradient} text-white h-40 flex flex-col backdrop-blur-sm bg-opacity-95`}>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <i className={`fas fa-${tool.icon.replace('fab fa-', '')} text-sm`}></i>
            </div>
            <h3 className="ml-2 font-semibold text-left tracking-tight">{tool.name}</h3>
          </div>
          <p className="text-left text-sm flex-grow leading-relaxed font-normal">
            {language === "tr" ? tool.description.tr : tool.description.en}
          </p>
        </div>
      </a>
    </div>
  );
}

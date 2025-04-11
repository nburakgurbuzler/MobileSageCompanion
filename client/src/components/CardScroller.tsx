import { AITool } from "@/types/aiTools";
import { AICard } from "./AICard";

interface CardScrollerProps {
  tools: AITool[];
}

export function CardScroller({ tools }: CardScrollerProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
      <div className="flex space-x-4 pb-4">
        {tools.map((tool) => (
          <AICard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

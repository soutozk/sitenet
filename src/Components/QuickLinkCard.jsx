"use client";

import { ExternalLink, Headphones } from "lucide-react";
import { FadeIn } from "./Animations";

export function QuickLinkCard({ title, description, color, index, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`group cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-r ${color} rounded-lg border-0 overflow-hidden shadow-xl`}>
        <div className="p-6 text-white relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm opacity-90">{description}</p>
            </div>
            <div className="flex items-center space-x-2">
              {index === 0 ? (
                <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Headphones className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </FadeIn>
  );
}

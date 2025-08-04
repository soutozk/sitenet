"use client";

import { FadeIn } from "../Animations";

export function SystemCard({
  title,
  description,
  image,
  color,
  icon: Icon,
  delay,
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`group cursor-pointer transition-all duration-300 bg-gradient-to-r ${color} rounded-lg shadow-xl`}>
        <div className="relative h-32 lg:h-40 overflow-hidden rounded-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </FadeIn>
  );
}

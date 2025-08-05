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
        className={`group cursor-pointer transition-all duration-300 rounded-lg shadow-xl`}
        style={{
          boxShadow:
            "rgba(255, 145, 0, 0.19) 0px 5px 3px, rgba(255, 192, 98, 0.45) 0px 2px 2px",
        }}>
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

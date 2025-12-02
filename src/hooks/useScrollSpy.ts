import { useEffect, useState } from "react";

export const useScrollSpy = (ids: string[]) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSection: string = "";
      let minDistance = Infinity;

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = id;
        }
      });

      setActiveId(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return activeId;
};

import { useEffect, useRef, useCallback } from "react";
export default function CursorBurst({
    colors = ["#D5C4A1", "#D5C4A1", "#D5C4A1"],
    size = 1.5,
    duration = 1500,
    target
}: {
    colors?: string[];
    size?: number;
    duration?: number;
    target?: string | Element | null;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const countRef = useRef(0);
    const lastPosRef = useRef({ x: 0, y: 0 });

    const spawnPixel = useCallback(
        (x: number, y: number) => {
            const container = containerRef.current;
            if (!container) return;

            const color = colors[countRef.current % colors.length];
            countRef.current += 1;

            const dotSize = Math.round(size + Math.random() * size * 2);
            const rotation = Math.random() * 90;

            
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 12;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;

            
            const driftX = tx + (Math.random() - 0.5) * 20;
            const driftY = ty + (Math.random() * 20);

            const dot = document.createElement("div");
            Object.assign(dot.style, {
                position: "fixed",
                left: `${x + tx}px`,
                top: `${y + ty}px`,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                borderRadius: "1px",
                background: color,
                boxShadow: `0 0 ${dotSize}px ${dotSize * 0.4}px ${color}88, 0 0 ${dotSize * 2}px ${dotSize * 0.5}px ${color}33`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                pointerEvents: "none",
                zIndex: "9999",
                transition: `transform ${duration}ms cubic-bezier(0.22,1,0.36,1), opacity ${duration}ms ease-out`,
                opacity: "1",
            });
            container.appendChild(dot);

            
            requestAnimationFrame(() =>
                requestAnimationFrame(() => {
                    dot.style.transform = `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px)) rotate(${rotation + 90}deg) scale(0)`;
                    dot.style.opacity = "0";
                })
            );

            
            setTimeout(() => {
                dot.remove();
            }, duration + 100);
        },
        [colors, size, duration]
    );

    useEffect(() => {
        const el =
            typeof target === "string"
                ? document.querySelector(target)
                : target instanceof Element
                    ? target
                    : window;

        if (!el) return;

        const handler = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const currentX = mouseEvent.clientX;
            const currentY = mouseEvent.clientY;

            const dx = currentX - lastPosRef.current.x;
            const dy = currentY - lastPosRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            
            if (distance > 4) {
                lastPosRef.current = { x: currentX, y: currentY };
                spawnPixel(currentX, currentY);

                
                if (distance > 15) {
                    spawnPixel(currentX, currentY);
                }
            }
        };

        el.addEventListener("mousemove", handler as EventListener);
        return () => el.removeEventListener("mousemove", handler as EventListener);
    }, [target, spawnPixel]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
            aria-hidden="true"
        />
    );
}
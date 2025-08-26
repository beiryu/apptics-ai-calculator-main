import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { FC, useRef, useEffect, useState } from "react";

interface LogoItem {
  src: string;
  width: number;
  height: number;
  className: string;
}

interface InfiniteLogoCarouselProps {
  logos: LogoItem[];
  speed?: number;
  gap?: number;
  isMobile?: boolean;
}

const InfiniteLogoCarousel: FC<InfiniteLogoCarouselProps> = ({
  logos,
  speed = 30,
  gap = 100,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isMobile = false,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalWidth, setTotalWidth] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logoSetWidth, setLogoSetWidth] = useState(0);
  const [duplicateCount, setDuplicateCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Вычисляем общую ширину всех логотипов и промежутков для корректной анимации
  useEffect(() => {
    if (!carouselRef.current) return;

    // Функция для точного расчета ширины одного набора логотипов
    const calculateWidths = () => {
      if (!carouselRef.current) return;

      // Получаем все элементы логотипов
      const logoElements = carouselRef.current.querySelectorAll("img");
      if (logoElements.length === 0) return;

      // Вычисляем ширину одного набора логотипов (без дубликатов)
      const singleSetCount = logos.length;
      let singleSetWidth = 0;

      // Учитываем ширину каждого логотипа и промежутки между ними
      for (let i = 0; i < singleSetCount; i++) {
        if (logoElements[i]) {
          const rect = logoElements[i].getBoundingClientRect();
          singleSetWidth += rect.width;

          // Добавляем промежуток после каждого логотипа, кроме последнего
          if (i < singleSetCount - 1) {
            singleSetWidth += gap;
          }
        }
      }

      // Определяем, сколько наборов логотипов нужно для заполнения экрана дважды
      const viewportWidth = window.innerWidth;
      const neededDuplicates = Math.max(Math.ceil((viewportWidth * 2) / singleSetWidth), 2);

      setLogoSetWidth(singleSetWidth);
      setDuplicateCount(neededDuplicates);
      setTotalWidth(singleSetWidth * neededDuplicates);

      // Запускаем анимацию с правильной шириной
      startAnimation(singleSetWidth);
    };

    // Функция для запуска плавной анимации
    const startAnimation = (width: number) => {
      // Сбрасываем позицию и запускаем новую анимацию
      controls.start({
        x: [0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
            repeatDelay: 0,
          },
        },
      });
    };

    // Даем время для рендеринга логотипов перед измерением
    const timer = setTimeout(() => {
      calculateWidths();
    }, 100);

    const handleResize = () => {
      clearTimeout(timer);
      setTimeout(calculateWidths, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [logos, gap, speed, controls]);

  // Дублируем массив логотипов для создания бесконечной карусели
  const duplicatedLogos = Array(duplicateCount)
    .fill(0)
    .flatMap(() => logos);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={carouselRef}
        className="flex items-center"
        style={{ gap: `${gap}px` }}
        animate={controls}
        initial={{ x: 0 }}
      >
        {duplicatedLogos.map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            className={logo.className}
            width={logo.width}
            height={logo.height}
            sizes="100vw"
            alt=""
            src={logo.src}
          />
        ))}
      </motion.div>

      {/* Градиентные оверлеи для создания эффекта затухания по краям */}
      {/* <div
        className="absolute top-0 left-0 h-full z-10"
        style={{
          width: isMobile ? "77.8px" : "120px",
          background: "linear-gradient(270deg, rgba(245, 245, 245, 0), #f5f5f5)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full z-10"
        style={{
          width: isMobile ? "66.2px" : "120px",
          background: "linear-gradient(90deg, rgba(245, 245, 245, 0), #f5f5f5)",
        }}
      /> */}
    </div>
  );
};

export default InfiniteLogoCarousel;

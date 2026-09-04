import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slugify } from "../../../utils/text";

interface EventCardModel {
  title: string;
  organizer: string;
  time: string;
  date: string;
  venue: string;
  description: string;
  images: string[];
}

interface Props {
  event: EventCardModel;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const cardId = slugify(event?.title);

  const updateScrollState = useCallback(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const { scrollLeft, scrollWidth, clientWidth } = gallery;

    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollGallery = (direction: "left" | "right") => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const scrollAmount = Math.max(gallery.clientWidth * 0.75, 240);

    gallery.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slugFromUrl = window.location.hash.substring(1);

    if (slugFromUrl === cardId && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [cardId]);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    updateScrollState();

    gallery.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(gallery);

    return () => {
      gallery.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, [event.images, updateScrollState]);

  return (
    <motion.article
      id={cardId}
      ref={cardRef}
      className="rounded-2xl border border-secondary-500/20 p-6 md:p-8 flex flex-col gap-5 md:w-3/4 mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {/* Event heading */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-text-200">
          {event.title}
        </h2>

        <p className="mt-2 text-sm text-primary">{event.organizer}</p>

        <p className="mt-3 text-sm text-text-300">
          {event.date} • {event.time} • {event.venue}
        </p>
      </div>

      {/* Description */}
      <div className="text-text-300 leading-relaxed">
        {event.description
          .split(". ")
          .filter(Boolean)
          .map((sentence, index) => (
            <p key={index} className="mb-3 last:mb-0">
              {sentence}
              {!sentence.endsWith(".") ? "." : ""}
            </p>
          ))}
      </div>

      {/* Gallery */}
      {event.images?.length > 0 && (
        <div className="relative mt-2 group">
          <div
            ref={galleryRef}
            className="
              flex
              gap-3
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {event.images.map((imgUrl, index) => (
              <div
                key={`${imgUrl}-${index}`}
                className="
                  flex-shrink-0
                  snap-start
                  w-[82%]
                  sm:w-[60%]
                  md:w-[48%]
                  overflow-hidden
                  rounded-xl
                  border
                  border-secondary-500/15
                  bg-card
                "
              >
                <img
                  src={imgUrl}
                  alt={`${event.title} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={400}
                  className="
                    w-full
                    aspect-[16/10]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-[1.02]
                  "
                />
              </div>
            ))}
          </div>

          {/* Left arrow */}
          {event.images.length > 1 && (
            <button
              type="button"
              onClick={() => scrollGallery("left")}
              disabled={!canScrollLeft}
              aria-label="View previous images"
              className={`
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                border
                border-secondary-500/30
                bg-background/80
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-xl
                transition-all
                ${
                  canScrollLeft
                    ? "opacity-100 hover:bg-background"
                    : "opacity-0 pointer-events-none"
                }
              `}
            >
              ←
            </button>
          )}

          {/* Right arrow */}
          {event.images.length > 1 && (
            <button
              type="button"
              onClick={() => scrollGallery("right")}
              disabled={!canScrollRight}
              aria-label="View next images"
              className={`
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                border
                border-secondary-500/30
                bg-background/80
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-xl
                transition-all
                ${
                  canScrollRight
                    ? "opacity-100 hover:bg-background"
                    : "opacity-0 pointer-events-none"
                }
              `}
            >
              →
            </button>
          )}
        </div>
      )}
    </motion.article>
  );
};

export default EventCard;

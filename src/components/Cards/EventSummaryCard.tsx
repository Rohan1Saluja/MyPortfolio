import React from "react";
import { EventSummaryModel } from "../../interfaces/common.model";
import { motion } from "framer-motion";

interface Props {
  event: EventSummaryModel;
  onClick?: any;
}

const EventSummaryCard: React.FC<Props> = ({ event, onClick }) => {
  return (
    <motion.div
      className="border border-secondary-500/35 rounded-lg overflow-x-hidden shadow-xl backdrop-blur-lg bg-white/10 hover:bg-white/20 hover:cursor-pointer transform transition-transform duration-300 hover:scale-[101%]"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <img src={event?.image} alt={""} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{event?.title}</h2>
        <p className="text-sm text-gray-500">{event?.organizer}</p>
        <p className="text-sm mt-2">
          {event?.date} • {event?.time}
        </p>
        <p className="text-sm">
          {event?.venue}, {event?.city}
        </p>
      </div>
    </motion.div>
  );
};

export default EventSummaryCard;

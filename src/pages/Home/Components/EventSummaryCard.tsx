import React from "react";
import { EventSummaryModel } from "../../../interfaces/common.model";

interface Props {
  event: EventSummaryModel;
  onClick?: () => void;
}

const EventSummaryCard: React.FC<Props> = ({ event, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full text-left"
    >
      <div className="overflow-hidden bg-surface">
        <img
          src={event?.image}
          alt={event?.title ? `${event.title} event` : "Community event"}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>

      <div className="mt-5 border-t border-border pt-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight text-ink transition-colors group-hover:text-primary">
            {event?.title}
          </h3>
          <span className="shrink-0 text-sm text-ink-muted">↗</span>
        </div>

        <p className="mt-2 text-sm text-ink-secondary">{event?.organizer}</p>

        <p className="mt-3 text-xs leading-5 text-ink-muted">
          {event?.date} · {event?.time}
          <br />
          {event?.venue}, {event?.city}
        </p>
      </div>
    </button>
  );
};

export default EventSummaryCard;

import React from "react";
import useApiCallhook from "../../../hooks/useApiCallhook";
import { getCommunityMeetupsSummary } from "../../../api/events";
import { EventSummaryModel } from "../../../interfaces/common.model";
import EventSummaryCard from "../../../components/Cards/EventSummaryCard";
import { useNavigate } from "react-router-dom";
import { slugify } from "../../../utils/utils";

const EventsOverview: React.FC = () => {
  const navigate = useNavigate();
  const { data: eventSummaries, loading, fetch } = useApiCallhook();

  React.useEffect(() => {
    fetch(getCommunityMeetupsSummary, []);
  }, [fetch]);

  return (
    <section id="meetups" className="my-20 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">
        My Journey Through Inspiring Events & Community Meetups
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center md:max-w-2xl mx-auto">
        {eventSummaries.map((event: EventSummaryModel) => (
          <EventSummaryCard
            key={event.id}
            event={event}
            onClick={() => navigate(`/community/#${slugify(event?.title)}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsOverview;

import React from "react";
import { useNavigate } from "react-router-dom";
import { getCommunityMeetupsSummary } from "../../../api/events";
import useApiCallhook from "../../../hooks/useApiCallhook";
import { EventSummaryModel } from "../../../interfaces/common.model";
import { slugify } from "../../../utils/text";
import Container from "../Components/Layout/Container";
import EventSummaryCard from "../Components/EventSummaryCard";
import SectionHeader from "../Components/Layout/SectionHeader";

const EventsOverview: React.FC = () => {
  const navigate = useNavigate();
  const { data: eventSummaries, fetch } = useApiCallhook();

  React.useEffect(() => {
    fetch(getCommunityMeetupsSummary, []);
  }, [fetch]);

  if (!eventSummaries.length) {
    return null;
  }

  return (
    <section id="meetups" className="section-space-compact border-t border-border/70">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Community"
          title="The rooms I learn from outside the codebase."
          description="A small record of engineering, product, and technology communities I have spent time around."
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:ml-[11rem]">
          {eventSummaries.slice(0, 4).map((event: EventSummaryModel) => (
            <EventSummaryCard
              key={event.id}
              event={event}
              onClick={() => navigate(`/community/#${slugify(event?.title)}`)}
            />
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-right lg:ml-[11rem]">
          <button
            type="button"
            onClick={() => navigate("/community")}
            className="text-sm text-ink-secondary transition-colors hover:text-primary"
          >
            Explore community notes ↗
          </button>
        </div>
      </Container>
    </section>
  );
};

export default EventsOverview;

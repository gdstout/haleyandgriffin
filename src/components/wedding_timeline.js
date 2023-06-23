import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from "@mui/lab";

const WeddingTimeline = () => {
  let content = (
    <Timeline >
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            4:00 - 4:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Arrive at chapel and take seats</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            4:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ceremony begins</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            5:15 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Reception begins</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            6:00 - 6:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Dinner served</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary"/>
          </TimelineSeparator>
          <TimelineContent>Reception ends</TimelineContent>
        </TimelineItem>
      </Timeline>
  );
  return content;
};

export default WeddingTimeline;
import Event from "../model/Event";
import validateEvent from "./validateEvent";
import { Id, Password } from "../../shared";

export default function complementEvent(partialEvent: Partial<Event>): Event {
  const errors = validateEvent(partialEvent);

  if (errors.length > 0) {
    throw new Error(errors.join("/n"));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id || Id.new(),
    password: partialEvent.password || Password.new(10),
    expectedAudience: partialEvent.expectedAudience || 1,
  } as Event;

  return event;
}

import Event from "../model/Event";
import { Id } from "../../shared";

export default function createEmptyEvent(): Partial<Event> {
  return {
    id: Id.new(),
    name: "",
    location: "",
    date: new Date(),
    description: "",
    expectedAudience: 1,
    imageUrl: "",
    imageBackground: "",
  };
}

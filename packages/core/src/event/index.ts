import Event from "./model/Event";
import Guest from "./model/Guest";

import complementGuest from "./functions/complementGuest";
import complementEvent from "./functions/complementEvent";
import createEmptyGuest from "./functions/createEmptyGuest";
import createEmptyEvent from "./functions/createEmptyEvent";

export type { Event, Guest };
export { complementGuest, complementEvent, createEmptyGuest, createEmptyEvent };

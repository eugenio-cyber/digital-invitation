import { useContext } from "react";
import EventContext from "@/data/contexts/EventProvider";

const useEvent = () => useContext(EventContext);

export default useEvent;

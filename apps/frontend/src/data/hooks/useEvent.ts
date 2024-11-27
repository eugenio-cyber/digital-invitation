import { useContext } from "react";
import EventContext from "../contexts/EventProvider";

const useEvent = () => useContext(EventContext);

export default useEvent;

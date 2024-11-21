import { Id } from "@/core/shared";
import Guest from "../model/Guest";

export default function createEmptyGuest(): Partial<Guest> {
  return {
    id: Id.new(),
    name: "",
    email: "",
    confirmed: true,
    hasCompanions: false,
    qtdCompanions: 0,
  };
}

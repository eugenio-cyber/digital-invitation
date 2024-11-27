import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function complementGuest(guest: Partial<Guest>): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const qtdCompanions = !guest.hasCompanions ? 0 : (guest.qtdCompanions ?? 0);
  const hasCompanions =
    guest.hasCompanions && guest.confirmed && qtdCompanions > 0;

  const guestUpdated = {
    ...guest,
    qtdCompanions: hasCompanions ? qtdCompanions : 0,
    hasCompanions: hasCompanions,
  };

  return guestUpdated as Guest;
}

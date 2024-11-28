import Guest from "./Guest";

export default interface Event {
  id: string;
  alias: string;
  password: string;
  name: string;
  date: Date;
  description: string;
  location: string;
  imageUrl: string;
  imageBackground: string;
  expectedAudience: number;
  guests: Guest[];
}

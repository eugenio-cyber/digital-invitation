import Page from "../../components/templates/Page";
import { EventProvider } from "@/data/contexts/EventProvider";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <EventProvider>
      <Page>{props.children}</Page>
    </EventProvider>
  );
}

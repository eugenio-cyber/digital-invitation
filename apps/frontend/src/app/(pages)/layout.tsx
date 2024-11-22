import Page from "../../components/templates/Page";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return <Page>{props.children}</Page>;
}

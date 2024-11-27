export default function PaginaConvite(props: any) {
  const { alias } = props.params;

  return (
    <div>
      <span>Alias: {alias}</span>
    </div>
  );
}

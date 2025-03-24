function NoBoton () {
    return (
        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
  <button class="btn btn-primary" type="button" disabled>Botón desabilitado</button>
</span>
    )
}
export default NoBoton;
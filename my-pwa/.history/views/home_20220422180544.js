import { html } from '../vendor/lit-html/index.js';

function handleClick(){
    alert('hola')
}

export function view(){
  return html`
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Super Lista Productos</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation mdl-layout--large-screen-only">
                    <a href="#" class="mdl-navigation__link" id="btn-storage-guardar" @click=${handleClick} >Guardar</a>
                    <a href="#" class="mdl-navigation__link" id="btn-storage-cargar">Cargar</a>
                    <a href="#" class="mdl-navigation__link" id="btn-storage-limpiar">Limpiar</a>
                    <a href="#" class="mdl-navigation__link" id="btn-send-push">Enviar notificacion</a>
                </nav>
            </div>
        </header>
        <main class="mdl-layout__content">
            <div class="page-content">
                <div class="contenedor">
                    <div class="mdl-textfield mdl-js-textfield w-40">
                        <input class="mdl-textfield__input" type="text" id="ingreso-producto">
                        <label class="mdl-textfield__label" for="ingreso-producto">Ingrese un producto...</label>
                    </div>
                    <div class="w-30 ml-item">
                        <button id="btn-entrada-producto"
                            class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                            <i class="material-icons">add_shopping_cart</i>
                        </button>
                    </div>
                    <div class="w-30">
                        <button id="btn-borrar-productos"
                            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">
                            Borrar Todo
                        </button>
                    </div>
                </div>

                <div id="lista">
                    <ul id="ul_lista">
                        
                    </ul>
                </div>
            </div>
        </main>
    </div>
  `;
}
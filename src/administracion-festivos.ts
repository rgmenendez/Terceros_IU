import {LitElement, html, customElement, property, css} from 'lit-element';

import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-notification/vaadin-notification.js';
import '@vaadin/vaadin-progress-bar/vaadin-progress-bar.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-lumo-styles/all-imports.js';

import moment from 'moment';
import 'moment/locale/es';

@customElement('administracion-festivos')
export class AdministracionFestivos extends LitElement {


  static styles = css`
    * {
      --lumo-button-size: var(--lumo-size-l) !important; 
      --lumo-text-field-size: var(--lumo-size-l) !important;
      font-size: var(--lumo-font-size-l) !important;
	}
	
	:host thead, :host thead tr, :host thead tr th{
		display:none !important;
	}
	thead,  thead tr,  thead tr th, :host thead#header, :host th#vaadin-grid-cell-0, :host th#vaadin-grid-cell-1{
		display:none !important;
	}



    :host vaadin-list-box {
      background: #F5F5F5;
      --vaadin-form-item-label-width: 0em;
      --vaadin-form-item-label-spacing: 1em;
      --vaadin-form-item-row-spacing: 0em;
    }

    :host vaadin-list-box {
      max-width: 40em;
      max-height: 10em;
      overflow: auto;
      padding: 1em;
      background: #fff;
    }

    :host vaadin-grid {
      height: calc(100% - 210px);
    }

    .columLayoutLeft {
        padding: 1em;
    	width: fit-content;
    }

    .columLayoutRight {
		padding: 1em;
		width: 100%;
    }

    .md5 {
		min-width: fit-content;
		display: inline-flex;
		align-items: center;
    }

    :host vaadin-date-picker, :host vaadin-button {
      margin-right: 1em;
    }

    :host [theme*="white"] {
      background-color: #fff;
    }ron-icon.tiny {
      --iron-icon-height: 15px;
      --iron-icon-width: 15px;
      color: var(--lumo-primary-text-color);
    }

    .textPrimary {
      color: var(--lumo-primary-text-color); 
    }

    :host vaadin-horizontal-layout {
	  background: #F3F5F7;
	  width:100%;
	}

	vaadin-vertical-layout {
		height: 600px;
		width: 50%;
	}
	
	vaadin-grid vaadin-text-field {
		width: 100%;
	}

	vaadin-grid vaadin-button {
		margin-left: 5px;
	}

	#copiarSegundoPaso{
		display:inline-block;
		width:100%;
		height:100%;
		position: absolute;
		top:0;
		left:0;
		background:RGBA(221,226,232,0.31);
    	z-index: 1;
	}

	#copiarSegundoPaso vaadin-number-field{
		left: 50%;
		position: relative;
	}

	.botones{
		display:inline-block;
		width: 49%;
		margin-top:1em;
	}

	.botones vaadin-button{
		width: 8em;
		left: 50%;
		margin-left: -4em;
	}

	.copiarSegundoPaso{
		display: inline-block;
		position: fixed;
		height: 12em;
		width: 26em;
		left: 50%;
		margin-left: -13em;
		top: 50%;
		z-index: 10;
		background: white;
		margin-top: -100px;
		border-radius: 5px;
		color: #1676f3;
	}

	.tituloCopiaYear{
		display:inline-block;
		width:100%;
		font-size: 27px;
		letter-spacing: 0px;
		word-spacing: 0px;
		font-weight: 700;
		font-style: normal;
		font-variant: normal;
		text-transform: none;
		text-align: center;
		padding-top: 0.5em;
	}

	.textoCopiaYear{
		display: inline-block;
		margin-left: 1em;
		margin-right: 1em;
		text-align: center;
	}

	.selectorYear{	
		margin-left: -7em;
		left: 50%;
		position: relative;
		width: 14em;
	}

	.block {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.showYear {
		display: inline-block;
		position: relative;
		outline: none;
		white-space: nowrap;
		min-width: calc(var(--lumo-button-size) * 2);
		height: var(--lumo-button-size);
		padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
		margin: var(--lumo-space-xs) 0;
		box-sizing: border-box;
		font-family: var(--lumo-font-family);
		font-weight: 500;
		color: var(--_lumo-button-color, var(--lumo-primary-text-color));
		border-radius: var(--lumo-border-radius);
		cursor: default;
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		--lumo-button-size: var(--lumo-size-l)  !important;
		--lumo-text-field-size: var(--lumo-size-l)  !important;
		font-size: var(--lumo-font-size-l)  !important;
		margin-right: 1em;
		background-color: rgb(255, 255, 255);
		text-align: center;
    	line-height: var(--lumo-button-size);
	}

	.showYear{
		min-width: calc(var(--lumo-button-size) * 2.5);
	}

	.hidden{
		display: none !important;
	}

	.cabecera{
		background: rgb(22, 118, 243);
		font-weight: bold;
		width: 100%;
		height: 3em;
		overflow-y: auto;
	}

	.cabecera span{
		calc(100% - 1em);
		display:inline-block;
	}

	.cabecera .titulo{
		margin-left: 1em;
		color: white;
		height: 100%;
		text-align: center;
		align-items: center;
		display: inline-flex;
		min-width: 5em;
		width: 30%;
		font-size: 1.2em !important;
	}
	.cabecera .nav{
		margin-left: 1em;
		color: white;
		height: 100%;
		text-align: center;
		align-items: center;
		display: inline-flex;
		min-width: 10em;
		font-size: 1.2em !important;
	}
	.cabecera .nav .button{

	}
	.cabecera .nav .texto{
		color: white;
	}
	.cabecera .button{
		margin-left: 1em;
		color: white;
		height: 100%;
		text-align: center;
		align-items: center;
		display: inline-flex;
		font-size: 1.2em !important;
		float: right;
	}

	.cabeceraGrid{
		width: calc(100% - 2px);
		height: 4em;
		border-left: 1px solid rgb(219, 223, 228);
		border-right: 1px solid rgb(219, 223, 228);
		display: flex;
	}

	.cabeceraGrid .cabeceraInput{
		height: 100%;
		width: 100%;
		display: inline-block;
	}

	.cabeceraGrid .cabeceraInput *{
		padding: 1em;
		width: 12em;
	}
	
	.cabeceraGrid .cabeceraInput #festivoDoble ,.cabeceraGrid .cabeceraInput #festivoFecha{
		padding-left: 0.4em;
	}

	#nombreTipoFestivo{
    	width: 14em;
	}

	.cabeceraGrid .cabeceraButton{
		float:right;
	}

	.cabeceraGrid .cabeceraButton *{
		padding: 1em;
		top: 1em;
		margin-top: 0;
	}

  `;
	
  
	render() {
		return html`
			<dom-module id="datePicker" theme-for="vaadin-date-picker-text-field">
				<template>
					<style>
						:host {
							font-size: var(--lumo-font-size-l) !important; 
							--lumo-text-field-size: var(--lumo-size-l);
						}
	
						:host [part="input-field"] {
							background-color: #fff;
						}
					</style>
				</template>
			</dom-module>

			
			<dom-module id="gridWithoutHeader" theme-for="vaadin-grid">
				<template>
					<style>
						:host thead, :host thead tr, :host thead tr th{
							display:none !important;
						}
						thead,  thead tr,  thead tr th, :host thead#header, :host th#vaadin-grid-cell-0, :host th#vaadin-grid-cell-1{
							display:none !important;
						}

						:host #gridFestivo vaadin-grid-cell-content{
							width: 12em;
						}

						:host #gridFestivo tbody tr td{
							width: 14em;
						}
						:host #gridFestivo tbody tr td[last-column]{
							width: calc(100% - 42em) !important;
						}
					</style>
				</template>
			</dom-module>
			
			<vaadin-horizontal-layout style="height:6.2em; margin-bottom: 1em;">
			
				<div class="columLayoutLeft">
					<vaadin-date-picker id="fCierre" class="inputField" error-message="Fecha incorrecta" value="${this.fCierre}" label="Fecha cierre para cambios:" placeholder="Selecciona fecha" required clear-button-visible></vaadin-date-picker>
				</div>
				<div class="columLayoutRight">
					<vaadin-date-picker id="fFinSistema" class="inputField" error-message="Fecha incorrecta" value="${this.fFinSistema}" label="Fecha fin sistema:" placeholder="Selecciona fecha" required clear-button-visible></vaadin-date-picker>
				</div>
				
				<div class="md5">
					<vaadin-button theme="primary" @click="${this._save}" class="button">
						<iron-icon icon="vaadin:calendar-envelope" slot="prefix"></iron-icon>                
						Guardar
					</vaadin-button>
					<vaadin-button theme="white" @click="${this._clean}" class="button">
						<iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>                
						Limpiar
					</vaadin-button>
				</div>
				
			</vaadin-horizontal-layout>

			<vaadin-horizontal-layout style="height: calc(100% - 7em); background: white;">

				<vaadin-vertical-layout style="width:39.5%; height:100%; margin-right:0.5%; min-height:20em;">

					<x-array-data-provider id="x-array-data-provider-tipoFestivo"></x-array-data-provider>

					<div class="cabecera">
						<span class="titulo">
							Tipo de festivos
						</span>
					</div>

					<div class="cabeceraGrid">
						<span class="cabeceraInput">
							<vaadin-text-field id="nombreTipoFestivo" placeholder="Nombre tipo de festivo" header="Nombre"></vaadin-text-field>
						</span>
						<span class="cabeceraButton">
							<vaadin-button id="addBtnTipoFestivo" theme="primary">Añadir</vaadin-button>
						</span>
					</div>

					<vaadin-grid id="gridTipoFestivo" theme="row-stripes" .items="${this.tipoFestivos}" column-reordering-allowed multi-sort>
						<vaadin-grid-column id="columnNombre" path="nombre"></vaadin-grid-column>
						<vaadin-grid-column id="columnCRUDTipoFestivo" name="columnCRUDTipoFestivo" width="14em"></vaadin-grid-column>
					</vaadin-grid>

				</vaadin-vertical-layout>

				<vaadin-vertical-layout id="verticalLayoutFestivo" style="width:60%; height:100%; min-height:20em;">

					<x-array-data-provider id="x-array-data-provider-festivo"></x-array-data-provider>
					
					<span id="copiarSegundoPaso" class="hidden">
						<span class="copiarSegundoPaso">
							<span class="tituloCopiaYear">
								Copiar festivos del año ${this.year}:
							</span>
							<vaadin-number-field id="yearDestino" value="${this.yearDestino}" has-controls class="selectorYear"></vaadin-number-field>
							<span class="textoCopiaYear">
								Se van a copiar todos los festivos al año seleccionado, los actuales se eliminaran. 
							</span>
							<span class="botones">
								<vaadin-button id="confirmarCopiar" @click="${this._copiarFestivos}" aria-label="Save" theme="primary" focus-target>
									<iron-icon icon="vaadin:copy" slot="prefix"></iron-icon>
									Copiar
								</vaadin-button>
							</span>
							<span class="botones">
								<vaadin-button aria-label="Cancel" @click="${this._hideCopiarFestivos}">
									<iron-icon icon="vaadin:close-circle" slot="prefix"></iron-icon>
									Cancelar
								</vaadin-button>
							</span>
						</span>
					</span>

					<div class="cabecera">
						<span class="titulo">
							Festivos
						</span>

						<span class="nav">
							<vaadin-button theme="white" id="festivoYearMenos" @click="${this._festivoYearMenos}">
								<iron-icon icon="vaadin:minus-circle"></iron-icon>
							</vaadin-button>
							<span class="showYear">${this.year}</span>
							<vaadin-button theme="white" id="festivoYearMas" @click="${this._festivoYearMas}">
								<iron-icon icon="vaadin:plus-circle"></iron-icon>
							</vaadin-button>
						</span>

						<span class="button">
							<vaadin-button theme="white" id="copiar" @click="${this._showCopiarFestivos}">
								<iron-icon icon="vaadin:copy" slot="prefix"></iron-icon>
								Copiar
							</vaadin-button>
						</span>
					</div>


					<div class="cabeceraGrid">
						<span class="cabeceraInput">
							<vaadin-combo-box id="festivoTipoFestivo" .items="${this.tipoFestivos}" placeholder="Tipo de festivo"></vaadin-combo-box>
							<vaadin-checkbox id="festivoDoble" label="Doble">Es Doble</vaadin-checkbox>
							<vaadin-date-picker id="festivoFecha" placeholder="Fecha"></vaadin-date-picker>
						</span>
						<span class="cabeceraButton">
							<vaadin-button id="addBtnFestivo" theme="primary">Añadir</vaadin-button>
						</span>
					</div>
					
					<vaadin-grid id="gridFestivo" theme="row-stripes" .items="${this.festivos}" column-reordering-allowed multi-sort>	
						<vaadin-grid-column id="columnFestivoTipoFestivo" path="florTipoFestivoNombre" width="13em" padding="1em"></vaadin-grid-column>
						<vaadin-grid-column id="columnFestivoEsDoble" path="esDoble" width="13em" padding="1em"></vaadin-grid-column>
						<vaadin-grid-column id="columnFestivoFecha" path="fecha" name="fecha" width="13em" padding="1em"></vaadin-grid-column>
						<vaadin-grid-column id="columnCRUDFestivo" name="columnCRUDFestivo" width="calc(100% - 42em)"></vaadin-grid-column>
					</vaadin-grid>

				</vaadin-vertical-layout>
				<vaadin-text-area id="jsonArea" label="Description" placeholder="Write here ..." style="min-height:300px" hidden></vaadin-text-area>
			</vaadin-horizontal-layout>


			<vaadin-notification id="notification" duration="4000" theme="${this.notificationType}" position="top-end"></vaadin-notification>
			<vaadin-notification id="loading" position="top-end" duration="0">
				<template>
					<div>
						<b>Cargando</b><br>
						Consultando información, un momento por favor...
						<vaadin-progress-bar indeterminate value="0"></vaadin-progress-bar>      
					</div>
				</template>
			</vaadin-notification>
		`;
	}

	@property({type: String})
	operador = "";

	@property({type: String})
	fechasCierre: any={};

	@property({type: Array})
	tipoFestivos : any = [];
	tipoFestivosString : any = [];
	festivos : any = [];
	unidad = null;
	
	@property({type: String})
	fCierre = "";
	fFinSistema = "";

	@property({type: Number})
	year = (new Date()).getFullYear();
	yearDestino = (new Date()).getFullYear()+1;
	muestroCopiar = 0;
	
	@property({type: String})
	notificationType = "";

	@property({type: Boolean})
	declaradoAddEventListener: boolean = false;


	// Inicializando componentes
	firstUpdated() {
		this.iniciarComponentesGridCRUDTipoFestivos();
		this.iniciarComponentesGridCRUDFestivos();
		if (this.shadowRoot!=null) {
			let cal: any = this.shadowRoot.getElementById('festivoFecha');
			cal.i18n = this.configureCalendarI18n();
			cal = this.shadowRoot.getElementById('fCierre');
			cal.i18n = this.configureCalendarI18n();
			cal = this.shadowRoot.getElementById('fFinSistema');
			cal.i18n = this.configureCalendarI18n();
		} else {
			this.showNotification({ok: false, messageSimple: 'Error inicializando componentes'});
		}
	}
	
	// Primera petición
	connectedCallback() {
		super.connectedCallback();
		this.iniciarInformacion();
	}

	private iniciarInformacion(){
		const padre = this;
		this.loadFechas();
		this.loadTipoFestivos().then(function(){padre.loadFestivos()});
	}

	private iniciarComponentesGridCRUDTipoFestivos(){
		if (this.shadowRoot!=null) {
			const padre = this;
			const grid: any = this.shadowRoot.getElementById('gridTipoFestivo');

			grid.headerRenderer = function(root: any, _column: any) {
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};

			const nombre: any = this.shadowRoot.getElementById('nombreTipoFestivo');
			const addBtn: any = this.shadowRoot.getElementById('addBtnTipoFestivo');
			addBtn.addEventListener('click', function() {
				if (nombre.value) {
					let tipoFestivoNuevo: any = {};
					tipoFestivoNuevo.nombre = nombre.value;
					tipoFestivoNuevo.codigo = 'f';
					padre.addTipoFestivo(tipoFestivoNuevo);
					nombre.value =  '';
				} else {
					padre.showNotification({ok: false, messageSimple: 'Se requiere un nombre para el tipo de festivo.'});
				}
			});

			const columnNombre: any = this.shadowRoot.getElementById('columnNombre');
			const columnCRUD: any = this.shadowRoot.getElementById('columnCRUDTipoFestivo');

			columnNombre.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Nombre";
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};

			columnNombre.renderer = function(root: any, _column: any, rowData: any) {
				let textField = root.firstElementChild;
				if (!textField) {
					textField = window.document.createElement('vaadin-text-field');
					root.appendChild(textField);
				}
				const property = 'nombre';
				// set an id so as we can find it in the dom when clicking on action buttons.
				textField.id = property + rowData.index;
				textField.value = grid.items[rowData.index].nombre;
				textField.readonly = true;
				textField.setAttribute('focus-target', true);
				textField.setAttribute('style', 'width: 14em;');
			};

			columnCRUD.renderer = function(root: any, _column: any, rowData: any) {
				let wrapper = root.firstElementChild;
				if (!wrapper) {
					root.innerHTML =
					'<div style="text-align: right">' +
						'<vaadin-button aria-label="Edit" theme="icon" focus-target>' +
						'<iron-icon icon="lumo:edit"></iron-icon>' +
						'</vaadin-button>' +
						'<vaadin-button aria-label="Delete" theme="icon error">' +
						'<iron-icon icon="lumo:cross"></iron-icon>' +
						'</vaadin-button>' +
						'<vaadin-button aria-label="Save" theme="primary" focus-target hidden>Save</vaadin-button>' +
						'<vaadin-button aria-label="Cancel" hidden>Cancel</vaadin-button>' +
					'</div>';
					wrapper = root.firstElementChild;

					const buttons = wrapper.querySelectorAll('vaadin-button');
					// EDIT
					buttons[0].addEventListener('click', function() {
						updateTextFieldsVisibility(wrapper.idx, true);
						updateButtonsVisibility(buttons, wrapper.idx, true);
						grid.querySelector('#nombre' + wrapper.idx).focus();
					});
					// DELETE
					buttons[1].addEventListener('click', function(_event: any) {
						let tipoFestivoDelete: any = {};
						let tipoFestivo = grid.items[wrapper.idx];
						tipoFestivoDelete.codigo = tipoFestivo.codigo;
						tipoFestivoDelete.guardado=false;
						tipoFestivoDelete.idTipoFestivo = tipoFestivo.idTipoFestivo;
						tipoFestivoDelete.nombre = tipoFestivo.nombre;
						padre.removeTipoFestivo(tipoFestivoDelete, wrapper.idx);
					});
					// SAVE
					buttons[2].addEventListener('click', function() {
						let tipoFestivo = grid.items[wrapper.idx];
						tipoFestivo.nombre = grid.querySelector('#nombre' + wrapper.idx).value;
						padre.updateTipoFestivo(tipoFestivo, wrapper.idx);
						buttons[3].click();
					});
					// CANCEL
					buttons[3].addEventListener('click', function(_event: any) {
						updateTextFieldsVisibility(wrapper.idx, false);
						updateButtonsVisibility(buttons, wrapper.idx, false);
						grid.clearCache();
						buttons[0].focus();
					});
				}

				// We reuse rendered content, but maintain a property with the index for actions
				wrapper.idx = rowData.index;
			};	

			function updateTextFieldsVisibility(index: any, editing: any) {
				grid.querySelector('#nombre' + index).readonly = !editing;
			}

			function updateButtonsVisibility(buttons: any, _index: any, editing: any) {
				buttons[0].hidden = buttons[1].hidden = editing;
				buttons[2].hidden = buttons[3].hidden = !editing;
			}

			const dataProvider: any = this.shadowRoot.getElementById('x-array-data-provider-tipoFestivo');
			if(dataProvider!=null){
				dataProvider.size = 200;
				dataProvider.items = padre.tipoFestivos;
			}
			
			grid.clearCache();
		} else {
			this.showNotification({ok: false, messageSimple: 'Error inicializando componentes'});
		}
	}

	private iniciarComponentesGridCRUDFestivos(){
		if(this.shadowRoot!=null){
			const padre = this;
			const grid: any = this.shadowRoot.getElementById('gridFestivo');

			grid.headerRenderer = function(root: any, _column: any) {
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};

			const festivoFecha: any = this.shadowRoot.getElementById('festivoFecha');
			const tipoFestivo: any = this.shadowRoot.getElementById('festivoTipoFestivo');
			const festivoDoble: any = this.shadowRoot.getElementById('festivoDoble');
			const addBtn: any = this.shadowRoot.getElementById('addBtnFestivo');
			if(!this.declaradoAddEventListener){
				addBtn.addEventListener('click', function() {
					if (festivoFecha.value && tipoFestivo.value) {
						let festivoNuevo: any = {};
						let tipoFestivoNuevo: any = {};
						padre.tipoFestivos.forEach((element: { idTipoFestivo: String; }) => {
							if(element.idTipoFestivo==tipoFestivo.value){
								tipoFestivoNuevo=element;
							}
						});
						tipoFestivoNuevo.florFestivoList = [];
						tipoFestivoNuevo.florUnidadTipoFestivoList = [];
						festivoNuevo.florTipoFestivo = tipoFestivoNuevo;
						festivoNuevo.idTipoFestivo = tipoFestivoNuevo.idTipoFestivo;
						festivoNuevo.florTipoFestivoNombre = tipoFestivoNuevo.nombre;
						festivoNuevo.esDoble = festivoDoble.checked?'1':'0';
						festivoNuevo.fecha = new Date(festivoFecha.value).getTime();
						if(padre.addFestivo(festivoNuevo)){
							festivoDoble.checked =  false;
							tipoFestivo.value =  '';
							festivoFecha.value =  '';
						} 
					} else {
						let requisitos: String = "";
						if(!festivoFecha.value){
							requisitos = requisitos + "fecha";
						}
						if(!tipoFestivo.value){
							if(requisitos!=""){
								requisitos = requisitos + " y ";
							}
							requisitos = requisitos + "tipo de festivo";
						}
						padre.showNotification({ok: false, messageSimple: 'Se requiere ' + requisitos + ' para el festivo.'});
					}
				});
				this.declaradoAddEventListener = true;
			}

			const columnFestivoFecha: any = this.shadowRoot.getElementById('columnFestivoFecha');
			const columnFestivoTipoFestivo: any = this.shadowRoot.getElementById('columnFestivoTipoFestivo');
			const columnFestivoEsDoble: any = this.shadowRoot.getElementById('columnFestivoEsDoble');
			const columnCRUD: any = this.shadowRoot.getElementById('columnCRUDFestivo');

			columnFestivoFecha.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Fecha";
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};
			columnFestivoTipoFestivo.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Tipo de festivo";
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};
			columnFestivoEsDoble.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Doble";
				root.setAttribute('class', 'hidden');
				_column.setAttribute('class', 'hidden');
			};

			columnFestivoTipoFestivo.renderer = function(root: any, _column: any, rowData: any) {
				root.setAttribute('style', 'width: 13em;');
				let comboBox = root.firstElementChild;
				if (!comboBox) {
					comboBox = window.document.createElement('vaadin-combo-box');
					comboBox.items = padre.tipoFestivos;
					comboBox.itemLabelPath = "nombre";
					comboBox.itemValuePath = "idTipoFestivo";
					root.appendChild(comboBox);
				}
				const property = 'tipoFestivo';
				// set an id so as we can find it in the dom when clicking on action buttons.
				comboBox.id = property + rowData.index;
				comboBox.value = grid.items[rowData.index].idTipoFestivo;
				try{
					comboBox.filter=grid.items[rowData.index].nombre;
					comboBox.filter = null;
				} catch (excepcion){
					console.error("No hay tipoFestivo cargados.");
				}
				comboBox.readonly = true; 
				comboBox.setAttribute('focus-target', true);
				comboBox.setAttribute('style', 'width: 12em;');
			};
			columnFestivoFecha.renderer = function(root: any, _column: any, rowData: any) {
				root.setAttribute('style', 'width: 13em;');
				let datePicker = root.firstElementChild;
				if (!datePicker) {
					datePicker = window.document.createElement('vaadin-date-picker');
					datePicker.i18n = padre.configureCalendarI18n();
					root.appendChild(datePicker);
				}
				const property = 'fecha';
				// set an id so as we can find it in the dom when clicking on action buttons.
				datePicker.id = property + rowData.index;
				var date = new Date(grid.items[rowData.index].fecha)
				date.setHours(date.getHours()+1);
				datePicker.value = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)+ '-' + (date.getUTCDate());
				datePicker.readonly = true;
				datePicker.setAttribute('focus-target', true);
				datePicker.setAttribute('style', 'width: 12em;');
			};
			columnFestivoEsDoble.renderer = function(root: any, _column: any, rowData: any) {
				root.setAttribute('style', 'width: 13em;');
				let checkBox = root.firstElementChild;
				if (!checkBox) {
					checkBox = window.document.createElement('vaadin-checkbox');
					root.appendChild(checkBox);
				}
				const property = 'doble';
				// set an id so as we can find it in the dom when clicking on action buttons.
				checkBox.id = property + rowData.index;
				checkBox.disabled = true;
				checkBox.checked = grid.items[rowData.index].esDoble==1?true:false;
				checkBox.setAttribute('focus-target', true);
				checkBox.setAttribute('style', 'width: 12em;');
			};
			
			columnCRUD.renderer = function(root: any, _column: any, rowData: any) {
				let wrapper = root.firstElementChild;
				if (!wrapper) {
					root.innerHTML =
					'<div style="text-align: right">' +
						'<vaadin-button aria-label="Edit" theme="icon" focus-target>' +
						'<iron-icon icon="lumo:edit"></iron-icon>' +
						'</vaadin-button>' +
						'<vaadin-button aria-label="Delete" theme="icon error">' +
						'<iron-icon icon="lumo:cross"></iron-icon>' +
						'</vaadin-button>' +
						'<vaadin-button aria-label="Save" theme="primary" focus-target hidden>Save</vaadin-button>' +
						'<vaadin-button aria-label="Cancel" hidden>Cancel</vaadin-button>' +
					'</div>';
					wrapper = root.firstElementChild;

					const buttons = wrapper.querySelectorAll('vaadin-button');
					// EDIT
					buttons[0].addEventListener('click', function() {
						updateTextFieldsVisibility(wrapper.idx, true);
						updateButtonsVisibility(buttons, wrapper.idx, true);
						grid.querySelector('#tipoFestivo' + wrapper.idx).focus();
					});
					// DELETE
					buttons[1].addEventListener('click', function(_event: any) {
						let festivo: any = grid.items[wrapper.idx];
						let festivoDelete: any = {};
						let tipoFestivoNuevo: any = {};
						padre.tipoFestivos.forEach((element: { idTipoFestivo: String; }) => {
							if(element.idTipoFestivo==festivo.idTipoFestivo){
								tipoFestivoNuevo=element;
							}
						});
						tipoFestivoNuevo.florFestivoList = [];
						tipoFestivoNuevo.florUnidadTipoFestivoList = [];
						festivoDelete.florTipoFestivo = tipoFestivoNuevo;
						festivoDelete.idTipoFestivo = tipoFestivoNuevo.idTipoFestivo;
						festivoDelete.florTipoFestivoNombre = tipoFestivoNuevo.nombre;
						festivoDelete.esDoble = festivo.esDoble;
						festivoDelete.fecha = festivo.fecha;
						festivoDelete.idFestivo = festivo.idFestivo;
						padre.removeFestivo(festivoDelete, wrapper.idx);
					});
					// SAVE
					buttons[2].addEventListener('click', function() {
						let festivoNuevo: any = {};
						let tipoFestivoNuevo: any = {};
						padre.tipoFestivos.forEach((element: { idTipoFestivo: String; }) => {
							if(element.idTipoFestivo==grid.querySelector('#tipoFestivo' + wrapper.idx).value){
								tipoFestivoNuevo=element;
							}
						});
						tipoFestivoNuevo.florFestivoList = [];
						tipoFestivoNuevo.florUnidadTipoFestivoList = [];
						festivoNuevo.florTipoFestivo = tipoFestivoNuevo;
						festivoNuevo.idTipoFestivo = tipoFestivoNuevo.idTipoFestivo;
						festivoNuevo.florTipoFestivoNombre = tipoFestivoNuevo.nombre;
						festivoNuevo.esDoble = grid.querySelector('#doble' + wrapper.idx).checked?'1':'0';
						festivoNuevo.fecha = new Date(grid.querySelector('#fecha' + wrapper.idx).value).getTime();
						festivoNuevo.idFestivo = grid.items[wrapper.idx].idFestivo;
						padre.updateFestivo(festivoNuevo, wrapper.idx);
						buttons[3].click();
					});
					// CANCEL
					buttons[3].addEventListener('click', function(_event: any) {
						updateTextFieldsVisibility(wrapper.idx, false);
						updateButtonsVisibility(buttons, wrapper.idx, false);
						grid.clearCache();
						buttons[0].focus();
					});
				}

				// We reuse rendered content, but maintain a property with the index for actions
				wrapper.idx = rowData.index;
			};	

			function updateTextFieldsVisibility(index: any, editing: any) {
				grid.querySelector('#fecha' + index).readonly = !editing;
				grid.querySelector('#doble' + index).disabled = !editing;
				grid.querySelector('#tipoFestivo' + index).readonly = !editing;
			}

			function updateButtonsVisibility(buttons: any, _index: any, editing: any) {
				buttons[0].hidden = buttons[1].hidden = editing;
				buttons[2].hidden = buttons[3].hidden = !editing;
			}
			
			const dataProvider: any = this.shadowRoot.getElementById('x-array-data-provider-festivo');
			if(dataProvider!=null){
				dataProvider.size = 200;
				dataProvider.items = padre.festivos;
			}
			
			grid.clearCache();

		} else {
			this.showNotification({ok: false, messageSimple: 'Error inicializando componentes'});
		}

	}

	private syncComboBoxTipoFestivo(){
		
		if(this.shadowRoot!=null){
			let comboTipoFestivo: any = this.shadowRoot.getElementById('festivoTipoFestivo');
			comboTipoFestivo.items=this.tipoFestivos;
			comboTipoFestivo.itemValuePath="idTipoFestivo";
			comboTipoFestivo.itemLabelPath="nombre";
			comboTipoFestivo.value=1;
			try{
				comboTipoFestivo.filter = this.tipoFestivos[this.tipoFestivos.length-1].nombre;
				comboTipoFestivo.filter = null;
			} catch (excepcion){
				console.error("No hay tipoFestivo cargados.");
			}
			this.requestUpdate("comboTipoFestivo", comboTipoFestivo);
			this.iniciarComponentesGridCRUDFestivos();
		}
	}

	// Peticiones Rest
	private async loadFechas(){
		this.fechasCierre = await this.sendPost("infoFechasCierre");
		var date = new Date(this.fechasCierre.fIni)
		this.fCierre = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)+ '-' + (date.getUTCDate()+1);
		this.requestUpdate("fCierre.value", this.fCierre);
		date = new Date(this.fechasCierre.fFin)
		this.fFinSistema = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)+ '-' + (date.getUTCDate()+1);
		this.requestUpdate("fFinSistema.value", this.fFinSistema);
	}

	private async loadTipoFestivos() {
		this.showLoading();
		this.tipoFestivos = await this.sendPost(`searchTipoFestivos`);
		const padre = this;
		this.tipoFestivos.forEach(function (value : any){
			padre.tipoFestivosString.push(value.nombre);
		});
		this.hideLoading();
		
		if(this.shadowRoot!=null){
			let comboTipoFestivo: any = this.shadowRoot.getElementById('festivoTipoFestivo');
			comboTipoFestivo.items=this.tipoFestivos;
			comboTipoFestivo.itemValuePath="idTipoFestivo";
			comboTipoFestivo.itemLabelPath="nombre";
			comboTipoFestivo.value=1;
			this.requestUpdate("festivoTipoFestivo", comboTipoFestivo);
			const grid: any = this.shadowRoot.getElementById('gridTipoFestivo');
			this.requestUpdate("grid.items", this.tipoFestivos);
			grid.clearCache();
		}
	}

	private async addTipoFestivo(tipoFestivo: any){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(tipoFestivo);
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('addTipoFestivo', JSON.stringify(tipoFestivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado="false";
				if(respuesta){
					this.tipoFestivos.push(respuesta);
					if (this.shadowRoot!=null) {
						const grid: any = this.shadowRoot.getElementById('gridTipoFestivo');
						this.requestUpdate("grid.items", this.tipoFestivos);
						grid.clearCache();
						this.syncComboBoxTipoFestivo();
					}
					this.showNotification({ok: true, messageSimple: 'Tipo de festivo creado correctamente.'});
				} else {
					this.showNotification({ok: false, messageSimple: 'Error al crear tipo de festivo.'});
				}
				return true;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error al crear tipo de festivo.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al crear tipo de festivo.'});
			return false;
		}
	}

	private async updateTipoFestivo(tipoFestivo: any, indice: number){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(tipoFestivo);
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('updateTipoFestivo', JSON.stringify(tipoFestivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado="false";
				if(this.shadowRoot!=null){
					const grid: any = this.shadowRoot.getElementById('gridTipoFestivo');
					grid.items[indice] = respuesta;
					this.tipoFestivos = grid.items;
					grid.clearCache();
					this.syncComboBoxTipoFestivo();
				} else {
					this.showNotification({ok: false, messageSimple: 'Error al guardar tipo de festivo.'});
				}
				this.showNotification({ok: true, messageSimple: 'Tipo de festivo actualizado correctamente.'});
				return respuesta;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error al guardar tipo de festivo.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al guardar tipo de festivo.'});
			return false;
		}
	}

	private async removeTipoFestivo(tipoFestivo: any, indice: number){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(tipoFestivo);
		}
		this.showLoading();
		let respuesta: any = await this.sendPost('removeTipoFestivo', JSON.stringify(tipoFestivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado = "false";
				if(this.shadowRoot!=null){
					const grid: any = this.shadowRoot.getElementById('gridTipoFestivo');
					grid.items.splice(indice, 1);
					this.tipoFestivos = grid.items;
					grid.clearCache();
					this.syncComboBoxTipoFestivo();
				} else {
					this.showNotification({ok: false, messageSimple: 'Error al eliminar tipo de festivo.'});
				}
				this.showNotification({ok: true, messageSimple: 'Tipo de festivo eliminado correctamente.'});
				this.loadFestivos();
				return true;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error, elimine los festivos del tipo festivo ' + respuesta.nombre + ' antes.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al eliminar tipo de festivo.'});
			return false;
		}
	}
	
	private async loadFestivos() {
    	this.showLoading();
		if (this.unidad != null){
			this.festivos = await this.sendPost(`searchFestivos?year=${this.year}`,  JSON.stringify(this.unidad));
		} else{
			this.festivos = await this.sendPost(`searchFestivos?year=${this.year}`);
		}
		this.hideLoading();
		
		if(this.shadowRoot!=null){
			const grid: any = this.shadowRoot.getElementById('gridFestivo');
			this.requestUpdate("grid.items", this.festivos);
			grid.clearCache();
		}
	}

	private async addFestivo(festivo: any){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(festivo);
			this.requestUpdate("jsonArea.value", JSON.stringify(festivo));
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('addFestivo', JSON.stringify(festivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado="false";
				let fecha: Date = new Date(respuesta.fecha);
				if(this.shadowRoot!=null && (fecha.getFullYear()==this.year)){
					const grid: any = this.shadowRoot.getElementById('gridFestivo');
					this.festivos.push(respuesta);
					this.requestUpdate("grid.items", this.festivos);
					grid.clearCache();
					this.syncComboBoxTipoFestivo();
				}
				this.showNotification({ok: true, messageSimple: 'Festivo creado.'});
				return true;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error al crear festivo.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al crear festivo.'});
			return false;
		}
	}

	private async updateFestivo(festivo: any, indice:number){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(festivo);
			this.requestUpdate("jsonArea.value", JSON.stringify(festivo));
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('updateFestivo', JSON.stringify(festivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado = "false";
				if(this.shadowRoot!=null){
					const grid: any = this.shadowRoot.getElementById('gridFestivo');
					grid.items[indice] = respuesta;
					grid.clearCache();
					this.syncComboBoxTipoFestivo();
				}
				this.showNotification({ok: true, messageSimple: 'Festivo actualizado correctamente.'});
				return true;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error al guardar festivo.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al guardar festivo.'});
			return false;
		}
	}

	private async removeFestivo(festivo: any, indice:number){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(festivo);
			this.requestUpdate("jsonArea.value", JSON.stringify(festivo));
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('removeFestivo', JSON.stringify(festivo));
		this.hideLoading();
		if(respuesta){
			if(respuesta.guardado){
				respuesta.guardado = "false";
				if(this.shadowRoot!=null){
					const grid: any = this.shadowRoot.getElementById('gridFestivo');
					grid.items.splice(indice, 1);
					this.festivos = grid.items;
					grid.clearCache();
					this.syncComboBoxTipoFestivo();
				}
				this.showNotification({ok: true, messageSimple: 'Festivo eliminado correctamente.'});
				return respuesta;
			}else{
				this.showNotification({ok: false, messageSimple: 'Error al eliminar festivo.'});
				return false;
			}
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al eliminar festivo.'});
			return false;
		}
	}

	private async copiarFestivos(gestionFechas: any){
		if(this.shadowRoot!=null){
			let jsonArea: any = this.shadowRoot.getElementById('jsonArea');
			jsonArea.value=JSON.stringify(gestionFechas);
			this.requestUpdate("jsonArea.value", JSON.stringify(gestionFechas));
		}
    	this.showLoading();
		let respuesta: any = await this.sendPost('copiarFestivos', JSON.stringify(gestionFechas));
		this.hideLoading();
		if(respuesta){
			this.showNotification({ok: true, messageSimple: 'Festivos copiados correctamente.'});
			return true;
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al copiar festivos.'});
			return false;
		}
	}

	private async cerrarCambiosAño(gestionFechas: any){
    	this.showLoading();
		let respuesta: any = await this.sendPost('cerrarCambiosAño', JSON.stringify(gestionFechas));
		this.hideLoading();
		if(respuesta){
			this.showNotification({ok: true, messageSimple: 'Actualizada fecha de cierre correctamente.'});
			return true;
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al actualizar fecha de cierre correctamente.'});
			return false;
		}
	}

	private async cerrarFinSistema(gestionFechas: any){
    	this.showLoading();
		let respuesta: any = await this.sendPost('cerrarFinSistema', JSON.stringify(gestionFechas));
		this.hideLoading();
		if(respuesta){
			this.showNotification({ok: true, messageSimple: 'Actualizada fecha de fin correctamente.'});
			return true;
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al actualizar fecha de fin correctamente.'});
			return false;
		}
	}

	// Botones
	async _save() {
		const padre = this;
		if(this.shadowRoot!=null){
			const fCierreDatePicker: any = this.shadowRoot.getElementById('fCierre');
			const fFinSistemaDatePicker: any = this.shadowRoot.getElementById('fFinSistema');
			let gestionFechas: any = {};
			this.fCierre = fCierreDatePicker.value;
			this.fFinSistema = fFinSistemaDatePicker.value;
			gestionFechas.fIni = new Date(this.fCierre).getTime();
			gestionFechas.fFin = new Date(this.fFinSistema).getTime();
			gestionFechas.mensaje = "fIni=fCierre|fFin=fFinSistema";
			this.cerrarCambiosAño(gestionFechas).then(function(){padre.cerrarFinSistema(gestionFechas)});
		} else {
			this.showNotification({ok: false, messageSimple: 'Error al guardar fechas.'});
		}
	}

	async _clean() {
		if(this.shadowRoot!=null){
			const fCierreDatePicker: any = this.shadowRoot.getElementById('fCierre');
			const fFinSistemaDatePicker: any = this.shadowRoot.getElementById('fFinSistema');
			var date = new Date(this.fechasCierre.fIni)
			this.fCierre = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)+ '-' + (date.getUTCDate()+1);
			fCierreDatePicker.value=this.fCierre;
			this.requestUpdate("fCierreDatePicker.value", this.fCierre);
			date = new Date(this.fechasCierre.fFin)
			this.fFinSistema = date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1)+ '-' + (date.getUTCDate()+1);
			fFinSistemaDatePicker.value = this.fFinSistema;
			this.requestUpdate("fFinSistemaDatePicker.value", this.fFinSistema);
		}
	}
	
	async _festivoYearMenos(){
		this.year--;
		this.loadFestivos();
		this._hideCopiarFestivos();
	}

	async _festivoYearMas(){
		this.year++;
		this.loadFestivos();
		this._hideCopiarFestivos();
	}

	async _hideCopiarFestivos(){
		if(this.shadowRoot!=null){
			const copiarSegundoPaso: any = this.shadowRoot.getElementById('copiarSegundoPaso');
			this.addClass(copiarSegundoPaso, "hidden");
		}
	}

	async _showCopiarFestivos(){
		if(this.shadowRoot!=null){
			const copiarSegundoPaso: any = this.shadowRoot.getElementById('copiarSegundoPaso');
			this.removeClass(copiarSegundoPaso, "hidden");
		}
	}

	async _copiarFestivos(){
		if(this.shadowRoot!=null){
			const yearDestino: any = this.shadowRoot?.getElementById("yearDestino");
			let florGestionFechas: any = {};
			var date = new Date();
			date.setFullYear(this.year);
			florGestionFechas.fIni = date.getTime();
			date.setFullYear(yearDestino.value);
			florGestionFechas.fFin = date.getTime();
			florGestionFechas.mensaje = "fIni=AñoOrigen|fFin=AñoDestino";
			this.copiarFestivos(florGestionFechas);
			this._hideCopiarFestivos();
		}
	}
	
	private async showLoading() {
		if (this.shadowRoot!=null) {
			const notif:any = this.shadowRoot.getElementById('loading');
			if(notif!=null){
				notif.open();
			}
		}
	}

	private async hideLoading() {
		if (this.shadowRoot!=null) {
			const notif:any = this.shadowRoot.getElementById('loading');
			if(notif!=null){
				notif.close();
			}
		}
	}

	// Util

	private async sendPost(url: string, data?: any) {
		let resp = null;

		const requestInit = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: data
		};

		const response = await fetch(`http://${location.host}/flor/api/administracionFechas/${url}`, requestInit);

		if (response.ok) 
			resp = await response.json();
		else
			this.showNotification(response);
		return resp;
	}

	private hasClass(el:any, className: String){
		if (el.classList)
			return el.classList.contains(className);
		return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}

	private addClass(el: any, className: String){
		if (el.classList)
			el.classList.add(className)
		else if (!this.hasClass(el, className))
			el.className += " " + className;
	}

	private removeClass(el: any, className: String){
		if (el.classList)
			el.classList.remove(className)
		else if (this.hasClass(el, className))
		{
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			el.className = el.className.replace(reg, ' ');
		}
	}

	// Notificaciones
	private async showNotification(response: any) {
		if (this.shadowRoot!=null) {
			const notif:any = this.shadowRoot.getElementById('notification');

			let resp = response;
			if (typeof response.json === "function")
				resp = await response.json();

			notif.renderer = function(root:any, owner:any) {
				const text = window.document.createTextNode(resp.messageSimple);
				root.appendChild(text);

				const closeBtn = window.document.createElement('vaadin-button');
				closeBtn.textContent = 'Cerrar';
				closeBtn.addEventListener('click', function() {
					owner.close();
				});
				root.appendChild(closeBtn);
			};

			if (response.ok)
				this.notificationType = "success";
			else 
				this.notificationType = "error";  

			notif.open();
		}
	}

  private configureCalendarI18n(locale: string = 'es', format: string = 'DD-MM-YYYY') {
    const localeData = moment.localeData(locale);
    
    return {
        week: 'Semana',
        calendar: 'Calendario',
        clear: 'Limpiar',
        today: 'Hoy',
        cancel: 'Cancelar',
        firstDayOfWeek: localeData.firstDayOfWeek(),
        monthNames: localeData.months(),
        weekdays: localeData.weekdays(),
        weekdaysShort: localeData.weekdaysShort(),
        formatDate: function(dateObject: any) {
          return moment({
            date: dateObject.day,
            month: dateObject.month,
            year: dateObject.year,
          })
          .locale(locale)
          .format(format);
        },
        formatTitle: function(monthName: string, fullYear: string) {
          return monthName + ' ' + fullYear;
        },
        parseDate: function(dateString: string) {
          const date = moment(dateString, format, locale);
          return {
			hour: date.hour()+1,
            day: date.date(),
            month: date.month(),
            year: date.year(),
          };
        }
    };    
  }  
}

declare global {
  interface HTMLElementTagNameMap {
    'administracion-festivos': AdministracionFestivos;
  }
}
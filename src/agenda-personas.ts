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

@customElement('agenda-personas')
export class AgendaPersonas extends LitElement {


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
			
			<vaadin-horizontal-layout style="height:6.2em; margin-bottom: 1em;">
			
				<div class="columLayoutLeft">
				</div>
				<div class="columLayoutRight">
				</div>
				
				<div class="md5">
					<vaadin-button theme="primary" @click="${this._buscar}" class="button">
						<iron-icon icon="vaadin:search" slot="prefix"></iron-icon>                
						Buscar
					</vaadin-button>
					<vaadin-button theme="white" @click="${this._clean}" class="button">
						<iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>                
						Limpiar
					</vaadin-button>
				</div>
				
			</vaadin-horizontal-layout>

			<vaadin-horizontal-layout style="height: calc(100% - 7em); background: white;">


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

					<vaadin-grid id="gridAgendaPersonas" theme="row-stripes" .items="${this.personas}" column-reordering-allowed multi-sort>
						<vaadin-grid-column id="columnCnp" path="cnp"></vaadin-grid-column>
						<vaadin-grid-column id="columnNombre" path="nombre"></vaadin-grid-column>
						<vaadin-grid-column id="columnUnidad" path="unidad"></vaadin-grid-column>
						<vaadin-grid-column id="columnCategoria" path="categoria"></vaadin-grid-column>
						<vaadin-grid-column id="columnFechaIni" path="fechaIni"></vaadin-grid-column>
						<vaadin-grid-column id="columnFechaFin" path="fechaFin"></vaadin-grid-column>
						<vaadin-grid-column id="columnTelefono" path="telefono"></vaadin-grid-column>
						<vaadin-grid-column id="columnDetalle"></vaadin-grid-column>
					</vaadin-grid>

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

	@property({type: Array})
	personas : any = [];
	
	@property({type: String})
	notificationType = "";

	// Inicializando componentes
	firstUpdated() {
		this.iniciarComponentesGridAgendaPersona();
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
	}

	private iniciarComponentesGridAgendaPersona(){
		if(this.shadowRoot!=null){
			const padre = this;
			const grid: any = this.shadowRoot.getElementById('gridAgendaPersonas');

			grid.headerRenderer = function(_root: any, _column: any) {
				// root.setAttribute('class', 'hidden');
				// _column.setAttribute('class', 'hidden');
			};

			const columnCnp: any = this.shadowRoot.getElementById('columnCnp');
			const columnNombre: any = this.shadowRoot.getElementById('columnNombre');
			const columnUnidad: any = this.shadowRoot.getElementById('columnUnidad');
			const columnCategoria: any = this.shadowRoot.getElementById('columnCategoria');
			const columnFechaIni: any = this.shadowRoot.getElementById('columnFechaIni');
			const columnFechaFin: any = this.shadowRoot.getElementById('columnFechaFin');
			const columnTelefono: any = this.shadowRoot.getElementById('columnTelefono');
			const columnDetalle: any = this.shadowRoot.getElementById('columnDetalle');
			
			columnCnp.headerRenderer = function(root: any, _column: any) {
				root.textContent = "CNP";
			}
			columnNombre.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Nombre";
			}
			columnUnidad.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Unidad";
			}
			columnCategoria.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Categoria";
			}
			columnFechaIni.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Fecha Inicio";
			}
			columnFechaFin.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Fecha Fin";
			}
			columnTelefono.headerRenderer = function(root: any, _column: any) {
				root.textContent = "Teléfono";
			}
			
			columnDetalle.renderer = function(root: any, _column: any, rowData: any) {
				let wrapper = root.firstElementChild;
				if (!wrapper) {
					root.innerHTML =
					'<div style="text-align: right">' +
						'<vaadin-button aria-label="Detalles" theme="icon" focus-target>' +
						'<iron-icon icon="lumo:edit"></iron-icon>' +
						'Detalles' +
						'</vaadin-button>' 
					'</div>';
					wrapper = root.firstElementChild;

					const buttons = wrapper.querySelectorAll('vaadin-button');
					// EDIT
					buttons[0].addEventListener('click', function() {
						padre.showDetalles(grid.items[wrapper.idx]);
					});
				}

				// We reuse rendered content, but maintain a property with the index for actions
				wrapper.idx = rowData.index;
			};	
			
			const dataProvider: any = this.shadowRoot.getElementById('x-array-data-provider-festivo');
			if(dataProvider!=null){
				dataProvider.size = 200;
				dataProvider.items = padre.personas;
			}
			
			grid.clearCache();

		} else {
			this.showNotification({ok: false, messageSimple: 'Error inicializando componentes'});
		}

	}

	private showDetalles(persona: any){
		console.log(persona);
	}

	// Peticiones Rest
	
	private async loadPersonas(busquedaPersona: any) {
		this.showLoading();
		busquedaPersona = {"nombre":"","apellido1":"GARCIA","apellido2":"","telefono":"","cnp":""};
		this.personas = await this.sendPost(`searchPersona`,  busquedaPersona);
		console.log(this.personas);
		this.hideLoading();
		return this.personas;
		// if(this.shadowRoot!=null){
		// 	const grid: any = this.shadowRoot.getElementById('gridFestivo');
		// 	this.requestUpdate("grid.items", this.personas);
		// 	grid.clearCache();
		// }
	}

	// Botones

	async _buscar(){
		console.log("MetodoBuscar");
		this.loadPersonas("");
		this.addClass(null, "");
		this.removeClass(null, "");
	}

	async _clean() {
		if(this.shadowRoot!=null){
			const inputCnp: any = this.shadowRoot.getElementById('inputCnp');
			inputCnp.value = "";
			this.requestUpdate("inputCnp", inputCnp);
		}
	}

	// Util
	
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

		const response = await fetch(`http://${location.host}/flor/api/searchPersona/${url}`, requestInit);

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
    'agenda-personas': AgendaPersonas;
  }
}
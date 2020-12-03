import {LitElement, html, customElement, property, css} from 'lit-element';

import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-notification/vaadin-notification.js';
import '@vaadin/vaadin-progress-bar/vaadin-progress-bar.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-lumo-styles/all-imports.js';

import moment from 'moment';
import 'moment/locale/es';

@customElement('buscador-operadores')
export class BuscadorOperadores extends LitElement {
  
  static styles = css`
    * {
      --lumo-button-size: var(--lumo-size-l) !important; 
      --lumo-text-field-size: var(--lumo-size-l) !important;
      font-size: var(--lumo-font-size-l) !important;
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
      margin-top: 1em;
      height: calc(100% - 210px);
    }

    .columLayoutLeft {
      padding: 1em;
      width: 41%;
    }

    .columLayoutRight {
      width: 100%;
    }

    :host vaadin-date-picker, :host vaadin-button {
      margin-right: 1em;
    }

    :host [theme*="white"] {
      background-color: #fff;
    }

    .md5 {
      margin-top: 1em;
    }

    .md6 {
      margin-top: 2em;
    }

    iron-icon.tiny {
      --iron-icon-height: 15px;
      --iron-icon-width: 15px;
      color: var(--lumo-primary-text-color);
    }

    .textPrimary {
      color: var(--lumo-primary-text-color); 
    }

    :host vaadin-horizontal-layout {
      background: #F3F5F7;
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

       <vaadin-horizontal-layout>
          <div class="columLayoutLeft">
            <vaadin-list-box id="listProfiles" multiple selectedValues="${this.profilesSelected}">
              ${this.profiles.map(i => html`<vaadin-item id="${i['idPerfil']}" @click="${this._profilesChanged}">${i['nombre']}</vaadin-item>`)}
            </vaadin-list-box>
          </div>
           
          <div class="columLayoutRight">
            <vaadin-vertical-layout>
              <div>
                <vaadin-date-picker class="inputField" max="${this.fIniMax}" error-message="Periodo de fechas incorrecto" value="${this.fIni}" @change="${this._fIniChanged}" 
                  id="fini" label="Desde" placeholder="Fecha inicio" required clear-button-visible></vaadin-date-picker>
                <vaadin-date-picker class="inputField" min="${this.fFinMin}" error-message="Periodo de fechas incorrecto" value="${this.fFin}" @change="${this._fFinChanged}" 
                  id="ffin" label="Hasta" placeholder="Fecha fin" required clear-button-visible></vaadin-date-picker>
              </div>
              
              <div class="md5">
                <vaadin-button theme="primary" @click="${this._findUsers}">
                  <iron-icon icon="vaadin:search" slot="prefix"></iron-icon>
                  Buscar
                </vaadin-button>
                <vaadin-button theme="white" @click="${this._clean}">
                  <iron-icon icon="vaadin:trash" slot="prefix"></iron-icon>                
                  Limpiar
                </vaadin-button>
              </div>
            
              <div style="text-align: right;width:100%;" class="md6">
                <vaadin-button id="pdf" @click="${this._export}" theme="small white" ?disabled="${this.users.length==0}">
                  <iron-icon icon="vaadin:file" slot="prefix"></iron-icon>
                  PDF
                </vaadin-button>
                <vaadin-button id="xls" @click="${this._export}" theme="small white" ?disabled="${this.users.length==0}">
                  <iron-icon icon="vaadin:file-table" slot="prefix"></iron-icon>
                  XLS
                </vaadin-button>
                <vaadin-button id="csv" @click="${this._export}" theme="small white" ?disabled="${this.users.length==0}">
                  <iron-icon icon="vaadin:file-text-o" slot="prefix"></iron-icon>
                  CSV
                </vaadin-button>
              </div>
            </vaadin-vertical-layout>
          </div>
        </vaadin-horizontal-layout>          

        <vaadin-grid id="gridOperadores" active-item="{{activeItem}}" .items="${this.users}" theme="row-stripes" column-reordering-allowed multi-sort>
          <template class="row-details">
            <div class="details">
              <p>
                <iron-icon icon="vaadin:user-card" slot="prefix"></iron-icon>
                <b><span class="textPrimary">[[item.nombreApellidos]]</span></b><br>
                <small>[[item.login]]</small><br/>
              </p>

              <p>
                <b><span>Perfiles</span></b><br>
                <dom-repeat items="[[item.perfiles]]">
                  <template>
                    <small>{{item}}</small><br/>
                  </template>
                </dom-repeat>
              </p>

              <p>
                <b><span>Permisos</span></b><br>
                <dom-repeat items="[[item.objetos]]">
                  <template>
                    <small>{{item}}</small><br/>
                  </template>
                </dom-repeat>
              </p>              
            </div>
          </template>

          <vaadin-grid-column width="60px" flex-grow="0">
            <template class="header"></template>
            <template>[[index]]</template>
          </vaadin-grid-column>

          <vaadin-grid-column width="30px" flex-grow="0">
            <template class="header"></template>
            <template><iron-icon class="tiny" icon="vaadin:user" slot="prefix"></iron-icon></template>
          </vaadin-grid-column>

          <vaadin-grid-sort-column auto-width flex-grow="0" path="login" header="Operador"></vaadin-grid-sort-column>
          <vaadin-grid-sort-column auto-width path="nombreApellidos" header="Nombre y apellidos"></vaadin-grid-sort-column>
          <vaadin-grid-filter-column auto-width path="strPerfiles" header="Perfiles"></vaadin-grid-filter-column>
          <vaadin-grid-filter-column path="strObjetos" header="Permisos"></vaadin-grid-filter-column>
        
          <vaadin-grid-column width="150px" flex-grow="0">
            <template class="header"></template>
            <template>
              <vaadin-checkbox checked="{{detailsOpened}}"><small>Mostrar detalles</small></vaadin-checkbox>              
            </template>
          </vaadin-grid-column>
        </vaadin-grid>

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
  profiles = [];

  @property({type: Array})
  profilesSelected : any[] = [];
  
  @property({type: String})
  fIni = "";
  fFin = "";
  fIniMax = "";
  fFinMin = "";

  @property({type: Array})
  users = [];

  @property({type: String})
  notificationType = "";


  // Inicializando componentes
  firstUpdated() {
    if (this.shadowRoot!=null) {
      let cal: any = this.shadowRoot.getElementById('fini');
      cal.i18n = this.configureCalendarI18n();
      cal = this.shadowRoot.getElementById('ffin');
      cal.i18n = this.configureCalendarI18n();
    } else
      this.showNotification({ok: false, messageSimple: 'Error inicializando componentes'});
  }


  // Perfiles
  connectedCallback() {
    super.connectedCallback();

    if (this.profiles.length == 0)
      this.loadProfiles();
  }

  private async loadProfiles() {
    this.profiles = await this.sendPost(`listaPerfiles`);
  }

  _profilesChanged(e: any) {
    if (e.target.selected)
      this.profilesSelected = this.profilesSelected.filter(obj => obj.idPerfil !== Number(e.target.id));
    else
      this.profilesSelected.push({idPerfil: Number(e.target.id), nombre: e.target.value});
  }

  private cleanListProfiles() {
    if (this.profilesSelected!=null && this.profilesSelected.length>0) {
      this.profilesSelected = [];

      if (this.shadowRoot!=null) {
        let item: any = this.shadowRoot.getElementById('listProfiles');
        item.selectedValues = this.profilesSelected;
      }
    }
  }


  // Fechas
  _fIniChanged(e: any) {
    this.fIni = e.target.value;
    this.fFinMin = this.fIni;
    
    if (!this.fFin)
      this.fFin = this.fIni;    
  }

  _fFinChanged(e: any) {
    const oldVal = this.fIniMax;
    this.fFin = e.target.value;
    this.fIniMax = this.fFin;
    this.requestUpdate('fIniMax', oldVal);

    if (!this.fIni)
      this.fIni = this.fFin;
  }


  // Botones
  async _clean() {
    this.fIni = "";
    this.fFin = "";
    this.fIniMax = "";
    this.fFinMin = "";
    this.users = [];
    this.cleanListProfiles();
  }

  async _findUsers() {
    this.showLoading();
    this.users = await this.sendPost(`buscarOperadores?fini=${this.fIni}&ffin=${this.fFin}`, JSON.stringify(this.profilesSelected));
    this.hideLoading();

    if (this.users!=null && this.users.length==0)
      this.showNotification({ok: false, messageSimple: 'No se han encontrado resultados para los filtros seleccionados'});
  }


  // Impresión
  async _export(e: any) {
    const format = e.target.id;
    const repJson = await this.sendPost(`imprimir`, JSON.stringify(this.getFlorOperadorPrint(format)));
    
    const linkSource = `data:application/${format};base64,${repJson.report}`;
    const downloadLink = document.createElement("a");
    const fileName = `listadoOperadores.${format}`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  private getFlorOperadorPrint(formato: string) {
    return {
      fini: this.fIni,
      ffin: this.fFin,
      formato: formato,
      perfiles: this.profilesSelected,
      operadores: this.users,
      operador: JSON.parse(this.operador)
    };
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

  private async showLoading() {
    if (this.shadowRoot!=null) {
      const notif:any = this.shadowRoot.getElementById('loading');
      notif.open();
    }
  }

  private async hideLoading() {
    if (this.shadowRoot!=null) {
      const notif:any = this.shadowRoot.getElementById('loading');
      notif.close();
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

    const response = await fetch(`http://${location.host}/flor/api/operadores/${url}`, requestInit);
    
    if (response.ok) 
      resp = await response.json();
    else
      this.showNotification(response);

    return resp;
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
    'buscador-operadores': BuscadorOperadores;
  }
}
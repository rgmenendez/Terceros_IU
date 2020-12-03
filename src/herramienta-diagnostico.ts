import {LitElement, html, customElement, property, css} from 'lit-element';

import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-notification/vaadin-notification.js';
import '@vaadin/vaadin-progress-bar/vaadin-progress-bar.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-lumo-styles/all-imports.js';
import '@vaadin/vaadin-details/vaadin-details.js';


@customElement('herramienta-diagnostico')
export class HerramientaDiagnostico extends LitElement {
  
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
      height: calc(50% - 90px);
    }

    .columLayoutLeft {
      padding: 1em;
      width: 70%;
    }

    .columLayoutRight {
      padding: 1em;
      width: 100%;
    }

    :host vaadin-button {
      margin-right: 1em;
      margin-left: 1em;
    }

    :host vaadin-text-field {
      padding: 0;
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

    :host .title {
      padding: 0.5em;
      background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
      margin-top: 1em;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-l) !important;
      color: #fff;
      font-weight: bold;
      border-radius: var(--lumo-border-radius);
    }

    iron-icon.close {
      color: #FAABA6;
    }

    .celdError {
      color: #F8726D;
      font-weight: bold;
    }

    iron-icon.exclamation {
      color: #F1E854;
    }

    .celdWarning {
      color: #D9CF28;
      font-weight: bold;
    }

    iron-icon.check {
      color: var(--lumo-success-color);
    }
  `;

  render() {
    return html`
      <vaadin-horizontal-layout>
        <div class="columLayoutLeft">
          <vaadin-text-field id="cnp" label="Login" placeholder="CNP" required clear-button-visible value="${this.cnp}"
          @change="${this._cnpChanged}" @keydown="${this._findEnter}"></vaadin-text-field>
          
          <vaadin-button id="btnSearh" theme="primary" @click="${this._find}">
            <iron-icon icon="vaadin:search" slot="prefix"></iron-icon>
            Buscar
          </vaadin-button>
        </div>
            
        <div class="columLayoutRight"> 
          <vaadin-vertical-layout> 
            <div style="text-align: right;width:100%;" class="md5">
              <vaadin-button id="btnUpdateEvent" theme="primary" @click="${this._updateEventDate}">
                <iron-icon icon="vaadin:calendar-clock" slot="prefix"></iron-icon>
                Actualizar
              </vaadin-button>
            </div>
          </vaadin-vertical-layout>
        </div>
      </vaadin-horizontal-layout>          

      <div class="title">
        <!-- <iron-icon icon="vaadin:grid-big-o" slot="prefix"></iron-icon> -->
        <span>Contratos</span>
      </div>

      <vaadin-grid id="gridContratos" active-item="{{activeItem}}" .items="${this.contratos}" theme="row-stripes" 
      column-reordering-allowed multi-sort>
        <vaadin-grid-column width="40px" flex-grow="0"></vaadin-grid-column>

        <vaadin-grid-selection-column auto-width flex-grow="0" auto-select"></vaadin-grid-selection-column>
        <vaadin-grid-sort-column auto-width path="gfh" header="Gfh"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="tipo" header="Tipo"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="causaContrato" header="Causa"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="categoria" header="Categoría"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFInicio" header="Fecha inicio"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFFin" header="Fecha fin"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="causaBaja" header="Causa baja"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="personaSustituida" header="Persona sustituida"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="reduccion" header="Reducción"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFEvento" header="Fecha evento"></vaadin-grid-sort-column>
      </vaadin-grid>

      <div class="title">
        <!-- <iron-icon icon="vaadin:caret-right" slot="prefix"></iron-icon> -->
        <span>Vacaciones y ausencias</span>
      </div>

      <vaadin-grid id="gridAbsentismos" active-item="{{activeItem}}" .items="${this.absentismos}" theme="row-stripes" 
      column-reordering-allowed multi-sort>
        <vaadin-grid-column width="40px" flex-grow="0"></vaadin-grid-column>

        <vaadin-grid-selection-column auto-width flex-grow="0" auto-select></vaadin-grid-selection-column>
        <vaadin-grid-sort-column auto-width path="tipo" header="Tipo"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFInicio" header="Fecha inicio"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFFin" header="Fecha fin"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="contrato" header="Contrato"></vaadin-grid-sort-column>
        <vaadin-grid-sort-column auto-width path="strFEvento" header="Fecha evento"></vaadin-grid-sort-column>

        </vaadin-grid-sort-column>
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

  @property({type: Array})
  contratos:Array<any> = [];
  absentismos:Array<any> = [];

  @property({type: String})
  cnp = "";

  @property({type: String})
  notificationType = "";


  _cnpChanged(e: any) {
    this.cnp = e.target.value;
  }

  async _find() {
    this.showLoading();
    
    const resultados = await this.sendPost(`search`, this.cnp);
    this.hideLoading();

    if (this.isResultadosEmpty(resultados)) {
      this.showNotification({ok: false, messageSimple: 'No se han encontrado resultados para los filtros seleccionados'});
    } else {
      this.contratos = resultados.contratos;
      this.absentismos = resultados.absentismos;
      this.iniGrid();      
    }
  }

  private isResultadosEmpty(resultados:any) {
    return (resultados==null || (resultados.contratos.length == 0 && resultados.absentismos.length == 0));
  }

  async _findEnter(e:any) {
    if(e.keyCode === 13) {
        this.cnp = e.target.value;
        this._find();
    }
  }

  async _updateEventDate() {
    this.showLoading();
    const resultados = await this.sendPost(`updateEventDate`, 
      JSON.stringify({contratos: this.getContratosSeleccionados(), absentismos: this.getAbsentismosSeleccionados()}));
    this.hideLoading();

    if (resultados==null) {
      this.showNotification({ok: false, messageSimple: 'No se ha podido realizar la operación'});
    } else {
      this.updateRows(resultados);
      this.showNotification({ok: true, messageSimple: 'Se han incluido correctamente los contratos seleccionados para su próxima integración'});
    }
  }

  private updateRows(c:any) {
    for (let cn of c.contratos)
      this.contratos = this.contratos.map(c => c.id !== cn.id ? c : cn);
    for (let an of c.absentismos)
      this.absentismos = this.absentismos.map(a => a.id !== an.id ? a : an);
  }

  private getContratosSeleccionados() {
    if (this.shadowRoot!=null) {
      const grid:any = this.shadowRoot.getElementById('gridContratos');
      return grid.selectedItems;
    } else {
      return null;
    }
  }

  private getAbsentismosSeleccionados() {
    if (this.shadowRoot!=null) {
      const grid:any = this.shadowRoot.getElementById('gridAbsentismos');
      return grid.selectedItems;
    } else {
      return null;
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

    const response = await fetch(`http://${location.host}/flor/api/hdp/${url}`, requestInit);
    
    if (response.ok) 
      resp = await response.json();
    else
      this.showNotification(response);

    return resp;
  }

  private iniGrid() {
    if (this.shadowRoot!=null) {
      const columns:any = this.shadowRoot.querySelectorAll('vaadin-grid-sort-column');

      // contratos
      columns[0].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgGfh)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgGfh}">${rowData.item.gfh}</div>`;
        else
          root.textContent = rowData.item.gfh;
      };
      columns[1].renderer = function(root:any, _column: any, rowData: any) {
          if (rowData.item.checkDTO.msgTipo)
            root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgTipo}">${rowData.item.tipo}</div>`;
          else
            root.textContent = rowData.item.tipo;
      };
      columns[2].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgCausaContrato)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgCausaContrato}">${rowData.item.causaContrato}</div>`;
        else
          root.textContent = rowData.item.causaContrato;
      };
      columns[3].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgCategoria)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgCategoria}">${rowData.item.categoria}</div>`;
        else
          root.textContent = rowData.item.categoria;
      };
      columns[4].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgFInicio)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgFInicio}">${rowData.item.strFInicio}</div>`;
        else
          root.textContent = rowData.item.strFInicio;
      };
      columns[5].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgFFin)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgFFin}">${rowData.item.strFFin}</div>`;
        else
          root.textContent = rowData.item.strFFin;
      };
      columns[6].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgCausaBaja)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgCausaBaja}">${rowData.item.causaBaja}</div>`;
        else
          root.textContent = rowData.item.causaBaja;
      };
      columns[7].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgPersonaSustituida)
            root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgPersonaSustituida}">${rowData.item.personaSustituida}</div>`;
        else
            root.textContent = rowData.item.personaSustituida;
      };
      columns[8].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgReduccion)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgReduccion}">${rowData.item.reduccion}</div>`;
        else
          root.textContent = rowData.item.reduccion;
      };
      columns[9].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgFEvento)
          root.innerHTML = `<div class="celdWarning" title="${rowData.item.checkDTO.msgFEvento}">${rowData.item.strFEvento}</div>`;
        else
          root.textContent = rowData.item.strFEvento;
      };

      // absentismos
      columns[10].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgTipo)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgTipo}">${rowData.item.tipo}</div>`;
        else
          root.textContent = rowData.item.tipo;
      };
      columns[11].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgFInicio)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgFInicio}">${rowData.item.strFInicio}</div>`;
        else
          root.textContent = rowData.item.strFInicio;
      };
      columns[12].renderer = function(root:any, _column: any, rowData: any) {
          if (rowData.item.checkDTO.msgFFin)
            root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgFFin}">${rowData.item.strFFin}</div>`;
          else
            root.textContent = rowData.item.strFFin;
      };
      columns[13].renderer = function(root:any, _column: any, rowData: any) {
        if (rowData.item.checkDTO.msgContrato)
          root.innerHTML = `<div class="celdError" title="${rowData.item.checkDTO.msgContrato}">${rowData.item.contrato}</div>`;
        else
          root.textContent = rowData.item.contrato;
      };
      columns[14].renderer = function(root:any, _column: any, rowData: any) {
          if (rowData.item.checkDTO.msgFEvento)
            root.innerHTML = `<div class="celdWarning" title="${rowData.item.checkDTO.msgFEvento}">${rowData.item.strFEvento}</div>`;
          else 
            root.textContent = rowData.item.strFEvento;
      };

      const columnsIni:any = this.shadowRoot.querySelectorAll('vaadin-grid-column');
      
      // Iconos
      columnsIni[0].renderer = function(root:any, _column: any, rowData: any) {
         root.innerHTML = `<iron-icon class="tiny ${rowData.item.checkDTO.error}" icon="vaadin:${rowData.item.checkDTO.error}" slot="prefix"></iron-icon>`;
      };
      columnsIni[1].renderer = function(root:any, _column: any, rowData: any) {
         root.innerHTML = `<iron-icon class="tiny ${rowData.item.checkDTO.error}" icon="vaadin:${rowData.item.checkDTO.error}" slot="prefix"></iron-icon>`;
      };
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'herramienta-diagnostico': HerramientaDiagnostico;
  }
}
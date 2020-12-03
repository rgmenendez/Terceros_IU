# Terceros_IU

Proyecto de generación de webcomponents para migración del proyecto Terceros

## Configuración

1. Clonación del repositorio

```bash
$ git clone https://github.com/rgmenendez/Terceros_IU
```

2. Instalar npm (windows: https://www.npmjs.com/get-npm)

```bash
$ sudo apt-get install npm
```

3. Instalar dependencias. Se creará node_modules con todas las dependencias del proyecto

```bash
$ npm i
```

4. Generar componentes. Los js generados estará ubicados en el directorio build/components

```bash
$ npm run build
```

Script para llevar los componentes web generados al servidor de aplicaciones

```bash
$ ./applyComponents.sh
```


# LitElement

Una clase base simple para crear componentes web rápidos y ligeros con [lit-html](https://lit-html.polymer-project.org/).

[![Build Status](https://travis-ci.org/Polymer/lit-element.svg?branch=master)](https://travis-ci.org/Polymer/lit-element)
[![Published on npm](https://img.shields.io/npm/v/lit-element.svg)](https://www.npmjs.com/package/lit-element)
[![Join our Slack](https://img.shields.io/badge/slack-join%20chat-4a154b.svg)](https://www.polymer-project.org/slack-invite)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lit-element)
[![Mentioned in Awesome lit-html](https://awesome.re/mentioned-badge.svg)](https://github.com/web-padawan/awesome-lit-html)
[![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=TnM4R3dScWdhU1NRck1WejNtMmVoMzQrU2s5bnRtOVVGMmFkQWtEV25iST0tLTNiWEZVYldaV1VqY2oxTEVJV09XSFE9PQ==--e79a2e8601a562e5b200dfcd2d6a15416fd4ed5f)](https://automate.browserstack.com/public-build/TnM4R3dScWdhU1NRck1WejNtMmVoMzQrU2s5bnRtOVVGMmFkQWtEV25iST0tLTNiWEZVYldaV1VqY2oxTEVJV09XSFE9PQ==--e79a2e8601a562e5b200dfcd2d6a15416fd4ed5f)

## Documentación

La documentación completa está disponible en [lit-element.polymer-project.org](https://lit-element.polymer-project.org).

## Visión general

LitElement usa [lit-html](https://lit-html.polymer-project.org/) para renderizar en el [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) del elemento y agrega API para ayudar a administrar las propiedades y atributos del elemento. LitElement reacciona a los cambios en las propiedades y se procesa de forma declarativa usando `lit-html`. Consulte la guía [lit-html guide](https://lit-html.polymer-project.org/guide) para obtener información adicional sobre cómo crear plantillas para lit-element.

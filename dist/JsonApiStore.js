module.exports=function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,r,i,n){var o={};return Object.keys(i).forEach(function(e){o[e]=i[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,i){return i(e,t,r)||r},o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}function a(e,t){var r=(0,c.toJS)(e);return r?Array.isArray(r)?e.map(t):t(e):null}var u,s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),c=r(1),l=r(2),d=i(l),f=(u=function(){function e(t){n(this,e),this._initData(t)}return s(e,[{key:"_initRecord",value:function(e){var t=this.defaults[e.type],r=t?Object.assign({},t,e.attributes):e.attributes;return Object.assign({relationships:{}},e,{attributes:r})}},{key:"_initData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.records,r=void 0===t?[]:t,i=e.relations,n=void 0===i?{}:i,o=e.models,a=void 0===o?{}:o,u=e.defaults,s=void 0===u?{}:u;this.models=a,this.defaults=s;var l={records:r,relations:n},d=Object.assign({},l);d.records=r.map(this._initRecord.bind(this)),(0,c.extendObservable)(this,l)}},{key:"_getRecordModel",value:function(e){return e in this.models?this.models[e]:this.recordModel||d["default"]}},{key:"_toModel",value:function(e,t){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this._getRecordModel(t),o=new n({id:e.id,type:e.type},e,this);if(i[t]=i[t]||{},i[t][e.id]=i[t][e.id]||o,e.relationships){var u=!0,s=!1,c=void 0;try{for(var l,d=function(){var t=l.value,n=e.relationships[t],u=n.data,s=n.links,c=s?{links:s}:null;o[t]=a(u||s,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.id,o=r._find(t,n,i);return o?Object.assign(o,c||{}):c})},f=Object.keys(e.relationships)[Symbol.iterator]();!(u=(l=f.next()).done);u=!0)d()}catch(p){s=!0,c=p}finally{try{!u&&f["return"]&&f["return"]()}finally{if(s)throw c}}}return o}},{key:"reset",value:function(){(0,c.extendObservable)(this,{records:[],relations:{}})}},{key:"_findRecord",value:function(e,t){return this.records.find(function(r){return r.type===e&&r.id===t})}},{key:"_findRecords",value:function(e){return this.records.filter(function(t){return t.type===e})}},{key:"_find",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this._findRecord(e,t);return i?(r[e]=r[e]||{},r[e][t]=r[e][t]||this._toModel(i,e,r),r[e][t]):null}},{key:"find",value:function(e,t){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0;return(0,c.transaction)(function(){n=r._find(e,t,i)}),n}},{key:"findAll",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=void 0;return(0,c.transaction)(function(){var n=t._findRecords(e);n.forEach(function(i){return t._toModel(i,e,r)}),i=Object.keys(r[e]||{}).map(function(t){return r[e][t]})}),i}},{key:"remove",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(r){var i=this._findRecord(e,r);return!i||this.records.remove(i)}var n=this._findRecords(e);return n.every(function(e){return t.records.remove(e)})}},{key:"_add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return null;var t=e.type,r=e.id,i=this._findRecord(t,r);return i?(i.attributes&&(0,c.extendObservable)(i.attributes,e.attributes||{}),i.relationships&&(0,c.extendObservable)(i.relationships,e.relationships||{})):(i=this._initRecord(e),this.records.push(i)),i}},{key:"sync",value:function(e){var t=this,r=void 0;return(0,c.transaction)(function(){a(e.included,t._add.bind(t));var i=a(e.data,t._add.bind(t));r=a(i,function(e){return t._toModel(e,e.type)})}),r}}]),e}(),o(u.prototype,"_initData",[c.action],Object.getOwnPropertyDescriptor(u.prototype,"_initData"),u.prototype),o(u.prototype,"reset",[c.action],Object.getOwnPropertyDescriptor(u.prototype,"reset"),u.prototype),o(u.prototype,"remove",[c.action],Object.getOwnPropertyDescriptor(u.prototype,"remove"),u.prototype),o(u.prototype,"_add",[c.action],Object.getOwnPropertyDescriptor(u.prototype,"_add"),u.prototype),u);e.exports={JsonApiRecord:d["default"],JsonApiStore:f}},function(e,t){e.exports=require("mobx")},function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,r,i,n){var o={};return Object.keys(i).forEach(function(e){o[e]=i[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,i){return i(e,t,r)||r},o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),c=r(1),l=(a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n(this,e),i?!function(){var e={};Object.keys(i.attributes||{}).forEach(function(t){e[t]=function(){return i.attributes[t]}});var n=Object.assign(t,e,{_record:i,_store:o});(0,c.extendObservable)(r,n)}():(Object.assign(this,t),this.attributes.selected=!1)}return s(e,[{key:"set",value:function(e,t){var r=i({},e,t);return e in this._record?this._record.attributes[e]=t:this._record&&this._record.attributes&&(0,c.extendObservable)(this._record.attributes,r),this._update(r)}},{key:"_update",value:function(e){"object"!==("undefined"==typeof e?"undefined":u(e))||e instanceof Array||(0,c.isObservable)(this)||Object.assign(this,e)}}]),e}(),o(a.prototype,"set",[c.action],Object.getOwnPropertyDescriptor(a.prototype,"set"),a.prototype),o(a.prototype,"_update",[c.action],Object.getOwnPropertyDescriptor(a.prototype,"_update"),a.prototype),a);t["default"]=l}]);
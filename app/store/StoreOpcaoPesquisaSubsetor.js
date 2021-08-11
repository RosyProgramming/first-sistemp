/*
 * File: app/store/StoreOpcaoPesquisaSubsetor.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('rsistemp.store.StoreOpcaoPesquisaSubsetor', {
    extend: 'Ext.data.Store',

    requires: [
        'rsistemp.model.ModelOpcaoPesquisaSubsetor',
        'Ext.data.proxy.Memory',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'StoreOpcaoPesquisaSubsetor',
            model: 'rsistemp.model.ModelOpcaoPesquisaSubsetor',
            proxy: {
                type: 'memory',
                data: {
                    dados: [
                        {
                            id: 1,
                            descricao: 'id'
                        },
                        {
                            id: 2,
                            descricao: 'setor'
                        },
                        {
                            id: 3,
                            descricao: 'subsetor'
                        },
                        {
                            id: 4,
                            descricao: 'status'
                        }
                    ]
                },
                reader: {
                    type: 'json',
                    rootProperty: 'dados'
                }
            }
        }, cfg)]);
    }
});
/*
 * File: app/view/WindowSetor.js
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

Ext.define('rsistemp.view.WindowSetor', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowsetor',

    requires: [
        'rsistemp.view.WindowSetorViewModel',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Text',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio'
    ],

    viewModel: {
        type: 'windowsetor'
    },
    modal: true,
    autoShow: true,
    height: 165,
    itemId: 'Windowsetor',
    width: 400,
    layout: 'fit',
    icon: 'resources/images/grid.png',
    title: 'Cadastro de Setor',
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    icon: 'resources/images/save.gif',
                    text: 'Salvar',
                    listeners: {
                        click: 'onButtonClick2'
                    }
                },
                {
                    xtype: 'button',
                    icon: 'resources/images/cross.png',
                    text: 'Fechar',
                    listeners: {
                        click: 'onButtonClick11'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'form',
            reference: 'form',
            itemId: 'setorFormulario',
            bodyPadding: 10,
            title: '',
            url: '../../app/rsistemp.php?action=setor&metodo=inserir_setor',
            items: [
                {
                    xtype: 'hiddenfield',
                    fieldLabel: 'Setor Id',
                    name: 'setor_id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Setor',
                    name: 'desc_setor'
                },
                {
                    xtype: 'radiogroup',
                    anchor: '100%',
                    itemId: 'status_setor',
                    width: 400,
                    fieldLabel: 'Status',
                    fieldDefaults: {
                        name: 'status'
                    },
                    columns: '1',
                    simpleValue: true,
                    items: [
                        {
                            xtype: 'radiofield',
                            itemId: 'ativo',
                            name: 'status_setor',
                            boxLabel: 'Ativo',
                            checked: true,
                            inputValue: 'A'
                        },
                        {
                            xtype: 'radiofield',
                            itemId: 'inativo',
                            name: 'status_setor',
                            boxLabel: 'Inativo',
                            inputValue: 'I'
                        }
                    ]
                }
            ]
        }
    ],

    onButtonClick2: function(button, e, eOpts) {
        var formPrincipal = this.down('form');//this - Janela -
        var id   = formPrincipal.getForm().findField('setor_id').getValue();
        var win = this;
        var campo01 = formPrincipal.getForm().findField('desc_setor');
        var grid = Ext.ComponentQuery.query('grid[itemId=gridSetor]')[0];

        if( formPrincipal.getForm().isValid() ){
            formPrincipal.getForm().submit({
                success: function(form, action) {
                    //Ext.Msg.alert('Success', action.result.msg);
                    if (id === '' || id === null) {
                        formPrincipal.getForm().reset(true);
                        if (win.carregaStore===true)
                        {
                            grid. getStore().removeAll();
                            grid.getStore().load();
                        }
                        campo01.focus(false,true);
                        rsistemp.getApplication().Msg('Registro incluído com sucesso');

                    } else {
                        win.close();
                    }
                },
                failure: function(form, action) {
        //          Ext.Msg.alert('Success','Registro incluído com sucesso!');
                    //Ext.Msg.alert('Success', action.result.msg);
                    Ext.Msg.show({
                        title:'Atenção',
                        msg: action.result.msg,
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                }
            });
        }
    },

    onButtonClick11: function(button, e, eOpts) {
        this.close();
    }

});
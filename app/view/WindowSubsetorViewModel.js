/*
 * File: app/view/WindowSubsetorViewModel.js
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

Ext.define('rsistemp.view.WindowSubsetorViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.windowsubsetor',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory'
    ],

    stores: {
        modelSubSetors: {
            model: 'rsistemp.model.ModelSubSetor',
            data: [
                {
                    subsetor_id: 'earum',
                    desc_subsetor: 'quasi',
                    status_subsetor: 'sit',
                    setor_id: 'fugiat',
                    desc_setor: 'ullam'
                },
                {
                    subsetor_id: 'rerum',
                    desc_subsetor: 'vero',
                    status_subsetor: 'et',
                    setor_id: 'voluptatem',
                    desc_setor: 'culpa'
                },
                {
                    subsetor_id: 'et',
                    desc_subsetor: 'quia',
                    status_subsetor: 'incidunt',
                    setor_id: 'saepe',
                    desc_setor: 'pariatur'
                },
                {
                    subsetor_id: 'qui',
                    desc_subsetor: 'mollitia',
                    status_subsetor: 'repudiandae',
                    setor_id: 'voluptate',
                    desc_setor: 'fugit'
                },
                {
                    subsetor_id: 'et',
                    desc_subsetor: 'odit',
                    status_subsetor: 'ratione',
                    setor_id: 'aut',
                    desc_setor: 'officiis'
                },
                {
                    subsetor_id: 'aliquid',
                    desc_subsetor: 'qui',
                    status_subsetor: 'quia',
                    setor_id: 'aut',
                    desc_setor: 'distinctio'
                },
                {
                    subsetor_id: 'harum',
                    desc_subsetor: 'velit',
                    status_subsetor: 'et',
                    setor_id: 'reprehenderit',
                    desc_setor: 'consequuntur'
                },
                {
                    subsetor_id: 'tempora',
                    desc_subsetor: 'in',
                    status_subsetor: 'culpa',
                    setor_id: 'expedita',
                    desc_setor: 'quisquam'
                },
                {
                    subsetor_id: 'odit',
                    desc_subsetor: 'nulla',
                    status_subsetor: 'corrupti',
                    setor_id: 'quos',
                    desc_setor: 'voluptas'
                },
                {
                    subsetor_id: 'laborum',
                    desc_subsetor: 'tenetur',
                    status_subsetor: 'illum',
                    setor_id: 'magni',
                    desc_setor: 'sapiente'
                },
                {
                    subsetor_id: 'omnis',
                    desc_subsetor: 'nostrum',
                    status_subsetor: 'nisi',
                    setor_id: 'amet',
                    desc_setor: 'accusantium'
                },
                {
                    subsetor_id: 'rerum',
                    desc_subsetor: 'aliquid',
                    status_subsetor: 'natus',
                    setor_id: 'exercitationem',
                    desc_setor: 'sunt'
                },
                {
                    subsetor_id: 'voluptate',
                    desc_subsetor: 'explicabo',
                    status_subsetor: 'vero',
                    setor_id: 'ratione',
                    desc_setor: 'accusamus'
                },
                {
                    subsetor_id: 'dolores',
                    desc_subsetor: 'vitae',
                    status_subsetor: 'nihil',
                    setor_id: 'labore',
                    desc_setor: 'pariatur'
                },
                {
                    subsetor_id: 'quidem',
                    desc_subsetor: 'omnis',
                    status_subsetor: 'quos',
                    setor_id: 'modi',
                    desc_setor: 'eaque'
                },
                {
                    subsetor_id: 'accusamus',
                    desc_subsetor: 'at',
                    status_subsetor: 'labore',
                    setor_id: 'velit',
                    desc_setor: 'quo'
                },
                {
                    subsetor_id: 'molestias',
                    desc_subsetor: 'doloribus',
                    status_subsetor: 'blanditiis',
                    setor_id: 'ab',
                    desc_setor: 'esse'
                },
                {
                    subsetor_id: 'quo',
                    desc_subsetor: 'consequatur',
                    status_subsetor: 'nulla',
                    setor_id: 'dolore',
                    desc_setor: 'et'
                },
                {
                    subsetor_id: 'nihil',
                    desc_subsetor: 'dolor',
                    status_subsetor: 'blanditiis',
                    setor_id: 'praesentium',
                    desc_setor: 'debitis'
                },
                {
                    subsetor_id: 'itaque',
                    desc_subsetor: 'aut',
                    status_subsetor: 'magni',
                    setor_id: 'laboriosam',
                    desc_setor: 'veritatis'
                },
                {
                    subsetor_id: 'fuga',
                    desc_subsetor: 'fugit',
                    status_subsetor: 'vel',
                    setor_id: 'aspernatur',
                    desc_setor: 'culpa'
                },
                {
                    subsetor_id: 'ad',
                    desc_subsetor: 'est',
                    status_subsetor: 'dolores',
                    setor_id: 'ea',
                    desc_setor: 'minus'
                },
                {
                    subsetor_id: 'commodi',
                    desc_subsetor: 'vitae',
                    status_subsetor: 'sit',
                    setor_id: 'similique',
                    desc_setor: 'sed'
                },
                {
                    subsetor_id: 'voluptas',
                    desc_subsetor: 'qui',
                    status_subsetor: 'facilis',
                    setor_id: 'illum',
                    desc_setor: 'cupiditate'
                },
                {
                    subsetor_id: 'et',
                    desc_subsetor: 'ipsa',
                    status_subsetor: 'sunt',
                    setor_id: 'vitae',
                    desc_setor: 'corporis'
                },
                {
                    subsetor_id: 'nihil',
                    desc_subsetor: 'et',
                    status_subsetor: 'facilis',
                    setor_id: 'aut',
                    desc_setor: 'illum'
                },
                {
                    subsetor_id: 'quia',
                    desc_subsetor: 'quia',
                    status_subsetor: 'doloremque',
                    setor_id: 'est',
                    desc_setor: 'vel'
                },
                {
                    subsetor_id: 'fugiat',
                    desc_subsetor: 'consequatur',
                    status_subsetor: 'vitae',
                    setor_id: 'architecto',
                    desc_setor: 'ipsa'
                },
                {
                    subsetor_id: 'omnis',
                    desc_subsetor: 'voluptate',
                    status_subsetor: 'hic',
                    setor_id: 'in',
                    desc_setor: 'earum'
                },
                {
                    subsetor_id: 'sit',
                    desc_subsetor: 'provident',
                    status_subsetor: 'soluta',
                    setor_id: 'qui',
                    desc_setor: 'qui'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }

});
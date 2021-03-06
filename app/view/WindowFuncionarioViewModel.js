/*
 * File: app/view/WindowFuncionarioViewModel.js
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

Ext.define('rsistemp.view.WindowFuncionarioViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.windowfuncionario',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Memory'
    ],

    stores: {
        modelFuncionarios: {
            model: 'rsistemp.model.ModelFuncionario',
            data: [
                {
                    funcionario_id: 'omnis',
                    nome: 'porro',
                    dtnascimento: '12/22/2001',
                    salario: 616.8,
                    telefone: 976,
                    email: 'aroberts@thoughtworks.net',
                    cargo_id: 'ex',
                    desc_cargo: 'perferendis',
                    setor_id: 'sint',
                    desc_setor: 'et',
                    subsetor_id: 'rerum',
                    desc_subsetor: 'dicta',
                    sexo: 'rerum',
                    idade: 'labore',
                    sobrenome: 'repellendus'
                },
                {
                    funcionario_id: 'voluptate',
                    nome: 'quasi',
                    dtnascimento: '4/2/2003',
                    salario: 56.19,
                    telefone: 529,
                    email: 'phayes@twitterbeat.info',
                    cargo_id: 'laborum',
                    desc_cargo: 'corporis',
                    setor_id: 'culpa',
                    desc_setor: 'facere',
                    subsetor_id: 'qui',
                    desc_subsetor: 'dolores',
                    sexo: 'illum',
                    idade: 'aut',
                    sobrenome: 'facilis'
                },
                {
                    funcionario_id: 'ut',
                    nome: 'neque',
                    dtnascimento: '8/6/2006',
                    salario: 863.07,
                    telefone: 37,
                    email: 'bchavez@riffpath.mil',
                    cargo_id: 'placeat',
                    desc_cargo: 'et',
                    setor_id: 'vel',
                    desc_setor: 'ex',
                    subsetor_id: 'delectus',
                    desc_subsetor: 'dolores',
                    sexo: 'laboriosam',
                    idade: 'sed',
                    sobrenome: 'veniam'
                },
                {
                    funcionario_id: 'omnis',
                    nome: 'quam',
                    dtnascimento: '12/4/2014',
                    salario: 256.91,
                    telefone: 732,
                    email: 'ewatkins@dazzlesphere.biz',
                    cargo_id: 'consequatur',
                    desc_cargo: 'laboriosam',
                    setor_id: 'animi',
                    desc_setor: 'ratione',
                    subsetor_id: 'qui',
                    desc_subsetor: 'quia',
                    sexo: 'facere',
                    idade: 'maxime',
                    sobrenome: 'consectetur'
                },
                {
                    funcionario_id: 'et',
                    nome: 'occaecati',
                    dtnascimento: '3/19/2007',
                    salario: 31.25,
                    telefone: 442,
                    email: 'gbryant@oyoyo.mil',
                    cargo_id: 'reiciendis',
                    desc_cargo: 'fuga',
                    setor_id: 'voluptatem',
                    desc_setor: 'natus',
                    subsetor_id: 'nobis',
                    desc_subsetor: 'tempora',
                    sexo: 'voluptates',
                    idade: 'fugiat',
                    sobrenome: 'libero'
                },
                {
                    funcionario_id: 'nobis',
                    nome: 'et',
                    dtnascimento: '2/2/2009',
                    salario: 25.7,
                    telefone: 187,
                    email: 'jfernandez@mynte.name',
                    cargo_id: 'pariatur',
                    desc_cargo: 'quae',
                    setor_id: 'vel',
                    desc_setor: 'deserunt',
                    subsetor_id: 'non',
                    desc_subsetor: 'incidunt',
                    sexo: 'esse',
                    idade: 'aliquid',
                    sobrenome: 'dolore'
                },
                {
                    funcionario_id: 'hic',
                    nome: 'quas',
                    dtnascimento: '2/25/2010',
                    salario: 388.62,
                    telefone: 984,
                    email: 'wsimpson@cogilith.info',
                    cargo_id: 'ut',
                    desc_cargo: 'est',
                    setor_id: 'cumque',
                    desc_setor: 'ab',
                    subsetor_id: 'ut',
                    desc_subsetor: 'sint',
                    sexo: 'dicta',
                    idade: 'animi',
                    sobrenome: 'eligendi'
                },
                {
                    funcionario_id: 'sit',
                    nome: 'eum',
                    dtnascimento: '8/6/2011',
                    salario: 167.11,
                    telefone: 529,
                    email: 'rsnyder@skajo.name',
                    cargo_id: 'rem',
                    desc_cargo: 'numquam',
                    setor_id: 'excepturi',
                    desc_setor: 'omnis',
                    subsetor_id: 'dolor',
                    desc_subsetor: 'est',
                    sexo: 'id',
                    idade: 'blanditiis',
                    sobrenome: 'facere'
                },
                {
                    funcionario_id: 'quo',
                    nome: 'nemo',
                    dtnascimento: '11/18/2001',
                    salario: 307.94,
                    telefone: 373,
                    email: 'jryan@photobug.mil',
                    cargo_id: 'aperiam',
                    desc_cargo: 'aliquid',
                    setor_id: 'magni',
                    desc_setor: 'amet',
                    subsetor_id: 'consequuntur',
                    desc_subsetor: 'similique',
                    sexo: 'quidem',
                    idade: 'dolor',
                    sobrenome: 'voluptate'
                },
                {
                    funcionario_id: 'vero',
                    nome: 'eveniet',
                    dtnascimento: '12/19/2013',
                    salario: 380.66,
                    telefone: 25,
                    email: 'smontgomery@zoovu.name',
                    cargo_id: 'corporis',
                    desc_cargo: 'quidem',
                    setor_id: 'enim',
                    desc_setor: 'nemo',
                    subsetor_id: 'ut',
                    desc_subsetor: 'aut',
                    sexo: 'laudantium',
                    idade: 'et',
                    sobrenome: 'et'
                },
                {
                    funcionario_id: 'ea',
                    nome: 'perferendis',
                    dtnascimento: '10/10/2004',
                    salario: 897.6,
                    telefone: 382,
                    email: 'jgreene@skalith.com',
                    cargo_id: 'repellendus',
                    desc_cargo: 'voluptas',
                    setor_id: 'molestias',
                    desc_setor: 'sunt',
                    subsetor_id: 'velit',
                    desc_subsetor: 'vitae',
                    sexo: 'in',
                    idade: 'voluptas',
                    sobrenome: 'enim'
                },
                {
                    funcionario_id: 'voluptatem',
                    nome: 'optio',
                    dtnascimento: '9/26/2003',
                    salario: 671.67,
                    telefone: 27,
                    email: 'klane@ntags.edu',
                    cargo_id: 'et',
                    desc_cargo: 'totam',
                    setor_id: 'eum',
                    desc_setor: 'aut',
                    subsetor_id: 'tenetur',
                    desc_subsetor: 'quia',
                    sexo: 'natus',
                    idade: 'et',
                    sobrenome: 'quae'
                },
                {
                    funcionario_id: 'ad',
                    nome: 'quia',
                    dtnascimento: '3/6/2007',
                    salario: 816.44,
                    telefone: 17,
                    email: 'walexander@meevee.name',
                    cargo_id: 'deleniti',
                    desc_cargo: 'libero',
                    setor_id: 'facere',
                    desc_setor: 'illum',
                    subsetor_id: 'in',
                    desc_subsetor: 'et',
                    sexo: 'deserunt',
                    idade: 'ut',
                    sobrenome: 'neque'
                },
                {
                    funcionario_id: 'sint',
                    nome: 'mollitia',
                    dtnascimento: '11/28/2004',
                    salario: 921.3,
                    telefone: 662,
                    email: 'bchavez@riffpath.mil',
                    cargo_id: 'pariatur',
                    desc_cargo: 'corporis',
                    setor_id: 'perferendis',
                    desc_setor: 'commodi',
                    subsetor_id: 'est',
                    desc_subsetor: 'dolor',
                    sexo: 'aut',
                    idade: 'nesciunt',
                    sobrenome: 'consequatur'
                },
                {
                    funcionario_id: 'et',
                    nome: 'quo',
                    dtnascimento: '8/22/2001',
                    salario: 688.09,
                    telefone: 579,
                    email: 'jreid@babbleblab.com',
                    cargo_id: 'ab',
                    desc_cargo: 'nihil',
                    setor_id: 'voluptatibus',
                    desc_setor: 'quasi',
                    subsetor_id: 'nihil',
                    desc_subsetor: 'eos',
                    sexo: 'vero',
                    idade: 'cum',
                    sobrenome: 'expedita'
                },
                {
                    funcionario_id: 'libero',
                    nome: 'aut',
                    dtnascimento: '6/25/2003',
                    salario: 656.05,
                    telefone: 966,
                    email: 'smontgomery@zoovu.name',
                    cargo_id: 'dolorum',
                    desc_cargo: 'rerum',
                    setor_id: 'soluta',
                    desc_setor: 'et',
                    subsetor_id: 'accusamus',
                    desc_subsetor: 'dolores',
                    sexo: 'consequatur',
                    idade: 'exercitationem',
                    sobrenome: 'natus'
                },
                {
                    funcionario_id: 'sit',
                    nome: 'voluptatem',
                    dtnascimento: '11/17/2010',
                    salario: 81.34,
                    telefone: 420,
                    email: 'phayes@twitterbeat.info',
                    cargo_id: 'aperiam',
                    desc_cargo: 'provident',
                    setor_id: 'velit',
                    desc_setor: 'autem',
                    subsetor_id: 'eum',
                    desc_subsetor: 'quo',
                    sexo: 'minus',
                    idade: 'eum',
                    sobrenome: 'labore'
                },
                {
                    funcionario_id: 'et',
                    nome: 'commodi',
                    dtnascimento: '1/22/2013',
                    salario: 85.54,
                    telefone: 785,
                    email: 'vlynch@topdrive.mil',
                    cargo_id: 'ut',
                    desc_cargo: 'magni',
                    setor_id: 'accusamus',
                    desc_setor: 'iure',
                    subsetor_id: 'et',
                    desc_subsetor: 'unde',
                    sexo: 'quo',
                    idade: 'id',
                    sobrenome: 'vel'
                },
                {
                    funcionario_id: 'rerum',
                    nome: 'dolor',
                    dtnascimento: '4/5/2009',
                    salario: 216.3,
                    telefone: 681,
                    email: 'dwalker@jatri.info',
                    cargo_id: 'fugiat',
                    desc_cargo: 'ipsum',
                    setor_id: 'porro',
                    desc_setor: 'maxime',
                    subsetor_id: 'consequatur',
                    desc_subsetor: 'quaerat',
                    sexo: 'dolorum',
                    idade: 'et',
                    sobrenome: 'sed'
                },
                {
                    funcionario_id: 'est',
                    nome: 'delectus',
                    dtnascimento: '11/12/2010',
                    salario: 688.13,
                    telefone: 12,
                    email: 'ssnyder@voolia.edu',
                    cargo_id: 'libero',
                    desc_cargo: 'est',
                    setor_id: 'aperiam',
                    desc_setor: 'aliquam',
                    subsetor_id: 'fuga',
                    desc_subsetor: 'iusto',
                    sexo: 'perferendis',
                    idade: 'officiis',
                    sobrenome: 'est'
                },
                {
                    funcionario_id: 'et',
                    nome: 'rem',
                    dtnascimento: '1/18/2004',
                    salario: 922.26,
                    telefone: 238,
                    email: 'karnold@fivebridge.biz',
                    cargo_id: 'voluptatem',
                    desc_cargo: 'molestiae',
                    setor_id: 'rerum',
                    desc_setor: 'aliquam',
                    subsetor_id: 'laudantium',
                    desc_subsetor: 'aliquid',
                    sexo: 'vero',
                    idade: 'quos',
                    sobrenome: 'voluptas'
                },
                {
                    funcionario_id: 'aut',
                    nome: 'ut',
                    dtnascimento: '10/10/2010',
                    salario: 817.44,
                    telefone: 679,
                    email: 'jgreene@skalith.com',
                    cargo_id: 'error',
                    desc_cargo: 'voluptas',
                    setor_id: 'aut',
                    desc_setor: 'eum',
                    subsetor_id: 'voluptatem',
                    desc_subsetor: 'dolor',
                    sexo: 'aut',
                    idade: 'fugiat',
                    sobrenome: 'dolore'
                },
                {
                    funcionario_id: 'eos',
                    nome: 'alias',
                    dtnascimento: '4/24/2013',
                    salario: 2.5,
                    telefone: 543,
                    email: 'probertson@thoughtstorm.com',
                    cargo_id: 'dolores',
                    desc_cargo: 'asperiores',
                    setor_id: 'est',
                    desc_setor: 'et',
                    subsetor_id: 'et',
                    desc_subsetor: 'blanditiis',
                    sexo: 'ducimus',
                    idade: 'voluptatem',
                    sobrenome: 'pariatur'
                },
                {
                    funcionario_id: 'necessitatibus',
                    nome: 'sed',
                    dtnascimento: '6/23/2003',
                    salario: 428.24,
                    telefone: 336,
                    email: 'probertson@thoughtstorm.com',
                    cargo_id: 'aut',
                    desc_cargo: 'repellat',
                    setor_id: 'dolorem',
                    desc_setor: 'quia',
                    subsetor_id: 'est',
                    desc_subsetor: 'earum',
                    sexo: 'sit',
                    idade: 'id',
                    sobrenome: 'assumenda'
                },
                {
                    funcionario_id: 'praesentium',
                    nome: 'reiciendis',
                    dtnascimento: '2/28/2001',
                    salario: 762.95,
                    telefone: 59,
                    email: 'jsims@photofeed.net',
                    cargo_id: 'cumque',
                    desc_cargo: 'debitis',
                    setor_id: 'vel',
                    desc_setor: 'totam',
                    subsetor_id: 'accusantium',
                    desc_subsetor: 'quaerat',
                    sexo: 'aliquid',
                    idade: 'vel',
                    sobrenome: 'quibusdam'
                },
                {
                    funcionario_id: 'ratione',
                    nome: 'quia',
                    dtnascimento: '8/18/2011',
                    salario: 373.63,
                    telefone: 140,
                    email: 'cwebb@jaxnation.com',
                    cargo_id: 'omnis',
                    desc_cargo: 'repudiandae',
                    setor_id: 'mollitia',
                    desc_setor: 'omnis',
                    subsetor_id: 'voluptas',
                    desc_subsetor: 'nesciunt',
                    sexo: 'facere',
                    idade: 'odit',
                    sobrenome: 'enim'
                },
                {
                    funcionario_id: 'inventore',
                    nome: 'dolor',
                    dtnascimento: '11/4/2007',
                    salario: 432.28,
                    telefone: 495,
                    email: 'bmurray@flipopia.net',
                    cargo_id: 'sit',
                    desc_cargo: 'perferendis',
                    setor_id: 'eveniet',
                    desc_setor: 'veniam',
                    subsetor_id: 'impedit',
                    desc_subsetor: 'non',
                    sexo: 'et',
                    idade: 'nulla',
                    sobrenome: 'quam'
                },
                {
                    funcionario_id: 'exercitationem',
                    nome: 'fuga',
                    dtnascimento: '5/11/2008',
                    salario: 983.26,
                    telefone: 31,
                    email: 'dwatkins@mydeo.name',
                    cargo_id: 'repudiandae',
                    desc_cargo: 'nostrum',
                    setor_id: 'id',
                    desc_setor: 'iure',
                    subsetor_id: 'exercitationem',
                    desc_subsetor: 'vel',
                    sexo: 'ea',
                    idade: 'est',
                    sobrenome: 'molestiae'
                },
                {
                    funcionario_id: 'qui',
                    nome: 'delectus',
                    dtnascimento: '3/25/2010',
                    salario: 263.03,
                    telefone: 457,
                    email: 'hwells@mymm.info',
                    cargo_id: 'amet',
                    desc_cargo: 'sequi',
                    setor_id: 'delectus',
                    desc_setor: 'cum',
                    subsetor_id: 'est',
                    desc_subsetor: 'dolores',
                    sexo: 'impedit',
                    idade: 'nihil',
                    sobrenome: 'ut'
                },
                {
                    funcionario_id: 'saepe',
                    nome: 'debitis',
                    dtnascimento: '5/2/2001',
                    salario: 904.68,
                    telefone: 480,
                    email: 'vgonzalez@yamia.gov',
                    cargo_id: 'tempore',
                    desc_cargo: 'non',
                    setor_id: 'fugit',
                    desc_setor: 'quia',
                    subsetor_id: 'sunt',
                    desc_subsetor: 'atque',
                    sexo: 'non',
                    idade: 'quibusdam',
                    sobrenome: 'et'
                }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }

});
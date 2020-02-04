'use strict';

module.exports  = {
    source: {
        include: [
            'lib/'
        ]
    },
    opts: {
        recurse: true,
        tutorials: 'docs_src/tutorials/',
        package: 'package.json',
        destination: './docs/',
        readme: 'docs_src/index.md',
        template: 'node_modules/docdash'
    },
    templates: {
        default: {
            useLongnameInNav: true,
            staticFiles: {
                include: [
                    './docs_src/tutorials/static',
                    './dist'
                ]
            }
        }
    },
    plugins: [
        'plugins/markdown'
    ],
    docdash: {
        typedefs: true,
        sectionOrder: [
            "Tutorials",
            "Interfaces",
            "Classes",
            "Modules",
            "Externals",
            "Events",
            "Namespaces",
            "Mixins"
        ],
        meta: {
            title: "Lens JS docs",
            description: "",
            keyword: ""
        },
        navLevel: 3,
        scopeInOutputPath: false,
        nameInOutputPath: false,
        versionInOutputPath: false
    }
};
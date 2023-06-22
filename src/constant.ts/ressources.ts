const resources = [
    {
        name: "project",
        list: "/project",
        show: "/project/show/:id",
        create: "/project/create",
        edit: "/project/edit/:id",
        meta:{
            canDelete: true
        }
    },
    {
        name: "service",
        list: "/service",
        show: "/service/show/:id",
        create: "/service/create",
        edit: "/service/edit/:id",
        meta:{
            canDelete: true
        }
    },
    {
        name: "resume",
        list: "/resume",
        show: "/resume/show/:id",
        create: "/resume/create",
        edit: "/resume/edit/:id",
        meta:{
            canDelete: true
        }
    },
    {
        name: "about",
        list: "/about",
        show: "/about/show/:id",
        create: "/about/create",
        edit: "/about/edit/:id",
        meta:{
            canDelete: true
        }
    }

];

export default resources
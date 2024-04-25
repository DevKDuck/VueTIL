import { createWebHistory, createRouter } from "vue-router";
import NotFound from "/@mycomp/NotFound.vue"
import Home from "/@mycomp/Home.vue"
import About from "/@mycomp/About.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [ // path별 component를 추가한다.
        { path : "/", name : "home", component : Home },
        { path : "/", name : "about", component : About },
        {
            path : "/:pathMatch(.*)",
            name : "not-found",
            component : NotFound
        }
    ]
});

export default router;
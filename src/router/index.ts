// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default/Default.vue"),
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/views/Home.vue"),
            },
        ],
    },
    {
        path: "/CourseDetails/:id",
        component: () => import("@/layouts/default/Default.vue"),
        children: [
            {
                path: "",
                name: "CourseDetails",
                component: () => import("@/views/CourseDetails.vue"),
            },
        ],
    },
    // helps when routes are missing required params
    { path: "/:catchAll(.*)", redirect: "/" },
];

const validRoutes: RouteRecordRaw[] = routes.filter((route) => route !== undefined) as RouteRecordRaw[];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: validRoutes,
    // Scroll to top when changing routes.
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }

        document.getElementById("app").scrollIntoView();
    },
});

export default router;

// Composables
import { createRouter, createWebHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";

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
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/layouts/default/Default.vue"),
        children: [
            {
                path: "",
                name: "not-found",
                component: () => import(/* webpackChunkName: "default" */ "@/views/FileNotFound.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // Scroll to top when changing routes.
    scrollBehavior(
        to: RouteLocationNormalized,
        from: RouteLocationNormalizedLoaded,
        savedPosition: { left?: number; top?: number } | null,
    ): Promise<false | void | { left?: number; top?: number }> {
        if (to.hash) {
            const targetElement = document.querySelector(to.hash) as HTMLElement | null;
            return Promise.resolve({ top: targetElement?.offsetTop || 0 });
        }

        // Scroll to the top by default
        return Promise.resolve({ left: 0, top: 0 });
    },
});

export default router;

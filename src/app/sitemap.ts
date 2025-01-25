import { baseURL, routes as routesConfig } from "@/once-ui/resources/config";

export default async function sitemap() {
    //@ts-ignore
    const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

    const routes = activeRoutes.map((route) => ({
        url: `${baseURL}${route !== "/" ? route : ""}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes];
}
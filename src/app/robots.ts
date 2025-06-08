import { baseURL } from "@/app/resources/once-ui.config";

export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
            },
        ],
        sitemap: `${baseURL}/sitemap.xml`,
    };
}
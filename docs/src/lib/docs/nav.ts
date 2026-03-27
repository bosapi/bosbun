export interface NavItem {
    label: string;
    labelId?: string;
    slug: string;
}

export interface NavGroup {
    label: string;
    labelId?: string;
    items: NavItem[];
}

export const sidebar: NavGroup[] = [
    {
        label: "Start Here",
        labelId: "Mulai di Sini",
        items: [
            { label: "Introduction", labelId: "Pengenalan", slug: "" },
            { label: "Getting Started", labelId: "Memulai", slug: "getting-started" },
            { label: "Project Structure", labelId: "Struktur Proyek", slug: "project-structure" },
        ],
    },
    {
        label: "Guides",
        labelId: "Panduan",
        items: [
            { label: "Routing", slug: "guides/routing" },
            { label: "Server Loaders", labelId: "Server Loader", slug: "guides/server-loaders" },
            { label: "API Routes", labelId: "API Route", slug: "guides/api-routes" },
            { label: "Form Actions", labelId: "Form Action", slug: "guides/form-actions" },
            { label: "Middleware Hooks", labelId: "Middleware Hook", slug: "guides/middleware-hooks" },
            { label: "Environment Variables", labelId: "Variabel Lingkungan", slug: "guides/environment-variables" },
            { label: "Styling", slug: "guides/styling" },
            { label: "Security", labelId: "Keamanan", slug: "guides/security" },
        ],
    },
    {
        label: "Components",
        labelId: "Komponen",
        items: [
            { label: "Overview", labelId: "Ringkasan", slug: "components/overview" },
            { label: "Button", slug: "components/button" },
            { label: "Badge", slug: "components/badge" },
            { label: "Card", slug: "components/card" },
            { label: "Input", slug: "components/input" },
            { label: "Avatar", slug: "components/avatar" },
            { label: "Separator", slug: "components/separator" },
            { label: "Icon", slug: "components/icon" },
            { label: "Dropdown Menu", slug: "components/dropdown-menu" },
            { label: "Data Table", slug: "components/data-table" },
            { label: "Chart", slug: "components/chart" },
            { label: "Navbar", slug: "components/navbar" },
            { label: "Sidebar", slug: "components/sidebar" },
        ],
    },
    {
        label: "Reference",
        labelId: "Referensi",
        items: [
            { label: "CLI", slug: "reference/cli" },
            { label: "API Reference", labelId: "Referensi API", slug: "reference/api" },
            { label: "Deployment", slug: "reference/deployment" },
            { label: "SvelteKit Differences", labelId: "Perbedaan dengan SvelteKit", slug: "reference/sveltekit-differences" },
            { label: "Roadmap", slug: "reference/roadmap" },
            { label: "Changelog", slug: "reference/changelog" },
        ],
    },
];

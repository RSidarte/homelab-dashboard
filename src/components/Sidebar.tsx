import React from "react";

const services = [
    { name: "Keycloak", icon: "keycloak.svg", url: "https://keycloak.labaky.fr" },
    { name: "Traefik", icon: "traefik.svg", url: "https://traefik.labaky.fr" },
    { name: "Longhorn", icon: "longhorn.svg", url: "https://longhorn.labaky.fr" },
    { name: "Nextcloud", icon: "nextcloud.svg", url: "https://cloud.labaky.fr" },
    { name: "Vaultwarden", icon: "vault.svg", url: "https://vault.labaky.fr" },
    { name: "Mailu", icon: "mailu.svg", url: "https://mail.labaky.fr" },
    { name: "Prometheus", icon: "prometheus.svg", url: "https://promotheus.labaky.fr" },
    { name: "Grafana", icon: "grafana.svg", url: "https://grafana.labaky.fr" },
    { name: "Homepage", icon: "homepage.svg", url: "https://www.labaky.fr" },
    { name: "Jellyfin", icon: "jellyfin.svg", url: "https://tv.labaky.fr" },
    { name: "Ollama", icon: "ollama.svg", url: "https://ai.labaky.fr" },
    { name: "Ubuntu", icon: "ubuntu.svg", url: "https://ubuntu.labaky.fr" },
  ];


export const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="bg-gray-900 text-white w-64 min-h-screen p-4 border-r border-gray-800">

            <div className="flex items-center justify-between p-4">

                <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}> Labaky Home</h1>
                <button onClick={() => setIsOpen(!isOpen) } className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                    <Menu size={24} />
                </button>
            </div>

            <nav className="mt-8">
                {services.map((service) => (
                    <a
                        key={service.name}
                        href="#"
                        className="flex items-center px-4 py-3 text-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <service.icon size={24} className="flex-shrink-0"/>
                        {isOpen && (
                            <div className="ml-4">
                                <p className="font-medium">service.name</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">service.category</p>
                            </div>
                        )}
                    </a>
                ))}
            </nav>
            
        </div>
    );
};
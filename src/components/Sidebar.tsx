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


const Sidebar = () => {
    return (
        <div className="bg-gray-900 text-white w-64 min-h-screen p-4 border-r border-gray-800">

            <h2 className="text-2xl font-bold mb-6">Labaky</h2>
            <ul className="space-y-4">
            {services.map(({ name, icon, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-2 py-1 hover:text-blue-400"
            >
              <img
                src={`/src/assets/icons/${icon}`}
                alt={name}
                className="h-5 w-5"
              />
              <span>{name}</span>
            </a>
          </li>
        ))}
            </ul> 
        </div>
    );
};

export default Sidebar;
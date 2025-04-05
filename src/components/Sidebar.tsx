import React from 'react';
import { Cloud, Film, Mail, Shield, Settings, Brain, FlaskRound as Flask, Menu } from 'lucide-react';

const services = [
  { name: 'Cloud', icon: Cloud, category: 'Nextcloud' },
  { name: 'Streaming', icon: Film, category: 'Jellyfin' },
  { name: 'Messagerie', icon: Mail, category: 'Mailu' },
  { name: 'Sécurité', icon: Shield, category: 'Vaultwarden' },
  { name: 'Admin', icon: Settings, category: 'Traefik, Portainer' },
  { name: 'IA', icon: Brain, category: 'Ollama, ComfyUI, Whisper' },
  { name: 'Test', icon: Flask, category: 'Namespace test' },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={`bg-white dark:bg-gray-800 h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 border-r border-gray-200 dark:border-gray-700`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Labaky Home</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <Menu size={24} />
        </button>
      </div>
      
      <nav className="mt-8">
        {services.map((service) => (
          <a
            key={service.name}
            href="#"
            className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <service.icon size={24} className="flex-shrink-0" />
            {isOpen && (
              <div className="ml-4">
                <p className="font-medium">{service.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{service.category}</p>
              </div>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

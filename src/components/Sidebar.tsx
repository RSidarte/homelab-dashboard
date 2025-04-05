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

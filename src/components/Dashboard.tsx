import React from 'react';
import { DateTime } from 'luxon';
import { Cloud, Calendar, Thermometer, Clock, Link } from 'lucide-react';

const services = [
  { name: 'Nextcloud', status: 'up' },
  { name: 'Mailu', status: 'up' },
  { name: 'Keycloak', status: 'down' },
];

const events = [
  { title: 'Anniv Ralph', date: '2024-04-15', time: '14:00' },
  { title: 'Maj Traefik à planifier', date: '2024-04-20' },
  { title: 'Backup mensuel', date: '2024-04-30' },
];

const news = [
  {
    title: "Mise à jour majeure de Kubernetes",
    description: "Découvrez les nouvelles fonctionnalités de la version 1.29",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop",
    link: "https://kubernetes.io/blog/"
  },
  {
    title: "Sécurité Cloud Native",
    description: "Les meilleures pratiques pour 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    link: "https://www.cncf.io/"
  },
  {
    title: "DevOps & Automatisation",
    description: "Comment optimiser votre pipeline CI/CD",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
    link: "https://about.gitlab.com/"
  }
];

export const Dashboard = () => {
  const [currentTime, setCurrentTime] = React.useState(DateTime.now());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Météo */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Thermometer className="mr-2" />
            <h2 className="text-xl font-semibold">Météo</h2>
          </div>
          <p className="text-3xl font-bold">17°C</p>
          <p className="text-gray-600 dark:text-gray-400">Paris, Ensoleillé</p>
        </div>

        {/* Date et Heure */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Clock className="mr-2" />
            <h2 className="text-xl font-semibold">Date & Heure</h2>
          </div>
          <p className="text-2xl font-bold">
            {currentTime.toFormat('cccc d LLLL yyyy')}
          </p>
          <p className="text-xl">
            {currentTime.toFormat('HH:mm:ss')}
          </p>
        </div>

        {/* Événements */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Calendar className="mr-2" />
            <h2 className="text-xl font-semibold">Événements à venir</h2>
          </div>
          <ul className="space-y-3">
            {events.map((event) => (
              <li key={event.title} className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {DateTime.fromISO(event.date).toFormat('dd/MM/yyyy')}
                    {event.time && ` - ${event.time}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* État des services */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <Cloud className="mr-2" />
            <h2 className="text-xl font-semibold">État des services</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.name} className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  service.status === 'up' ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Link className="text-blue-600" />
          Actualités Tech
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

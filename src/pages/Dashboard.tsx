import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-8 space-y-6 bg-white flex-1">
          <h2 className="text-xl font-semibold text-gray-700">📊 Aperçu général</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600">Météo</p>
              <p className="text-2xl font-bold">☀️ 17°C</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600">État des services</p>
              <ul className="text-sm mt-2">
                <li>✅ Nextcloud</li>
                <li>✅ Mailu</li>
                <li>⚠️ Keycloak</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-gray-600">Événements à venir</p>
              <ul className="text-sm mt-2">
                <li>🎉 Anniv Ralph - 15/04</li>
                <li>🛠️ MAJ Traefik - 20/04</li>
                <li>💾 Backup - 30/04</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

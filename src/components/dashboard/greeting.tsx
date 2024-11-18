import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  const userName = "Othmane";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t("greeting.title", { name: userName })}
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center leading-relaxed">
          {t("greeting.subtitle")}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;

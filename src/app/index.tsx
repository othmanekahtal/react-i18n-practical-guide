import { useTranslation } from "react-i18next";
import { useState } from "react";
import NumberFormats from "../components/common/number-formats";
import DateFormats from "../components/common/date-formats";
import PluralExample from "../components/common/items-list";

export default function ExamplesShowcase() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeTab, setActiveTab] = useState("numbers");

  const examples = [
    { id: "numbers", icon: "📊", component: <NumberFormats /> },
    { id: "dates", icon: "📅", component: <DateFormats /> },
    { id: "plurals", icon: "📝", component: <PluralExample /> },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? "rtl" : "ltr"}`}>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {t("showcase.title")}
          </h1>
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <div className="w-64 bg-white rounded-lg shadow-lg p-4 h-fit">
            <nav className="space-y-2">
              {examples.map(({ id, icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`w-full text-start px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2
                    ${
                      activeTab === id
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                >
                  <span>{icon}</span>
                  <span>{t(`showcase.nav.${id}`)}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            {examples.find((ex) => ex.id === activeTab)?.component}
          </div>
        </div>
      </div>
    </div>
  );
}

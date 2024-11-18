import { useTranslation } from "react-i18next";

export default function DateFormats() {
  const { t, i18n } = useTranslation();
  const isDir = i18n.dir();
  const lang = i18n.language;
  const currentDate = new Date();
  const examples = [
    { type: "short", value: currentDate },
    { type: "long", value: currentDate },
    { type: "time", value: currentDate },
    { type: "full", value: currentDate },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        dir={isDir}
        className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("dateExample.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {examples.map(({ type, value }) => (
            <div
              key={type}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300"
            >
              <p className="text-gray-700">
                {t(`dateExample.${type}`, { date: value })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => i18n.changeLanguage(lang == "ar" ? "en" : "ar")}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg
                     hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Switch to {lang == "ar" ? "English" : "Arabic"}
          </button>
        </div>
      </div>
    </div>
  );
}

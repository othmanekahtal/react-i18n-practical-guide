import { useTranslation } from "react-i18next";

export default function NumberFormats() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const examples = [
    { type: "currency", value: 1234567.89 },
    { type: "decimal", value: 1234567.89 },
    { type: "percent", value: 0.8567 },
    { type: "compact", value: 1234567 },
    { type: "bytes", value: 1024 },
    { type: "kg", value: 75.5 },
    { type: "meter", value: 150 },
    { type: "temperature", value: 25 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("numberExample.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {examples.map(({ type, value }) => (
            <div
              key={type}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300"
            >
              <p className="text-gray-700">
                {t(`numberExample.${type}`, {
                  value,
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => i18n.changeLanguage(isRTL ? "en" : "ar")}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg
                     hover:from-blue-700 hover:to-purple-700 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Switch to {isRTL ? "English" : "Arabic"}
          </button>
        </div>
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function ItemsList() {
  const { t, i18n } = useTranslation();

  const quantities = [0, 1, 2, 3, 11, 100];

  return (
    <div className="min-h-64 my-4 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("pluralExample.title")}
          </h2>
          <p className="mt-2 text-gray-600">
            {t("pluralExample.currentLang")}:{" "}
            {i18n.language === "en" ? "English" : "العربية"}
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quantities.map((count) => (
            <div
              key={count}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-600">
                  {count}
                </span>
                <span className="text-gray-700">{t("item", { count })}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

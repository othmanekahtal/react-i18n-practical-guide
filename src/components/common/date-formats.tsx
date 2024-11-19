import { useTranslation } from "react-i18next";

export default function DateFormats() {
  const { t } = useTranslation();
  const currentDate = new Date();
  const examples = [
    { type: "short", value: currentDate },
    { type: "long", value: currentDate },
    { type: "time", value: currentDate },
    { type: "full", value: currentDate },
  ];

  return (
    <div className="min-h-64 my-4 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-8">
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
      </div>
    </div>
  );
}

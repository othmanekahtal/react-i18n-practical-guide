import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-red-600 font-bold">{t("welcome")}</h1>
    </div>
  );
}
export default App;

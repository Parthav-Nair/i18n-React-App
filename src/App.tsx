import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Globe } from 'lucide-react'; 

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300 from-slate-100 to-blue-50 px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl w-full text-center border border-blue-700 ">
        
        <div className="flex justify-center items-center gap-2 mb-6 text-blue-700">
          <Globe size={28} />
          <h1 className="text-2xl font-semibold tracking-wide">Second Chapter</h1>
        </div>

        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
          {t('hero.title')}
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg text-sm shadow-md">
          {t('buttons.start')}
        </button>

        <footer className="mt-8 text-xs text-gray-400">
          🌍 {i18n.language.toUpperCase()} language selected
        </footer>
      </div>
    </div>
  );
}

export default App;

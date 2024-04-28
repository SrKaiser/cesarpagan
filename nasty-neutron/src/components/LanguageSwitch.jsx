import React, { useEffect, useState } from 'react';

const LanguageSwitcher = ({ job }) => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'spanish');

  useEffect(() => {
    const handlePopState = (event) => {
      const newLanguage = event.state?.path.includes('/en/') ? 'english' : 'spanish';
      setCurrentLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const changeLanguage = (language) => {
    const languagePrefix = language === 'spanish' ? 'es' : 'en';
    history.pushState({ path: `/${languagePrefix}/` }, '', `/${languagePrefix}/`);
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <div>
      <strong>{job.title[currentLanguage]}</strong>
      <button onClick={() => changeLanguage('english')}>English</button>
      <button onClick={() => changeLanguage('spanish')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;

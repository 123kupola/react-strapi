import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function Navigation() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const locale = location.pathname.split('/')[1] || 'sl';

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <nav className="bg-background shadow-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={`/${locale}`} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            {t('siteTitle')}
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to={`/${locale}`}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link
              to={`/${locale}/articles`}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {t('articles')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
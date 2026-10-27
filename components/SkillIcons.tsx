import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// 1. JAVA
export const JavaIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 35.8c0 0-4.8 1.2-1.7 3.3 3.6 2.4 12.8 2.2 16.4 0 3.2-2-1.7-3.3-1.7-3.3s4.3 1.9 0 3.8c-4.4 1.9-15.6 1.8-19.4 0-2.4-1.1 6.4-3.8 6.4-3.8z"
      fill="#5382A1"
    />
    <path
      d="M14.4 30.6c0 0-5.1 1.5-1.9 3.6 3.6 2.3 15.3 2.5 19.9.2 3.6-1.8-1.5-3.3-1.5-3.3s3.9 1.6.2 3.3c-4.3 2-17.1 2.1-21.7 0-3.3-1.5 5-3.8 5-3.8z"
      fill="#5382A1"
    />
    <path
      d="M26.4 22.8c2.4 2.8-6.1 5.4-8.7 7.4-2.2 1.7 1.4 2.7 3.7 2.4 5.9-.7 9.8-3.4 12.8-5.7 3.4-2.6 5.8-6.1 5.8-9.8 0-7.2-7.5-11.1-13.6-11.1-1.6 0-3 .2-4.4.6 6 2 10.4 6.7 4.4 16.2z"
      fill="#E76F00"
    />
    <path
      d="M32.8 13.9c-4.5 1.5-9.8 4.7-6.5 10.3 3 5 8.7 6.3 11.2 3.6 1.8-2 1.2-4.1-.2-5.7-1.7-2-2.1-3.6-1.5-5.3.6-1.5.3-2.3-3-2.9z"
      fill="#E76F00"
    />
    <path
      d="M23.8 3.5c1.8 2.3-2.7 6.4-5.2 8.5-2.7 2.3-4.6 4.6-4.6 7.4 0 3.5 3 6.3 7 7.6-4.9-1.9-8.4-5-8.4-9.1 0-3.9 3.3-7.7 8.2-11.5.9-.8 1.9-1.8 3-2.9z"
      fill="#E76F00"
    />
    <path
      d="M23.1 39.9c7.2.4 14.8-.4 17.5-3.3 0 0-1.8 1.4-6.6 2.3-7.1 1.3-17.6 1.1-23.7-.1-1.6-.3-2.4-.7-2.4-.7 2 1.3 7.7 1.8 15.2 1.8z"
      fill="#5382A1"
    />
  </svg>
);

// 2. TYPESCRIPT
export const TypeScriptIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#3178C6" />
    <path
      d="M22.5 18H14v3.5h2.6v14h3.6v-14h2.3V18zm17 5.6c-.6-.7-1.4-1.3-2.3-1.6-1-.4-2-.6-3.1-.6-1.2 0-2.2.2-3 .7s-1.4 1.1-1.8 1.8c-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4.4.7 1 1.3 1.8 1.8.8.5 1.8 1 3 1.4.9.4 1.7.7 2.2 1.1.5.4.8.8 1 1.2.2.4.3.9.3 1.5 0 .8-.2 1.4-.6 2-.4.6-1 1-1.7 1.3-.7.3-1.6.5-2.6.5-1.1 0-2.2-.2-3.1-.7s-1.8-1.2-2.4-2.1l-2.6 2.2c.9 1.3 2.1 2.3 3.5 3 1.4.7 3.1 1 5 1 1.5 0 2.8-.3 4-.8 1.2-.5 2.1-1.3 2.7-2.3.6-1 .9-2.2.9-3.5 0-1.1-.3-2-.8-2.8-.5-.8-1.2-1.5-2-2-.8-.5-1.9-1-3.2-1.5-.9-.3-1.7-.7-2.2-1-.5-.3-.9-.7-1.1-1.1-.2-.4-.3-.8-.3-1.3 0-.6.2-1.1.5-1.6.3-.5.8-.8 1.4-1.1.6-.3 1.4-.4 2.2-.4.9 0 1.8.2 2.5.5.7.3 1.3.8 1.8 1.5l2.6-2.1z"
      fill="#FFFFFF"
    />
  </svg>
);

// 3. JAVASCRIPT
export const JavaScriptIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#F7DF1E" />
    <path
      d="M13 35.5l3.4-2.1c.7 1.3 1.5 2.2 2.7 2.2 1.4 0 2.3-.6 2.3-2.8v-14h4.1v14.1c0 4.4-2.6 6.4-6.3 6.4-3.4 0-5.3-1.7-6.2-3.8zm16.5-.5l3.4-2c.9 1.5 2.1 2.6 4.1 2.6 1.8 0 2.9-.9 2.9-2.2 0-1.5-1.2-2.1-3.3-3l-1.1-.5c-3.3-1.4-5.4-3.2-5.4-7 0-3.5 2.7-6.2 6.9-6.2 3 0 5.1 1.1 6.5 3.5l-3.2 2.1c-.7-1.2-1.6-1.8-3.3-1.8-1.5 0-2.5.9-2.5 2 0 1.4 1 1.9 2.8 2.7l1.1.5c3.9 1.7 5.9 3.4 5.9 7.4 0 4.2-3.3 6.6-7.5 6.6-4.1 0-6.7-2-7.9-4.7z"
      fill="#000000"
    />
  </svg>
);

// 4. PYTHON
export const PythonIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6 6c-8.8 0-8.2 3.8-8.2 3.8l.1 4h8.3v1.2H12.3S6 14.3 6 23.3c0 9 5.5 8.7 5.5 8.7h3.3v-4.6s-.2-5.5 5.4-5.5h8.4s5.1.1 5.1-4.9V11s.7-5-10.1-5zm-4.6 2.7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
      fill="#387EB8"
    />
    <path
      d="M24.4 42c8.8 0 8.2-3.8 8.2-3.8l-.1-4h-8.3V33h11.5s6.3.7 6.3-8.3c0-9-5.5-8.7-5.5-8.7h-3.3v4.6s.2 5.5-5.4 5.5h-8.4s-5.1-.1-5.1 4.9V37s-.7 5 10.1 5zm4.6-2.7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      fill="#FFE052"
    />
  </svg>
);

// 5. SQL / DATABASE
export const SqlIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="24" cy="11" rx="16" ry="6" fill="#00758F" />
    <path
      d="M8 11v9c0 3.3 7.2 6 16 6s16-2.7 16-6v-9"
      stroke="#00758F"
      strokeWidth="3.5"
      fill="#005A6F"
    />
    <path
      d="M8 20v9c0 3.3 7.2 6 16 6s16-2.7 16-6v-9"
      stroke="#00758F"
      strokeWidth="3.5"
      fill="#004657"
    />
    <path
      d="M8 29v8c0 3.3 7.2 6 16 6s16-2.7 16-6v-8"
      stroke="#00758F"
      strokeWidth="3.5"
      fill="#003542"
    />
    <ellipse cx="24" cy="11" rx="12" ry="4" fill="#00A8CC" />
    <path
      d="M27 28l6 6m-3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      stroke="#F40F0B"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 6. HTML5 & CSS3
export const HtmlCssIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* HTML5 Shield Left */}
    <path d="M6 7l3.2 32 12.8 4 1-2.9-10.7-3.3-2.5-24.8H22V7H6z" fill="#E44D26" />
    <path d="M22 7v5H13.8l.5 5.5H22v5H14.8l.6 6.5 6.6 2V36l-10-3.1L10.8 12H22V7z" fill="#F16529" />
    {/* CSS3 Shield Right */}
    <path d="M42 7l-3.2 32L26 43l-1-2.9 10.7-3.3 2.5-24.8H26V7h16z" fill="#1572B6" />
    <path d="M26 7v5h8.2l-.5 5.5H26v5h7.2l-.6 6.5-6.6 2V36l10-3.1 1.2-20.9H26V7z" fill="#33A9DC" />
  </svg>
);

// 7. SELENIUM WEBDRIVER
export const SeleniumIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#43B02A" />
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#369622" />
    <path
      d="M17 19.5c0-2.5 2-4.5 4.8-4.5 2.8 0 4.6 1.8 4.6 4.3 0 4.5-9.4 4.5-9.4 9 0 2.5 2 4.7 5.2 4.7 3.3 0 5.4-2.2 5.4-4.7h-2.8c0 1.3-1.1 2.4-2.6 2.4-1.5 0-2.4-1-2.4-2.2 0-3.9 9.4-4.2 9.4-9.2 0-3.9-3.1-6.8-7.4-6.8-4.1 0-7.2 2.8-7.2 7h2.4z"
      fill="#FFFFFF"
    />
    <path
      d="M32 23.5c-3.1 0-5.3 2.2-5.3 5.4 0 3.3 2.2 5.5 5.5 5.5 2.5 0 4.3-1.2 5-3.3h-2.5c-.5 1-1.3 1.5-2.5 1.5-1.6 0-2.8-1.1-2.8-2.6h8c.1-.4.1-.8.1-1.2 0-3.1-2.2-5.3-5.5-5.3zm-2.6 4.3c.2-1.3 1.2-2.3 2.6-2.3s2.4 1 2.6 2.3h-5.2z"
      fill="#FFFFFF"
    />
    <circle cx="39" cy="9" r="3" fill="#B3FFA8" />
  </svg>
);

// 8. TESTNG
export const TestNgIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#CB3837" />
    <circle cx="24" cy="24" r="18" fill="#A82827" />
    <path
      d="M14 16h10v3.5h-3.2v14.5H17.2V19.5H14V16zm12 0h3.8l4.8 11.2V16h3.4v18h-3.8l-4.8-11.2V34H26V16z"
      fill="#FFFFFF"
    />
    <path
      d="M36 34a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      fill="#FFD200"
    />
  </svg>
);

// 9. REST ASSURED
export const RestAssuredIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#1B4D3E" />
    <path
      d="M10 24a14 14 0 0 1 25.4-8M38 24a14 14 0 0 1-25.4 8"
      stroke="#52B788"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <polygon points="36,11 41,17 33,17" fill="#52B788" />
    <polygon points="12,37 7,31 15,31" fill="#52B788" />
    <text
      x="24"
      y="27.5"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="sans-serif"
      fontWeight="900"
      fontSize="10"
      letterSpacing="0.5"
    >
      REST
    </text>
  </svg>
);

// 10. CUCUMBER BDD
export const CucumberIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#00A818" />
    <path
      d="M12 36C8 32 8 20 16 12s20-8 24-4 4 16-4 24-20 8-24 4z"
      fill="#23D96C"
    />
    <circle cx="19" cy="20" r="2" fill="#008013" />
    <circle cx="28" cy="18" r="2.5" fill="#008013" />
    <circle cx="23" cy="27" r="2" fill="#008013" />
    <circle cx="32" cy="25" r="2" fill="#008013" />
    <circle cx="16" cy="28" r="1.5" fill="#008013" />
    <path
      d="M38 10c2-3 5-4 7-4"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 11. PLAYWRIGHT
export const PlaywrightIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#2E3440" />
    {/* Green Theater Mask */}
    <path
      d="M14 12c-4 0-6 3-6 7 0 6 4 11 9 12 1.5.3 2.5-.5 2.5-1.5v-1.5c-4-.5-6.5-3.5-6.5-7.5 0-2.5 1-4.5 3-5.5 1-.5 1-1.5-.5-2.5-.5-.3-1-.5-1.5-.5z"
      fill="#2EAD33"
    />
    <circle cx="13" cy="19" r="1.5" fill="#FFFFFF" />
    <path d="M12 24c1 1 3 1 4 0" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    {/* Red Theater Mask */}
    <path
      d="M26 14c-1.5 1-1.5 2-.5 2.5 2 1 3 3 3 5.5 0 4-2.5 7-6.5 7.5v1.5c0 1 1 1.8 2.5 1.5 5-1 9-6 9-12 0-4-2-7-6-7-.5 0-1 .2-1.5.5z"
      fill="#E84D3D"
    />
    <circle cx="31" cy="21" r="1.5" fill="#FFFFFF" />
    <path d="M29 27c1.5-.8 3-.8 4 0" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 12. APPIUM
export const AppiumIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#662D91" />
    <circle cx="24" cy="24" r="16" fill="#4D1F70" />
    <rect x="18" y="14" width="12" height="20" rx="2.5" stroke="#FFFFFF" strokeWidth="2.5" />
    <circle cx="24" cy="30.5" r="1" fill="#FFFFFF" />
    <line x1="21" y1="17" x2="27" y2="17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="24" r="2.5" fill="#66D7D1" />
    <circle cx="34" cy="24" r="2.5" fill="#66D7D1" />
  </svg>
);

// 13. JUNIT 5
export const JunitIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#25A162" />
    <path
      d="M24 7L10 13v13c0 8.5 6 16.5 14 18 8-1.5 14-9.5 14-18V13L24 7z"
      fill="#1E824C"
    />
    <path
      d="M21 17h8v3h-5v3.5h4.5c2.5 0 4 1.5 4 4s-1.5 4.5-4.5 4.5c-2.8 0-4.5-1.5-4.8-3.5h3.3c.2.8.8 1.2 1.7 1.2 1 0 1.6-.6 1.6-1.5s-.6-1.5-1.6-1.5H21V17z"
      fill="#FFFFFF"
    />
  </svg>
);

// 14. APACHE MAVEN
export const MavenIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#2E2438" />
    <path
      d="M34 10C24 16 18 26 16 38c6-2 11-7 14-13 3-6 4-12 4-15z"
      fill="#C71A36"
    />
    <path
      d="M24 14C18 20 14 28 13 37c4-1 8-4 10-9 2-4 2-9 1-14z"
      fill="#00508F"
    />
    <path
      d="M38 8c-6 4-10 10-12 18 4-1 7-4 9-9 2-4 3-7 3-9z"
      fill="#E87400"
    />
  </svg>
);

// 15. POSTMAN
export const PostmanIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#FF6C37" />
    <circle cx="24" cy="24" r="17" fill="#F05A22" />
    {/* Spaceman silhouette in flight */}
    <circle cx="28" cy="19" r="4.5" fill="#FFFFFF" />
    <path
      d="M25 24c-2-1-4-2.5-6-2.5-3 0-5 2.5-5 5.5s2.5 5 6 5.5l1.5-3.5c-1.8-.3-3-1.5-3-2.5s1.2-2 2.5-2c1.2 0 2.5 1 3.5 2l4.5-2.5-4-2.5z"
      fill="#FFFFFF"
    />
    <path
      d="M27 24l5 8-3.5 2-4-7 2.5-3z"
      fill="#FFFFFF"
    />
    <path
      d="M20 14c-1 3-3 6-6 8"
      stroke="#FFD200"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 16. RESTFUL APIS
export const RestApiIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#0F172A" />
    <circle cx="24" cy="24" r="7" fill="#0284C7" />
    <circle cx="12" cy="14" r="4.5" fill="#0EA5E9" />
    <circle cx="36" cy="14" r="4.5" fill="#0EA5E9" />
    <circle cx="12" cy="34" r="4.5" fill="#38BDF8" />
    <circle cx="36" cy="34" r="4.5" fill="#38BDF8" />
    <line x1="15" y1="16.5" x2="20" y2="20.5" stroke="#38BDF8" strokeWidth="2.5" />
    <line x1="33" y1="16.5" x2="28" y2="20.5" stroke="#38BDF8" strokeWidth="2.5" />
    <line x1="15" y1="31.5" x2="20" y2="27.5" stroke="#38BDF8" strokeWidth="2.5" />
    <line x1="33" y1="31.5" x2="28" y2="27.5" stroke="#38BDF8" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
  </svg>
);

// 17. SWAGGER / OPENAPI
export const SwaggerIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#85EA2D" />
    <circle cx="24" cy="24" r="16" fill="#173647" />
    <circle cx="24" cy="17" r="4" fill="#85EA2D" />
    <circle cx="17.5" cy="28" r="4" fill="#85EA2D" />
    <circle cx="30.5" cy="28" r="4" fill="#85EA2D" />
    <line x1="24" y1="19" x2="24" y2="26" stroke="#85EA2D" strokeWidth="3" />
    <line x1="19" y1="26" x2="29" y2="26" stroke="#85EA2D" strokeWidth="3" />
  </svg>
);

// 18. JIRA & TEST MANAGEMENT
export const JiraIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#0052CC" />
    <path
      d="M23.5 11l-9 9 9 9 9-9-9-9z"
      fill="#2684FF"
    />
    <path
      d="M32.5 20l-9 9 9 9 9-9-9-9z"
      fill="#0052CC"
    />
    <path
      d="M14.5 20l-9 9 9 9 9-9-9-9z"
      fill="#0052CC"
    />
    <path
      d="M24 11.5L15 20.5l4.5 4.5 9-9L24 11.5z"
      fill="#FFFFFF"
      fillOpacity="0.8"
    />
  </svg>
);

// 19. TEST CASE DESIGN & STLC
export const StlcIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#7F1D1D" />
    <rect x="10" y="10" width="28" height="28" rx="5" fill="#991B1B" stroke="#EF4444" strokeWidth="2" />
    <path
      d="M16 19l4 4 10-10"
      stroke="#4ADE80"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="16" y1="28" x2="32" y2="28" stroke="#FECACA" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="33" x2="26" y2="33" stroke="#FECACA" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 20. REACT.JS
export const ReactIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#20232A" />
    <ellipse cx="24" cy="24" rx="16" ry="6.2" stroke="#61DAFB" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="16" ry="6.2" transform="rotate(60 24 24)" stroke="#61DAFB" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="16" ry="6.2" transform="rotate(120 24 24)" stroke="#61DAFB" strokeWidth="2" />
    <circle cx="24" cy="24" r="2.8" fill="#61DAFB" />
  </svg>
);

// 21. NEXT.JS
export const NextjsIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#000000" />
    <circle cx="24" cy="24" r="17" fill="#111111" stroke="#333333" strokeWidth="1.5" />
    <path
      d="M20 16v16h3.5v-9.5l11.5 12c.5-.4 1-.8 1.5-1.3L23.5 16H20z"
      fill="#FFFFFF"
    />
    <rect x="29" y="16" width="3.5" height="11" fill="#FFFFFF" />
  </svg>
);

// 22. TAILWIND CSS
export const TailwindIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#0B1120" />
    <path
      d="M24 16.5c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.8 6-2.2 1.4.3 2.4 1.4 3.5 2.5 1.8 1.8 3.9 3.9 8.5 3.9 4 0 6.5-2 7.5-6-1.5 2-3.5 2.8-6 2.2-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-3.9-3.9-8.5-3.9zm-10 8.2c-4 0-6.5 2-7.5 6 1.5-2 3.5-2.8 6-2.2 1.4.3 2.4 1.4 3.5 2.5 1.8 1.8 3.9 3.9 8.5 3.9 4 0 6.5-2 7.5-6-1.5 2-3.5 2.8-6 2.2-1.4-.3-2.4-1.4-3.5-2.5-1.8-1.8-3.9-3.9-8.5-3.9z"
      fill="#38BDF8"
    />
  </svg>
);

// 23. REDUX & ZUSTAND
export const ReduxIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#2E1B4E" />
    <path
      d="M24 12c-4 0-7.5 2.5-9 6.5 2-1 4.5-1.5 7-1.5 7 0 12.5 4.5 13.8 10.5 1.5-2.5 2.2-5.5 1.2-8.5-1.5-4-5.5-7-13-7z"
      fill="#764ABC"
    />
    <path
      d="M14.5 22.5C13 25 12.5 28 14 31c2 4 6.5 6.5 14 6 3-.2 6-1.5 8-3.5-2 1-4.5 1.5-7 1.5-7 0-12.5-4.5-14.5-12.5z"
      fill="#9E69FD"
    />
    <circle cx="24" cy="24" r="3.5" fill="#FFFFFF" />
  </svg>
);

// 24. VITE
export const ViteIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#1E1E2E" />
    <path
      d="M37.5 9.5l-13 27-3.5-7.5-6.5-14.5 23-5z"
      fill="#41D1FF"
    />
    <path
      d="M37.5 9.5L24 39.5 21 29 37.5 9.5z"
      fill="#BD34FE"
    />
    <path
      d="M26 10l-10 13h7l-4 12 14-16h-7l5-9h-5z"
      fill="#FFD62E"
    />
  </svg>
);

// 25. ACCESSIBLE UI & SHADCN
export const A11yIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#3B0707" />
    <circle cx="24" cy="24" r="16" stroke="#F40F0B" strokeWidth="2.5" />
    <circle cx="24" cy="15" r="2.5" fill="#FFFFFF" />
    <path
      d="M15 21h18M24 21v14M19 32l5-6 5 6"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 26. GIT & GITHUB
export const GitIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#F05032" />
    <path
      d="M36.8 21.6l-10.4-10.4c-.8-.8-2.1-.8-2.9 0l-2.6 2.6 3.6 3.6c.9-.3 1.9-.1 2.6.6.7.7.9 1.8.6 2.6l3.5 3.5c.9-.3 1.9-.1 2.6.6 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-.8-.8-.9-1.9-.5-2.8l-3.3-3.3v7.3c.3.2.6.5.8.8 1.1 1.1 1.1 2.9 0 4-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 .3-.3.7-.6 1.1-.7v-7.5c-.4-.2-.8-.4-1.1-.7-.8-.8-.9-1.9-.5-2.8l-3.5-3.5-6.2 6.2c-.8.8-.8 2.1 0 2.9l10.4 10.4c.8.8 2.1.8 2.9 0l14.4-14.4c.8-.8.8-2.1 0-2.9z"
      fill="#FFFFFF"
    />
  </svg>
);

// 27. LINUX & BASH
export const LinuxIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#18181B" />
    {/* Terminal prompt symbol */}
    <rect x="8" y="10" width="32" height="28" rx="4" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5" />
    <path
      d="M14 20l5 4-5 4"
      stroke="#22C55E"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="22" y1="28" x2="30" y2="28" stroke="#E4E4E7" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="14" cy="14" r="1.5" fill="#EF4444" />
    <circle cx="18" cy="14" r="1.5" fill="#EAB308" />
    <circle cx="22" cy="14" r="1.5" fill="#22C55E" />
  </svg>
);

// 28. DOCKER
export const DockerIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#1D63ED" />
    {/* Containers */}
    <rect x="11" y="21" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="16" y="21" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="21" y="21" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="16" y="16.5" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="21" y="16.5" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="26" y="21" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="26" y="16.5" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    <rect x="21" y="12" width="3.5" height="3" rx="0.5" fill="#FFFFFF" />
    {/* Whale Body */}
    <path
      d="M38 24.5c-.8 0-1.8.3-2.5.8-1.5-1-3.5-1.5-6-1.5H8c-.5 3 1.5 8 5.5 10.5 4.5 2.8 11.5 2.8 17 0 4-2 6-5.5 6.5-8.5 1.5 0 3-.8 4-2.5-.9-.3-1.8-.3-3 .2z"
      fill="#FFFFFF"
    />
    <circle cx="14" cy="28.5" r="1" fill="#1D63ED" />
  </svg>
);

// 29. JENKINS / CI-CD
export const JenkinsIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#D24939" />
    {/* Butler Silhouette with Bow Tie */}
    <circle cx="24" cy="16" r="6" fill="#FCE0D6" />
    <path d="M18 14c0-4 3-7 6-7s6 3 6 7z" fill="#333333" />
    <path d="M17 14h14v2H17z" fill="#111111" />
    <path d="M16 26c0-3 3-5 8-5s8 2 8 5v11H16V26z" fill="#2B3A42" />
    <polygon points="22,23 26,23 24,25" fill="#D24939" />
    <circle cx="24" cy="27" r="1" fill="#FFFFFF" />
    <circle cx="24" cy="30" r="1" fill="#FFFFFF" />
    <circle cx="24" cy="33" r="1" fill="#FFFFFF" />
  </svg>
);

// 30. INTELLIJ IDEA
export const IntellijIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#087CFA" />
    <path d="M8 8l32 4-8 28-24-8z" fill="#FE2857" />
    <path d="M8 8l24 4-20 28z" fill="#FF318C" />
    <rect x="11" y="11" width="26" height="26" rx="4" fill="#000000" />
    <rect x="14" y="31" width="10" height="2" fill="#FFFFFF" />
    <text
      x="24"
      y="26"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="sans-serif"
      fontWeight="bold"
      fontSize="12"
      letterSpacing="-0.5"
    >
      IJ
    </text>
  </svg>
);

// 31. CHROME DEVTOOLS
export const ChromeDevToolsIcon: React.FC<IconProps> = ({ className = 'w-8 h-8', size }) => (
  <svg
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="8" fill="#202124" />
    <circle cx="24" cy="24" r="15" fill="#FFFFFF" />
    <path d="M24 9a15 15 0 0 1 13 7.5L24 24h-15A15 15 0 0 1 24 9z" fill="#EA4335" />
    <path d="M37 16.5A15 15 0 0 1 29 38l-7.5-13 15.5-8.5z" fill="#FBBC05" />
    <path d="M29 38A15 15 0 0 1 9 24h15l5 14z" fill="#34A853" />
    <circle cx="24" cy="24" r="6" fill="#FFFFFF" />
    <circle cx="24" cy="24" r="4.5" fill="#4285F4" />
  </svg>
);

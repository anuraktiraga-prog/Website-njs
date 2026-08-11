type IconProps = { className?: string };

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.27L2 22l4.87-1.46A10 10 0 1 0 12 2Zm0 18.18a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-2.9.87.88-2.83-.2-.3A8.18 8.18 0 1 1 12 20.18Zm4.48-6.13c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.66.8-.8.97-.15.17-.3.19-.55.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.41-.57-.42h-.49c-.17 0-.45.06-.68.32-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.13.17 1.8 2.75 4.36 3.86.61.26 1.08.42 1.45.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.2-.57.2-1.06.14-1.17-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

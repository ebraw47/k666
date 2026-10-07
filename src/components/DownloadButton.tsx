import { DOWNLOAD_APP_URL } from '@/lib/constants';

type DownloadButtonProps = {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  blink?: boolean;
  /** Shine / hover motion — home hero only */
  animated?: boolean;
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-2 rounded-full',
  md: 'px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base gap-2.5 rounded-full',
  lg: 'px-6 py-3 text-base sm:px-9 sm:py-4 sm:text-lg md:px-10 md:py-5 md:text-xl gap-3 rounded-full',
};

const svgSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-4 h-4 sm:w-5 sm:h-5',
  lg: 'w-5 h-5 sm:w-6 sm:h-6',
};

export default function DownloadButton({
  label = 'DOWNLOAD NOW',
  className = '',
  size = 'md',
  blink = false,
  animated = false,
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download K666 APK for Android"
      title={label}
      className={`download-btn inline-flex w-fit max-w-full items-center justify-center font-bold tracking-wide ${sizeClasses[size]} ${animated ? 'download-btn--animated' : ''} ${animated && blink ? 'download-btn--blink' : ''} ${className}`}
    >
      <svg
        className={`download-icon flex-shrink-0 ${svgSizeClasses[size]}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.25}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>{label}</span>
    </a>
  );
}

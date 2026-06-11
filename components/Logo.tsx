import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 50, className = '' }: LogoProps) {
  return (
    <Image
      src="/images/Logo.png"
      alt="Lake Anna Lake For All"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain', height: size, width: 'auto' }}
      priority
    />
  );
}

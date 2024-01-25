import Image from "next/image";
import styles from "./styles.module.css";

interface LogoProps {
  image: string;
  clubName: string;
}

export default function Logo({ image, clubName }: LogoProps) {
  return (
    <div>
      <div className="logo-wrap">
        <Image
          className={styles.logo}
          src={image}
          alt={`${clubName} - Logotipo`}
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  );
}

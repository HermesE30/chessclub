import DataProps from '@/interfaces/data';
import HeaderComponent from './components/Header';

interface DraculaProps {
  data: DataProps;
}

export default function Dracula({ data }: DraculaProps) {
  const { club, menu } = data;
  return (
    <main>
      <HeaderComponent
        clubName={club.clubName}
        menu={menu}
        image={club.logo}
      />
    </main>
  );
}


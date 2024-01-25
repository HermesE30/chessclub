import Head from 'next/head';

import { DATA } from '@/lib/data';
import Dracula from '@/themes/dracula';

export default function Players() {
  const { club } = DATA;

  return (
    <>
      <Head>
        <title>{`${club.clubName}`}</title>
        <meta name="description" content={club.bio} />
        <link rel="icon" href="/images/favicon.ico" />

        <meta name="robots" content="index,follow" />

        <meta property="og:title" content={club.clubName} />
        <meta property="og:description" content={club.bio} />
        <meta property="og:type" content="website" />
      </Head>
      <Dracula data={DATA} />
    </>
  );
}

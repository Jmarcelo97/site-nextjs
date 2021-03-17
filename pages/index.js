import Head from 'next/head';
import Link from 'next/link';
const Home = () => (
    <div>
        <Head>
            <title>Home</title>
            <meta name="robots" content="index/follow" />
            <meta name="description" content="Site feito usando Next.js" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://sharpsolucoes.com/public/favicon32x32.png" />
        </Head>
        <h1>Bem vindo a Sharp Soluções Digitais!</h1>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>
    </div>
);

export default Home;
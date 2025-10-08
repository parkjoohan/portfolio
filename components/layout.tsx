import Header from './header';
import Footer from './footer';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Head>
                <title>포트폴리오 - 박주한</title>
                <meta name="description" content="개발자 포트폴리오" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

import Hero from '@/components/home/hero';
import Layout from '@/components/layout';
import { useTheme } from 'next-themes';
import Head from 'next/head';

export default function Home() {
    const { theme } = useTheme();
    return (
        <Layout>
            <Head>
                <title>홈 - 내 포트폴리오</title>
                <meta name="description" content="개발자 포트폴리오 홈페이지" />
            </Head>

            <section
                className={`flex min-h-screen flex-col items-center justify-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } body-font`}
            >
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
                    <Hero theme={theme} />
                </div>
            </section>
        </Layout>
    );
}

import Hero from '@/components/home/hero';
import Layout from '@/components/layout';
import Head from 'next/head';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>홈 - 내 포트폴리오</title>
                <meta name="description" content="개발자 포트폴리오 홈페이지" />
            </Head>

            <section className="flex flex-col min-h-screen items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Hero />
                </div>
            </section>
        </Layout>
    );
}

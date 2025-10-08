import Award from '@/components/introduces/award';
import Certification from '@/components/introduces/certification';
import Experience from '@/components/introduces/experience';
import Work from '@/components/introduces/work';
import Layout from '@/components/layout';
import { useTheme } from 'next-themes';

export default function Introduces() {
    const { theme } = useTheme();

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-2 mb-5">
                <div className="container mx-auto max-w-4xl p-12 m-4">
                    <Work theme={theme} />
                    <Experience theme={theme} />
                    <Award theme={theme} />
                    <Certification theme={theme} />
                </div>
            </div>
        </Layout>
    );
}

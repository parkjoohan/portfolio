import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { ExtendedRecordMap } from 'notion-types';

const NotionRenderer = dynamic(() => import('react-notion-x').then((m) => m.NotionRenderer), {
    ssr: false,
});

// (옵션) 코드/수식/컬렉션/모달
const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code));
const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then((m) => m.Collection)
);
const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Modal = dynamic(() => import('react-notion-x/build/third-party/modal').then((m) => m.Modal), {
    ssr: false,
});

export default function NotionXPreview({
    pageId,
    darkMode = false,
}: {
    pageId: string;
    darkMode?: boolean;
}) {
    const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
    const [err, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                setLoading(true);
                setErr(null);
                const res = await fetch(`/api/notion-x/${pageId}`);
                if (!res.ok) throw new Error(await res.text());
                const data = await res.json();
                if (!ignore) setRecordMap(data.recordMap as ExtendedRecordMap);
            } catch (e: unknown) {
                const msg = e instanceof Error ? e.message : 'failed to load';
                if (!ignore) setErr(msg);
            } finally {
                if (!ignore) setLoading(false);
            }
        })();
        return () => {
            ignore = true;
        };
    }, [pageId]);

    if (loading)
        return (
            <div className="flex items-center justify-center h-full py-10">
                {/* 스피너 */}
                <div
                    className={`w-8 h-8 border-4 rounded-full animate-spin ${
                        darkMode
                            ? 'border-gray-600 border-t-gray-300'
                            : 'border-gray-300 border-t-gray-600'
                    }`}
                />
            </div>
        );

    if (err) return <div className="p-4 text-sm text-red-500">불러오기 실패: {err}</div>;
    if (!recordMap) return null;

    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage={false}
            darkMode={darkMode}
            components={{ Code, Collection, Equation, Modal }}
        />
    );
}

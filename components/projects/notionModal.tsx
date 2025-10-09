import { useEffect } from 'react';
import ReactModal from 'react-modal';
import { useTheme } from 'next-themes';
import NotionXPreview from './NotionXPreview';

type NotionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    title?: string;
};

export default function NotionModal({ isOpen, onClose, url, title }: NotionModalProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        if (typeof window !== 'undefined') {
            ReactModal.setAppElement('#__next');
        }
    }, []);

    const pageId = extractPageId(url);

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick
            shouldCloseOnEsc
            style={{
                overlay: {
                    backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)',
                    zIndex: 50,
                },
                content: {
                    inset: '5% 8%',
                    padding: 0,
                    border: 'none',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    background: isDark ? '#0b0f14' : '#ffffff',
                    color: isDark ? '#e5e7eb' : '#111827',
                },
            }}
            contentLabel={title || 'Preview'}
        >
            {/* Header */}
            <div
                className={`flex items-center justify-between px-10 py-4 border-b ${
                    isDark
                        ? 'border-gray-700 bg-gray-900 text-gray-100'
                        : 'border-gray-200 bg-white text-gray-900'
                }`}
            >
                <span className="text-2xl font-semibold">{title || 'Preview'}</span>
                <div className="flex items-center gap-2">
                    {/* 새 탭에서 열기 (검정 배경 / 흰색 글자 유지) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(url, '_blank');
                        }}
                        className={`px-4 py-2 rounded-md transition active:opacity-90 ${
                            isDark
                                ? 'bg-gray-600 text-gray-100 hover:bg-gray-700 border border-gray-600'
                                : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    >
                        새 탭에서 열기
                    </button>

                    {/* 닫기 */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className={`px-4 py-2 rounded-md border transition active:opacity-80 ${
                            isDark
                                ? 'border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-100'
                                : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-900'
                        }`}
                    >
                        닫기
                    </button>
                </div>
            </div>

            {/* Body */}
            <div
                className={`py-20 relative w-full ${
                    isDark ? 'bg-[#0b0f14] text-gray-100' : 'bg-white text-gray-900'
                }`}
                style={{ height: 'calc(100% - 52px)', overflow: 'auto' }}
                onClick={(e) => e.stopPropagation()}
            >
                {pageId ? (
                    <NotionXPreview pageId={pageId} darkMode={isDark} />
                ) : (
                    <div className="h-full flex items-center justify-center text-sm text-gray-500">
                        유효한 Notion pageId를 찾을 수 없습니다.
                    </div>
                )}
            </div>
        </ReactModal>
    );
}

/** URL에서 pageId(32hex 또는 UUID) 추출 */
function extractPageId(u: string) {
    if (!u) return '';
    const m = u.match(
        /[0-9a-fA-F]{32}|[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
    );
    if (!m) return '';
    return m[0].replace(/-/g, '').slice(0, 32);
}

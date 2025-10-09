import { useEffect } from 'react';
import ReactModal from 'react-modal';
import NotionXPreview from './NotionXPreview';

type NotionModalProps = {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    title?: string;
};

export default function NotionModal({ isOpen, onClose, url, title }: NotionModalProps) {
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
                overlay: { backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 50 },
                content: {
                    inset: '5% 8%',
                    padding: 0,
                    border: 'none',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                },
            }}
            contentLabel={title || 'Preview'}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-10 py-4 border-b border-gray-200">
                <span className="text-2xl font-semibold">{title || 'Preview'}</span>
                <div className="flex items-center gap-2">
                    {/* 🔹 새 탭에서 열기 버튼 (검정 배경 / 흰색 글자) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            window.open(url, '_blank');
                        }}
                        className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 active:opacity-90 transition"
                    >
                        새 탭에서 열기
                    </button>

                    {/* 닫기 버튼 */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 active:opacity-80 transition"
                    >
                        닫기
                    </button>
                </div>
            </div>

            {/* Body */}
            <div
                className="relative w-full"
                style={{ height: 'calc(100% - 52px)', overflow: 'auto' }}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 전파 방지
            >
                {pageId ? (
                    <NotionXPreview pageId={pageId} />
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

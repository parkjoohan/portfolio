import type { NextApiRequest, NextApiResponse } from 'next';
import { NotionAPI } from 'notion-client';

const notion = new NotionAPI({
    /* authToken?: 'token_v2'  ← 비공개면 필요(비권장) */
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const raw = req.query.pageId;
    const pageId = Array.isArray(raw) ? raw[0] : raw;
    if (!pageId) return res.status(400).json({ error: 'pageId is required' });

    try {
        const recordMap = await notion.getPage(pageId); // 하이픈 포함/미포함 모두 OK
        res.status(200).json({ recordMap });
    } catch (err: unknown) {
        const message =
            err instanceof Error ? err.message : typeof err === 'string' ? err : 'failed to fetch';
        res.status(500).json({ error: message });
    }
}
